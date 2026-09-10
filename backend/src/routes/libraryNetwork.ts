import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role, BusinessType } from "@prisma/client"
import bcrypt from "bcryptjs"
import { signToken } from "../lib/jwt.js"

const router = Router()

function makeCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase()
}

function frontendBase() {
  return (process.env.FRONTEND_URL || "https://semaiy.netlify.app").replace(/\/$/, "")
}

/** Subcity: list child libraries with stats */
router.get(
  "/network",
  authenticate,
  requireOrganization,
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    const organizationId = req.user!.organizationId!
    const me = await prisma.organization.findUnique({ where: { id: organizationId } })
    if (!me || me.type !== ("SUBCITY" as any)) {
      return res.status(403).json({ error: "Subcity account only" })
    }

    const children = await prisma.organization.findMany({
      where: { parentId: organizationId, type: "LIBRARY" as any },
      select: {
        id: true,
        name: true,
        city: true,
        address: true,
        phone: true,
        isOpen: true,
        photoUrl: true,
        openTime: true,
        closeTime: true,
        inviteCode: true,
      },
      orderBy: { name: "asc" },
    })

    const enriched = await Promise.all(
      children.map(async (c) => {
        const [bookCount, reviewAgg, visitToday] = await Promise.all([
          prisma.book.count({ where: { organizationId: c.id } }),
          prisma.libraryReview.aggregate({
            where: { organizationId: c.id },
            _avg: { rating: true },
            _count: { id: true },
          }),
          prisma.libraryVisit.count({
            where: {
              organizationId: c.id,
              createdAt: {
                gte: (() => {
                  const d = new Date()
                  d.setHours(0, 0, 0, 0)
                  return d
                })(),
              },
            },
          }),
        ])
        return {
          ...c,
          bookCount,
          averageRating: reviewAgg._avg.rating
            ? Math.round(Number(reviewAgg._avg.rating) * 10) / 10
            : null,
          reviewCount: reviewAgg._count.id,
          visitsToday: visitToday,
        }
      })
    )

    res.json({
      subcity: { id: me.id, name: me.name, city: me.city },
      libraries: enriched,
    })
  }
)

/** Subcity creates invite code for a new library to join this network */
router.post(
  "/network/invite-library",
  authenticate,
  requireOrganization,
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    const organizationId = req.user!.organizationId!
    const me = await prisma.organization.findUnique({ where: { id: organizationId } })
    if (!me || me.type !== ("SUBCITY" as any)) {
      return res.status(403).json({ error: "Subcity account only" })
    }

    const code = makeCode()
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + 14)

    // Reuse Invite table: role STAFF is wrong — store as MANAGER + note in code prefix
    // Better: store orgId of subcity on invite; join endpoint sets parentId
    const invite = await prisma.invite.create({
      data: {
        code,
        role: Role.OWNER,
        organizationId, // subcity id — join will create NEW library under parent
        expiresAt,
        used: false,
        email: `library-join@${code}.local`,
      } as any,
    })

    const link = `${frontendBase()}/register?type=LIBRARY&network=${code}`
    res.status(201).json({ code: invite.code, link, expiresAt })
  }
)

/** Public: resolve network invite (subcity name) */
router.get("/network/invite/:code", async (req, res) => {
  const code = String(req.params.code).trim().toUpperCase()
  const invite = await prisma.invite.findFirst({
    where: { code, used: false },
    include: { organization: { select: { id: true, name: true, type: true, city: true } } },
  })
  if (!invite || invite.expiresAt < new Date()) {
    return res.status(404).json({ error: "Invalid or expired invite" })
  }
  if ((invite as any).organization?.type !== "SUBCITY") {
    return res.status(400).json({ error: "Not a subcity library invite" })
  }
  res.json({
    code: invite.code,
    subcityName: (invite as any).organization.name,
    subcityId: invite.organizationId,
    city: (invite as any).organization.city,
  })
})

/**
 * Register library under subcity via network code.
 * Body: same as register + networkCode
 * Creates LIBRARY org with parentId = subcity
 */
router.post("/network/join-library", async (req, res) => {
  try {
    const data = z
      .object({
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6),
        organizationName: z.string().min(2),
        networkCode: z.string().min(4),
        preferredLang: z.enum(["en", "am"]).optional(),
      })
      .parse(req.body)

    const code = data.networkCode.trim().toUpperCase()
    const invite = await prisma.invite.findFirst({
      where: { code, used: false },
      include: { organization: true },
    })
    if (!invite || invite.expiresAt < new Date()) {
      return res.status(400).json({ error: "Invalid or expired network invite" })
    }
    if (invite.organization.type !== ("SUBCITY" as any)) {
      return res.status(400).json({ error: "Not a subcity invite" })
    }

    const existing = await prisma.user.findUnique({ where: { email: data.email.toLowerCase() } })
    if (existing) return res.status(400).json({ error: "Email already registered" })

    const passwordHash = await bcrypt.hash(data.password, 10)
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 3)

    const result = await prisma.$transaction(async (tx) => {
      const organization = await tx.organization.create({
        data: {
          name: data.organizationName,
          type: "LIBRARY" as any,
          parentId: invite.organizationId,
        },
      })

      await tx.subscription.create({
        data: {
          organizationId: organization.id,
          plan: "MONTHLY",
          status: "TRIAL",
          amount: 0,
          endDate,
          currency: "ETB",
        } as any,
      })

      const user = await tx.user.create({
        data: {
          name: data.name,
          email: data.email.toLowerCase(),
          passwordHash,
          role: Role.OWNER,
          preferredLang: data.preferredLang || "en",
          organizationId: organization.id,
        },
      })

      try {
        await (tx as any).orgMembership.create({
          data: {
            userId: user.id,
            organizationId: organization.id,
            role: Role.OWNER,
          },
        })
      } catch {
        /* optional model */
      }

      await tx.invite.update({
        where: { id: invite.id },
        data: { used: true },
      })

      return { user, organization }
    })

   const token = signToken({
     userId: result.user.id,
     email: result.user.email,
     organizationId: result.organization.id,
     role: result.user.role,
   })

    res.status(201).json({
      token,
      user: {
        id: result.user.id,
        name: result.user.name,
        email: result.user.email,
        role: result.user.role,
      },
      organization: {
        id: result.organization.id,
        name: result.organization.name,
        type: result.organization.type,
      },
    })
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    console.error(e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

export default router
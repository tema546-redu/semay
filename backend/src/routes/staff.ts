import { Router } from "express"
import { z } from "zod"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()

function makeCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase()
}

// ——— Owner: list staff + invites ———
router.get("/", authenticate, requireOrganization, requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const organizationId = req.user!.organizationId!
  const [users, invites] = await Promise.all([
    prisma.user.findMany({
      where: { organizationId },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
      orderBy: { createdAt: "asc" },
    }),
    prisma.invite.findMany({
      where: { organizationId, used: false },
      orderBy: { createdAt: "desc" },
    }),
  ])
  res.json({ users, invites })
})

// ——— Owner: create invite ———
router.post("/invite", authenticate, requireOrganization, requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const { role } = z
      .object({
        role: z.enum(["WAITER", "KITCHEN", "MANAGER", "STAFF"]),
      })
      .parse(req.body)

    const organizationId = req.user!.organizationId!
    const code = makeCode()
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + 7)

    const invite = await prisma.invite.create({
      data: {
        code,
        role: role as Role,
        organizationId,
        expiresAt,
        used: false,
      },
    })

    res.status(201).json({
      code: invite.code,
      role: invite.role,
      expiresAt: invite.expiresAt,
      joinPath: `/join/${invite.code}`,
    })
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Failed to create invite" })
  }
})

// ——— Public: get invite info (no login) ———
router.get("/invite/:code", async (req, res) => {
  const invite = await prisma.invite.findFirst({
    where: { code: req.params.code.toUpperCase(), used: false },
    include: { organization: { select: { id: true, name: true, type: true } } },
  })
  if (!invite) return res.status(404).json({ error: "Invite not found or already used" })
  if (invite.expiresAt < new Date()) return res.status(400).json({ error: "Invite expired" })

  res.json({
    code: invite.code,
    role: invite.role,
    organizationName: invite.organization.name,
    businessType: invite.organization.type,
    expiresAt: invite.expiresAt,
  })
})

// ——— Public: join with invite (creates user in same org) ———
router.post("/join", async (req, res) => {
  try {
    const data = z
      .object({
        code: z.string().min(4),
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6),
      })
      .parse(req.body)

    const invite = await prisma.invite.findFirst({
      where: { code: data.code.toUpperCase(), used: false },
      include: { organization: true },
    })
    if (!invite) return res.status(404).json({ error: "Invite not found or already used" })
    if (invite.expiresAt < new Date()) return res.status(400).json({ error: "Invite expired" })

    const existing = await prisma.user.findUnique({ where: { email: data.email } })
    if (existing) return res.status(400).json({ error: "Email already registered" })

    const passwordHash = await bcrypt.hash(data.password, 10)

    const user = await prisma.$transaction(async (tx) => {
      const u = await tx.user.create({
        data: {
          name: data.name,
          email: data.email,
          passwordHash,
          role: invite.role,
          organizationId: invite.organizationId,
          preferredLang: "en",
        },
      })
      await tx.invite.update({
        where: { id: invite.id },
        data: { used: true },
      })
      return u
    })

    const secret = process.env.JWT_SECRET || "semay-secret"
    const token = jwt.sign(
      {
        userId: user.id,
        organizationId: invite.organizationId,
        role: user.role,
      },
      secret,
      { expiresIn: "30d" }
    )

    res.status(201).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      organization: {
        id: invite.organization.id,
        name: invite.organization.name,
        type: invite.organization.type,
      },
    })
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Failed to join" })
  }
})

export default router
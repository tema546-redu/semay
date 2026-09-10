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
router.get(
  "/",
  authenticate,
  requireOrganization,
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    const organizationId = req.user!.organizationId!
    const [users, invites] = await Promise.all([
      prisma.user.findMany({
        where: { organizationId },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          branchId: true,
          createdAt: true,
          branch: { select: { id: true, name: true } },
        },
        orderBy: { createdAt: "asc" },
      }),
      prisma.invite.findMany({
        where: { organizationId, used: false },
        include: { branch: { select: { id: true, name: true } } },
        orderBy: { createdAt: "desc" },
      }),
    ])
    res.json({ users, invites })
  }
)

// ——— Owner: create invite (optional branchId) ———
router.post(
  "/invite",
  authenticate,
  requireOrganization,
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    try {
      const body = z
        .object({
          role: z.enum(["WAITER", "KITCHEN", "MANAGER", "STAFF"]),
          branchId: z.string().optional().nullable(),
        })
        .parse(req.body)

      const organizationId = req.user!.organizationId!

      if (body.branchId) {
        const branch = await prisma.branch.findFirst({
          where: { id: body.branchId, organizationId },
        })
        if (!branch) return res.status(400).json({ error: "Invalid branch" })
      }

      const code = makeCode()
      const expiresAt = new Date()
      expiresAt.setDate(expiresAt.getDate() + 7)

      const inviteData: any = {
        code,
        role: body.role as Role,
        organizationId,
        expiresAt,
        used: false,
        branchId: body.branchId || null,
      }

      // Only if your Invite model still requires email:
      try {
        inviteData.email = `invite-${code.toLowerCase()}@semaiy.local`
      } catch {}

      const invite = await prisma.invite.create({ data: inviteData })

      const joinPath =
        body.branchId != null
          ? `/join/${invite.code}?branch=${body.branchId}`
          : `/join/${invite.code}`

      res.status(201).json({
        code: invite.code,
        role: invite.role,
        branchId: invite.branchId,
        expiresAt: invite.expiresAt,
        joinPath,
      })
    } catch (err: any) {
      if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
      console.error(err)
      res.status(500).json({ error: err.message || "Failed to create invite" })
    }
  }
)

// ——— Public: get invite info ———
router.get("/invite/:code", async (req, res) => {
  const invite = await prisma.invite.findFirst({
    where: { code: String(req.params.code).toUpperCase(), used: false },
    include: {
      organization: { select: { id: true, name: true, type: true } },
      branch: { select: { id: true, name: true } },
    },
  })
  if (!invite) return res.status(404).json({ error: "Invite not found or already used" })
  if (invite.expiresAt < new Date()) return res.status(400).json({ error: "Invite expired" })

  res.json({
    code: invite.code,
    role: invite.role,
    organizationName: invite.organization.name,
    businessType: invite.organization.type,
    branchId: invite.branchId,
    branchName: invite.branch?.name || null,
    expiresAt: invite.expiresAt,
  })
})

// ——— Public: join with invite ———
router.post("/join", async (req, res) => {
  try {
    const data = z
      .object({
        code: z.string().min(4),
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6),
        branchId: z.string().optional().nullable(),
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
    const branchId = invite.branchId || data.branchId || null

    const user = await prisma.$transaction(async (tx) => {
      const u = await tx.user.create({
        data: {
          name: data.name,
          email: data.email,
          passwordHash,
          role: invite.role,
          organizationId: invite.organizationId,
          preferredLang: "en",
          branchId,
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
        branchId: user.branchId,
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
        branchId: user.branchId,
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

router.delete(
  "/:userId",
  authenticate,
  requireOrganization,
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const userId = String(req.params.userId)
      if (userId === req.user!.userId) {
        return res.status(400).json({ error: "Cannot remove yourself" })
      }
      const target = await prisma.user.findFirst({
        where: { id: userId, organizationId },
      })
      if (!target) return res.status(404).json({ error: "Staff not found" })
      if (target.role === "OWNER") {
        return res.status(400).json({ error: "Cannot remove owner" })
      }
      await prisma.user.delete({ where: { id: userId } })
      res.json({ ok: true })
    } catch (e: any) {
      console.error(e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)
export default router
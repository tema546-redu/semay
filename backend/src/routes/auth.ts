import { Router } from "express"
import bcrypt from "bcryptjs"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { signToken } from "../lib/jwt.js"
import { authenticate } from "../middleware/auth.js"
import { Role, BusinessType } from "@prisma/client"

const router = Router()

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  organizationName: z.string().min(2),
  businessType: z.nativeEnum(BusinessType).default(BusinessType.CAFE),
  preferredLang: z.enum(["en", "am"]).default("en"),
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

function publicUser(user: {
  id: string
  name: string
  email: string
  role: Role
  preferredLang: string
  phone?: string | null
  avatarUrl?: string | null
}) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    preferredLang: user.preferredLang,
    phone: user.phone ?? null,
    avatarUrl: user.avatarUrl ?? null,
  }
}

function publicOrg(org: { id: string; name: string; type: BusinessType } | null) {
  if (!org) return null
  return { id: org.id, name: org.name, type: org.type }
}

// ——— Register ———
router.post("/register", async (req, res) => {
  try {
    const data = registerSchema.parse(req.body)
    const email = data.email.trim().toLowerCase()

    const existing = await prisma.user.findFirst({
      where: { email: { equals: email, mode: "insensitive" } },
    })
    if (existing) {
      return res.status(400).json({ error: "Email already registered" })
    }

    const passwordHash = await bcrypt.hash(data.password, 10)

    const result = await prisma.$transaction(async (tx) => {
      const organization = await tx.organization.create({
        data: {
          name: data.organizationName.trim(),
          type: data.businessType,
        },
      })

      const endDate = new Date()
      endDate.setDate(endDate.getDate() + 3)

      await tx.subscription.create({
        data: {
          organizationId: organization.id,
          plan: "MONTHLY",
          status: "TRIAL",
          amount: 0,
          endDate,
          currency: "ETB",
        },
      })

      if (["CAFE", "RESTAURANT", "BAKERY"].includes(data.businessType)) {
        const sample = [
          { name: "Espresso", nameAm: "ኤስፕሬሶ", category: "Coffee", price: 80 },
          { name: "Cappuccino", nameAm: "ካፑቺኖ", category: "Coffee", price: 120 },
          { name: "Tea", nameAm: "ሻይ", category: "Drinks", price: 40 },
          { name: "Injera set", nameAm: "እንጀራ ስብስብ", category: "Food", price: 250 },
          { name: "Burger", nameAm: "በርገር", category: "Food", price: 280 },
        ]
        for (const item of sample) {
          await tx.menuItem.create({
            data: { ...item, organizationId: organization.id },
          })
        }
      }

      const user = await tx.user.create({
        data: {
          name: data.name.trim(),
          email,
          passwordHash,
          role: Role.OWNER,
          preferredLang: data.preferredLang,
          organizationId: organization.id,
        },
      })

      try {
        await tx.orgMembership.create({
          data: {
            userId: user.id,
            organizationId: organization.id,
            role: Role.OWNER,
          },
        })
      } catch (e) {
        console.warn("orgMembership create skipped", e)
      }

      if (data.businessType === "SCHOOL" || data.businessType === "UNIVERSITY") {
        await tx.school.create({
          data: {
            name: data.organizationName.trim(),
            level: data.businessType === "UNIVERSITY" ? "university" : "secondary",
            organizationId: organization.id,
          },
        })
      }

      return { user, organization }
    })

    const token = signToken({
      userId: result.user.id,
      email: result.user.email,
      role: result.user.role,
      organizationId: result.organization.id,
    })

    res.status(201).json({
      token,
      user: publicUser(result.user),
      organization: publicOrg(result.organization),
    })
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error("register", err)
    res.status(500).json({ error: err.message || "Registration failed" })
  }
})

// ——— Login ———
router.post("/login", async (req, res) => {
  try {
    const data = loginSchema.parse(req.body)
    const email = data.email.trim().toLowerCase()

    const user = await prisma.user.findFirst({
      where: { email: { equals: email, mode: "insensitive" } },
      include: { organization: true },
    })

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" })
    }

    const valid = await bcrypt.compare(data.password, user.passwordHash)
    if (!valid) {
      return res.status(401).json({ error: "Invalid email or password" })
    }

    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
      organizationId: user.organizationId,
    })

    res.json({
      token,
      user: publicUser(user),
      organization: publicOrg(user.organization),
    })
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error("login", err)
    res.status(500).json({ error: "Login failed" })
  }
})

// ——— Multi-org: create another business ———
router.post("/organizations", authenticate, async (req, res) => {
  try {
    const data = z
      .object({
        name: z.string().min(2),
        type: z.nativeEnum(BusinessType),
      })
      .parse(req.body)

    const userId = req.user!.userId

    const result = await prisma.$transaction(async (tx) => {
      const org = await tx.organization.create({
        data: { name: data.name.trim(), type: data.type },
      })

      const endDate = new Date()
      endDate.setDate(endDate.getDate() + 3)

      await tx.subscription.create({
        data: {
          organizationId: org.id,
          plan: "MONTHLY",
          status: "TRIAL",
          amount: 0,
          endDate,
          currency: "ETB",
        },
      })

      try {
        await tx.orgMembership.create({
          data: { userId, organizationId: org.id, role: Role.OWNER },
        })
      } catch (e) {
        console.warn("orgMembership", e)
      }

      await tx.user.update({
        where: { id: userId },
        data: { organizationId: org.id, role: Role.OWNER },
      })

      if (data.type === "SCHOOL" || data.type === "UNIVERSITY") {
        await tx.school.create({
          data: {
            name: data.name.trim(),
            level: data.type === "UNIVERSITY" ? "university" : "secondary",
            organizationId: org.id,
          },
        })
      }

      return org
    })

    const user = await prisma.user.findUnique({ where: { id: userId } })
    const token = signToken({
      userId,
      email: user!.email,
      role: Role.OWNER,
      organizationId: result.id,
    })

    res.status(201).json({
      token,
      organization: publicOrg(result),
    })
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    console.error(e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.get("/organizations", authenticate, async (req, res) => {
  try {
    const list = await prisma.orgMembership.findMany({
      where: { userId: req.user!.userId },
      include: { organization: true },
      orderBy: { createdAt: "asc" },
    })
    res.json(
      list.map((m) => ({
        id: m.organization.id,
        name: m.organization.name,
        type: m.organization.type,
        role: m.role,
      }))
    )
  } catch (e) {
    console.error(e)
    res.json([])
  }
})

router.post("/switch-org", authenticate, async (req, res) => {
  try {
    const { organizationId } = z.object({ organizationId: z.string() }).parse(req.body)
    const userId = req.user!.userId

    const m = await prisma.orgMembership.findFirst({
      where: { userId, organizationId },
      include: { organization: true },
    })
    if (!m) return res.status(403).json({ error: "No access" })

    const user = await prisma.user.update({
      where: { id: userId },
      data: { organizationId, role: m.role },
    })

    const token = signToken({
      userId,
      email: user.email,
      role: m.role,
      organizationId,
    })

    res.json({
      token,
      organization: publicOrg(m.organization),
      role: m.role,
    })
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(400).json({ error: e.message || "Failed" })
  }
})

// ——— Me (single route) ———
router.get("/me", authenticate, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.userId },
      include: { organization: true },
    })
    if (!user) return res.status(401).json({ error: "Unauthorized" })

    res.json({
      user: publicUser(user),
      organization: publicOrg(user.organization),
    })
  } catch (e) {
    console.error(e)
    res.status(401).json({ error: "Unauthorized" })
  }
})

router.patch("/me", authenticate, async (req, res) => {
  try {
    const data = z
      .object({
        name: z.string().min(2).optional(),
        phone: z.string().optional().nullable(),
        avatarUrl: z.string().optional().nullable(),
        preferredLang: z.enum(["en", "am"]).optional(),
      })
      .parse(req.body)

    const user = await prisma.user.update({
      where: { id: req.user!.userId },
      data: {
        ...(data.name != null && { name: data.name }),
        ...(data.phone !== undefined && { phone: data.phone }),
        ...(data.avatarUrl !== undefined && { avatarUrl: data.avatarUrl }),
        ...(data.preferredLang != null && { preferredLang: data.preferredLang }),
      },
      include: { organization: true },
    })

    res.json({
      user: publicUser(user),
      organization: publicOrg(user.organization),
    })
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    console.error(e)
    res.status(500).json({ error: "Failed to update profile" })
  }
})

router.delete("/me", authenticate, async (req, res) => {
  try {
    const userId = req.user!.userId
    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) return res.status(404).json({ error: "User not found" })

    await prisma.user.delete({ where: { id: userId } })
    res.json({ ok: true, message: "Account deleted" })
  } catch (e: any) {
    console.error(e)
    res.status(500).json({ error: e.message || "Failed to delete account" })
  }
})

export default router
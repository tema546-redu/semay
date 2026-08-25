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

// Register Owner + Organization
router.post("/register", async (req, res) => {
  try {
    const data = registerSchema.parse(req.body)

    const existing = await prisma.user.findUnique({ where: { email: data.email } })
    if (existing) return res.status(400).json({ error: "Email already registered" })

    const passwordHash = await bcrypt.hash(data.password, 10)

    const result = await prisma.$transaction(async (tx) => {
      const organization = await tx.organization.create({
        data: {
          name: data.organizationName,
          type: data.businessType,
        },
      })

      // Create trial subscription (7 days)
      const endDate = new Date()
      endDate.setDate(endDate.getDate() + 3)

      await tx.subscription.create({
        data: {
          organizationId: organization.id,
          plan: "MONTHLY",
          status: "TRIAL",
          amount: 0,
          endDate,
        },
      })

      const user = await tx.user.create({
        data: {
          name: data.name,
          email: data.email,
          passwordHash,
          role: Role.OWNER,
          preferredLang: data.preferredLang,
          organizationId: organization.id,
        },
      })

      // If school type, create school record
      if (data.businessType === "SCHOOL" || data.businessType === "UNIVERSITY") {
        await tx.school.create({
          data: {
            name: data.organizationName,
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
      user: {
        id: result.user.id,
        name: result.user.name,
        email: result.user.email,
        role: result.user.role,
        preferredLang: result.user.preferredLang,
      },
      organization: {
        id: result.organization.id,
        name: result.organization.name,
        type: result.organization.type,
      },
    })
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Registration failed" })
  }
})

// Login
router.post("/login", async (req, res) => {
  try {
    const data = loginSchema.parse(req.body)

    const user = await prisma.user.findUnique({
      where: { email: data.email },
      include: { organization: true },
    })

    if (!user) return res.status(401).json({ error: "Invalid email or password" })

    const valid = await bcrypt.compare(data.password, user.passwordHash)
    if (!valid) return res.status(401).json({ error: "Invalid email or password" })

    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
      organizationId: user.organizationId,
    })

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        preferredLang: user.preferredLang,
      },
      organization: user.organization
        ? {
            id: user.organization.id,
            name: user.organization.name,
            type: user.organization.type,
          }
        : null,
    })
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Login failed" })
  }
})

// Me
router.get("/me", authenticate, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.userId },
    include: { organization: true },
  })
  if (!user) return res.status(404).json({ error: "User not found" })

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    preferredLang: user.preferredLang,
    organization: user.organization,
  })
})

// GET /api/auth/me already returns user — ensure avatarUrl, phone

router.patch("/me", authenticate, async (req, res) => {
  try {
    const data = z
      .object({
        name: z.string().min(2).optional(),
        phone: z.string().optional(),
        avatarUrl: z.string().optional(),
        preferredLang: z.string().optional(),
      })
      .parse(req.body)

    const user = await prisma.user.update({
      where: { id: req.user!.userId },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        avatarUrl: true,
        preferredLang: true,
      },
    })
    res.json(user)
  } catch (e: any) {
    res.status(400).json({ error: e.message || "Failed" })
  }
})

export default router

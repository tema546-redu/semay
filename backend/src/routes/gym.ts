import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

// ——— Members ———
router.get("/members", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const members = await prisma.gymMember.findMany({
    where: { organizationId },
    include: {
      memberships: {
        where: { status: "active" },
        include: { plan: true },
        take: 1,
        orderBy: { createdAt: "desc" },
      },
    },
    orderBy: { fullName: "asc" },
  })
  res.json(members)
})

router.post("/members", requireRole(Role.OWNER, Role.MANAGER, Role.STAFF), async (req, res) => {
  try {
    const data = z.object({
      fullName: z.string().min(2),
      fullNameAm: z.string().optional(),
      phone: z.string().optional(),
      email: z.string().email().optional().or(z.literal("")),
      notes: z.string().optional(),
      planId: z.string().optional(),
    }).parse(req.body)

    const organizationId = req.user!.organizationId!
    const member = await prisma.gymMember.create({
      data: {
        fullName: data.fullName,
        fullNameAm: data.fullNameAm,
        phone: data.phone,
        email: data.email || null,
        notes: data.notes,
        organizationId,
      },
    })

    if (data.planId) {
      const plan = await prisma.membershipPlan.findFirst({
        where: { id: data.planId, organizationId },
      })
      if (plan) {
        const endDate = plan.durationDays
          ? new Date(Date.now() + plan.durationDays * 24 * 60 * 60 * 1000)
          : null
        await prisma.membership.create({
          data: {
            memberId: member.id,
            planId: plan.id,
            endDate,
            status: "active",
            paymentStatus: "paid",
          },
        })
      }
    }

    const full = await prisma.gymMember.findUnique({
      where: { id: member.id },
      include: { memberships: { include: { plan: true } } },
    })
    res.status(201).json(full)
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Failed to create member" })
  }
})

// ——— Plans ———
router.get("/plans", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const plans = await prisma.membershipPlan.findMany({
    where: { organizationId, active: true },
    orderBy: { price: "asc" },
  })
  res.json(plans)
})

router.post("/plans", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const data = z.object({
      name: z.string().min(1),
      nameAm: z.string().optional(),
      type: z.enum(["monthly", "annual", "class_pack", "drop_in"]),
      price: z.number().positive(),
      durationDays: z.number().int().positive().optional(),
      classCredits: z.number().int().positive().optional(),
      description: z.string().optional(),
    }).parse(req.body)

    const plan = await prisma.membershipPlan.create({
      data: { ...data, organizationId: req.user!.organizationId! },
    })
    res.status(201).json(plan)
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    res.status(500).json({ error: "Failed to create plan" })
  }
})

// ——— Check-in ———
router.post("/check-in", requireRole(Role.OWNER, Role.MANAGER, Role.STAFF), async (req, res) => {
  try {
    const { memberId, method } = z.object({
      memberId: z.string(),
      method: z.enum(["manual", "qr", "kiosk"]).default("manual"),
    }).parse(req.body)

    const organizationId = req.user!.organizationId!
    const member = await prisma.gymMember.findFirst({
      where: { id: memberId, organizationId, status: "active" },
      include: {
        memberships: {
          where: { status: "active" },
          include: { plan: true },
          take: 1,
        },
      },
    })
    if (!member) return res.status(404).json({ error: "Member not found or inactive" })

    // Optional: check membership expiry
    const membership = member.memberships[0]
    if (membership?.endDate && membership.endDate < new Date()) {
      return res.status(400).json({ error: "Membership expired" })
    }

    const checkIn = await prisma.gymCheckIn.create({
      data: { memberId, organizationId, method },
    })
    res.status(201).json({ checkIn, member: { id: member.id, fullName: member.fullName } })
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Check-in failed" })
  }
})

router.get("/check-ins/today", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const start = new Date()
  start.setHours(0, 0, 0, 0)
  const checkIns = await prisma.gymCheckIn.findMany({
    where: { organizationId, checkedInAt: { gte: start } },
    include: { member: { select: { id: true, fullName: true, fullNameAm: true } } },
    orderBy: { checkedInAt: "desc" },
  })
  res.json(checkIns)
})

// ——— Stats ———
router.get("/stats", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const start = new Date()
  start.setHours(0, 0, 0, 0)

  const [activeMembers, todayCheckIns, expiringSoon] = await Promise.all([
    prisma.gymMember.count({ where: { organizationId, status: "active" } }),
    prisma.gymCheckIn.count({ where: { organizationId, checkedInAt: { gte: start } } }),
    prisma.membership.count({
      where: {
        member: { organizationId },
        status: "active",
        endDate: {
          gte: new Date(),
          lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      },
    }),
  ])

  res.json({ activeMembers, todayCheckIns, expiringSoon })
})

export default router

// Freeze / unfreeze member
router.patch("/members/:id/status", requireRole(Role.OWNER, Role.MANAGER, Role.STAFF), async (req, res) => {
  try {
    const { status } = z.object({
      status: z.enum(["active", "frozen", "cancelled", "expired"]),
    }).parse(req.body)

    const organizationId = req.user!.organizationId!
    const id = req.params.id as string

    const member = await prisma.gymMember.findFirst({
      where: { id, organizationId },
    })

    if (!member) {
      return res.status(404).json({ error: "Member not found" })
    }

    const updated = await prisma.gymMember.update({
      where: { id: member.id },
      data: { status },
    })

    // Also freeze/cancel active memberships if freezing/cancelling member
    if (status === "frozen" || status === "cancelled") {
      await prisma.membership.updateMany({
        where: {
          memberId: member.id,
          status: "active",
        },
        data: { status },
      })
    }

    return res.json(updated)
  } catch (err: any) {
    if (err.name === "ZodError") {
      return res.status(400).json({ error: err.errors })
    }

    return res.status(500).json({
      error: "Failed to update status",
    })
  }
})

// Expiring memberships (next 14 days)
router.get("/expiring", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const now = new Date()
  const in14 = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)

  const list = await prisma.membership.findMany({
    where: {
      member: { organizationId },
      status: "active",
      endDate: { gte: now, lte: in14 },
    },
    include: {
      member: { select: { id: true, fullName: true, fullNameAm: true, phone: true } },
      plan: true,
    },
    orderBy: { endDate: "asc" },
  })
  res.json(list)
})

// Classes
router.get("/classes", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const classes = await prisma.gymClass.findMany({
    where: { organizationId, active: true },
    orderBy: [{ dayOfWeek: "asc" }, { startTime: "asc" }],
  })
  res.json(classes)
})

router.post("/classes", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const data = z.object({
      name: z.string().min(1),
      nameAm: z.string().optional(),
      coach: z.string().optional(),
      dayOfWeek: z.number().int().min(0).max(6),
      startTime: z.string(),
      endTime: z.string(),
      capacity: z.number().int().positive().default(20),
    }).parse(req.body)

    const cls = await prisma.gymClass.create({
      data: { ...data, organizationId: req.user!.organizationId! },
    })
    res.status(201).json(cls)
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    res.status(500).json({ error: "Failed to create class" })
  }
})

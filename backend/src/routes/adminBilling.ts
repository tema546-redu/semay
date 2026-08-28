import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { planDurationDays, PlanKey } from "../lib/pricing.js"
import { authenticate } from "../middleware/auth.js"

const router = Router()
const ADMIN_KEY = process.env.SEMAY_ADMIN_KEY || "semay-approve-2026"

function check(req: any, res: any) {
  const key = String(req.headers["x-admin-key"] || req.query.key || "")
  if (key !== ADMIN_KEY) {
    res.status(401).json({ error: "Unauthorized" })
    return false
  }
  return true
}

/** Pending payments + owner details */
router.get("/pending", async (req, res) => {
  if (!check(req, res)) return

  const list = await prisma.subscription.findMany({
    where: { status: "PENDING_PAYMENT" as any },
    include: {
      organization: {
        select: {
          id: true,
          name: true,
          type: true,
          phone: true,
          users: {
            where: { role: "OWNER" },
            select: { id: true, name: true, email: true, phone: true },
            take: 1,
          },
        },
      },
    },
    orderBy: { endDate: "desc" },
  })

  const now = Date.now()
  res.json(
    list.map((s) => {
      const owner = (s as any).organization?.users?.[0]
      const daysLeft = Math.max(
        0,
        Math.ceil((s.endDate.getTime() - now) / (1000 * 60 * 60 * 24))
      )
      return {
        organizationId: s.organizationId,
        organizationName: (s as any).organization?.name,
        businessType: (s as any).organization?.type,
        orgPhone: (s as any).organization?.phone,
        ownerName: owner?.name,
        ownerEmail: owner?.email,
        ownerPhone: owner?.phone,
        plan: s.plan,
        amount: Number(s.amount),
        paymentRef: (s as any).paymentRef,
        paymentMethod: (s as any).paymentMethod,
        paymentReceipt: (s as any).paymentReceipt,
        status: s.status,
        endDate: s.endDate,
        daysLeftTrial: daysLeft,
      }
    })
  )
})

/** All orgs overview */
router.get("/orgs", async (req, res) => {
  if (!check(req, res)) return

  const orgs = await prisma.organization.findMany({
    include: {
      subscription: true,
      users: {
        where: { role: "OWNER" },
        select: { name: true, email: true, phone: true },
        take: 1,
      },
    },
    orderBy: { createdAt: "desc" },
    take: 100,
  })

  const now = Date.now()
  res.json(
    orgs.map((o) => {
      const sub = o.subscription
      const owner = o.users[0]
      const daysLeft = sub
        ? Math.max(0, Math.ceil((sub.endDate.getTime() - now) / (1000 * 60 * 60 * 24)))
        : 0
      return {
        organizationId: o.id,
        name: o.name,
        type: o.type,
        ownerName: owner?.name,
        ownerEmail: owner?.email,
        ownerPhone: owner?.phone,
        status: sub?.status || "NONE",
        plan: sub?.plan || null,
        amount: sub ? Number(sub.amount) : 0,
        paymentRef: (sub as any)?.paymentRef || null,
        endDate: sub?.endDate || null,
        daysLeft,
        createdAt: o.createdAt,
      }
    })
  )
})

router.post("/approve", async (req, res) => {
  if (!check(req, res)) return
  try {
    const { organizationId } = z.object({ organizationId: z.string() }).parse(req.body)
    const sub = await prisma.subscription.findUnique({ where: { organizationId } })
    if (!sub) return res.status(404).json({ error: "Not found" })
    if (sub.status !== ("PENDING_PAYMENT" as any)) {
      return res.status(400).json({ error: "Not pending payment" })
    }

    const days = planDurationDays(sub.plan as PlanKey)
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + days)

    const updated = await prisma.subscription.update({
      where: { organizationId },
      data: {
        status: "ACTIVE" as any,
        startDate: new Date(),
        endDate,
      },
    })

    res.json({
      message: "Approved",
      status: updated.status,
      endDate: updated.endDate,
    })
  } catch (e: any) {
    res.status(400).json({ error: e.message || "Failed" })
  }
})

router.post("/reject", async (req, res) => {
  if (!check(req, res)) return
  try {
    const { organizationId } = z.object({ organizationId: z.string() }).parse(req.body)
    await prisma.subscription.update({
      where: { organizationId },
      data: {
        status: "TRIAL" as any,
        paymentRef: null,
        paymentMethod: null,
        paymentReceipt: null,
      } as any,
    })
    res.json({ message: "Rejected" })
  } catch (e: any) {
    res.status(400).json({ error: e.message || "Failed" })
  }
})

/** Admin: list feedback (x-admin-key) */
router.get("/feedback", async (req, res) => {
  if (!check(req, res)) return
  try {
    const list = await prisma.feedback.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
    })
    res.json(list)
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Feedback table missing?" })
  }
})

/**
 * Optional: allow POST feedback on this router too.
 * Prefer mounting POST /api/feedback separately; this works if index mounts admin routes only under /api/admin/billing.
 * Settings should call POST /api/feedback — see note below.
 */
router.post("/feedback", authenticate, async (req, res) => {
  try {
    const data = z
      .object({
        message: z.string().min(3).max(2000),
        email: z.string().email().optional(),
      })
      .parse(req.body)

    const row = await prisma.feedback.create({
      data: {
        message: data.message,
        email: data.email,
        organizationId: req.user!.organizationId || null,
        userId: req.user!.userId,
      },
    })
    res.status(201).json(row)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: e.message || "Failed" })
  }
})

export default router
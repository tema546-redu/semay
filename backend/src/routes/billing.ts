import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role, SubscriptionPlan } from "@prisma/client"
import { getPrice, listPlansForType, planDurationDays, PlanKey } from "../lib/pricing.js"
import { paymentInstructions, PAYMENT } from "../lib/payment.js"

const router = Router()
router.use(authenticate, requireOrganization)

router.get("/current", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const org = await prisma.organization.findUnique({
    where: { id: organizationId },
    include: { subscription: true },
  })
  if (!org) return res.status(404).json({ error: "Organization not found" })

  const sub = org.subscription
  const now = new Date()
  const daysLeft = sub
    ? Math.max(0, Math.ceil((sub.endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))
    : 0

  const status = sub?.status || null
  const isActive = status === "ACTIVE" || (status === "TRIAL" && daysLeft > 0)

  res.json({
    businessType: org.type,
    organizationName: org.name,
    payment: {
      telebirrPhone: PAYMENT.telebirrPhone,
      telebirrName: PAYMENT.telebirrName,
      cbeAccount: PAYMENT.cbeAccount,
      cbeName: PAYMENT.cbeName,
      bankName: PAYMENT.bankName,
    },
    subscription: sub
      ? {
          plan: sub.plan,
          status: sub.status,
          amount: Number(sub.amount),
          currency: sub.currency,
          startDate: sub.startDate,
          endDate: sub.endDate,
          daysLeft,
          isTrial: sub.status === "TRIAL",
          isPending: sub.status === "PENDING_PAYMENT",
          isActive,
          paymentRef: (sub as any).paymentRef || null,
          paymentMethod: (sub as any).paymentMethod || null,
        }
      : null,
    plans: listPlansForType(org.type),
  })
})

router.get("/plans", async (req, res) => {
  const org = await prisma.organization.findUnique({
    where: { id: req.user!.organizationId! },
  })
  if (!org) return res.status(404).json({ error: "Not found" })
  res.json({ businessType: org.type, plans: listPlansForType(org.type) })
})

router.post("/select-plan", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const { plan } = z
      .object({
        plan: z.enum(["MONTHLY", "THREE_MONTHS", "SIX_MONTHS", "YEARLY"]),
      })
      .parse(req.body)

    const organizationId = req.user!.organizationId!
    const org = await prisma.organization.findUnique({ where: { id: organizationId } })
    if (!org) return res.status(404).json({ error: "Not found" })

    const amount = getPrice(org.type, plan as PlanKey)
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 3)

    const sub = await prisma.subscription.upsert({
      where: { organizationId },
      create: {
        organizationId,
        plan: plan as SubscriptionPlan,
        status: "TRIAL",
        amount,
        endDate,
        currency: "ETB",
      },
      update: {
        plan: plan as SubscriptionPlan,
        amount,
      },
    })

    res.json({
      message: "Plan selected. Pay, then submit reference.",
      subscription: {
        plan: sub.plan,
        status: sub.status,
        amount: Number(sub.amount),
        endDate: sub.endDate,
      },
      instructions: paymentInstructions(amount, plan, org.name),
    })
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Failed to select plan" })
  }
})

router.post("/mark-paid", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const body = z
      .object({
        plan: z.enum(["MONTHLY", "THREE_MONTHS", "SIX_MONTHS", "YEARLY"]),
        reference: z.string().min(3),
        method: z.enum(["telebirr", "cbe"]).default("telebirr"),
        receipt: z.string().optional(),
      })
      .parse(req.body)

    const { plan, reference, method, receipt } = body
    const organizationId = req.user!.organizationId!
    const org = await prisma.organization.findUnique({ where: { id: organizationId } })
    if (!org) return res.status(404).json({ error: "Not found" })

    const amount = getPrice(org.type, plan as PlanKey)
    const existing = await prisma.subscription.findUnique({ where: { organizationId } })
    let endDate = existing?.endDate
    if (!endDate) {
      endDate = new Date()
      endDate.setDate(endDate.getDate() + 3)
    }

    const createData: any = {
      organizationId,
      plan: plan as SubscriptionPlan,
      status: "PENDING_PAYMENT",
      amount,
      endDate,
      currency: "ETB",
      paymentRef: reference,
      paymentMethod: method,
      paidAmount: amount,
    }
    if (receipt) createData.paymentReceipt = receipt

    const updateData: any = {
      plan: plan as SubscriptionPlan,
      status: "PENDING_PAYMENT",
      amount,
      paymentRef: reference,
      paymentMethod: method,
      paidAmount: amount,
    }
    if (receipt) updateData.paymentReceipt = receipt

    const sub = await prisma.subscription.upsert({
      where: { organizationId },
      create: createData,
      update: updateData,
    })

    console.log("[PAYMENT PENDING]", {
      organizationId,
      org: org.name,
      plan,
      amount,
      method,
      reference,
    })

    res.json({
      message: "Payment submitted. Waiting for Semay approval.",
      subscription: {
        plan: sub.plan,
        status: sub.status,
        amount: Number(sub.amount),
        endDate: sub.endDate,
        paymentRef: reference,
        method,
      },
    })
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Failed to submit payment" })
  }
})

router.get("/pending", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const list = await prisma.subscription.findMany({
    where: { status: "PENDING_PAYMENT" as any },
    include: {
      organization: { select: { id: true, name: true, type: true } },
    },
    orderBy: { endDate: "desc" },
  })
  res.json(
    list.map((s) => ({
      organizationId: s.organizationId,
      organizationName: (s as any).organization?.name,
      businessType: (s as any).organization?.type,
      plan: s.plan,
      amount: Number(s.amount),
      paymentRef: (s as any).paymentRef,
      paymentMethod: (s as any).paymentMethod,
      status: s.status,
    }))
  )
})

router.post("/approve", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const { organizationId } = z.object({ organizationId: z.string().min(1) }).parse(req.body)
    const sub = await prisma.subscription.findUnique({ where: { organizationId } })
    if (!sub) return res.status(404).json({ error: "Subscription not found" })
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
      message: "Approved. Subscription ACTIVE.",
      subscription: {
        plan: updated.plan,
        status: updated.status,
        endDate: updated.endDate,
      },
    })
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Failed to approve" })
  }
})

router.post("/reject", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const { organizationId } = z.object({ organizationId: z.string().min(1) }).parse(req.body)
    await prisma.subscription.update({
      where: { organizationId },
      data: {
        status: "TRIAL" as any,
        paymentRef: null,
        paymentMethod: null,
      } as any,
    })
    res.json({ message: "Payment rejected. Back to trial." })
  } catch (err: any) {
    res.status(500).json({ error: "Failed" })
  }
})

export default router
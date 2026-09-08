import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import {
  authenticate,
  requireOrganization,
  requireRole,
} from "../middleware/auth.js"
import { Role, SubscriptionPlan } from "@prisma/client"
import { getPrice, listPlansForType, PlanKey } from "../lib/pricing.js"
import { paymentInstructions, PAYMENT } from "../lib/payment.js"

const router = Router()

router.use(authenticate, requireOrganization)

/**
 * Get number of branches for the organization.
 * If branch lookup fails, assume 1 branch.
 */
async function branchCount(organizationId: string) {
  try {
    const n = await prisma.branch.count({
      where: { organizationId },
    })

    return Math.max(1, n || 1)
  } catch {
    return 1
  }
}

/**
 * --------------------------------------------------------
 * GET CURRENT SUBSCRIPTION
 * --------------------------------------------------------
 */
       
 router.get("/current", async (req, res) => {
  try {
    const organizationId = req.user!.organizationId!

    const org = await prisma.organization.findUnique({
      where: { id: organizationId },
      include: { subscription: true },
    })

    if (!org) {
      return res.status(404).json({ error: "Organization not found" })
    }

    const branches = await branchCount(organizationId)
    let sub = org.subscription
    const now = new Date()

    // Auto-expire when time is up
    if (
      sub &&
      sub.endDate.getTime() <= now.getTime() &&
      (String(sub.status) === "TRIAL" || String(sub.status) === "ACTIVE")
    ) {
      sub = await prisma.subscription.update({
        where: { organizationId },
        data: { status: "EXPIRED" as any },
      })
    }

    const status = sub?.status != null ? String(sub.status) : null
    const endMs = sub?.endDate ? sub.endDate.getTime() : 0
    const stillValid = !!sub && endMs > now.getTime()

    const daysLeft = sub
      ? Math.max(0, Math.ceil((endMs - now.getTime()) / (1000 * 60 * 60 * 24)))
      : 0

    // ONLY usable states
    const isActive =
      stillValid && (status === "ACTIVE" || status === "TRIAL")

    const isPending = status === "PENDING_PAYMENT"
    const mustPay = !isActive
    // Hard lock when not usable (pending can still open /billing only via gate ALLOW list)
    const isLocked = mustPay
    const allowed = isActive

    res.json({
      businessType: org.type,
      organizationName: org.name,
      branchCount: branches,
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
            isTrial: status === "TRIAL",
            isPending,
            isActive,
            mustPay,
            isLocked,
            allowed,
            paymentRef: (sub as any).paymentRef || null,
            paymentMethod: (sub as any).paymentMethod || null,
            lockReason: allowed
              ? null
              : isPending
                ? "Payment submitted. Waiting for Semaiy approval."
                : "Your free trial or plan has ended. Your data is safe. Please subscribe to continue.",
          }
        : {
            plan: null,
            status: null,
            daysLeft: 0,
            isTrial: false,
            isPending: false,
            isActive: false,
            mustPay: true,
            isLocked: true,
            allowed: false,
            lockReason: "No subscription. Please choose a plan.",
          },
      plans: listPlansForType(org.type, branches),
    })
  } catch (error) {
    console.error("Failed to get current subscription:", error)
    res.status(500).json({ error: "Failed to get subscription information" })
  }
})
/**
 * --------------------------------------------------------
 * GET AVAILABLE PLANS
 * --------------------------------------------------------
 */
router.get("/plans", async (req, res) => {
  try {
    const organizationId =
      req.user!.organizationId!

    const org =
      await prisma.organization.findUnique({
        where: {
          id: organizationId,
        },
      })

    if (!org) {
      return res.status(404).json({
        error: "Organization not found",
      })
    }

    const branches =
      await branchCount(organizationId)

    res.json({
      businessType: org.type,
      branchCount: branches,

      plans: listPlansForType(
        org.type,
        branches
      ),
    })
  } catch (error) {
    console.error(
      "Failed to get billing plans:",
      error
    )

    res.status(500).json({
      error: "Failed to get billing plans",
    })
  }
})

/**
 * --------------------------------------------------------
 * SELECT PLAN
 * --------------------------------------------------------
 */
router.post(
  "/select-plan",
  requireRole(
    Role.OWNER,
    Role.MANAGER
  ),
  async (req, res) => {
    try {
      const { plan } = z
        .object({
          plan: z.enum([
            "MONTHLY",
            "THREE_MONTHS",
            "SIX_MONTHS",
            "YEARLY",
          ]),
        })
        .parse(req.body)

      const organizationId =
        req.user!.organizationId!

      const org =
        await prisma.organization.findUnique({
          where: {
            id: organizationId,
          },
        })

      if (!org) {
        return res.status(404).json({
          error: "Organization not found",
        })
      }

      const existing =
        await prisma.subscription.findUnique({
          where: {
            organizationId,
          },
        })

      const branches =
        await branchCount(organizationId)

      const amount = getPrice(
        org.type,
        plan as PlanKey,
        branches
      )

      /**
       * If this is a completely new subscription,
       * create a 3-day trial expiration.
       */
      let endDate = existing?.endDate

      if (!endDate) {
        endDate = new Date()
        endDate.setDate(
          endDate.getDate() + 3
        )
      }

      const sub =
        await prisma.subscription.upsert({
          where: {
            organizationId,
          },

          create: {
            organizationId,

            plan:
              plan as SubscriptionPlan,

            status: "TRIAL",

            amount,

            endDate,

            currency: "ETB",
          },

          update: {
            plan:
              plan as SubscriptionPlan,

            amount,
          },
        })

      res.json({
        message:
          "Plan selected. Pay, then submit reference.",

        branchCount: branches,

        subscription: {
          plan: sub.plan,
          status: sub.status,
          amount: Number(sub.amount),
          endDate: sub.endDate,
        },

        instructions:
          paymentInstructions(
            amount,
            plan,
            org.name
          ),
      })
    } catch (err: any) {
      if (err.name === "ZodError") {
        return res.status(400).json({
          error: err.errors,
        })
      }

      console.error(
        "Failed to select plan:",
        err
      )

      res.status(500).json({
        error: "Failed to select plan",
      })
    }
  }
)

/**
 * --------------------------------------------------------
 * MARK PAYMENT AS SUBMITTED
 * --------------------------------------------------------
 */
router.post(
  "/mark-paid",
  requireRole(
    Role.OWNER,
    Role.MANAGER
  ),
  async (req, res) => {
    try {
      const body = z
        .object({
          plan: z.enum([
            "MONTHLY",
            "THREE_MONTHS",
            "SIX_MONTHS",
            "YEARLY",
          ]),

          reference:
            z.string().min(3),

          method: z
            .enum([
              "telebirr",
              "cbe",
            ])
            .default("telebirr"),

          receipt:
            z.string().optional(),
        })
        .parse(req.body)

      const organizationId =
        req.user!.organizationId!

      const org =
        await prisma.organization.findUnique({
          where: {
            id: organizationId,
          },
        })

      if (!org) {
        return res.status(404).json({
          error: "Organization not found",
        })
      }

      const branches =
        await branchCount(organizationId)

      const amount = getPrice(
        org.type,
        body.plan as PlanKey,
        branches
      )

      const existing =
        await prisma.subscription.findUnique({
          where: {
            organizationId,
          },
        })

      /**
       * Keep existing expiration date.
       * If there isn't one yet, temporarily use
       * three days from now.
       */
      let endDate = existing?.endDate

      if (!endDate) {
        endDate = new Date()

        endDate.setDate(
          endDate.getDate() + 3
        )
      }

      const createData: any = {
        organizationId,

        plan:
          body.plan as SubscriptionPlan,

        status:
          "PENDING_PAYMENT",

        amount,

        endDate,

        currency: "ETB",

        paymentRef:
          body.reference,

        paymentMethod:
          body.method,

        paidAmount:
          amount,
      }

      if (body.receipt) {
        createData.paymentReceipt =
          body.receipt
      }

      const updateData: any = {
        plan:
          body.plan as SubscriptionPlan,

        status:
          "PENDING_PAYMENT",

        amount,

        paymentRef:
          body.reference,

        paymentMethod:
          body.method,

        paidAmount:
          amount,
      }

      if (body.receipt) {
        updateData.paymentReceipt =
          body.receipt
      }

      const sub =
        await prisma.subscription.upsert({
          where: {
            organizationId,
          },

          create:
            createData,

          update:
            updateData,
        })

      res.json({
        message:
          "Payment submitted. Waiting for Semay approval.",

        branchCount:
          branches,

        subscription: {
          plan:
            sub.plan,

          status:
            sub.status,

          amount:
            Number(sub.amount),

          endDate:
            sub.endDate,

          paymentRef:
            body.reference,

          method:
            body.method,
        },
      })
    } catch (err: any) {
      if (err.name === "ZodError") {
        return res.status(400).json({
          error: err.errors,
        })
      }

      console.error(
        "Failed to submit payment:",
        err
      )

      res.status(500).json({
        error:
          "Failed to submit payment",
      })
    }
  }
)

export default router
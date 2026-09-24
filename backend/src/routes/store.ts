import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

const STORE_PLAN_ETB = 500

async function userNameMap(userIds: (string | null | undefined)[]) {
  const ids = [...new Set(userIds.filter(Boolean) as string[])]
  if (!ids.length) return {} as Record<string, string>
  const users = await prisma.user.findMany({
    where: { id: { in: ids } },
    select: { id: true, name: true },
  })
  const map: Record<string, string> = {}
  for (const u of users) map[u.id] = u.name || ""
  return map
}

// ——— Dashboard summary ———
router.get("/summary", async (req, res) => {
  try {
    const organizationId = req.user!.organizationId!
    const items = await prisma.stockItem.findMany({ where: { organizationId } })
    const low = items.filter(
      (i) => i.lowAt != null && Number(i.quantity) <= Number(i.lowAt)
    )
    const value = items.reduce(
      (s, i) => s + Number(i.quantity) * Number(i.unitCost || 0),
      0
    )

    const todayStart = new Date()
    todayStart.setHours(0, 0, 0, 0)

    const todayMoves = await prisma.stockMovement.findMany({
      where: { organizationId, createdAt: { gte: todayStart } },
      include: { stockItem: { select: { name: true, unit: true } } },
      orderBy: { createdAt: "desc" },
      take: 20,
    })

    const names = await userNameMap(todayMoves.map((m) => m.userId))
    const todayMovesWithUser = todayMoves.map((m) => ({
      ...m,
      user: m.userId ? { name: names[m.userId] || null } : null,
    }))

    res.json({
      itemCount: items.length,
      lowStockCount: low.length,
      lowStock: low,
      stockValue: Math.round(value * 100) / 100,
      todayMoves: todayMovesWithUser,
      planEtb: STORE_PLAN_ETB,
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Failed" })
  }
})

// ——— List products ———
router.get("/items", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const items = await prisma.stockItem.findMany({
    where: { organizationId },
    orderBy: { name: "asc" },
  })
  res.json(items)
})

// ——— Create product ———
router.post(
  "/items",
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    try {
      const data = z
        .object({
          name: z.string().min(1),
          unit: z.string().default("pcs"),
          quantity: z.number().min(0).default(0),
          unitCost: z.number().min(0).default(0),
          lowAt: z.number().min(0).optional().nullable(),
        })
        .parse(req.body)

      const item = await prisma.stockItem.create({
        data: {
          name: data.name.trim(),
          unit: data.unit || "pcs",
          quantity: data.quantity,
          unitCost: data.unitCost,
          lowAt: data.lowAt ?? null,
          location: "STORE",
          organizationId: req.user!.organizationId!,
        },
      })
      res.status(201).json(item)
    } catch (e: any) {
      if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

router.patch(
  "/items/:id",
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    try {
      const id = String(req.params.id)
      const organizationId = req.user!.organizationId!
      const data = z
        .object({
          name: z.string().min(1).optional(),
          unit: z.string().optional(),
          lowAt: z.number().min(0).optional().nullable(),
          unitCost: z.number().min(0).optional(),
        })
        .parse(req.body)

      const existing = await prisma.stockItem.findFirst({
        where: { id, organizationId },
      })
      if (!existing) return res.status(404).json({ error: "Not found" })

      const item = await prisma.stockItem.update({
        where: { id },
        data: {
          ...(data.name !== undefined && { name: data.name.trim() }),
          ...(data.unit !== undefined && { unit: data.unit }),
          ...(data.lowAt !== undefined && { lowAt: data.lowAt }),
          ...(data.unitCost !== undefined && { unitCost: data.unitCost }),
        },
      })
      res.json(item)
    } catch (e: any) {
      if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
      res.status(500).json({ error: "Failed" })
    }
  }
)

// ——— RECEIVE (IN) ———
router.post(
  "/receive",
  requireRole(Role.OWNER, Role.MANAGER, Role.STAFF, Role.WAITER),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const data = z
        .object({
          stockItemId: z.string().min(1),
          quantity: z.number().positive(),
          unitPrice: z.number().min(0),
          fromWhere: z.string().optional(),
          note: z.string().optional(),
        })
        .parse(req.body)

      const item = await prisma.stockItem.findFirst({
        where: { id: data.stockItemId, organizationId },
      })
      if (!item) return res.status(404).json({ error: "Item not found" })

      const qty = data.quantity
      const unitPrice = data.unitPrice
      const totalAmount = qty * unitPrice
      const balanceAfter = Number(item.quantity) + qty

      const [movement, updated] = await prisma.$transaction([
        prisma.stockMovement.create({
          data: {
            type: "IN",
            quantity: qty,
            balanceAfter,
            unitPrice,
            totalAmount,
            fromWhere: data.fromWhere?.trim() || "Supplier / Received",
            toWhere: "Store",
            note: data.note,
            stockItemId: item.id,
            userId: req.user!.userId,
            organizationId,
          },
          include: { stockItem: { select: { name: true, unit: true } } },
        }),
        prisma.stockItem.update({
          where: { id: item.id },
          data: {
            quantity: balanceAfter,
            unitCost: unitPrice > 0 ? unitPrice : item.unitCost,
          },
        }),
      ])

      res.status(201).json({ movement, item: updated })
    } catch (e: any) {
      if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
      console.error(e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

// ——— SEND OUT ———
router.post(
  "/out",
  requireRole(Role.OWNER, Role.MANAGER, Role.STAFF, Role.WAITER),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const data = z
        .object({
          stockItemId: z.string().min(1),
          quantity: z.number().positive(),
          toWhere: z.string().min(1),
          note: z.string().optional(),
        })
        .parse(req.body)

      const item = await prisma.stockItem.findFirst({
        where: { id: data.stockItemId, organizationId },
      })
      if (!item) return res.status(404).json({ error: "Item not found" })

      if (Number(item.quantity) < data.quantity) {
        return res.status(400).json({
          error: `Not enough stock. Available: ${item.quantity} ${item.unit}`,
        })
      }

      const qty = data.quantity
      const unitPrice = Number(item.unitCost || 0)
      const totalAmount = qty * unitPrice
      const balanceAfter = Number(item.quantity) - qty

      const [movement, updated] = await prisma.$transaction([
        prisma.stockMovement.create({
          data: {
            type: "OUT",
            quantity: qty,
            balanceAfter,
            unitPrice,
            totalAmount,
            fromWhere: "Store",
            toWhere: data.toWhere.trim(),
            note: data.note,
            stockItemId: item.id,
            userId: req.user!.userId,
            organizationId,
          },
          include: { stockItem: { select: { name: true, unit: true } } },
        }),
        prisma.stockItem.update({
          where: { id: item.id },
          data: { quantity: balanceAfter },
        }),
      ])

      res.status(201).json({ movement, item: updated })
    } catch (e: any) {
      if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
      console.error(e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

// ——— Movements report ———
router.get("/movements", async (req, res) => {
  try {
    const organizationId = req.user!.organizationId!
    const itemId = req.query.itemId ? String(req.query.itemId) : undefined
    const type = req.query.type ? String(req.query.type) : undefined
    const from = req.query.from ? new Date(String(req.query.from)) : undefined
    const to = req.query.to ? new Date(String(req.query.to)) : undefined

    const where: any = { organizationId }
    if (itemId) where.stockItemId = itemId
    if (type === "IN" || type === "OUT") where.type = type
    if (from || to) {
      where.createdAt = {}
      if (from) where.createdAt.gte = from
      if (to) where.createdAt.lte = to
    }

    const list = await prisma.stockMovement.findMany({
      where,
      include: {
        stockItem: { select: { id: true, name: true, unit: true } },
      },
      orderBy: { createdAt: "desc" },
      take: 500,
    })

    const names = await userNameMap(list.map((m) => m.userId))
    res.json(
      list.map((m) => ({
        ...m,
        user: m.userId ? { id: m.userId, name: names[m.userId] || null } : null,
      }))
    )
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Failed" })
  }
})

// ——— Billing 500 ETB ———
router.get("/billing", async (req, res) => {
  res.json({
    plan: "STORE",
    priceEtb: STORE_PLAN_ETB,
    currency: "ETB",
    period: "month",
    status: "trial",
    payNote:
      "Pay 500 ETB per month to Semay for Store inventory, in/out log, alerts, and reports.",
  })
})

router.delete(
  "/items/:id",
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    try {
      const id = String(req.params.id)
      const organizationId = req.user!.organizationId!
      const existing = await prisma.stockItem.findFirst({
        where: { id, organizationId },
      })
      if (!existing) return res.status(404).json({ error: "Not found" })
      await prisma.stockMovement.deleteMany({ where: { stockItemId: id } })
      await prisma.stockItem.delete({ where: { id } })
      res.json({ ok: true })
    } catch (e: any) {
      console.error(e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

export default router
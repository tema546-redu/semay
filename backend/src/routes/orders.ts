import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { OrderStatus, ItemStatus, Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

function makeReceiptCode() {
  return "R" + Math.random().toString(36).slice(2, 8).toUpperCase()
}
function makeReceiptToken() {
  return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
}

const createOrderSchema = z.object({
  tableNumber: z.string().min(1),
  paymentMethod: z.string().min(1).max(40).optional(),
  branchId: z.string().optional(),
  items: z
    .array(
      z.object({
        menuItemId: z.string().optional(),
        name: z.string(),
        quantity: z.number().int().positive(),
        price: z.number().positive(),
        modifiers: z.array(z.string()).optional(),
        notes: z.string().optional(),
      })
    )
    .min(1),
})

async function deductStock(
  organizationId: string,
  items: { menuItemId?: string; quantity: number }[]
) {
  try {
    for (const line of items) {
      if (!line.menuItemId) continue
      const recipes = await prisma.recipeLine.findMany({
        where: { menuItemId: line.menuItemId },
      })
      for (const r of recipes) {
        const use = Number(r.qtyPerSale) * line.quantity
        await prisma.stockItem.updateMany({
          where: { id: r.stockItemId, organizationId },
          data: { quantity: { decrement: use } },
        })
      }
    }
  } catch (e) {
    console.error("stock deduct", e)
  }
}

// ——— Create new order ———
router.post("/", requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF), async (req, res) => {
  try {
    const data = createOrderSchema.parse(req.body)
    const organizationId = req.user!.organizationId!
    const total = data.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

    const orderData: any = {
      tableNumber: data.tableNumber,
      status: OrderStatus.SENT,
      total,
      organizationId,
      staffId: req.user!.userId,
      receiptCode: makeReceiptCode(),
      receiptToken: makeReceiptToken(),
      items: {
        create: data.items.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          modifiers: item.modifiers || [],
          notes: item.notes,
          status: ItemStatus.PENDING,
          menuItemId: item.menuItemId,
        })),
      },
    }
    if (data.paymentMethod) orderData.paymentMethod = data.paymentMethod
    if (data.branchId) orderData.branchId = data.branchId

    const order = await prisma.order.create({
      data: orderData,
      include: { items: true, staff: { select: { id: true, name: true } } },
    })

    await deductStock(organizationId, data.items)

    res.status(201).json(order)
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Failed to create order" })
  }
})

// ——— Kitchen / Bar active tickets ———
router.get("/active", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const orders = await prisma.order.findMany({
    where: {
      organizationId,
      status: { in: [OrderStatus.SENT, OrderStatus.PREPARING, OrderStatus.READY] },
    },
    include: {
      items: {
        include: {
          menuItem: {
            select: { id: true, station: true, name: true },
          },
        },
      },
      staff: { select: { id: true, name: true } },
    },
    orderBy: { createdAt: "asc" },
  })
  res.json(orders)
})

// ——— Customer / QR requests waiting for accept ———
router.get("/requests", async (req, res) => {
  try {
    const organizationId = req.user!.organizationId!
    const orders = await prisma.order.findMany({
      where: {
        organizationId,
        status: OrderStatus.OPEN,
      },
      include: {
        items: {
          include: {
            menuItem: {
              select: { id: true, station: true, name: true },
            },
          },
        },
        staff: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: "asc" },
      take: 50,
    })
    res.json(orders)
  } catch (e) {
    console.error("orders/requests", e)
    res.status(500).json({ error: "Failed" })
  }
})

/** Accept request → send to Kitchen / Bar displays */
router.post(
  "/:id/accept",
  requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const id = String(req.params.id)
      const existing = await prisma.order.findFirst({
        where: { id, organizationId, status: OrderStatus.OPEN },
      })
      if (!existing) {
        return res.status(404).json({ error: "Request not found or already accepted" })
      }
      const order = await prisma.order.update({
        where: { id },
        data: {
          status: OrderStatus.SENT,
          staffId: req.user!.userId,
        },
        include: {
          items: {
            include: {
              menuItem: {
                select: { id: true, station: true, name: true },
              },
            },
          },
          staff: { select: { id: true, name: true } },
        },
      })
      res.json(order)
    } catch (e: any) {
      console.error("accept", e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

/** Optional: reject request */
router.post(
  "/:id/reject",
  requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const id = String(req.params.id)
      const existing = await prisma.order.findFirst({
        where: { id, organizationId, status: OrderStatus.OPEN },
      })
      if (!existing) {
        return res.status(404).json({ error: "Request not found" })
      }
      const order = await prisma.order.update({
        where: { id },
        data: { status: OrderStatus.CANCELLED },
        include: { items: true },
      })
      res.json(order)
    } catch (e: any) {
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

// ——— Open orders for a table (add-more) — MUST be before /:id routes ———
router.get("/open", async (req, res) => {
  try {
    const organizationId = req.user!.organizationId!
    const table = String(req.query.table || "").trim()
    const where: any = {
      organizationId,
      status: {
        in: [OrderStatus.SENT, OrderStatus.PREPARING, OrderStatus.READY, OrderStatus.OPEN],
      },
    }
    if (table) where.tableNumber = table

    const list = await prisma.order.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 20,
      include: {
        items: {
          include: {
            menuItem: {
              select: { id: true, station: true, name: true },
            },
          },
        },
        staff: { select: { id: true, name: true } },
      },
    })
    res.json(list)
  } catch (e) {
    console.error("orders/open", e)
    res.status(500).json({ error: "Failed" })
  }
})

// ——— Add items to existing order (same table / same customer) ———
router.post(
  "/:id/items",
  requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const id = String(req.params.id)
      const data = z
        .object({
          items: z
            .array(
              z.object({
                menuItemId: z.string().optional(),
                name: z.string().min(1),
                quantity: z.number().int().positive(),
                price: z.number().positive(),
                modifiers: z.array(z.string()).optional(),
                notes: z.string().optional(),
              })
            )
            .min(1),
        })
        .parse(req.body)

      const order = await prisma.order.findFirst({
        where: {
          id,
          organizationId,
          status: {
            in: [OrderStatus.SENT, OrderStatus.PREPARING, OrderStatus.READY, OrderStatus.OPEN],
          },
        },
      })
      if (!order) {
        return res.status(404).json({ error: "Order not found or already closed/paid" })
      }

      const addTotal = data.items.reduce((s, i) => s + i.price * i.quantity, 0)
      // If kitchen already marked READY, bounce back to SENT so new food is noticed
      const nextStatus =
        order.status === OrderStatus.READY ? OrderStatus.SENT : order.status

      const updated = await prisma.order.update({
        where: { id },
        data: {
          total: Number(order.total) + addTotal,
          status: nextStatus,
          items: {
            create: data.items.map((item) => ({
              name: item.name,
              quantity: item.quantity,
              price: item.price,
              modifiers: item.modifiers || [],
              notes: item.notes,
              status: ItemStatus.PENDING,
              menuItemId: item.menuItemId,
            })),
          },
        },
        include: {
          items: true,
          staff: { select: { id: true, name: true } },
        },
      })

      await deductStock(organizationId, data.items)

      res.json(updated)
    } catch (e: any) {
      if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
      console.error("add items", e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

router.patch(
  "/:id/status",
  requireRole(Role.OWNER, Role.MANAGER, Role.KITCHEN, Role.STAFF, Role.WAITER),
  async (req, res) => {
    try {
      const id = String(req.params.id)
      const { status } = z
        .object({
          status: z.enum(["OPEN", "SENT", "PREPARING", "READY", "PAID", "CANCELLED"]),
        })
        .parse(req.body)

      const organizationId = req.user!.organizationId!
      const existing = await prisma.order.findFirst({
        where: { id, organizationId },
      })
      if (!existing) return res.status(404).json({ error: "Not found" })

      const order = await prisma.order.update({
        where: { id },
        data: { status: status as OrderStatus },
        include: { items: true },
      })
      res.json(order)
    } catch (err: any) {
      if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
      res.status(500).json({ error: "Failed to update status" })
    }
  }
)

router.patch(
  "/:id/payment",
  requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF),
  async (req, res) => {
    try {
      const id = String(req.params.id)
      const organizationId = req.user!.organizationId!

      const body = z
        .object({
          paymentMethod: z.string().min(1).max(40),
          paymentReceipt: z.string().max(2_500_000).optional().nullable(),
        })
        .parse(req.body)

      const existing = await prisma.order.findFirst({
        where: { id, organizationId },
      })
      if (!existing) return res.status(404).json({ error: "Order not found" })

      const updated = await prisma.order.update({
        where: { id: existing.id },
        data: {
          paymentMethod: body.paymentMethod,
          paymentReceipt: body.paymentReceipt ?? null,
          paidAt: new Date(),
        } as any,
      })

      res.json({
        ok: true,
        id: updated.id,
        paymentMethod: (updated as any).paymentMethod,
        hasReceipt: !!(updated as any).paymentReceipt,
        paidAt: (updated as any).paidAt,
      })
    } catch (err: any) {
      if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
      console.error("payment patch", err)
      res.status(500).json({ error: err.message || "Failed to save payment" })
    }
  }
)

export default router
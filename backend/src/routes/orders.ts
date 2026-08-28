import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { OrderStatus, ItemStatus, Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

const createOrderSchema = z.object({
  tableNumber: z.string().min(1),
  paymentMethod: z.enum(["cash", "telebirr", "cbe", "card"]).optional(),
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

    if (data.paymentMethod) {
      orderData.paymentMethod = data.paymentMethod
    }

    const order = await prisma.order.create({
      data: orderData,
      include: { items: true, staff: { select: { id: true, name: true } } },
    })
    res.status(201).json(order)
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Failed to create order" })
  }
})

router.get("/active", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const orders = await prisma.order.findMany({
    where: {
      organizationId,
      status: { in: [OrderStatus.SENT, OrderStatus.PREPARING, OrderStatus.READY] },
    },
    include: { items: true, staff: { select: { id: true, name: true } } },
    orderBy: { createdAt: "asc" },
  })
  res.json(orders)
})

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

/** Save payment method + receipt photo (data URL) for Reports page */
router.patch(
  "/:id/payment",
  requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF),
  async (req, res) => {
    try {
      const id = String(req.params.id)
      const organizationId = req.user!.organizationId!

      const body = z
        .object({
          paymentMethod: z.enum(["cash", "telebirr", "cbe", "card"]),
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
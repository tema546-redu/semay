import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { OrderStatus, ItemStatus, Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

const createOrderSchema = z.object({
  tableNumber: z.string().min(1),
  paymentMethod: z.enum(["cash", "telebirr", "card"]).optional(),
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

    // Only set if column exists in DB
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
    // Retry without paymentMethod if column missing
    if (String(err.message || "").includes("paymentMethod")) {
      try {
        const data = createOrderSchema.parse(req.body)
        const organizationId = req.user!.organizationId!
        const total = data.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
        const order = await prisma.order.create({
          data: {
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
          },
          include: { items: true },
        })
        return res.status(201).json(order)
      } catch (e2) {
        console.error(e2)
      }
    }
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

router.patch("/:id/status", requireRole(Role.OWNER, Role.MANAGER, Role.KITCHEN, Role.STAFF, Role.WAITER), async (req, res) => {
  try {
    const id = String(req.params.id)
    const { status } = z.object({ status: z.nativeEnum(OrderStatus) }).parse(req.body)
    const organizationId = req.user!.organizationId!

    const order = await prisma.order.findFirst({ where: { id, organizationId } })
    if (!order) return res.status(404).json({ error: "Order not found" })

    const updated = await prisma.order.update({
      where: { id: order.id },
      data: {
        status,
        ...(status === OrderStatus.READY
          ? { items: { updateMany: { where: {}, data: { status: ItemStatus.READY } } } }
          : {}),
      },
      include: { items: true },
    })
    res.json(updated)
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    res.status(500).json({ error: "Failed to update status" })
  }
})

export default router
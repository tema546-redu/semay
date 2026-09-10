import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { OrderStatus } from "@prisma/client"

const router = Router()

router.get("/menu/:orgId", async (req, res) => {
  const organizationId = String(req.params.orgId)
  const org = await prisma.organization.findFirst({
    where: {
      id: organizationId,
      type: { in: ["RESTAURANT", "CAFE"] },
    },
    select: { id: true, name: true, isOpen: true },
  })
  if (!org) return res.status(404).json({ error: "Not found" })

  const items = await prisma.menuItem.findMany({
    where: { organizationId, available: true },
    orderBy: [{ category: "asc" }, { name: "asc" }],
  })
  res.json({ organization: org, items })
})

router.post("/order/:orgId", async (req, res) => {
  try {
    const organizationId = String(req.params.orgId)
    const org = await prisma.organization.findFirst({
      where: {
        id: organizationId,
        type: { in: ["RESTAURANT", "CAFE"] },
      },
    })
    if (!org) return res.status(404).json({ error: "Not found" })

    const data = z
      .object({
        tableNumber: z.string().min(1),
        items: z
          .array(
            z.object({
              menuItemId: z.string().optional(),
              name: z.string(),
              quantity: z.number().int().positive(),
              price: z.number(),
            })
          )
          .min(1),
      })
      .parse(req.body)

    const total = data.items.reduce((s, i) => s + i.price * i.quantity, 0)

    const order = await prisma.order.create({
      data: {
        tableNumber: data.tableNumber,
        status: OrderStatus.SENT,
        total,
        organizationId,
        items: {
          create: data.items.map((i) => ({
            name: i.name,
            quantity: i.quantity,
            price: i.price,
            // menuItemId only if your OrderItem model has it
          })),
        },
      },
    })
    res.status(201).json(order)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: e.message || "Failed" })
  }
})

export default router
import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

// Products (finished goods)
router.get("/products", async (req, res) => {
  const list = await prisma.bakeryProduct.findMany({
    where: { organizationId: req.user!.organizationId! },
    orderBy: { name: "asc" },
  })
  res.json(list)
})

router.post("/products", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const data = z
      .object({
        name: z.string().min(1),
        nameAm: z.string().optional(),
        price: z.number().positive(),
        category: z.string().optional(),
        stockQty: z.number().int().optional(),
        imageUrl: z.string().optional(),
      })
      .parse(req.body)

    const row = await prisma.bakeryProduct.create({
      data: {
        name: data.name,
        nameAm: data.nameAm,
        price: data.price,
        category: data.category || "Bread",
        stockQty: data.stockQty ?? 0,
        imageUrl: data.imageUrl,
        organizationId: req.user!.organizationId!,
      },
    })
    res.status(201).json(row)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: "Failed to create product" })
  }
})

router.patch("/products/:id", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const id = String(req.params.id)
    const data = z
      .object({
        name: z.string().optional(),
        price: z.number().positive().optional(),
        available: z.boolean().optional(),
        category: z.string().optional(),
        imageUrl: z.string().optional(),
      })
      .parse(req.body)

    const existing = await prisma.bakeryProduct.findFirst({
      where: { id, organizationId: req.user!.organizationId! },
    })
    if (!existing) return res.status(404).json({ error: "Not found" })

    const row = await prisma.bakeryProduct.update({ where: { id }, data })
    res.json(row)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: "Failed" })
  }
})

// Produce (bake) → stock up
router.post("/produce", requireRole(Role.OWNER, Role.MANAGER, Role.STAFF), async (req, res) => {
  try {
    const data = z
      .object({
        productId: z.string(),
        quantity: z.number().int().positive(),
        note: z.string().optional(),
      })
      .parse(req.body)

    const organizationId = req.user!.organizationId!
    const product = await prisma.bakeryProduct.findFirst({
      where: { id: data.productId, organizationId },
    })
    if (!product) return res.status(404).json({ error: "Product not found" })

    const [production, updated] = await prisma.$transaction([
      prisma.bakeryProduction.create({
        data: {
          productId: product.id,
          productName: product.name,
          quantity: data.quantity,
          note: data.note,
          organizationId,
          createdById: req.user!.userId,
        },
      }),
      prisma.bakeryProduct.update({
        where: { id: product.id },
        data: { stockQty: product.stockQty + data.quantity },
      }),
    ])

    res.status(201).json({ production, product: updated })
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: "Failed to record production" })
  }
})

// Waste → stock down
router.post("/waste", requireRole(Role.OWNER, Role.MANAGER, Role.STAFF), async (req, res) => {
  try {
    const data = z
      .object({
        productId: z.string(),
        quantity: z.number().int().positive(),
        reason: z.string().optional(),
      })
      .parse(req.body)

    const organizationId = req.user!.organizationId!
    const product = await prisma.bakeryProduct.findFirst({
      where: { id: data.productId, organizationId },
    })
    if (!product) return res.status(404).json({ error: "Product not found" })
    if (product.stockQty < data.quantity) {
      return res.status(400).json({ error: "Not enough stock" })
    }

    const [waste, updated] = await prisma.$transaction([
      prisma.bakeryWaste.create({
        data: {
          productId: product.id,
          productName: product.name,
          quantity: data.quantity,
          reason: data.reason,
          organizationId,
          createdById: req.user!.userId,
        },
      }),
      prisma.bakeryProduct.update({
        where: { id: product.id },
        data: { stockQty: product.stockQty - data.quantity },
      }),
    ])

    res.status(201).json({ waste, product: updated })
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: "Failed to record waste" })
  }
})

// Sell at counter → stock down
router.post("/sell", requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF), async (req, res) => {
  try {
    const data = z
      .object({
        paymentMethod: z.enum(["cash", "telebirr", "cbe", "card"]).optional(),
        items: z
          .array(
            z.object({
              productId: z.string(),
              quantity: z.number().int().positive(),
            })
          )
          .min(1),
      })
      .parse(req.body)

    const organizationId = req.user!.organizationId!
    const products = await prisma.bakeryProduct.findMany({
      where: {
        organizationId,
        id: { in: data.items.map((i) => i.productId) },
      },
    })
    const byId = Object.fromEntries(products.map((p) => [p.id, p]))

    for (const item of data.items) {
      const p = byId[item.productId]
      if (!p) return res.status(400).json({ error: "Product not found" })
      if (p.stockQty < item.quantity) {
        return res.status(400).json({ error: `Not enough stock: ${p.name}` })
      }
    }

    const total = data.items.reduce((sum, i) => {
      const p = byId[i.productId]
      return sum + Number(p.price) * i.quantity
    }, 0)

    const sale = await prisma.$transaction(async (tx) => {
      for (const item of data.items) {
        const p = byId[item.productId]
        await tx.bakeryProduct.update({
          where: { id: p.id },
          data: { stockQty: p.stockQty - item.quantity },
        })
      }

      return tx.bakerySale.create({
        data: {
          tableOrCounter: "Counter",
          total,
          paymentMethod: data.paymentMethod || "cash",
          organizationId,
          staffId: req.user!.userId,
          items: {
            create: data.items.map((i) => {
              const p = byId[i.productId]
              return {
                productId: p.id,
                name: p.name,
                quantity: i.quantity,
                price: p.price,
              }
            }),
          },
        },
        include: { items: true },
      })
    })

    res.status(201).json(sale)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: e.message || "Failed to sell" })
  }
})

router.get("/dashboard", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const todayStart = new Date()
  todayStart.setHours(0, 0, 0, 0)

  const [products, sales, productions, wastes] = await Promise.all([
    prisma.bakeryProduct.findMany({ where: { organizationId } }),
    prisma.bakerySale.findMany({
      where: { organizationId, createdAt: { gte: todayStart } },
      include: { items: true },
    }),
    prisma.bakeryProduction.findMany({
      where: { organizationId, createdAt: { gte: todayStart } },
    }),
    prisma.bakeryWaste.findMany({
      where: { organizationId, createdAt: { gte: todayStart } },
    }),
  ])

  const todaySales = sales.reduce((s, x) => s + Number(x.total), 0)
  const produced = productions.reduce((s, x) => s + x.quantity, 0)
  const wasted = wastes.reduce((s, x) => s + x.quantity, 0)
  const remaining = products.reduce((s, p) => s + p.stockQty, 0)

  res.json({
    todaySales: Math.round(todaySales * 100) / 100,
    todayOrders: sales.length,
    produced,
    wasted,
    remaining,
    products,
    recentSales: sales.slice(0, 10),
  })
})

export default router
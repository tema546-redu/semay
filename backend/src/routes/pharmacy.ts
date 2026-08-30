import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

// ——— Dashboard ———
router.get("/dashboard", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const salesToday = await prisma.pharmacySale.findMany({
    where: { organizationId, createdAt: { gte: today } },
    include: { items: true },
  })
  const todayTotal = salesToday.reduce((s, x) => s + Number(x.total), 0)

  const products = await prisma.pharmacyProduct.findMany({ where: { organizationId } })
  const lowStock = products.filter((p) => p.stockQty <= p.reorderLevel)
  const in30 = new Date()
  in30.setDate(in30.getDate() + 30)
  const expiring = products.filter(
    (p) => p.expiryDate && p.expiryDate <= in30 && p.expiryDate >= new Date()
  )
  const expired = products.filter((p) => p.expiryDate && p.expiryDate < new Date())

  res.json({
    todaySales: Math.round(todayTotal * 100) / 100,
    todayOrders: salesToday.length,
    productCount: products.length,
    lowStock: lowStock.slice(0, 15),
    expiring: expiring.slice(0, 15),
    expired: expired.slice(0, 15),
  })
})

// ——— Products ———
router.get("/products", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const q = String(req.query.q || "").trim()
  const list = await prisma.pharmacyProduct.findMany({
    where: {
      organizationId,
      ...(q
        ? {
            OR: [
              { name: { contains: q, mode: "insensitive" } },
              { nameAm: { contains: q, mode: "insensitive" } },
              { sku: { contains: q, mode: "insensitive" } },
            ],
          }
        : {}),
    },
    orderBy: { name: "asc" },
  })
  res.json(list)
})

router.post(
  "/products",
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    try {
      const data = z
        .object({
          name: z.string().min(1),
          nameAm: z.string().optional(),
          sku: z.string().optional(),
          category: z.string().optional(),
          price: z.number().positive(),
          costPrice: z.number().optional(),
          stockQty: z.number().int().min(0).default(0),
          reorderLevel: z.number().int().min(0).default(10),
          expiryDate: z.string().optional().nullable(),
          unit: z.string().optional(),
        })
        .parse(req.body)

      const row = await prisma.pharmacyProduct.create({
        data: {
          name: data.name,
          nameAm: data.nameAm,
          sku: data.sku,
          category: data.category || "General",
          price: data.price,
          costPrice: data.costPrice,
          stockQty: data.stockQty,
          reorderLevel: data.reorderLevel,
          expiryDate: data.expiryDate ? new Date(data.expiryDate) : null,
          unit: data.unit || "pcs",
          organizationId: req.user!.organizationId!,
        },
      })
      res.status(201).json(row)
    } catch (e: any) {
      if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

router.patch(
  "/products/:id",
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    try {
      const id = String(req.params.id)
      const organizationId = req.user!.organizationId!
      const data = z
        .object({
          name: z.string().min(1).optional(),
          price: z.number().positive().optional(),
          stockQty: z.number().int().optional(),
          reorderLevel: z.number().int().optional(),
          expiryDate: z.string().nullable().optional(),
          available: z.boolean().optional(),
          category: z.string().optional(),
        })
        .parse(req.body)

      const existing = await prisma.pharmacyProduct.findFirst({
        where: { id, organizationId },
      })
      if (!existing) return res.status(404).json({ error: "Not found" })

      const updated = await prisma.pharmacyProduct.update({
        where: { id },
        data: {
          ...data,
          expiryDate:
            data.expiryDate === undefined
              ? undefined
              : data.expiryDate
                ? new Date(data.expiryDate)
                : null,
        },
      })
      res.json(updated)
    } catch (e: any) {
      res.status(400).json({ error: e.message || "Failed" })
    }
  }
)

// ——— Sell (POS) ———
router.post(
  "/sell",
  requireRole(Role.OWNER, Role.MANAGER, Role.STAFF, Role.WAITER),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const body = z
        .object({
          paymentMethod: z.enum(["cash", "telebirr", "cbe", "card"]).optional(),
          note: z.string().optional(),
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

      const sale = await prisma.$transaction(async (tx) => {
        const lines: { productId: string; name: string; quantity: number; price: number }[] =
          []
        let total = 0

        for (const line of body.items) {
          const p = await tx.pharmacyProduct.findFirst({
            where: { id: line.productId, organizationId },
          })
          if (!p || !p.available) throw new Error("Product not available")
          if (p.stockQty < line.quantity) {
            throw new Error(`Not enough stock: ${p.name}`)
          }
          if (p.expiryDate && p.expiryDate < new Date()) {
            throw new Error(`Expired: ${p.name}`)
          }
          const price = Number(p.price)
          total += price * line.quantity
          lines.push({
            productId: p.id,
            name: p.name,
            quantity: line.quantity,
            price,
          })
          await tx.pharmacyProduct.update({
            where: { id: p.id },
            data: { stockQty: p.stockQty - line.quantity },
          })
        }

        return tx.pharmacySale.create({
          data: {
            total,
            paymentMethod: body.paymentMethod || "cash",
            note: body.note,
            organizationId,
            staffId: req.user!.userId,
            items: {
              create: lines.map((l) => ({
                productId: l.productId,
                name: l.name,
                quantity: l.quantity,
                price: l.price,
              })),
            },
          },
          include: { items: true },
        })
      })

      res.status(201).json(sale)
    } catch (e: any) {
      if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
      res.status(400).json({ error: e.message || "Sale failed" })
    }
  }
)

router.get("/sales", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const since = new Date()
  since.setDate(since.getDate() - 7)
  const list = await prisma.pharmacySale.findMany({
    where: { organizationId, createdAt: { gte: since } },
    include: { items: true },
    orderBy: { createdAt: "desc" },
    take: 100,
  })
  res.json(list)
})

export default router
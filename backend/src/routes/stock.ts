import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

router.get("/", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const list = await prisma.stockItem.findMany({
    where: { organizationId },
    orderBy: { name: "asc" },
  })
  res.json(
    list.map((s) => ({
      ...s,
      quantity: Number(s.quantity),
      lowAt: s.lowAt != null ? Number(s.lowAt) : null,
      isLow: s.lowAt != null && Number(s.quantity) <= Number(s.lowAt),
    }))
  )
})

router.post("/", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const data = z
      .object({
        name: z.string().min(1),
        unit: z.enum(["kg", "L", "pcs"]).default("kg"),
        quantity: z.number().min(0),
        lowAt: z.number().min(0).optional().nullable(),
        note: z.string().optional(),
      })
      .parse(req.body)

    const row = await prisma.stockItem.create({
      data: {
        name: data.name.trim(),
        unit: data.unit,
        quantity: data.quantity,
        lowAt: data.lowAt ?? null,
        note: data.note,
        organizationId: req.user!.organizationId!,
      },
    })
    res.status(201).json({
      ...row,
      quantity: Number(row.quantity),
      lowAt: row.lowAt != null ? Number(row.lowAt) : null,
    })
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: e.message || "Failed" })
  }
})

/** Add more stock (purchase) */
router.post("/:id/add", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const id = String(req.params.id)
    const organizationId = req.user!.organizationId!
    const { amount } = z.object({ amount: z.number().positive() }).parse(req.body)

    const item = await prisma.stockItem.findFirst({ where: { id, organizationId } })
    if (!item) return res.status(404).json({ error: "Not found" })

    const updated = await prisma.stockItem.update({
      where: { id },
      data: { quantity: Number(item.quantity) + amount },
    })
    res.json({
      ...updated,
      quantity: Number(updated.quantity),
      lowAt: updated.lowAt != null ? Number(updated.lowAt) : null,
    })
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.patch("/:id", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const id = String(req.params.id)
    const organizationId = req.user!.organizationId!
    const data = z
      .object({
        name: z.string().min(1).optional(),
        unit: z.enum(["kg", "L", "pcs"]).optional(),
        quantity: z.number().min(0).optional(),
        lowAt: z.number().min(0).nullable().optional(),
        note: z.string().nullable().optional(),
      })
      .parse(req.body)

    const item = await prisma.stockItem.findFirst({ where: { id, organizationId } })
    if (!item) return res.status(404).json({ error: "Not found" })

    const updated = await prisma.stockItem.update({ where: { id }, data })
    res.json({
      ...updated,
      quantity: Number(updated.quantity),
      lowAt: updated.lowAt != null ? Number(updated.lowAt) : null,
    })
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.delete("/:id", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const id = String(req.params.id)
  const organizationId = req.user!.organizationId!
  await prisma.stockItem.deleteMany({ where: { id, organizationId } })
  res.json({ ok: true })
})

/** Link menu item → how much stock one sale uses */
router.post("/recipe", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const data = z
      .object({
        menuItemId: z.string(),
        stockItemId: z.string(),
        qtyPerSale: z.number().positive(),
      })
      .parse(req.body)

    const organizationId = req.user!.organizationId!
    const menu = await prisma.menuItem.findFirst({
      where: { id: data.menuItemId, organizationId },
    })
    const stock = await prisma.stockItem.findFirst({
      where: { id: data.stockItemId, organizationId },
    })
    if (!menu || !stock) return res.status(404).json({ error: "Item not found" })

    const line = await prisma.recipeLine.upsert({
      where: {
        menuItemId_stockItemId: {
          menuItemId: data.menuItemId,
          stockItemId: data.stockItemId,
        },
      },
      create: {
        menuItemId: data.menuItemId,
        stockItemId: data.stockItemId,
        qtyPerSale: data.qtyPerSale,
      },
      update: { qtyPerSale: data.qtyPerSale },
    })
    res.json(line)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.get("/recipe/:menuItemId", async (req, res) => {
  const menuItemId = String(req.params.menuItemId)
  const organizationId = req.user!.organizationId!
  const menu = await prisma.menuItem.findFirst({ where: { id: menuItemId, organizationId } })
  if (!menu) return res.status(404).json({ error: "Not found" })

  const lines = await prisma.recipeLine.findMany({
    where: { menuItemId },
    include: { stockItem: true },
  })
  res.json(
    lines.map((l) => ({
      id: l.id,
      stockItemId: l.stockItemId,
      name: l.stockItem.name,
      unit: l.stockItem.unit,
      qtyPerSale: Number(l.qtyPerSale),
    }))
  )
})

export default router
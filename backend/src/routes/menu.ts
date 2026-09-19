import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

function normalizeCategory(raw?: string | null): string {
  const t = (raw || "").trim().replace(/\s+/g, " ")
  if (!t) return "Food"
  const lower = t.toLowerCase()
  const presets: Record<string, string> = {
    food: "Food",
    drinks: "Drinks",
    drink: "Drinks",
    breakfast: "Breakfast",
    appetizers: "Appetizers",
    appetizer: "Appetizers",
    "main course": "Main course",
    main: "Main course",
    traditional: "Traditional",
    "fast food": "Fast food",
    desserts: "Desserts",
    dessert: "Desserts",
    "coffee & tea": "Coffee & tea",
    coffee: "Coffee & tea",
    tea: "Coffee & tea",
    "soft drinks": "Soft drinks",
    juice: "Juice",
    alcohol: "Alcohol",
    specials: "Specials",
  }
  if (presets[lower]) return presets[lower]
  return t
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(" ")
}

router.get("/", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const availableOnly =
    req.query.available === "true" || req.query.available === "1"
  const branchId =
    (req.query.branchId as string) ||
    (req.user as any)?.branchId ||
    undefined

  const items = await prisma.menuItem.findMany({
    where: {
      organizationId,
      ...(availableOnly ? { available: true } : {}),
      ...(branchId ? { branchId } : {}),
    },
    orderBy: [{ category: "asc" }, { name: "asc" }],
  })
  res.json(items)
})

router.post("/", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const data = z
      .object({
        name: z.string().min(1),
        nameAm: z.string().optional(),
        category: z.string().min(1).optional(),
        price: z.number().positive(),
        description: z.string().optional(),
        imageUrl: z.string().optional().nullable(),
        available: z.boolean().optional().default(true),
        branchId: z.string().optional().nullable(),
      })
      .parse(req.body)

    const organizationId = req.user!.organizationId!
    let branchId = data.branchId || (req.user as any)?.branchId || null

    if (!branchId) {
      let main = await prisma.branch.findFirst({
        where: { organizationId },
        orderBy: { createdAt: "asc" },
      })
      if (!main) {
        main = await prisma.branch.create({
          data: { name: "Main", organizationId },
        })
      }
      branchId = main.id
    }

    const category = normalizeCategory(data.category)

    const item = await prisma.menuItem.create({
      data: {
        name: data.name.trim(),
        nameAm: data.nameAm?.trim() || null,
        category,
        price: data.price,
        description: data.description,
        imageUrl: data.imageUrl || null,
        available: data.available ?? true,
        organizationId,
        branchId,
      },
    })
    res.status(201).json(item)
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Failed to create item" })
  }
})

router.patch("/:id", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const id = String(req.params.id)
    const organizationId = req.user!.organizationId!
    const data = z
      .object({
        name: z.string().min(1).optional(),
        nameAm: z.string().optional().nullable(),
        category: z.string().min(1).optional(),
        price: z.number().positive().optional(),
        description: z.string().optional().nullable(),
        imageUrl: z.string().nullable().optional(),
        available: z.boolean().optional(),
        branchId: z.string().optional().nullable(),
      })
      .parse(req.body)

    const item = await prisma.menuItem.findFirst({ where: { id, organizationId } })
    if (!item) return res.status(404).json({ error: "Item not found" })

    const updated = await prisma.menuItem.update({
      where: { id: item.id },
      data: {
        ...(data.name != null ? { name: data.name.trim() } : {}),
        ...(data.nameAm !== undefined
          ? { nameAm: data.nameAm ? data.nameAm.trim() : null }
          : {}),
        ...(data.category != null
          ? { category: normalizeCategory(data.category) }
          : {}),
        ...(data.price != null ? { price: data.price } : {}),
        ...(data.description !== undefined ? { description: data.description } : {}),
        ...(data.imageUrl !== undefined ? { imageUrl: data.imageUrl } : {}),
        ...(data.available != null ? { available: data.available } : {}),
        ...(data.branchId !== undefined ? { branchId: data.branchId } : {}),
      },
    })
    res.json(updated)
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Failed to update" })
  }
})

router.patch(
  "/:id/availability",
  requireRole(Role.OWNER, Role.MANAGER, Role.STAFF),
  async (req, res) => {
    try {
      const { available } = z.object({ available: z.boolean() }).parse(req.body)
      const organizationId = req.user!.organizationId!
      const id = String(req.params.id)
      const item = await prisma.menuItem.findFirst({ where: { id, organizationId } })
      if (!item) return res.status(404).json({ error: "Item not found" })
      const updated = await prisma.menuItem.update({
        where: { id: item.id },
        data: { available },
      })
      res.json(updated)
    } catch {
      res.status(500).json({ error: "Failed to update" })
    }
  }
)

router.patch(
  "/:id/stock",
  requireRole(Role.OWNER, Role.MANAGER, Role.STAFF),
  async (req, res) => {
    try {
      const { stockQty } = z
        .object({ stockQty: z.number().int().min(0).nullable() })
        .parse(req.body)
      const organizationId = req.user!.organizationId!
      const id = String(req.params.id)
      const item = await prisma.menuItem.findFirst({ where: { id, organizationId } })
      if (!item) return res.status(404).json({ error: "Not found" })
      const updated = await prisma.menuItem.update({
        where: { id: item.id },
        data: {
          stockQty,
          available: stockQty === null ? item.available : stockQty > 0,
        },
      })
      res.json(updated)
    } catch {
      res.status(500).json({ error: "Failed" })
    }
  }
)

router.delete("/:id", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const id = String(req.params.id)
    const organizationId = req.user!.organizationId!
    const item = await prisma.menuItem.findFirst({ where: { id, organizationId } })
    if (!item) return res.status(404).json({ error: "Not found" })
    await prisma.menuItem.delete({ where: { id: item.id } })
    res.json({ ok: true })
  } catch (err: any) {
    console.error(err)
    res.status(500).json({ error: "Failed to delete" })
  }
})

export default router
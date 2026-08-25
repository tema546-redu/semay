import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

router.get("/", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const availableOnly = req.query.available === "true"
  const items = await prisma.menuItem.findMany({
    where: { organizationId, ...(availableOnly ? { available: true } : {}) },
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
        category: z.string().min(1),
        price: z.number().positive(),
        description: z.string().optional(),
        imageUrl: z.string().optional(),
        available: z.boolean().default(true),
      })
      .parse(req.body)

    const item = await prisma.menuItem.create({
      data: { ...data, organizationId: req.user!.organizationId! },
    })
    res.status(201).json(item)
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Failed to create item" })
  }
})

router.patch("/:id/availability", requireRole(Role.OWNER, Role.MANAGER, Role.STAFF), async (req, res) => {
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
  } catch (err) {
    res.status(500).json({ error: "Failed to update" })
  }
})

router.patch("/:id/stock", requireRole(Role.OWNER, Role.MANAGER, Role.STAFF), async (req, res) => {
  try {
    const { stockQty } = z.object({ stockQty: z.number().int().min(0).nullable() }).parse(req.body)
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
  } catch (err) {
    res.status(500).json({ error: "Failed" })
  }
})

export default router
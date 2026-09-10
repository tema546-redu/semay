import { Router, Request, Response } from "express"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization } from "../middleware/auth.js"

const router = Router()

function getOrgId(req: Request): string {
  return (req as any).user?.organizationId
}

function getId(param: string | string[]): string {
  return Array.isArray(param) ? param[0] : param
}

// ===================== DASHBOARD =====================
router.get("/dashboard", authenticate, requireOrganization, async (req: Request, res: Response) => {
  try {
    const orgId = getOrgId(req)

    const materials = await prisma.garmentMaterial.findMany({
      where: { organizationId: orgId, minLevel: { not: null } },
    })
    const lowStockCount = materials.filter(
      (m) => Number(m.currentStock) <= Number(m.minLevel || 0)
    ).length

    const [totalOrders, inProduction, delayed, completedToday] = await Promise.all([
      prisma.garmentProductionOrder.count({ where: { organizationId: orgId } }),
      prisma.garmentProductionOrder.count({
        where: {
          organizationId: orgId,
          stage: { notIn: ["COMPLETED", "CANCELLED"] },
        },
      }),
      prisma.garmentProductionOrder.count({
        where: { organizationId: orgId, status: "DELAYED" },
      }),
      prisma.garmentProductionOrder.count({
        where: {
          organizationId: orgId,
          stage: "COMPLETED",
          updatedAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
        },
      }),
    ])

    const orders = await prisma.garmentProductionOrder.findMany({
      where: { organizationId: orgId, stage: { not: "CANCELLED" } },
      select: { plannedQty: true, actualQty: true },
    })

    const planned = orders.reduce((s, o) => s + o.plannedQty, 0)
    const actual = orders.reduce((s, o) => s + o.actualQty, 0)

    res.json({
      totalOrders,
      inProduction,
      delayed,
      lowStock: lowStockCount,
      completedToday,
      productionProgress: {
        planned,
        actual,
        remaining: Math.max(0, planned - actual),
        percent: planned > 0 ? Math.round((actual / planned) * 100) : 0,
      },
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to load dashboard" })
  }
})

// ===================== STYLES =====================
router.get("/styles", authenticate, requireOrganization, async (req: Request, res: Response) => {
  const styles = await prisma.garmentStyle.findMany({
    where: { organizationId: getOrgId(req) },
    include: { variants: true, bomItems: { include: { material: true } } },
    orderBy: { createdAt: "desc" },
  })
  res.json(styles)
})

router.post("/styles", authenticate, requireOrganization, async (req: Request, res: Response) => {
  const { name, nameAm, sku, category, description, imageUrl, variants } = req.body

  const style = await prisma.garmentStyle.create({
    data: {
      name,
      nameAm,
      sku,
      category,
      description,
      imageUrl,
      organizationId: getOrgId(req),
      variants: variants?.length
        ? {
            create: variants.map((v: any) => ({
              size: v.size,
              color: v.color,
              colorAm: v.colorAm,
              sku: v.sku,
              price: v.price || 0,
            })),
          }
        : undefined,
    },
    include: { variants: true },
  })
  res.json(style)
})

// ===================== MATERIALS =====================
router.get("/materials", authenticate, requireOrganization, async (req: Request, res: Response) => {
  const materials = await prisma.garmentMaterial.findMany({
    where: { organizationId: getOrgId(req) },
    orderBy: { name: "asc" },
  })
  res.json(materials)
})

router.post("/materials", authenticate, requireOrganization, async (req: Request, res: Response) => {
  const { name, nameAm, category, unit, currentStock, minLevel, costPerUnit, note } = req.body

  const material = await prisma.garmentMaterial.create({
    data: {
      name,
      nameAm,
      category,
      unit,
      currentStock: currentStock || 0,
      minLevel,
      costPerUnit,
      note,
      organizationId: getOrgId(req),
    },
  })
  res.json(material)
})

router.patch("/materials/:id", authenticate, requireOrganization, async (req: Request, res: Response) => {
  const id = getId(req.params.id)
  const material = await prisma.garmentMaterial.update({
    where: { id },
    data: req.body,
  })
  res.json(material)
})

// ===================== BOM =====================
router.get("/styles/:id/bom", authenticate, requireOrganization, async (req: Request, res: Response) => {
  const styleId = getId(req.params.id)
  const items = await prisma.garmentBOMItem.findMany({
    where: { styleId },
    include: { material: true },
  })
  res.json(items)
})

router.post("/styles/:id/bom", authenticate, requireOrganization, async (req: Request, res: Response) => {
  const styleId = getId(req.params.id)
  const { materialId, qtyNeeded } = req.body

  const item = await prisma.garmentBOMItem.create({
    data: {
      styleId,
      materialId,
      qtyNeeded,
    },
    include: { material: true },
  })
  res.json(item)
})

// ===================== PRODUCTION ORDERS =====================
router.get("/orders", authenticate, requireOrganization, async (req: Request, res: Response) => {
  const orders = await prisma.garmentProductionOrder.findMany({
    where: { organizationId: getOrgId(req) },
    include: { style: true, stageLogs: true },
    orderBy: { createdAt: "desc" },
  })
  res.json(orders)
})

router.post("/orders", authenticate, requireOrganization, async (req: Request, res: Response) => {
  const { styleId, customerName, dueDate, plannedQty, notes } = req.body

  const count = await prisma.garmentProductionOrder.count({
    where: { organizationId: getOrgId(req) },
  })
  const orderNumber = `GO-${String(count + 1).padStart(4, "0")}`

  const order = await prisma.garmentProductionOrder.create({
    data: {
      orderNumber,
      styleId,
      customerName,
      dueDate: dueDate ? new Date(dueDate) : null,
      plannedQty,
      notes,
      organizationId: getOrgId(req),
    },
    include: { style: true },
  })
  res.json(order)
})

router.patch("/orders/:id/stage", authenticate, requireOrganization, async (req: Request, res: Response) => {
  const id = getId(req.params.id)
  const { stage, quantity, note } = req.body
  const userId = (req as any).user?.id || (req as any).user?.userId

  const order = await prisma.garmentProductionOrder.update({
    where: { id },
    data: {
      stage,
      ...(quantity !== undefined ? { actualQty: quantity } : {}),
      stageLogs: {
        create: {
          stage,
          quantity: quantity || 0,
          note,
          createdById: userId,
        },
      },
    },
    include: { style: true, stageLogs: true },
  })
  res.json(order)
})

// ===================== MATERIAL CHECK =====================
router.get("/orders/:id/material-check", authenticate, requireOrganization, async (req: Request, res: Response) => {
  const id = getId(req.params.id)

  const order = await prisma.garmentProductionOrder.findUnique({
    where: { id },
    include: {
      style: {
        include: {
          bomItems: {
            include: { material: true },
          },
        },
      },
    },
  })

  if (!order || !order.style) {
    return res.status(404).json({ error: "Order not found" })
  }

  const checks = order.style.bomItems.map((item) => {
    const needed = Number(item.qtyNeeded) * order.plannedQty
    const available = Number(item.material.currentStock)
    const minLevel = Number(item.material.minLevel || 0)
    const shortage = Math.max(0, needed - available)

    let status = "OK"
    if (shortage > 0) status = "SHORTAGE"
    else if (available <= minLevel) status = "LOW"

    return {
      materialId: item.material.id,
      name: item.material.name,
      unit: item.material.unit,
      needed,
      available,
      shortage,
      status,
    }
  })

  const hasShortage = checks.some((c) => c.status === "SHORTAGE")

  res.json({
    canStart: !hasShortage,
    checks,
    message: hasShortage
      ? "Order cannot safely enter production yet."
      : "All materials are enough. You can start production.",
  })
})

export default router
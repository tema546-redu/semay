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

function isOwnerOrManager(user: any): boolean {
  const role = String(user?.role || "").toUpperCase()
  return role === "OWNER" || role === "MANAGER"
}

// ===================== DASHBOARD =====================
router.get(
  "/dashboard",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)

      const materials = await prisma.garmentMaterial.findMany({
        where: { organizationId: orgId, minLevel: { not: null } },
      })
      const lowStockCount = materials.filter(
        (m) => Number(m.currentStock) <= Number(m.minLevel || 0)
      ).length

      const [totalOrders, inProduction, delayed, completedToday] =
        await Promise.all([
          prisma.garmentProductionOrder.count({
            where: { organizationId: orgId },
          }),
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
              updatedAt: {
                gte: new Date(new Date().setHours(0, 0, 0, 0)),
              },
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
  }
)

// ===================== STYLES =====================
router.get(
  "/styles",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    const styles = await prisma.garmentStyle.findMany({
      where: { organizationId: getOrgId(req) },
      include: {
        variants: true,
        bomItems: { include: { material: true } },
      },
      orderBy: { createdAt: "desc" },
    })
    res.json(styles)
  }
)

router.post(
  "/styles",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    const { name, nameAm, sku, category, description, imageUrl, variants } =
      req.body

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
  }
)

// ===================== MATERIALS =====================
router.get(
  "/materials",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    const materials = await prisma.garmentMaterial.findMany({
      where: { organizationId: getOrgId(req) },
      orderBy: { name: "asc" },
    })
    res.json(materials)
  }
)

router.post(
  "/materials",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    const {
      name,
      nameAm,
      category,
      unit,
      currentStock,
      minLevel,
      costPerUnit,
      note,
    } = req.body

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
  }
)

router.patch(
  "/materials/:id",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    const id = getId(req.params.id)
    const material = await prisma.garmentMaterial.update({
      where: { id },
      data: req.body,
    })
    res.json(material)
  }
)

// ===================== BOM =====================
router.get(
  "/styles/:id/bom",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    const styleId = getId(req.params.id)
    const items = await prisma.garmentBOMItem.findMany({
      where: { styleId },
      include: { material: true },
    })
    res.json(items)
  }
)

router.post(
  "/styles/:id/bom",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
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
  }
)

router.delete(
  "/styles/:styleId/bom/:itemId",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)
      const styleId = getId(req.params.styleId)
      const itemId = getId(req.params.itemId)
      const style = await prisma.garmentStyle.findFirst({
        where: { id: styleId, organizationId: orgId },
      })
      if (!style) return res.status(404).json({ error: "Not found" })
      await prisma.garmentBOMItem.deleteMany({
        where: { id: itemId, styleId },
      })
      res.json({ ok: true })
    } catch (err: any) {
      console.error(err)
      res.status(500).json({ error: err?.message || "Delete failed" })
    }
  }
)

// ===================== PRODUCTION ORDERS =====================
router.get(
  "/orders",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    const orders = await prisma.garmentProductionOrder.findMany({
      where: { organizationId: getOrgId(req) },
      include: { style: true, stageLogs: true },
      orderBy: { createdAt: "desc" },
    })
    res.json(orders)
  }
)

router.post(
  "/orders",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
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
  }
)

router.patch(
  "/orders/:id/stage",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
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
  }
)

// ===================== MATERIAL CHECK =====================
router.get(
  "/orders/:id/material-check",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
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
  }
)

// ===================== DEFECTS (Quality) =====================
router.get(
  "/defects",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    const orgId = getOrgId(req)
    const defects = await prisma.garmentDefect.findMany({
      where: { organizationId: orgId },
      include: {
        order: {
          include: { style: true },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 100,
    })
    res.json(defects)
  }
)

router.get(
  "/orders/:id/defects",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    const id = getId(req.params.id)
    const defects = await prisma.garmentDefect.findMany({
      where: { orderId: id },
      orderBy: { createdAt: "desc" },
    })
    res.json(defects)
  }
)

router.post(
  "/orders/:id/defects",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    const id = getId(req.params.id)
    const { defectType, quantity, stage, note, estimatedCost } = req.body
    const userId = (req as any).user?.id || (req as any).user?.userId

    const order = await prisma.garmentProductionOrder.findFirst({
      where: { id, organizationId: getOrgId(req) },
    })
    if (!order) return res.status(404).json({ error: "Order not found" })

    const defect = await prisma.garmentDefect.create({
      data: {
        orderId: id,
        defectType,
        quantity: Number(quantity),
        stage: stage || null,
        note: note || null,
        estimatedCost: estimatedCost ? Number(estimatedCost) : null,
        createdById: userId,
        organizationId: getOrgId(req),
      },
    })
    res.json(defect)
  }
)

router.get(
  "/quality/summary",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    const orgId = getOrgId(req)

    const defects = await prisma.garmentDefect.findMany({
      where: { organizationId: orgId },
      select: {
        defectType: true,
        quantity: true,
        estimatedCost: true,
      },
    })

    const totalDefects = defects.reduce((s, d) => s + d.quantity, 0)
    const totalCost = defects.reduce(
      (s, d) => s + Number(d.estimatedCost || 0),
      0
    )

    const byType: Record<string, number> = {}
    for (const d of defects) {
      byType[d.defectType] = (byType[d.defectType] || 0) + d.quantity
    }

    res.json({
      totalDefects,
      totalCost,
      byType,
    })
  }
)

// ===================== DAILY REPORTS =====================
router.get(
  "/daily-reports",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    const orgId = getOrgId(req)
    const date = req.query.date as string | undefined
    const range = (req.query.range as string) || "today"

    const where: any = { organizationId: orgId }

    if (date) {
      const start = new Date(date)
      start.setHours(0, 0, 0, 0)
      const end = new Date(date)
      end.setHours(23, 59, 59, 999)
      where.reportDate = { gte: start, lte: end }
    } else {
      const now = new Date()
      let start = new Date()
      start.setHours(0, 0, 0, 0)

      if (range === "7d" || range === "week") {
        start.setDate(start.getDate() - 6)
      } else if (range === "month") {
        start = new Date(now.getFullYear(), now.getMonth(), 1)
      } else if (range === "year") {
        start = new Date(now.getFullYear(), 0, 1)
      }

      where.reportDate = { gte: start, lte: now }
    }

    const reports = await prisma.garmentDailyReport.findMany({
      where,
      include: {
        order: { include: { style: true } },
      },
      orderBy: { createdAt: "desc" },
      take: 300,
    })
    res.json(reports)
  }
)

router.post(
  "/daily-reports",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)
      const user = (req as any).user
      const { orderId, stage, quantity, note, reportDate, updateOrderStage } =
        req.body

      if (!quantity || Number(quantity) <= 0) {
        return res.status(400).json({ error: "Quantity is required" })
      }

      const cleanOrderId =
        orderId && String(orderId).trim() ? String(orderId) : null
      const cleanStage =
        stage && String(stage).trim() ? String(stage) : null

      if (cleanOrderId) {
        const order = await prisma.garmentProductionOrder.findFirst({
          where: { id: cleanOrderId, organizationId: orgId },
        })
        if (!order) {
          return res.status(404).json({ error: "Order not found" })
        }
      }

      const report = await prisma.garmentDailyReport.create({
        data: {
          organizationId: orgId,
          userId: user?.id || user?.userId || null,
          userName: user?.name || user?.email || "Staff",
          orderId: cleanOrderId,
          stage: cleanStage as any,
          quantity: Number(quantity),
          note: note || null,
          reportDate: reportDate ? new Date(reportDate) : new Date(),
        },
        include: {
          order: { include: { style: true } },
        },
      })

      if (cleanOrderId) {
        const allReports = await prisma.garmentDailyReport.findMany({
          where: { orderId: cleanOrderId },
          select: { quantity: true },
        })
        const totalFinished = allReports.reduce((s, r) => s + r.quantity, 0)

        const updateData: any = {
          actualQty: totalFinished,
        }

        if (updateOrderStage && cleanStage) {
          updateData.stage = cleanStage
          updateData.stageLogs = {
            create: {
              stage: cleanStage,
              quantity: Number(quantity),
              note: note || "From daily report",
              createdById: user?.id || user?.userId || null,
            },
          }
        }

        const order = await prisma.garmentProductionOrder.findUnique({
          where: { id: cleanOrderId },
        })
        if (order && totalFinished >= order.plannedQty) {
          updateData.stage = "COMPLETED"
          updateData.status = "COMPLETED"
        }

        await prisma.garmentProductionOrder
          .update({
            where: { id: cleanOrderId },
            data: updateData,
          })
          .catch((e) => console.error("Order update failed", e))
      }

      res.json(report)
    } catch (err: any) {
      console.error("Daily report error:", err)
      res.status(500).json({ error: err?.message || "Failed to save report" })
    }
  }
)

// ===================== FULL REPORTS SUMMARY =====================
router.get(
  "/reports",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)
      const date = req.query.date as string | undefined
      const range = (req.query.range as string) || "today"

      let start = new Date()
      start.setHours(0, 0, 0, 0)
      let end = new Date()

      if (date) {
        start = new Date(date)
        start.setHours(0, 0, 0, 0)
        end = new Date(date)
        end.setHours(23, 59, 59, 999)
      } else if (range === "7d" || range === "week") {
        start.setDate(start.getDate() - 6)
      } else if (range === "month") {
        start = new Date(end.getFullYear(), end.getMonth(), 1)
      } else if (range === "year") {
        start = new Date(end.getFullYear(), 0, 1)
      }

      const [reports, defects, delayedCount, activeCount] = await Promise.all([
        prisma.garmentDailyReport.findMany({
          where: {
            organizationId: orgId,
            reportDate: { gte: start, lte: end },
          },
          include: { order: { include: { style: true } } },
          orderBy: { createdAt: "desc" },
        }),
        prisma.garmentDefect.findMany({
          where: {
            organizationId: orgId,
            createdAt: { gte: start, lte: end },
          },
        }),
        prisma.garmentProductionOrder.count({
          where: { organizationId: orgId, status: "DELAYED" },
        }),
        prisma.garmentProductionOrder.count({
          where: {
            organizationId: orgId,
            stage: { notIn: ["COMPLETED", "CANCELLED"] },
          },
        }),
      ])

      const totalPieces = reports.reduce((s, r) => s + r.quantity, 0)
      const reworkCost = defects.reduce(
        (s, d) => s + Number(d.estimatedCost || 0),
        0
      )
      const defectQty = defects.reduce((s, d) => s + d.quantity, 0)

      const byStage: Record<string, number> = {}
      for (const r of reports) {
        const key = r.stage || "OTHER"
        byStage[key] = (byStage[key] || 0) + r.quantity
      }

      const byStaffMap: Record<string, { name: string; qty: number }> = {}
      for (const r of reports) {
        const key = r.userId || r.userName || "unknown"
        if (!byStaffMap[key]) {
          byStaffMap[key] = { name: r.userName || "Staff", qty: 0 }
        }
        byStaffMap[key].qty += r.quantity
      }
      const byStaff = Object.values(byStaffMap).sort((a, b) => b.qty - a.qty)

      const byDefectType: Record<string, number> = {}
      for (const d of defects) {
        byDefectType[d.defectType] =
          (byDefectType[d.defectType] || 0) + d.quantity
      }

      res.json({
        totalPieces,
        reportCount: reports.length,
        defectQty,
        reworkCost: Math.round(reworkCost),
        delayedCount,
        activeCount,
        byStage,
        byStaff,
        byDefectType,
        reports: reports.slice(0, 100),
        defects: defects.slice(0, 50),
      })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Failed to load reports" })
    }
  }
)

// ===================== MONEY LEAKS =====================
router.get(
  "/money-leaks",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)

      const materials = await prisma.garmentMaterial.findMany({
        where: { organizationId: orgId },
      })

      let unusedStockValue = 0
      let lowStockCount = 0
      let lowStockValue = 0

      for (const m of materials) {
        const stock = Number(m.currentStock || 0)
        const min = Number(m.minLevel || 0)
        const cost = Number(m.costPerUnit || 0)
        const value = stock * cost

        if (min > 0 && stock <= min) {
          lowStockCount++
          lowStockValue += value
        } else if (stock > 0) {
          const excess = min > 0 ? Math.max(0, stock - min) : stock
          unusedStockValue += excess * cost
        }
      }

      const defects = await prisma.garmentDefect.findMany({
        where: { organizationId: orgId },
        select: { estimatedCost: true, quantity: true },
      })
      const reworkCost = defects.reduce(
        (s, d) => s + Number(d.estimatedCost || 0),
        0
      )
      const totalDefectQty = defects.reduce((s, d) => s + d.quantity, 0)

      const delayedOrders = await prisma.garmentProductionOrder.findMany({
        where: { organizationId: orgId, status: "DELAYED" },
        include: { style: true },
      })
      const delayedCount = delayedOrders.length
      const delayedRisk = delayedCount * 500

      const activeOrders = await prisma.garmentProductionOrder.findMany({
        where: {
          organizationId: orgId,
          stage: { notIn: ["COMPLETED", "CANCELLED"] },
        },
      })

      const totalLeak = unusedStockValue + reworkCost + delayedRisk

      res.json({
        unusedStockValue: Math.round(unusedStockValue),
        lowStockCount,
        lowStockValue: Math.round(lowStockValue),
        reworkCost: Math.round(reworkCost),
        totalDefectQty,
        delayedCount,
        delayedRisk: Math.round(delayedRisk),
        activeOrders: activeOrders.length,
        totalLeak: Math.round(totalLeak),
        message:
          totalLeak > 0
            ? "These are estimated operational leaks this period."
            : "No major leaks detected right now.",
      })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Failed to load money leaks" })
    }
  }
)

// ===================== WORKERS =====================
router.get(
  "/workers",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    const orgId = getOrgId(req)
    const list = await prisma.garmentWorker.findMany({
      where: { organizationId: orgId, active: true },
      select: {
        id: true,
        name: true,
        phone: true,
        active: true,
        annualLeaveDays: true,
        usedLeaveDays: true,
      },
      orderBy: { name: "asc" },
    })
    res.json(list)
  }
)

router.post(
  "/workers",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)
      const user = (req as any).user
      if (!isOwnerOrManager(user)) {
        return res.status(403).json({ error: "Only owner or manager" })
      }
      const { name, phone, annualLeaveDays, usedLeaveDays } = req.body
      if (!name?.trim()) {
        return res.status(400).json({ error: "Name required" })
      }
      const row = await prisma.garmentWorker.create({
        data: {
          organizationId: orgId,
          name: name.trim(),
          phone: phone?.trim() || null,
          annualLeaveDays:
            annualLeaveDays != null ? Number(annualLeaveDays) : 14,
          usedLeaveDays: usedLeaveDays != null ? Number(usedLeaveDays) : 0,
        } as any,
      })
      res.json(row)
    } catch (err: any) {
      console.error(err)
      res.status(500).json({ error: err?.message || "Failed to add worker" })
    }
  }
)

router.patch(
  "/workers/:id",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)
      const user = (req as any).user
      if (!isOwnerOrManager(user)) {
        return res.status(403).json({ error: "Only owner or manager" })
      }

      const id = getId(req.params.id)
      const { annualLeaveDays, usedLeaveDays, name, phone } = req.body

      const w = await prisma.garmentWorker.findFirst({
        where: { id, organizationId: orgId },
      })
      if (!w) return res.status(404).json({ error: "Not found" })

      const updated = await prisma.garmentWorker.update({
        where: { id },
        data: {
          ...(name != null ? { name: String(name) } : {}),
          ...(phone != null ? { phone: String(phone) } : {}),
          ...(annualLeaveDays != null
            ? { annualLeaveDays: Number(annualLeaveDays) }
            : {}),
          ...(usedLeaveDays != null
            ? { usedLeaveDays: Number(usedLeaveDays) }
            : {}),
        } as any,
      })
      res.json(updated)
    } catch (err: any) {
      console.error(err)
      res.status(500).json({ error: err?.message || "Update failed" })
    }
  }
)

router.delete(
  "/workers/:id",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)
      const id = getId(req.params.id)
      await prisma.garmentWorker.updateMany({
        where: { id, organizationId: orgId },
        data: { active: false },
      })
      res.json({ ok: true })
    } catch (err: any) {
      console.error(err)
      res.status(500).json({ error: err?.message || "Failed to remove worker" })
    }
  }
)

// ===================== ATTENDANCE =====================
router.get(
  "/attendance/staff",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)
      const users = await prisma.user.findMany({
        where: { organizationId: orgId },
        select: { id: true, name: true, email: true, role: true },
        orderBy: { name: "asc" },
      })
      res.json(users)
    } catch (err: any) {
      console.error(err)
      res.status(500).json({ error: err?.message || "Failed to load staff" })
    }
  }
)

router.get(
  "/attendance",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)
      const date =
        (req.query.date as string) || new Date().toISOString().slice(0, 10)
      const dayStart = new Date(date + "T00:00:00.000Z")
      const dayEnd = new Date(date + "T23:59:59.999Z")

      const rows = await prisma.garmentAttendance.findMany({
        where: {
          organizationId: orgId,
          workDate: { gte: dayStart, lte: dayEnd },
        },
      })
      res.json(rows)
    } catch (err: any) {
      console.error(err)
      res
        .status(500)
        .json({ error: err?.message || "Failed to load attendance" })
    }
  }
)

router.post(
  "/attendance",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)
      const user = (req as any).user
      if (!isOwnerOrManager(user)) {
        return res
          .status(403)
          .json({ error: "Only owner or manager can take attendance" })
      }

      const { userId, workerId, workDate, status, reason, note } = req.body

      if (!status) {
        return res.status(400).json({ error: "status required" })
      }
      if (!userId && !workerId) {
        return res.status(400).json({ error: "userId or workerId required" })
      }
      if (
        status !== "PRESENT" &&
        status !== "UNMARKED" &&
        !String(reason || "").trim()
      ) {
        return res.status(400).json({
          error: "Reason required for late, absent, or early leave",
        })
      }
      if (status === "UNMARKED") {
        return res.status(400).json({ error: "Cannot save UNMARKED" })
      }

      const day = new Date(
        (workDate || new Date().toISOString().slice(0, 10)) + "T12:00:00.000Z"
      )
      const markedById = user?.id || user?.userId || null

      if (workerId) {
        await prisma.garmentAttendance.deleteMany({
          where: {
            organizationId: orgId,
            workDate: day,
            workerId: String(workerId),
          },
        })
      } else if (userId) {
        await prisma.garmentAttendance.deleteMany({
          where: {
            organizationId: orgId,
            workDate: day,
            userId: String(userId),
          },
        })
      }

      const row = await prisma.garmentAttendance.create({
        data: {
          organizationId: orgId,
          workerId: workerId ? String(workerId) : null,
          userId: userId ? String(userId) : null,
          workDate: day,
          status: status as any,
          reason: reason || null,
          note: note || null,
          markedById,
          source: "MANUAL",
        },
      })

      res.json(row)
    } catch (err: any) {
      console.error(err)
      res
        .status(500)
        .json({ error: err?.message || "Failed to save attendance" })
    }
  }
)

// ONE bulk handler only — with annual leave deduct
router.post(
  "/attendance/bulk",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)
      const user = (req as any).user
      if (!isOwnerOrManager(user)) {
        return res
          .status(403)
          .json({ error: "Only owner or manager can take attendance" })
      }

      const { workDate, marks } = req.body as {
        workDate?: string
        marks?: {
          workerId?: string
          userId?: string
          status: string
          reason?: string
          note?: string
          useAnnualLeave?: boolean
        }[]
      }

      if (!Array.isArray(marks)) {
        return res.status(400).json({ error: "marks array required" })
      }

      const day = new Date(
        (workDate || new Date().toISOString().slice(0, 10)) + "T12:00:00.000Z"
      )
      const markedById = user?.id || user?.userId || null
      const saved: any[] = []

      for (const m of marks) {
        if (!m?.status || m.status === "UNMARKED") continue
        if (!m.workerId && !m.userId) continue
        if (m.status !== "PRESENT" && !String(m.reason || "").trim()) continue

        await prisma.garmentAttendance.deleteMany({
          where: {
            organizationId: orgId,
            workDate: day,
            ...(m.workerId
              ? { workerId: m.workerId }
              : { userId: m.userId as string }),
          },
        })

        const row = await prisma.garmentAttendance.create({
          data: {
            organizationId: orgId,
            workerId: m.workerId || null,
            userId: m.userId || null,
            workDate: day,
            status: m.status as any,
            reason: m.reason || null,
            note: m.note || null,
            markedById,
            source: "MANUAL",
          },
        })
        saved.push(row)

        // የዓመት እረፍት −1 when Absent + ANNUAL_LEAVE
        if (
          m.workerId &&
          m.status === "ABSENT" &&
          (m.reason === "ANNUAL_LEAVE" || m.useAnnualLeave)
        ) {
          const w = await prisma.garmentWorker.findFirst({
            where: { id: m.workerId, organizationId: orgId },
          })
          if (w) {
            const annual = (w as any).annualLeaveDays ?? 14
            const used = (w as any).usedLeaveDays ?? 0
            if (used < annual) {
              await prisma.garmentWorker.update({
                where: { id: m.workerId },
                data: { usedLeaveDays: used + 1 } as any,
              })
            }
          }
        }
      }

      res.json({ saved: saved.length, rows: saved })
    } catch (err: any) {
      console.error("attendance bulk error:", err)
      res.status(500).json({ error: err?.message || "Bulk save failed" })
    }
  }
)

router.get(
  "/attendance/summary",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)
      const days = Number(req.query.days || 30)
      const end = new Date()
      end.setHours(23, 59, 59, 999)
      const start = new Date()
      start.setDate(start.getDate() - (days - 1))
      start.setHours(0, 0, 0, 0)

      const [workers, rows] = await Promise.all([
        prisma.garmentWorker.findMany({
          where: { organizationId: orgId, active: true },
          orderBy: { name: "asc" },
        }),
        prisma.garmentAttendance.findMany({
          where: {
            organizationId: orgId,
            workDate: { gte: start, lte: end },
          },
        }),
      ])

      type Acc = {
        key: string
        workerId: string
        name: string
        present: number
        late: number
        absent: number
        earlyLeave: number
        workDays: number
      }

      const map: Record<string, Acc> = {}
      for (const w of workers) {
        map[`w:${w.id}`] = {
          key: `w:${w.id}`,
          workerId: w.id,
          name: w.name,
          present: 0,
          late: 0,
          absent: 0,
          earlyLeave: 0,
          workDays: 0,
        }
      }

      for (const r of rows) {
        if (!r.workerId) continue
        const key = `w:${r.workerId}`
        if (!map[key]) continue
        const b = map[key]
        if (r.status === "PRESENT") {
          b.present++
          b.workDays++
        } else if (r.status === "LATE") {
          b.late++
          b.workDays++
        } else if (r.status === "ABSENT") {
          b.absent++
        } else if (r.status === "EARLY_LEAVE") {
          b.earlyLeave++
        }
      }

      res.json({
        from: start.toISOString().slice(0, 10),
        to: end.toISOString().slice(0, 10),
        days,
        people: Object.values(map).sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      })
    } catch (err: any) {
      console.error(err)
      res.status(500).json({ error: err?.message || "Summary failed" })
    }
  }
)

router.get(
  "/attendance/history",
  authenticate,
  requireOrganization,
  async (req: Request, res: Response) => {
    try {
      const orgId = getOrgId(req)
      const workerId = req.query.workerId as string
      const days = Number(req.query.days || 30)

      if (!workerId) {
        return res.status(400).json({ error: "workerId required" })
      }

      const end = new Date()
      end.setHours(23, 59, 59, 999)
      const start = new Date()
      start.setDate(start.getDate() - (days - 1))
      start.setHours(0, 0, 0, 0)

      const worker = await prisma.garmentWorker.findFirst({
        where: { id: workerId, organizationId: orgId },
      })
      if (!worker) {
        return res.status(404).json({ error: "Worker not found" })
      }

      const rows = await prisma.garmentAttendance.findMany({
        where: {
          organizationId: orgId,
          workerId,
          workDate: { gte: start, lte: end },
        },
        orderBy: { workDate: "desc" },
      })

      const present = rows.filter((r) => r.status === "PRESENT").length
      const late = rows.filter((r) => r.status === "LATE").length
      const absent = rows.filter((r) => r.status === "ABSENT").length
      const earlyLeave = rows.filter((r) => r.status === "EARLY_LEAVE").length

      res.json({
        worker: {
          id: worker.id,
          name: worker.name,
          phone: worker.phone,
          annualLeaveDays: (worker as any).annualLeaveDays,
          usedLeaveDays: (worker as any).usedLeaveDays,
        },
        from: start.toISOString().slice(0, 10),
        to: end.toISOString().slice(0, 10),
        days,
        totals: {
          present,
          late,
          absent,
          earlyLeave,
          workDays: present + late,
        },
        records: rows.map((r) => ({
          id: r.id,
          date: r.workDate.toISOString().slice(0, 10),
          status: r.status,
          reason: r.reason,
          note: r.note,
        })),
      })
    } catch (err: any) {
      console.error(err)
      res
        .status(500)
        .json({ error: err?.message || "Failed to load history" })
    }
  }
)

export default router
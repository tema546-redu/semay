import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

function mapItem(s: {
  id: string
  name: string
  unit: string
  quantity: any
  lowAt: any
  unitCost?: any
  note: string | null
  location?: string
  createdAt: Date
  updatedAt: Date
  organizationId: string
  branchId: string | null
}) {
  const quantity = Number(s.quantity)
  const lowAt = s.lowAt != null ? Number(s.lowAt) : null
  const unitCost = s.unitCost != null ? Number(s.unitCost) : null
  return {
    ...s,
    quantity,
    lowAt,
    unitCost,
    location: s.location || "STORE",
    isLow: lowAt != null && quantity <= lowAt,
    value: unitCost != null ? Math.round(quantity * unitCost * 100) / 100 : null,
  }
}

function userIdOf(req: any): string | null {
  return req.user?.userId ?? req.user?.id ?? null
}

// ─── list / create ─────────────────────────────────────────

router.get("/", async (req, res) => {
  try {
    const organizationId = req.user!.organizationId!
    const location = req.query.location as string | undefined

    const items = await prisma.stockItem.findMany({
      where: {
        organizationId,
        ...(location ? { location } : {}),
      },
      orderBy: { name: "asc" },
    })
    res.json(items.map(mapItem))
  } catch (e: any) {
    console.error("stock list", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.post("/", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
       const data = z
      .object({
        name: z.string().min(1),
        unit: z.enum(["kg", "L", "pcs", "bag", "box"]).default("kg"),
        quantity: z.number().min(0),
        lowAt: z.number().min(0).optional().nullable(),
        unitCost: z.number().min(0).optional().nullable(),
        note: z.string().optional(),
        location: z.enum(["BAR", "KITCHEN", "STORE"]).optional().default("STORE"),
      })
      .parse(req.body)

    const organizationId = req.user!.organizationId!
    const userId = userIdOf(req)

    const row = await prisma.$transaction(async (tx) => {
    const item = await tx.stockItem.create({
        data: {
          name: data.name.trim(),
          unit: data.unit,
          quantity: data.quantity,
          lowAt: data.lowAt ?? null,
          unitCost: data.unitCost ?? null,
          note: data.note,
          location: data.location || "STORE",
          organizationId,
        },
      })

      if (data.quantity > 0) {
        await tx.stockMovement.create({
          data: {
            organizationId,
            stockItemId: item.id,
            type: "IN",
            quantity: data.quantity,
            balanceAfter: data.quantity,
            note: data.note || "Opening stock",
            userId,
          },
        })
      }

      return item
    })

    res.status(201).json(mapItem(row))
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    console.error("stock create", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

// ─── static paths MUST be before /:id ──────────────────────

/** Day / range report — what was bought, issued, counted */
router.get("/report", async (req, res) => {
  try {
    const organizationId = req.user!.organizationId!
    const date = String(req.query.date || "").trim()
    const range = String(req.query.range || "today")
    const location = String(req.query.location || "").trim()

    let from: Date
    let to: Date

    if (date && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
      from = new Date(`${date}T00:00:00.000`)
      to = new Date(`${date}T23:59:59.999`)
    } else if (range === "7d") {
      to = new Date()
      from = new Date()
      from.setDate(from.getDate() - 6)
      from.setHours(0, 0, 0, 0)
    } else if (range === "month") {
      to = new Date()
      from = new Date(to.getFullYear(), to.getMonth(), 1)
    } else {
      from = new Date()
      from.setHours(0, 0, 0, 0)
      to = new Date()
      to.setHours(23, 59, 59, 999)
    }

       const rows = await prisma.stockMovement.findMany({
      where: {
        organizationId,
        createdAt: { gte: from, lte: to },
        ...(location
          ? { stockItem: { location } }
          : {}),
      },
      include: {
        stockItem: {
          select: { id: true, name: true, unit: true, unitCost: true, location: true },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 500,
    })

    const movements = rows.map((m) => {
      const qty = Number(m.quantity)
      const unitCost =
        m.stockItem.unitCost != null ? Number(m.stockItem.unitCost) : null
      const lineValue =
        m.type === "IN" && unitCost != null
          ? Math.round(qty * unitCost * 100) / 100
          : null
      return {
        id: m.id,
        type: m.type,
        quantity: qty,
        balanceAfter: Number(m.balanceAfter),
        difference: m.difference != null ? Number(m.difference) : null,
        invoiceNo: m.invoiceNo,
        note: m.note,
        createdAt: m.createdAt,
        itemId: m.stockItemId,
        itemName: m.stockItem.name,
        unit: m.stockItem.unit,
        unitCost,
        lineValue,
      }
    })

    const bought = movements.filter((m) => m.type === "IN")
    const issued = movements.filter((m) => m.type === "OUT")
    const counted = movements.filter((m) => m.type === "COUNT")
    const boughtValue = bought.reduce((s, m) => s + (m.lineValue || 0), 0)

    res.json({
      from: from.toISOString(),
      to: to.toISOString(),
      date: date || null,
      range: date ? null : range,
      summary: {
        receiveCount: bought.length,
        issueCount: issued.length,
        countCount: counted.length,
        boughtValue,
      },
      bought,
      issued,
      counted,
      movements,
    })
  } catch (e: any) {
    console.error("stock report", e)
    res.status(500).json({
      error:
        e.message ||
        "Report failed — check StockMovement table exists (prisma db push)",
    })
  }
})

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
    console.error("stock recipe", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.get("/recipe/:menuItemId", async (req, res) => {
  try {
    const menuItemId = String(req.params.menuItemId)
    const organizationId = req.user!.organizationId!
    const menu = await prisma.menuItem.findFirst({
      where: { id: menuItemId, organizationId },
    })
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
  } catch (e: any) {
    console.error("stock get recipe", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

// ─── /:id routes ───────────────────────────────────────────

/** Receive (purchase / delivery) */
router.post("/:id/receive", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const id = String(req.params.id)
    const organizationId = req.user!.organizationId!
    const userId = userIdOf(req)
    const body = z
      .object({
        amount: z.number().positive(),
        invoiceNo: z.string().optional(),
        note: z.string().optional(),
        unitCost: z.number().min(0).optional().nullable(),
      })
      .parse(req.body)

    const item = await prisma.stockItem.findFirst({ where: { id, organizationId } })
    if (!item) return res.status(404).json({ error: "Not found" })

    const newQty = Number(item.quantity) + body.amount

    const updated = await prisma.$transaction(async (tx) => {
      const u = await tx.stockItem.update({
        where: { id },
        data: {
          quantity: newQty,
          ...(body.unitCost != null ? { unitCost: body.unitCost } : {}),
        },
      })
      await tx.stockMovement.create({
        data: {
          organizationId,
          stockItemId: id,
          type: "IN",
          quantity: body.amount,
          balanceAfter: newQty,
          invoiceNo: body.invoiceNo || null,
          note: body.note || null,
          userId,
        },
      })
      return u
    })

    res.json(mapItem(updated))
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    console.error("stock receive", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

/** Issue (kitchen / bar / use) */
router.post(
  "/:id/issue",
  requireRole(Role.OWNER, Role.MANAGER, Role.STAFF),
  async (req, res) => {
    try {
      const id = String(req.params.id)
      const organizationId = req.user!.organizationId!
      const userId = userIdOf(req)
      const body = z
        .object({
          amount: z.number().positive(),
          note: z.string().optional(),
        })
        .parse(req.body)

      const item = await prisma.stockItem.findFirst({ where: { id, organizationId } })
      if (!item) return res.status(404).json({ error: "Not found" })

      const current = Number(item.quantity)
      if (body.amount > current) {
        return res.status(400).json({
          error: `Only ${current} ${item.unit} available`,
        })
      }

      const newQty = current - body.amount

      const updated = await prisma.$transaction(async (tx) => {
        const u = await tx.stockItem.update({
          where: { id },
          data: { quantity: newQty },
        })
        await tx.stockMovement.create({
          data: {
            organizationId,
            stockItemId: id,
            type: "OUT",
            quantity: body.amount,
            balanceAfter: newQty,
            note: body.note || "Issued",
            userId,
          },
        })
        return u
      })

      res.json(mapItem(updated))
    } catch (e: any) {
      if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
      console.error("stock issue", e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

/** Physical count */
router.post("/:id/count", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const id = String(req.params.id)
    const organizationId = req.user!.organizationId!
    const userId = userIdOf(req)
    const body = z
      .object({
        counted: z.number().min(0),
        note: z.string().optional(),
      })
      .parse(req.body)

    const item = await prisma.stockItem.findFirst({ where: { id, organizationId } })
    if (!item) return res.status(404).json({ error: "Not found" })

    const systemQty = Number(item.quantity)
    const difference = body.counted - systemQty

    const updated = await prisma.$transaction(async (tx) => {
      const u = await tx.stockItem.update({
        where: { id },
        data: { quantity: body.counted },
      })
      await tx.stockMovement.create({
        data: {
          organizationId,
          stockItemId: id,
          type: "COUNT",
          quantity: body.counted,
          balanceAfter: body.counted,
          difference,
          note: body.note || "Physical count",
          userId,
        },
      })
      return u
    })

    res.json({
      ...mapItem(updated),
      difference,
      previousQuantity: systemQty,
    })
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    console.error("stock count", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

/** Alias for receive */
router.post("/:id/add", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const id = String(req.params.id)
    const organizationId = req.user!.organizationId!
    const userId = userIdOf(req)
    const { amount } = z.object({ amount: z.number().positive() }).parse(req.body)

    const item = await prisma.stockItem.findFirst({ where: { id, organizationId } })
    if (!item) return res.status(404).json({ error: "Not found" })

    const newQty = Number(item.quantity) + amount

    const updated = await prisma.$transaction(async (tx) => {
      const u = await tx.stockItem.update({
        where: { id },
        data: { quantity: newQty },
      })
      await tx.stockMovement.create({
        data: {
          organizationId,
          stockItemId: id,
          type: "IN",
          quantity: amount,
          balanceAfter: newQty,
          note: "Restock",
          userId,
        },
      })
      return u
    })

    res.json(mapItem(updated))
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    console.error("stock add", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.get("/:id/movements", async (req, res) => {
  try {
    const id = String(req.params.id)
    const organizationId = req.user!.organizationId!
    const item = await prisma.stockItem.findFirst({ where: { id, organizationId } })
    if (!item) return res.status(404).json({ error: "Not found" })

    const rows = await prisma.stockMovement.findMany({
      where: { stockItemId: id, organizationId },
      orderBy: { createdAt: "desc" },
      take: 50,
    })

    res.json(
      rows.map((m) => ({
        id: m.id,
        type: m.type,
        quantity: Number(m.quantity),
        balanceAfter: Number(m.balanceAfter),
        difference: m.difference != null ? Number(m.difference) : null,
        invoiceNo: m.invoiceNo,
        note: m.note,
        createdAt: m.createdAt,
      }))
    )
  } catch (e: any) {
    console.error("stock movements", e)
    res.status(500).json({
      error:
        e.message ||
        "Failed — check StockMovement table exists (prisma db push)",
    })
  }
})


/** Transfer qty (partial or full) to another location — logs OUT on source + IN on target */
router.post(
  "/:id/transfer",
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    try {
      const id = String(req.params.id)
      const organizationId = req.user!.organizationId!
      const userId = userIdOf(req)
      const body = z
        .object({
          toLocation: z.enum(["BAR", "KITCHEN", "STORE"]),
          /** if true, move all remaining qty */
          full: z.boolean().optional().default(false),
          amount: z.number().positive().optional(),
          note: z.string().optional(),
        })
        .parse(req.body)

      const source = await prisma.stockItem.findFirst({
        where: { id, organizationId },
      })
      if (!source) return res.status(404).json({ error: "Not found" })

      const fromLoc = source.location || "STORE"
      if (body.toLocation === fromLoc) {
        return res.status(400).json({ error: "Already in that location" })
      }

      const current = Number(source.quantity)
      const amount = body.full ? current : Number(body.amount || 0)
      if (!amount || amount <= 0) {
        return res.status(400).json({ error: "Enter amount or choose Full" })
      }
      if (amount > current) {
        return res.status(400).json({
          error: `Only ${current} ${source.unit} available`,
        })
      }

      const noteBase =
        body.note?.trim() ||
        `Transfer ${fromLoc} → ${body.toLocation}`

      const result = await prisma.$transaction(async (tx) => {
        const newSourceQty = current - amount

        const updatedSource = await tx.stockItem.update({
          where: { id },
          data: { quantity: newSourceQty },
        })

        await tx.stockMovement.create({
          data: {
            organizationId,
            stockItemId: id,
            type: "OUT",
            quantity: amount,
            balanceAfter: newSourceQty,
            note: noteBase,
            userId,
          },
        })

        // Same name + unit at target location, or create
        let target = await tx.stockItem.findFirst({
          where: {
            organizationId,
            name: source.name,
            unit: source.unit,
            location: body.toLocation,
          },
        })

        if (!target) {
          target = await tx.stockItem.create({
            data: {
              organizationId,
              name: source.name,
              unit: source.unit,
              quantity: amount,
              lowAt: source.lowAt,
              unitCost: source.unitCost,
              note: source.note,
              location: body.toLocation,
              branchId: source.branchId,
            },
          })
          await tx.stockMovement.create({
            data: {
              organizationId,
              stockItemId: target.id,
              type: "IN",
              quantity: amount,
              balanceAfter: amount,
              note: noteBase,
              userId,
            },
          })
        } else {
          const tQty = Number(target.quantity) + amount
          target = await tx.stockItem.update({
            where: { id: target.id },
            data: {
              quantity: tQty,
              ...(source.unitCost != null && target.unitCost == null
                ? { unitCost: source.unitCost }
                : {}),
            },
          })
          await tx.stockMovement.create({
            data: {
              organizationId,
              stockItemId: target.id,
              type: "IN",
              quantity: amount,
              balanceAfter: tQty,
              note: noteBase,
              userId,
            },
          })
        }

        return { source: updatedSource, target, amount }
      })

      res.json({
        ok: true,
        amount: result.amount,
        from: fromLoc,
        to: body.toLocation,
        source: mapItem(result.source),
        target: mapItem(result.target),
      })
    } catch (e: any) {
      if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
      console.error("stock transfer", e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

/** Transfer qty (partial or full) to another location */
router.post(
  "/:id/transfer",
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    try {
      const id = String(req.params.id)
      const organizationId = req.user!.organizationId!
      const userId = userIdOf(req)
      const body = z
        .object({
          toLocation: z.enum(["BAR", "KITCHEN", "STORE"]),
          full: z.boolean().optional().default(false),
          amount: z.number().positive().optional(),
          note: z.string().optional(),
        })
        .parse(req.body)

      const source = await prisma.stockItem.findFirst({
        where: { id, organizationId },
      })
      if (!source) return res.status(404).json({ error: "Not found" })

      const fromLoc = source.location || "STORE"
      if (body.toLocation === fromLoc) {
        return res.status(400).json({ error: "Already in that location" })
      }

      const current = Number(source.quantity)
      const amount = body.full ? current : Number(body.amount || 0)
      if (!amount || amount <= 0) {
        return res.status(400).json({ error: "Enter amount or choose Full" })
      }
      if (amount > current) {
        return res.status(400).json({
          error: `Only ${current} ${source.unit} available`,
        })
      }

      const noteBase =
        body.note?.trim() || `Transfer ${fromLoc} → ${body.toLocation}`

      const result = await prisma.$transaction(async (tx) => {
        const newSourceQty = current - amount

        const updatedSource = await tx.stockItem.update({
          where: { id },
          data: { quantity: newSourceQty },
        })

        await tx.stockMovement.create({
          data: {
            organizationId,
            stockItemId: id,
            type: "OUT",
            quantity: amount,
            balanceAfter: newSourceQty,
            note: noteBase,
            userId,
          },
        })

        let target = await tx.stockItem.findFirst({
          where: {
            organizationId,
            name: source.name,
            unit: source.unit,
            location: body.toLocation,
          },
        })

        if (!target) {
          target = await tx.stockItem.create({
            data: {
              organizationId,
              name: source.name,
              unit: source.unit,
              quantity: amount,
              lowAt: source.lowAt,
              unitCost: source.unitCost,
              note: source.note,
              location: body.toLocation,
              branchId: source.branchId,
            },
          })
          await tx.stockMovement.create({
            data: {
              organizationId,
              stockItemId: target.id,
              type: "IN",
              quantity: amount,
              balanceAfter: amount,
              note: noteBase,
              userId,
            },
          })
        } else {
          const tQty = Number(target.quantity) + amount
          target = await tx.stockItem.update({
            where: { id: target.id },
            data: {
              quantity: tQty,
              ...(source.unitCost != null && target.unitCost == null
                ? { unitCost: source.unitCost }
                : {}),
            },
          })
          await tx.stockMovement.create({
            data: {
              organizationId,
              stockItemId: target.id,
              type: "IN",
              quantity: amount,
              balanceAfter: tQty,
              note: noteBase,
              userId,
            },
          })
        }

        return { source: updatedSource, target, amount }
      })

      res.json({
        ok: true,
        amount: result.amount,
        from: fromLoc,
        to: body.toLocation,
        source: mapItem(result.source),
        target: mapItem(result.target),
      })
    } catch (e: any) {
      if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
      console.error("stock transfer", e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

router.patch("/:id", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const id = String(req.params.id)
    const organizationId = req.user!.organizationId!
    const data = z
      .object({
       name: z.string().min(1).optional(),
        unit: z.enum(["kg", "L", "pcs", "bag", "box"]).optional(),
        quantity: z.number().min(0).optional(),
        lowAt: z.number().min(0).nullable().optional(),
        unitCost: z.number().min(0).nullable().optional(),
        note: z.string().nullable().optional(),
        location: z.enum(["BAR", "KITCHEN", "STORE"]).optional(),
      })
      .parse(req.body)

    const item = await prisma.stockItem.findFirst({ where: { id, organizationId } })
    if (!item) return res.status(404).json({ error: "Not found" })

    const updated = await prisma.stockItem.update({ where: { id }, data })
    res.json(mapItem(updated))
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    console.error("stock patch", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.delete("/:id", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const id = String(req.params.id)
    const organizationId = req.user!.organizationId!
    await prisma.stockItem.deleteMany({ where: { id, organizationId } })
    res.json({ ok: true })
  } catch (e: any) {
    console.error("stock delete", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

export default router
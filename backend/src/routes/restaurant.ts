import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { OrderStatus, Role } from "@prisma/client"

const router = Router()

function makeReceiptCode() {
  return ("R" + Math.random().toString(36).slice(2, 8)).toUpperCase()
}

function makeReceiptToken() {
  return (
    Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
  ).toUpperCase()
}

function normalizeReceiptCode(raw: string) {
  let code = String(raw || "").trim().toUpperCase()
  // QR payload: SMAY|orderId|token
  if (code.startsWith("SMAY|")) {
    const parts = code.split("|")
    return { orderId: parts[1] || "", token: parts[2] || "", code: "" }
  }
  code = code.replace(/^R-?/, "R")
  if (!code.startsWith("R") && code.length >= 4) code = "R" + code
  return { orderId: "", token: "", code }
}

// ========== PUBLIC (no login) — must be BEFORE auth middleware ==========

router.get("/public/:orgId/menu", async (req, res) => {
  try {
    const orgId = String(req.params.orgId)
    const org = await prisma.organization.findFirst({
      where: { id: orgId, type: { in: ["RESTAURANT", "CAFE"] as any } },
    })
    if (!org) return res.status(404).json({ error: "Not found" })

    const items = await prisma.menuItem.findMany({
      where: { organizationId: orgId, available: true },
      orderBy: [{ category: "asc" }, { name: "asc" }],
    })

    res.json({
      organization: {
        id: org.id,
        name: org.name,
        photoUrl: (org as any).photoUrl || null,
        openTime: org.openTime,
        closeTime: org.closeTime,
      },
      items,
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Failed" })
  }
})

router.post("/public/:orgId/order", async (req, res) => {
  try {
    const orgId = String(req.params.orgId)
    const data = z
      .object({
        tableNumber: z.string().min(1),
        customerName: z.string().optional(),
        items: z
          .array(
            z.object({
              menuItemId: z.string().optional(),
              name: z.string(),
              quantity: z.number().int().positive(),
              price: z.number().positive(),
            })
          )
          .min(1),
      })
      .parse(req.body)

    const org = await prisma.organization.findFirst({
      where: { id: orgId, type: { in: ["RESTAURANT", "CAFE"] as any } },
    })
    if (!org) return res.status(404).json({ error: "Not found" })

    const total = data.items.reduce((s, i) => s + i.price * i.quantity, 0)

    const order = await prisma.order.create({
      data: {
        tableNumber: data.tableNumber,
        status: OrderStatus.SENT,
        total,
        organizationId: orgId,
        receiptCode: makeReceiptCode(),
        receiptToken: makeReceiptToken(),
        items: {
          create: data.items.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            menuItemId: item.menuItemId,
          })),
        },
      } as any,
      include: { items: true },
    })

    res.status(201).json(order)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    console.error(e)
    res.status(500).json({ error: "Failed" })
  }
})

router.get("/public/receipt/:code", async (req, res) => {
  try {
    const raw = String(req.params.code || "").trim().toUpperCase()
    let code = raw.replace(/^R-?/, "R")
    if (!code.startsWith("R") && code.length >= 4) code = "R" + code

    const or: { receiptCode?: string; id?: string }[] = [{ receiptCode: code }]
    if (raw && raw !== code) or.push({ receiptCode: raw })
    // cuid-style id fallback (optional)
    if (raw.length > 20) or.push({ id: raw })

    const order = await prisma.order.findFirst({
      where: { OR: or },
      include: {
        items: true,
        organization: {
          select: {
            id: true,
            name: true,
            phone: true,
            address: true,
            city: true,
            tin: true,
            photoUrl: true,
          },
        },
      },
    })

    if (!order) return res.status(404).json({ error: "Receipt not found" })

    const scanned = !!(order as any).receiptScannedAt

    res.json({
      receiptCode: (order as any).receiptCode,
      tableNumber: order.tableNumber,
      total: Number(order.total),
      paymentMethod: order.paymentMethod,
      createdAt: order.createdAt,
      scanned,
      items: (order.items || []).map((i: any) => ({
        name: i.name,
        quantity: i.quantity,
        price: Number(i.price),
      })),
      organization: {
        id: order.organization?.id,
        name: order.organization?.name,
        phone: (order.organization as any)?.phone ?? null,
        address: (order.organization as any)?.address ?? null,
        city: (order.organization as any)?.city ?? null,
        tin: (order.organization as any)?.tin ?? null,
      },
      note: "NON-FISCAL management receipt · Semaiy",
    })
  } catch (e) {
    console.error("public/receipt", e)
    res.status(500).json({ error: "Failed" })
  }
})

// ========== AUTH from here ==========
router.use(authenticate, requireOrganization)

router.get("/settings", async (req, res) => {
  const org = await prisma.organization.findUnique({
    where: { id: req.user!.organizationId! },
  })
  res.json({
    openTime: org?.openTime || "08:00",
    closeTime: org?.closeTime || "22:00",
    name: org?.name,
    currency: org?.currency || "ETB",
    phone: (org as any)?.phone ?? null,
    address: (org as any)?.address ?? null,
    city: (org as any)?.city ?? null,
    tin: (org as any)?.tin ?? null,
    photoUrl: (org as any)?.photoUrl ?? null,
    type: org?.type ?? null,
    typeSwitchedAt: (org as any)?.typeSwitchedAt ?? null,
  })
})

router.patch("/settings", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const data = z
      .object({
        openTime: z.string().optional(),
        closeTime: z.string().optional(),
        name: z.string().min(1).optional(),
        phone: z.string().optional().nullable(),
        address: z.string().optional().nullable(),
        city: z.string().optional().nullable(),
        tin: z.string().optional().nullable(),
        photoUrl: z.string().optional().nullable(),
      })
      .parse(req.body)

    const org = await prisma.organization.update({
      where: { id: req.user!.organizationId! },
      data: {
        ...(data.openTime !== undefined && { openTime: data.openTime }),
        ...(data.closeTime !== undefined && { closeTime: data.closeTime }),
        ...(data.name !== undefined && { name: data.name }),
        ...(data.phone !== undefined && { phone: data.phone }),
        ...(data.address !== undefined && { address: data.address }),
        ...(data.city !== undefined && { city: data.city }),
        ...(data.tin !== undefined && { tin: data.tin }),
        ...(data.photoUrl !== undefined && { photoUrl: data.photoUrl }),
      } as any,
    })

    res.json({
      openTime: org.openTime,
      closeTime: org.closeTime,
      name: org.name,
      phone: (org as any).phone ?? null,
      address: (org as any).address ?? null,
      city: (org as any).city ?? null,
      tin: (org as any).tin ?? null,
      photoUrl: (org as any).photoUrl ?? null,
      currency: (org as any).currency || "ETB",
    })
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    res.status(400).json({ error: err.message || "Failed" })
  }
})

router.get("/reservations", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const date = req.query.date as string | undefined
  let where: any = { organizationId }
  if (date) {
    const start = new Date(date)
    start.setHours(0, 0, 0, 0)
    const end = new Date(start)
    end.setDate(end.getDate() + 1)
    where.reservedAt = { gte: start, lt: end }
  }
  const list = await prisma.reservation.findMany({
    where,
    orderBy: { reservedAt: "asc" },
  })
  res.json(list)
})

router.post(
  "/reservations",
  requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF),
  async (req, res) => {
    try {
      const data = z
        .object({
          guestName: z.string().min(1),
          phone: z.string().optional(),
          partySize: z.number().int().positive().default(2),
          tableNumber: z.string().optional(),
          dateTime: z.string(),
          notes: z.string().optional(),
        })
        .parse(req.body)

      const reservation = await prisma.reservation.create({
        data: {
          guestName: data.guestName,
          phone: data.phone,
          partySize: data.partySize,
          tableNumber: data.tableNumber,
          reservedAt: new Date(data.dateTime),
          notes: data.notes,
          status: "confirmed",
          organizationId: req.user!.organizationId!,
        },
      })
      res.status(201).json(reservation)
    } catch (err: any) {
      if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
      res.status(500).json({ error: "Failed to create reservation" })
    }
  }
)

router.patch(
  "/reservations/:id/status",
  requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF),
  async (req, res) => {
    try {
      const { status } = z
        .object({
          status: z.enum(["pending", "confirmed", "seated", "cancelled", "completed"]),
        })
        .parse(req.body)
      const organizationId = req.user!.organizationId!
      const id = String(req.params.id)
      const r = await prisma.reservation.findFirst({ where: { id, organizationId } })
      if (!r) return res.status(404).json({ error: "Not found" })
      const updated = await prisma.reservation.update({
        where: { id: r.id },
        data: { status },
      })
      res.json(updated)
    } catch {
      res.status(500).json({ error: "Failed" })
    }
  }
)

router.get("/staff", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const staff = await prisma.user.findMany({
    where: { organizationId },
    select: { id: true, name: true, email: true, role: true, phone: true, createdAt: true },
    orderBy: { name: "asc" },
  })
  res.json(staff)
})

router.get("/analytics", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const days = 7

  const localDayKey = (d: Date) => {
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, "0")
    const day = String(d.getDate()).padStart(2, "0")
    return `${y}-${m}-${day}`
  }

  const todayStart = new Date()
  todayStart.setHours(0, 0, 0, 0)

  const rangeStart = new Date(todayStart)
  rangeStart.setDate(rangeStart.getDate() - (days - 1))

  const org = await prisma.organization.findUnique({ where: { id: organizationId } })

  const orders = await prisma.order.findMany({
    where: {
      organizationId,
      createdAt: { gte: rangeStart },
      status: { not: OrderStatus.CANCELLED },
    },
    include: { items: true },
  })

  const dailyMap: Record<string, { sales: number; orders: number }> = {}
  for (let i = 0; i < days; i++) {
    const d = new Date(rangeStart)
    d.setDate(rangeStart.getDate() + i)
    dailyMap[localDayKey(d)] = { sales: 0, orders: 0 }
  }

  for (const o of orders) {
    const key = localDayKey(new Date(o.createdAt))
    if (!dailyMap[key]) dailyMap[key] = { sales: 0, orders: 0 }
    dailyMap[key].sales += Number(o.total)
    dailyMap[key].orders += 1
  }

  const last7Days = Object.entries(dailyMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, v]) => ({
      date,
      sales: Math.round(v.sales * 100) / 100,
      orders: v.orders,
    }))

  const todayKey = localDayKey(todayStart)

  const hourlyToday: { hour: number; label: string; sales: number; orders: number }[] = []
  for (let h = 0; h < 24; h++) {
    hourlyToday.push({
      hour: h,
      label: `${String(h).padStart(2, "0")}:00`,
      sales: 0,
      orders: 0,
    })
  }
  for (const o of orders) {
    const created = new Date(o.createdAt)
    if (localDayKey(created) !== todayKey) continue
    const h = created.getHours()
    hourlyToday[h].sales += Number(o.total)
    hourlyToday[h].orders += 1
  }
  for (const row of hourlyToday) {
    row.sales = Math.round(row.sales * 100) / 100
  }

  const openH = parseInt((org?.openTime || "08:00").slice(0, 2), 10) || 8
  const closeH = parseInt((org?.closeTime || "22:00").slice(0, 2), 10) || 22
  const hourlyChart = hourlyToday.filter(
    (r) => (r.hour >= openH && r.hour <= closeH) || r.sales > 0 || r.orders > 0
  )

  const itemCount: Record<string, { name: string; qty: number; revenue: number }> = {}
  for (const o of orders) {
    for (const item of o.items) {
      if (!itemCount[item.name]) itemCount[item.name] = { name: item.name, qty: 0, revenue: 0 }
      itemCount[item.name].qty += item.quantity
      itemCount[item.name].revenue += Number(item.price) * item.quantity
    }
  }
  const bestSellers = Object.values(itemCount)
    .sort((a, b) => b.qty - a.qty)
    .slice(0, 8)

  let stockOverview: any[] = []
  let lowStock: any[] = []
  try {
    const stockItems = await prisma.stockItem.findMany({
      where: { organizationId },
      orderBy: { name: "asc" },
    })
    stockOverview = stockItems.map((s) => ({
      id: s.id,
      name: s.name,
      quantity: Number(s.quantity),
      unit: s.unit,
      lowAt: s.lowAt != null ? Number(s.lowAt) : null,
      isLow: s.lowAt != null && Number(s.quantity) <= Number(s.lowAt),
      stockQty: `${Number(s.quantity)} ${s.unit}`,
    }))
    lowStock = stockOverview.filter((s) => s.isLow)
  } catch {
    stockOverview = []
    lowStock = []
  }

  const todaySales = dailyMap[todayKey]?.sales || 0
  const todayOrderCount = dailyMap[todayKey]?.orders || 0

  const activeOrders = await prisma.order.count({
    where: {
      organizationId,
      status: { in: [OrderStatus.SENT, OrderStatus.PREPARING, OrderStatus.READY] },
    },
  })

  const activeList = await prisma.order.findMany({
    where: {
      organizationId,
      status: { in: [OrderStatus.SENT, OrderStatus.PREPARING, OrderStatus.READY] },
    },
    include: { items: true },
    orderBy: { createdAt: "asc" },
    take: 8,
  })

  const weekSales = last7Days.reduce((s, d) => s + d.sales, 0)
  const weekOrders = last7Days.reduce((s, d) => s + d.orders, 0)

  let health = 0
  if (todayOrderCount > 0) {
    health = 40
    if (todayOrderCount >= 1) health += 15
    if (todayOrderCount >= 10) health += 10
    if (todaySales >= 500) health += 10
    if (todaySales >= 2000) health += 5
    if (weekOrders >= 20) health += 10
    if (lowStock.length === 0 && stockOverview.length > 0) health += 10
    if (lowStock.length >= 1) health -= 10
    if (lowStock.length >= 3) health -= 10
    if (activeOrders > 15) health -= 5
    health = Math.max(0, Math.min(100, health))
  }

  const dayEnd = new Date(todayStart)
  dayEnd.setHours(23, 59, 59, 999)
  const upcomingReservations = await prisma.reservation.findMany({
    where: {
      organizationId,
      reservedAt: { gte: new Date(), lte: dayEnd },
      status: { in: ["CONFIRMED", "confirmed", "pending", "PENDING"] },
    },
    orderBy: { reservedAt: "asc" },
    take: 3,
  })

  const staff = await prisma.user.findMany({
    where: { organizationId },
    select: { id: true, name: true, role: true, email: true },
    orderBy: { name: "asc" },
  })

  res.json({
    last7Days,
    hourlyChart,
    bestSellers,
    lowStock,
    stockOverview,
    today: {
      sales: Math.round(todaySales * 100) / 100,
      orders: todayOrderCount,
      activeOrders,
    },
    week: {
      sales: Math.round(weekSales * 100) / 100,
      orders: weekOrders,
      avgDaily: Math.round((weekSales / days) * 100) / 100,
    },
    healthScore: health,
    activeList: activeList.map((o) => ({
      id: o.id,
      tableNumber: o.tableNumber,
      status: o.status,
      total: Number(o.total),
      itemCount: o.items.length,
      createdAt: o.createdAt,
    })),
    upcomingReservations,
    staff,
  })
})

// ——— Payment report + receipt scan stats ———
router.get("/payment-report", async (req, res) => {
  try {
    const organizationId = req.user!.organizationId!
    const dateStr = String(req.query.date || "").trim()
    const range = String(req.query.range || "today")

    // Ethiopia calendar day (UTC+3) — Railway is usually UTC
    const EAT_OFFSET_MS = 3 * 60 * 60 * 1000
    const eatNow = new Date(Date.now() + EAT_OFFSET_MS)
    const eatY = eatNow.getUTCFullYear()
    const eatM = eatNow.getUTCMonth()
    const eatD = eatNow.getUTCDate()

    let since: Date
    let until: Date | undefined

    if (dateStr && /^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      const [y, m, d] = dateStr.split("-").map(Number)
      since = new Date(Date.UTC(y, m - 1, d) - EAT_OFFSET_MS)
      until = new Date(Date.UTC(y, m - 1, d + 1) - EAT_OFFSET_MS)
    } else {
      since = new Date(Date.UTC(eatY, eatM, eatD) - EAT_OFFSET_MS)
      if (range === "7d") {
        since = new Date(Date.UTC(eatY, eatM, eatD - 6) - EAT_OFFSET_MS)
      } else if (range === "month") {
        since = new Date(Date.UTC(eatY, eatM, 1) - EAT_OFFSET_MS)
      } else if (range === "year") {
        since = new Date(Date.UTC(eatY, 0, 1) - EAT_OFFSET_MS)
      }
    }

    const orders = await prisma.order.findMany({
      where: {
        organizationId,
        createdAt: until ? { gte: since, lt: until } : { gte: since },
        status: { not: OrderStatus.CANCELLED },
      },
      orderBy: { createdAt: "desc" },
      include: {
        items: { select: { name: true, quantity: true, price: true } },
        staff: { select: { name: true } },
      },
    })

    const byMethod: Record<string, number> = {}
    const itemCountAll: Record<string, number> = {}
    const itemCountScanned: Record<string, number> = {}
    let scannedCount = 0
    let notScannedCount = 0
    let scannedTotal = 0

    const mapped = orders.map((o) => {
      const m = o.paymentMethod || "unknown"
      byMethod[m] = (byMethod[m] || 0) + Number(o.total)

      for (const it of o.items) {
        itemCountAll[it.name] =
          (itemCountAll[it.name] || 0) + Number(it.quantity || 0)
      }

      const scannedAt = (o as any).receiptScannedAt as Date | null | undefined
      if (scannedAt) {
        scannedCount += 1
        scannedTotal += Number(o.total)
        for (const it of o.items) {
          itemCountScanned[it.name] =
            (itemCountScanned[it.name] || 0) + Number(it.quantity || 0)
        }
      } else {
        notScannedCount += 1
      }

      return {
        id: o.id,
        tableNumber: o.tableNumber,
        total: Number(o.total),
        paymentMethod: o.paymentMethod,
        paymentReceipt: (o as any).paymentReceipt ?? null,
        paidAt: (o as any).paidAt ?? null,
        createdAt: o.createdAt,
        status: o.status,
        staffName: o.staff?.name || null,
        branchId: (o as any).branchId ?? null,
        items: o.items.map((i) => ({
          name: i.name,
          quantity: i.quantity,
          price: Number(i.price),
        })),
        receiptCode: (o as any).receiptCode ?? null,
        receiptToken: (o as any).receiptToken ?? null,
        receiptPrintedAt: (o as any).receiptPrintedAt ?? null,
        receiptPrintCount: (o as any).receiptPrintCount ?? 0,
        receiptScannedAt: scannedAt ?? null,
      }
    })

    const topItemsScanned = Object.entries(itemCountScanned)
      .map(([name, qty]) => ({ name, qty }))
      .sort((a, b) => b.qty - a.qty)
      .slice(0, 20)

    const topItemsAll = Object.entries(itemCountAll)
      .map(([name, qty]) => ({ name, qty }))
      .sort((a, b) => b.qty - a.qty)
      .slice(0, 20)

    res.json({
      orders: mapped,
      byMethod,
      range: dateStr || range,
      since: since.toISOString(),
      until: until ? until.toISOString() : null,
      scannedCount,
      notScannedCount,
      scannedTotal: Math.round(scannedTotal * 100) / 100,
      topItemsScanned,
      topItemsAll,
    })
  } catch (e) {
    console.error("payment-report", e)
    res.status(500).json({ error: "Failed" })
  }
})

router.post(
  "/cleanup-receipts",
  requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF),
  async (req, res) => {
    const organizationId = req.user!.organizationId!
    const cutoff = new Date()
    cutoff.setDate(cutoff.getDate() - 7)

    try {
      const result = await prisma.order.updateMany({
        where: {
          organizationId,
          paidAt: { lt: cutoff },
          paymentReceipt: { not: null },
        },
        data: { paymentReceipt: null },
      })
      res.json({ ok: true, cleared: result.count })
    } catch {
      res.json({ ok: true, cleared: 0 })
    }
  }
)

// ——— Receipt scan (once only) ———
router.post(
  "/receipt/scan",
  requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF),
  async (req, res) => {
    try {
      const body = z
        .object({
          code: z.string().min(4).max(120),
        })
        .parse(req.body)

      const organizationId = req.user!.organizationId!
      const parsed = normalizeReceiptCode(body.code)

      let order =
        parsed.orderId
          ? await prisma.order.findFirst({
              where: {
                organizationId,
                id: parsed.orderId,
              },
              include: { items: true },
            })
          : null

      if (!order && parsed.code) {
        order = await prisma.order.findFirst({
          where: {
            organizationId,
            OR: [
              { receiptCode: parsed.code },
              { receiptCode: parsed.code.replace(/^R/, "") },
            ],
          } as any,
          include: { items: true },
        })
      }

      // Fallback: last 8 chars of id typed as code
      if (!order) {
        const tail = body.code.trim().toUpperCase().replace(/^R/, "")
        if (tail.length >= 6) {
          const candidates = await prisma.order.findMany({
            where: { organizationId },
            orderBy: { createdAt: "desc" },
            take: 200,
            include: { items: true },
          })
          order =
            candidates.find(
              (o) =>
                o.id.toUpperCase().endsWith(tail) ||
                String((o as any).receiptCode || "").toUpperCase() === `R${tail}` ||
                String((o as any).receiptCode || "").toUpperCase() === tail
            ) || null
        }
      }

      if (!order) {
        return res.status(404).json({ error: "Receipt not found" })
      }

      // Optional token check when QR payload includes token
      if (
        parsed.token &&
        (order as any).receiptToken &&
        parsed.token !== String((order as any).receiptToken).toUpperCase()
      ) {
        return res.status(400).json({ error: "Invalid receipt token" })
      }

      if ((order as any).receiptScannedAt) {
        return res.status(409).json({
          error: "Already scanned",
          scannedAt: (order as any).receiptScannedAt,
          order: {
            id: order.id,
            receiptCode: (order as any).receiptCode,
            tableNumber: order.tableNumber,
            total: Number(order.total),
          },
        })
      }

      const updated = await prisma.order.update({
        where: { id: order.id },
        data: {
          receiptScannedAt: new Date(),
          receiptScannedById: req.user!.userId,
        } as any,
        include: { items: true },
      })

      res.json({
        ok: true,
        message: "Scanned once — locked",
        order: {
          id: updated.id,
          receiptCode: (updated as any).receiptCode,
          tableNumber: updated.tableNumber,
          total: Number(updated.total),
          paymentMethod: updated.paymentMethod,
          items: updated.items,
          receiptScannedAt: (updated as any).receiptScannedAt,
          createdAt: updated.createdAt,
        },
      })
    } catch (e: any) {
      if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
      console.error("receipt scan", e)
      res.status(500).json({ error: e.message || "Scan failed" })
    }
  }
)

// Mark official print / COPY
router.post(
  "/receipt/print/:orderId",
  requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const id = String(req.params.orderId)
      let order = await prisma.order.findFirst({
        where: { id, organizationId },
      })
      if (!order) return res.status(404).json({ error: "Not found" })

      // Backfill code for old orders
      if (!(order as any).receiptCode) {
        order = await prisma.order.update({
          where: { id },
          data: {
            receiptCode: makeReceiptCode(),
            receiptToken: makeReceiptToken(),
          } as any,
        })
      }

      const printCount = Number((order as any).receiptPrintCount || 0)
      const isCopy = printCount > 0

      const updated = await prisma.order.update({
        where: { id },
        data: {
          receiptPrintedAt: (order as any).receiptPrintedAt || new Date(),
          receiptPrintCount: { increment: 1 },
        } as any,
      })

      res.json({
        ok: true,
        isCopy,
        receiptCode: (updated as any).receiptCode,
        receiptToken: (updated as any).receiptToken,
        receiptPrintCount: (updated as any).receiptPrintCount,
        receiptScannedAt: (updated as any).receiptScannedAt,
      })
    } catch (e: any) {
      console.error("receipt print", e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

router.get("/tables", async (req, res) => {
  const organizationId = req.user!.organizationId!
  try {
    const tables = await (prisma as any).diningTable.findMany({
      where: { organizationId },
      orderBy: { name: "asc" },
    })
    res.json(tables)
  } catch {
    res.json([])
  }
})

router.post("/tables", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const data = z
      .object({ name: z.string().min(1), seats: z.number().int().optional() })
      .parse(req.body)
    const table = await (prisma as any).diningTable.create({
      data: {
        name: data.name,
        seats: data.seats || 4,
        status: "free",
        organizationId: req.user!.organizationId!,
      },
    })
    res.status(201).json(table)
  } catch (e: any) {
    res.status(400).json({ error: e.message || "DiningTable model missing" })
  }
})

router.patch(
  "/tables/:id",
  requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF),
  async (req, res) => {
    try {
      const id = String(req.params.id)
      const { status } = z.object({ status: z.enum(["free", "busy", "reserved"]) }).parse(req.body)
      const updated = await (prisma as any).diningTable.update({
        where: { id },
        data: { status },
      })
      res.json(updated)
    } catch {
      res.status(400).json({ error: "Failed" })
    }
  }
)

router.get("/expenses", async (req, res) => {
  const list = await prisma.expense.findMany({
    where: { organizationId: req.user!.organizationId! },
    orderBy: { createdAt: "desc" },
    take: 100,
  })
  res.json(list)
})

router.post("/expenses", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const data = z
      .object({
        name: z.string().min(1),
        amount: z.number().positive(),
        note: z.string().optional(),
      })
      .parse(req.body)

    const row = await prisma.expense.create({
      data: {
        name: data.name,
        amount: data.amount,
        note: data.note,
        organizationId: req.user!.organizationId!,
      },
    })
    res.status(201).json(row)
  } catch (e: any) {
    console.error("expense create", e)
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.delete("/expenses/:id", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const id = String(req.params.id)
  await prisma.expense.deleteMany({
    where: { id, organizationId: req.user!.organizationId! },
  })
  res.json({ ok: true })
})

// POST /api/restaurant/switch-type
router.post(
  "/switch-type",
  requireRole(Role.OWNER),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const confirm = req.body?.confirm === true
      if (!confirm) {
        return res.status(400).json({ error: "confirm must be true" })
      }

      const org = await prisma.organization.findUnique({
        where: { id: organizationId },
      })
      if (!org) return res.status(404).json({ error: "Not found" })

      if (org.type === "RESTAURANT") {
        return res.status(400).json({ error: "Already a restaurant account" })
      }

      if ((org as any).typeSwitchedAt) {
        return res.status(400).json({
          error: "Account type was already switched once",
        })
      }

      if (org.type !== "CAFE") {
        return res.status(400).json({
          error: `Can only switch from CAFE (current: ${org.type})`,
        })
      }

      await prisma.organization.update({
        where: { id: organizationId },
        data: {
          type: "RESTAURANT",
          typeSwitchedAt: new Date(),
        } as any,
      })

      const check = await prisma.organization.findUnique({
        where: { id: organizationId },
      })

      res.json({
        ok: true,
        type: check?.type,
        typeSwitchedAt: (check as any)?.typeSwitchedAt,
        message:
          "Switched to restaurant. Menus and stock kept. Billing uses restaurant rate.",
      })
    } catch (e: any) {
      console.error("switch-type", e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)
export default router
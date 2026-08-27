import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { OrderStatus, Role } from "@prisma/client"

const router = Router()
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
  })
})

router.patch("/settings", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const data = z
      .object({
        openTime: z.string().optional(),
        closeTime: z.string().optional(),
      })
      .parse(req.body)
    const org = await prisma.organization.update({
      where: { id: req.user!.organizationId! },
      data,
    })
    res.json({ openTime: org.openTime, closeTime: org.closeTime })
  } catch (err: any) {
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

router.post("/reservations", requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF), async (req, res) => {
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
})

router.patch("/reservations/:id/status", requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF), async (req, res) => {
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
    const updated = await prisma.reservation.update({ where: { id: r.id }, data: { status } })
    res.json(updated)
  } catch {
    res.status(500).json({ error: "Failed" })
  }
})

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

  // Daily chart: today by hour
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

  const lowStock = await prisma.menuItem.findMany({
    where: { organizationId, stockQty: { not: null, lte: 10 } },
    orderBy: { stockQty: "asc" },
    take: 10,
  })

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

  let health = 50
  if (weekOrders >= 5) health += 10
  if (weekOrders >= 20) health += 10
  if (todaySales > 0) health += 10
  if (lowStock.length === 0) health += 10
  if (activeOrders < 20) health += 10
  health = Math.min(100, health)

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

router.get("/payment-report", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const since = new Date()
  since.setDate(since.getDate() - 7)

  const orders = await prisma.order.findMany({
    where: {
      organizationId,
      createdAt: { gte: since },
      status: { not: OrderStatus.CANCELLED },
    },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      tableNumber: true,
      total: true,
      paymentMethod: true,
      paymentReceipt: true,
      paidAt: true,
      createdAt: true,
      status: true,
    },
  })

  const byMethod: Record<string, number> = {}
  for (const o of orders) {
    const m = o.paymentMethod || "unknown"
    byMethod[m] = (byMethod[m] || 0) + Number(o.total)
  }

  res.json({ orders, byMethod })
})

router.post("/cleanup-receipts", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const organizationId = req.user!.organizationId!
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - 7)

  const result = await prisma.order.updateMany({
    where: {
      organizationId,
      paidAt: { lt: cutoff },
      paymentReceipt: { not: null },
    },
    data: { paymentReceipt: null },
  })
  res.json({ ok: true, cleared: result.count })
})

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
    const data = z.object({ name: z.string().min(1), seats: z.number().int().optional() }).parse(req.body)
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

router.patch("/tables/:id", requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF), async (req, res) => {
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
})

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

export default router
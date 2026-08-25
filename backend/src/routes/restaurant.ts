import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { OrderStatus, Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

// ——— Settings: open/close hours ———
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
    const data = z.object({
      openTime: z.string().optional(),
      closeTime: z.string().optional(),
    }).parse(req.body)
    const org = await prisma.organization.update({
      where: { id: req.user!.organizationId! },
      data,
    })
    res.json({ openTime: org.openTime, closeTime: org.closeTime })
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Failed" })
  }
})

// ——— Reservations ———
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
    const data = z.object({
      guestName: z.string().min(1),
      phone: z.string().optional(),
      partySize: z.number().int().positive().default(2),
      tableNumber: z.string().optional(),
      dateTime: z.string(),
      notes: z.string().optional(),
    }).parse(req.body)

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
    const { status } = z.object({
      status: z.enum(["pending", "confirmed", "seated", "cancelled", "completed"]),
    }).parse(req.body)
    const organizationId = req.user!.organizationId!
    const id = req.params.id as string

    const r = await prisma.reservation.findFirst({ 
      where: { id, organizationId }
     })
    if (!r) return res.status(404).json({ error: "Not found" })
    const updated = await prisma.reservation.update({ where: { id: r.id }, data: { status } })
    res.json(updated)
  } catch (err) {
    res.status(500).json({ error: "Failed" })
  }
})

// ——— Staff ———
router.get("/staff", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const staff = await prisma.user.findMany({
    where: { organizationId },
    select: { id: true, name: true, email: true, role: true, phone: true, createdAt: true },
    orderBy: { name: "asc" },
  })
  res.json(staff)
})

// ——— Analytics: last 7 days + health ———
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

  const todayKey = localDayKey(todayStart)
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

  // Next reservations today
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

// Tables (simple status map stored as JSON on org — or separate model)
// Using MenuItem-style: we'll use a lightweight Table model if exists; else in-memory via notes field is bad.
// Prefer Prisma model DiningTable — if you don't have it, add to schema:

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
    res.status(400).json({ error: e.message || "Add DiningTable model or use free/busy only after schema" })
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
    take: 50,
  })
  res.json(list)
})

router.post("/expenses", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const data = z.object({
    name: z.string().min(1),
    amount: z.number().positive(),
    note: z.string().optional(),
  }).parse(req.body)
  const row = await prisma.expense.create({
    data: { ...data, organizationId: req.user!.organizationId! },
  })
  res.status(201).json(row)
})

// ——— Closing day report ———
router.get("/closing-report", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const todayStart = new Date()
  todayStart.setHours(0, 0, 0, 0)

  const orders = await prisma.order.findMany({
    where: {
      organizationId,
      createdAt: { gte: todayStart },
      status: { not: OrderStatus.CANCELLED },
    },
    include: { items: true },
  })

  const sales = orders.reduce((s, o) => s + Number(o.total), 0)
  const itemCount: Record<string, number> = {}
  for (const o of orders) {
    for (const item of o.items) {
      itemCount[item.name] = (itemCount[item.name] || 0) + item.quantity
    }
  }
  const topItems = Object.entries(itemCount)
    .map(([name, qty]) => ({ name, qty }))
    .sort((a, b) => b.qty - a.qty)
    .slice(0, 5)

  // Rough cost estimate (40% COGS assumption for demo profit)
  const estimatedCost = sales * 0.4
  const estimatedProfit = sales - estimatedCost

  const org = await prisma.organization.findUnique({ where: { id: organizationId } })

  res.json({
    date: todayStart.toISOString().slice(0, 10),
    restaurant: org?.name,
    openTime: org?.openTime || "08:00",
    closeTime: org?.closeTime || "22:00",
    totalSales: Math.round(sales * 100) / 100,
    totalOrders: orders.length,
    estimatedCost: Math.round(estimatedCost * 100) / 100,
    estimatedProfit: Math.round(estimatedProfit * 100) / 100,
    isProfit: estimatedProfit >= 0,
    topItems,
    generatedAt: new Date().toISOString(),
  })
})

export default router


import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js" // confirm this matches bakery.ts's import
import { authenticate, requireOrganization } from "../middleware/auth.js"

const router = Router()
router.use(authenticate, requireOrganization)

function orgId(req: any): string {
  return req.user!.organizationId
}

router.get("/services", async (req: any, res, next) => {
  try {
    const services = await prisma.salonService.findMany({
      where: { organizationId: orgId(req) },
      orderBy: [{ category: "asc" }, { name: "asc" }],
    })
    res.json(services)
  } catch (err) { next(err) }
})

const ServiceSchema = z.object({
  name: z.string().min(1),
  nameAm: z.string().optional(),
  category: z.string().default("General"),
  durationMin: z.number().int().positive().default(30),
  price: z.number().nonnegative(),
})

router.post("/services", async (req: any, res, next) => {
  try {
    const data = ServiceSchema.parse(req.body)
    const service = await prisma.salonService.create({
      data: { ...data, organizationId: orgId(req) },
    })
    res.status(201).json(service)
  } catch (err) { next(err) }
})

router.get("/stylists", async (req: any, res, next) => {
  try {
    const stylists = await prisma.salonStylist.findMany({
      where: { organizationId: orgId(req), active: true },
      orderBy: { fullName: "asc" },
    })
    res.json(stylists)
  } catch (err) { next(err) }
})

const StylistSchema = z.object({
  fullName: z.string().min(1),
  phone: z.string().optional(),
  specialty: z.string().optional(),
  commissionPct: z.number().min(0).max(100).default(0),
})

router.post("/stylists", async (req: any, res, next) => {
  try {
    const data = StylistSchema.parse(req.body)
    const stylist = await prisma.salonStylist.create({
      data: { ...data, organizationId: orgId(req) },
    })
    res.status(201).json(stylist)
  } catch (err) { next(err) }
})

router.get("/appointments", async (req: any, res, next) => {
  try {
    const { date } = req.query as { date?: string }
    const where: any = { organizationId: orgId(req) }
    if (date) {
      const start = new Date(date)
      start.setHours(0, 0, 0, 0)
      const end = new Date(start)
      end.setDate(end.getDate() + 1)
      where.startsAt = { gte: start, lt: end }
    }
    const appointments = await prisma.appointment.findMany({
      where,
      include: { service: true, stylist: true },
      orderBy: { startsAt: "asc" },
    })
    res.json(appointments)
  } catch (err) { next(err) }
})

const AppointmentSchema = z.object({
  clientName: z.string().min(1),
  clientPhone: z.string().optional(),
  serviceId: z.string(),
  stylistId: z.string().optional(),
  startsAt: z.string(),
  notes: z.string().optional(),
})

router.post("/appointments", async (req: any, res, next) => {
  try {
    const data = AppointmentSchema.parse(req.body)
    const service = await prisma.salonService.findUnique({ where: { id: data.serviceId } })
    if (!service) return res.status(404).json({ error: "Service not found" })
    const startsAt = new Date(data.startsAt)
    const endsAt = new Date(startsAt.getTime() + service.durationMin * 60000)
    const appointment = await prisma.appointment.create({
      data: {
        clientName: data.clientName,
        clientPhone: data.clientPhone,
        serviceId: data.serviceId,
        stylistId: data.stylistId,
        startsAt,
        endsAt,
        notes: data.notes,
        organizationId: orgId(req),
      },
      include: { service: true, stylist: true },
    })
    res.status(201).json(appointment)
  } catch (err) { next(err) }
})

const StatusSchema = z.object({
  status: z.enum(["BOOKED", "CONFIRMED", "IN_PROGRESS", "DONE", "CANCELLED", "NO_SHOW"]),
})

router.patch("/appointments/:id/status", async (req: any, res, next) => {
  try {
    const { status } = StatusSchema.parse(req.body)
    const appointment = await prisma.appointment.update({
      where: { id: req.params.id },
      data: { status },
    })
    res.json(appointment)
  } catch (err) { next(err) }
})

const CheckoutSchema = z.object({
  appointmentId: z.string().optional(),
  paymentMethod: z.string().optional(),
  items: z.array(z.object({
    serviceId: z.string().optional(),
    stylistId: z.string().optional(),
    name: z.string(),
    price: z.number().nonnegative(),
    quantity: z.number().int().positive().default(1),
  })).min(1),
})

router.post("/checkout", async (req: any, res, next) => {
  try {
    const data = CheckoutSchema.parse(req.body)
    const total = data.items.reduce((sum: number, i: any) => sum + i.price * i.quantity, 0)
    const sale = await prisma.salonSale.create({
      data: {
        total,
        paymentMethod: data.paymentMethod,
        appointmentId: data.appointmentId,
        organizationId: orgId(req),
        staffId: req.user!.id, // confirm JwtPayload has `id` — flag if it's named differently
        items: { create: data.items },
      },
      include: { items: true },
    })
    if (data.appointmentId) {
      await prisma.appointment.update({
        where: { id: data.appointmentId },
        data: { status: "DONE" },
      })
    }
    res.status(201).json(sale)
  } catch (err) { next(err) }
})

router.get("/dashboard", async (req: any, res, next) => {
  try {
    const org = orgId(req)
    const start = new Date()
    start.setHours(0, 0, 0, 0)
    const end = new Date(start)
    end.setDate(end.getDate() + 1)
    const [todaySales, todayAppointments, stylistCount, serviceCount] = await Promise.all([
      prisma.salonSale.findMany({ where: { organizationId: org, createdAt: { gte: start, lt: end } } }),
      prisma.appointment.findMany({
        where: { organizationId: org, startsAt: { gte: start, lt: end } },
        include: { service: true, stylist: true },
        orderBy: { startsAt: "asc" },
      }),
      prisma.salonStylist.count({ where: { organizationId: org, active: true } }),
      prisma.salonService.count({ where: { organizationId: org, active: true } }),
    ])
    const totalSales = todaySales.reduce((sum: number, s: any) => sum + Number(s.total), 0)
    res.json({ todaySalesTotal: totalSales, todaySalesCount: todaySales.length, todayAppointments, stylistCount, serviceCount })
  } catch (err) { next(err) }
})

router.get("/reports", async (req: any, res, next) => {
  try {
    const org = orgId(req)
    const range = (req.query.range as string) || "day"
    const dateStr = (req.query.date as string) || new Date().toISOString().slice(0, 10)
    const base = new Date(dateStr)

    let start: Date, end: Date
    if (range === "day") {
      start = new Date(base); start.setHours(0, 0, 0, 0)
      end = new Date(start); end.setDate(end.getDate() + 1)
    } else if (range === "month") {
      start = new Date(base.getFullYear(), base.getMonth(), 1)
      end = new Date(base.getFullYear(), base.getMonth() + 1, 1)
    } else {
      start = new Date(base.getFullYear(), 0, 1)
      end = new Date(base.getFullYear() + 1, 0, 1)
    }

    const sales = await prisma.salonSale.findMany({
      where: { organizationId: org, createdAt: { gte: start, lt: end } },
      include: { items: true },
    })
    const appointmentCount = await prisma.appointment.count({
      where: { organizationId: org, startsAt: { gte: start, lt: end } },
    })
    const totalRevenue = sales.reduce((sum: number, s: any) => sum + Number(s.total), 0)

    const serviceTotals: Record<string, { name: string; count: number; revenue: number }> = {}
    for (const s of sales) {
      for (const item of s.items as any[]) {
        const key = item.serviceId || item.name
        if (!serviceTotals[key]) serviceTotals[key] = { name: item.name, count: 0, revenue: 0 }
        serviceTotals[key].count += item.quantity
        serviceTotals[key].revenue += Number(item.price) * item.quantity
      }
    }
    const topServices = Object.values(serviceTotals).sort((a, b) => b.revenue - a.revenue).slice(0, 5)

    res.json({ range, totalRevenue, saleCount: sales.length, appointmentCount, topServices })
  } catch (err) { next(err) }
})

router.get("/reviews", async (req: any, res, next) => {
  try {
    const org = orgId(req)
    const reviews = await prisma.salonReview.findMany({ where: { organizationId: org }, orderBy: { createdAt: "desc" }, take: 50 })
    const avg = reviews.length ? reviews.reduce((s: number, r: any) => s + r.rating, 0) / reviews.length : 0
    res.json({ reviews, averageRating: Math.round(avg * 10) / 10, totalReviews: reviews.length })
  } catch (err) { next(err) }
})

const PhotoSchema = z.object({ photoUrl: z.string().nullable() })
router.patch("/photo", async (req: any, res, next) => {
  try {
    const { photoUrl } = PhotoSchema.parse(req.body)
    await prisma.organization.update({ where: { id: orgId(req) }, data: { photoUrl } })
    res.json({ ok: true })
  } catch (err) { next(err) }
})

export default router
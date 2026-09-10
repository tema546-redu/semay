import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"

const router = Router()

router.get("/:orgId", async (req, res, next) => {
  try {
    const org = await prisma.organization.findUnique({
      where: { id: req.params.orgId },
      select: { id: true, name: true, photoUrl: true, logo: true, openTime: true, closeTime: true, address: true, city: true },
    })
    if (!org) return res.status(404).json({ error: "Not found" })
    const [services, stylists] = await Promise.all([
      prisma.salonService.findMany({ where: { organizationId: org.id, active: true }, orderBy: [{ category: "asc" }, { name: "asc" }] }),
      prisma.salonStylist.findMany({ where: { organizationId: org.id, active: true }, select: { id: true, fullName: true, specialty: true } }),
    ])
    res.json({ organization: org, services, stylists })
  } catch (err) { next(err) }
})

router.get("/:orgId/availability", async (req, res, next) => {
  try {
    const { date, serviceId, stylistId } = req.query as { date?: string; serviceId?: string; stylistId?: string }
    if (!date || !serviceId) return res.status(400).json({ error: "date and serviceId required" })

    const org = await prisma.organization.findUnique({ where: { id: req.params.orgId } })
    const service = await prisma.salonService.findUnique({ where: { id: serviceId } })
    if (!org || !service) return res.status(404).json({ error: "Not found" })

    const [openH, openM] = (org.openTime || "08:00").split(":").map(Number)
    const [closeH, closeM] = (org.closeTime || "20:00").split(":").map(Number)
    const dayStart = new Date(date); dayStart.setHours(openH, openM, 0, 0)
    const dayEnd = new Date(date); dayEnd.setHours(closeH, closeM, 0, 0)

    const where: any = {
      organizationId: org.id,
      startsAt: { gte: new Date(date + "T00:00:00"), lt: new Date(date + "T23:59:59") },
      status: { notIn: ["CANCELLED", "NO_SHOW"] },
    }
    if (stylistId) where.stylistId = stylistId
    const existing = await prisma.appointment.findMany({ where })

    const slots: string[] = []
    const step = 15
    for (let t = new Date(dayStart); t.getTime() + service.durationMin * 60000 <= dayEnd.getTime(); t = new Date(t.getTime() + step * 60000)) {
      const slotEnd = new Date(t.getTime() + service.durationMin * 60000)
      const conflict = stylistId ? existing.some((a) => t < a.endsAt && slotEnd > a.startsAt) : false
      if (!conflict) slots.push(t.toISOString())
    }
    res.json({ slots })
  } catch (err) { next(err) }
})

const BookSchema = z.object({
  clientName: z.string().min(1),
  clientPhone: z.string().optional(),
  serviceId: z.string(),
  stylistId: z.string().optional(),
  startsAt: z.string(),
})

router.post("/:orgId/book", async (req, res, next) => {
  try {
    const data = BookSchema.parse(req.body)
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
        organizationId: req.params.orgId,
      },
    })
    res.status(201).json(appointment)
  } catch (err) { next(err) }
})

router.get("/:orgId/reviews", async (req, res, next) => {
  try {
    const reviews = await prisma.salonReview.findMany({ where: { organizationId: req.params.orgId }, orderBy: { createdAt: "desc" }, take: 20 })
    const avg = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0
    res.json({ reviews, averageRating: Math.round(avg * 10) / 10, totalReviews: reviews.length })
  } catch (err) { next(err) }
})

const ReviewSchema = z.object({ clientName: z.string().min(1), rating: z.number().int().min(1).max(5), comment: z.string().optional() })
router.post("/:orgId/reviews", async (req, res, next) => {
  try {
    const data = ReviewSchema.parse(req.body)
    const review = await prisma.salonReview.create({ data: { ...data, organizationId: req.params.orgId } })
    res.status(201).json(review)
  } catch (err) { next(err) }
})

export default router
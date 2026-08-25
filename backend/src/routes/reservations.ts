import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

router.get("/", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const date = req.query.date as string | undefined
  const where: any = { organizationId }

  if (date) {
    const start = new Date(date)
    start.setHours(0, 0, 0, 0)
    const end = new Date(date)
    end.setHours(23, 59, 59, 999)
    where.reservedAt = { gte: start, lte: end }
  }

  const list = await prisma.reservation.findMany({
    where,
    orderBy: { reservedAt: "asc" },
  })
  res.json(list)
})

router.post("/", requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF), async (req, res) => {
  try {
    const data = z
      .object({
        guestName: z.string().min(1),
        phone: z.string().optional(),
        partySize: z.number().int().min(1).max(50),
        reservedAt: z.string(),
        tableNumber: z.string().optional(),
        notes: z.string().optional(),
      })
      .parse(req.body)

    const reservation = await prisma.reservation.create({
      data: {
        guestName: data.guestName,
        phone: data.phone,
        partySize: data.partySize,
        reservedAt: new Date(data.reservedAt),
        tableNumber: data.tableNumber,
        notes: data.notes,
        status: "CONFIRMED",
        organizationId: req.user!.organizationId!,
      },
    })
    res.status(201).json(reservation)
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    console.error(err)
    res.status(500).json({ error: "Failed to create reservation" })
  }
})

router.patch("/:id/status", requireRole(Role.OWNER, Role.MANAGER, Role.WAITER, Role.STAFF), async (req, res) => {
  try {
    const id = String(req.params.id)
    const { status } = z
      .object({
        status: z.enum(["CONFIRMED", "SEATED", "COMPLETED", "CANCELLED", "NO_SHOW"]),
      })
      .parse(req.body)

    const organizationId = req.user!.organizationId!
    const existing = await prisma.reservation.findFirst({
      where: { id, organizationId },
    })
    if (!existing) return res.status(404).json({ error: "Not found" })

    const updated = await prisma.reservation.update({
      where: { id: existing.id },
      data: { status },
    })
    res.json(updated)
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    res.status(500).json({ error: "Failed to update" })
  }
})

router.delete("/:id", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const id = String(req.params.id)
  const organizationId = req.user!.organizationId!
  const existing = await prisma.reservation.findFirst({
    where: { id, organizationId },
  })
  if (!existing) return res.status(404).json({ error: "Not found" })
  await prisma.reservation.delete({ where: { id: existing.id } })
  res.json({ ok: true })
})

export default router
import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

router.get("/rooms", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const rooms = await prisma.hotelRoom.findMany({
    where: { organizationId },
    orderBy: [{ floor: "asc" }, { number: "asc" }],
  })
  res.json(rooms)
})

router.post("/rooms", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const data = z.object({
      number: z.string().min(1),
      type: z.enum(["single", "double", "suite"]),
      price: z.number().positive(),
      floor: z.number().int().optional(),
    }).parse(req.body)

    const room = await prisma.hotelRoom.create({
      data: { ...data, organizationId: req.user!.organizationId! },
    })
    res.status(201).json(room)
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    res.status(500).json({ error: "Failed to create room" })
  }
})

router.patch("/rooms/:id/status", requireRole(Role.OWNER, Role.MANAGER, Role.STAFF), async (req, res) => {
  try {
    const { status } = z.object({
      status: z.enum(["available", "occupied", "cleaning"]),
    }).parse(req.body)

    const organizationId = req.user!.organizationId!
    const id = req.params.id as string
    
    const room = await prisma.hotelRoom.findFirst({
      where: { id, organizationId },
    })
    if (!room) return res.status(404).json({ error: "Room not found" })

    const updated = await prisma.hotelRoom.update({
      where: { id: room.id },
      data: { status },
    })
    res.json(updated)
  } catch (err: any) {
    res.status(500).json({ error: "Failed to update room" })
  }
})

router.get("/stats", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const rooms = await prisma.hotelRoom.findMany({ where: { organizationId } })
  const total = rooms.length
  const available = rooms.filter((r) => r.status === "available").length
  const occupied = rooms.filter((r) => r.status === "occupied").length
  const cleaning = rooms.filter((r) => r.status === "cleaning").length
  res.json({ total, available, occupied, cleaning })
})

export default router

import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

function dayStart(isoDate: string) {
  return new Date(isoDate.slice(0, 10) + "T00:00:00.000Z")
}

router.get(
  "/",
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const year = Number(req.query.year) || new Date().getFullYear()
      const month = Number(req.query.month) || new Date().getMonth() + 1

      const start = new Date(Date.UTC(year, month - 1, 1))
      const end = new Date(Date.UTC(year, month, 1))

      const users = await prisma.user.findMany({
        where: { organizationId },
        select: { id: true, name: true, role: true },
        orderBy: { name: "asc" },
      })

      const rows = await prisma.staffAttendance.findMany({
        where: {
          organizationId,
          date: { gte: start, lt: end },
        },
      })

      res.json({
        year,
        month,
        users,
        records: rows.map((r) => ({
          id: r.id,
          userId: r.userId,
          date: r.date.toISOString().slice(0, 10),
          status: r.status,
          note: r.note,
          checkIn: r.checkIn,
          checkOut: r.checkOut,
        })),
      })
    } catch (e: any) {
      console.error(e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

router.post(
  "/",
  requireRole(Role.OWNER, Role.MANAGER),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const data = z
        .object({
          userId: z.string(),
          date: z.string(),
          status: z.enum(["PRESENT", "ABSENT", "LATE", "HALF", "OFF"]),
          note: z.string().optional(),
        })
        .parse(req.body)

      const date = dayStart(data.date)

      const member = await prisma.user.findFirst({
        where: { id: data.userId, organizationId },
      })
      if (!member) return res.status(404).json({ error: "Staff not found" })

      const row = await prisma.staffAttendance.upsert({
        where: {
          userId_date: { userId: data.userId, date },
        },
        create: {
          userId: data.userId,
          organizationId,
          date,
          status: data.status,
          note: data.note,
          checkIn:
            data.status === "PRESENT" || data.status === "LATE" ? new Date() : null,
        },
        update: {
          status: data.status,
          note: data.note,
        },
      })

      res.json(row)
    } catch (e: any) {
      if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
      console.error(e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

export default router
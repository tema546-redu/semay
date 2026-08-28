import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

function dayBounds(input?: string) {
  const date = input ? new Date(input) : new Date()
  date.setHours(0, 0, 0, 0)
  const nextDay = new Date(date)
  nextDay.setDate(nextDay.getDate() + 1)
  return { date, nextDay }
}

async function getOrCreateSchool(organizationId: string) {
  let school = await prisma.school.findUnique({ where: { organizationId } })
  if (!school) {
    school = await prisma.school.create({
      data: { name: "School", organizationId, level: "secondary" },
    })
  }
  return school
}

// ——— Students ———
router.get("/students", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const school = await prisma.school.findUnique({ where: { organizationId } })
  if (!school) return res.json([])

  const students = await prisma.student.findMany({
    where: { schoolId: school.id },
    include: { grade: true },
    orderBy: { fullName: "asc" },
  })
  res.json(students)
})

router.post(
  "/students",
  requireRole(Role.OWNER, Role.DIRECTOR, Role.MANAGER),
  async (req, res) => {
    try {
      const data = z
        .object({
          fullName: z.string().min(2),
          fullNameAm: z.string().optional(),
          gender: z.string().optional(),
          gradeId: z.string().optional(),
        })
        .parse(req.body)

      const school = await getOrCreateSchool(req.user!.organizationId!)

      const student = await prisma.student.create({
        data: {
          fullName: data.fullName,
          fullNameAm: data.fullNameAm,
          gender: data.gender,
          schoolId: school.id,
          gradeId: data.gradeId,
        },
      })
      res.status(201).json(student)
    } catch (err: any) {
      if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
      console.error(err)
      res.status(500).json({ error: "Failed to create student" })
    }
  }
)

// ——— Grades ———
router.get("/grades", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const school = await prisma.school.findUnique({ where: { organizationId } })
  if (!school) return res.json([])

  const grades = await prisma.grade.findMany({
    where: { schoolId: school.id },
    include: { _count: { select: { students: true } } },
    orderBy: { level: "asc" },
  })
  res.json(grades)
})

router.post(
  "/grades",
  requireRole(Role.OWNER, Role.DIRECTOR, Role.MANAGER),
  async (req, res) => {
    try {
      const data = z
        .object({
          name: z.string().min(1),
          nameAm: z.string().optional(),
          level: z.number().int().optional(),
        })
        .parse(req.body)

      const school = await getOrCreateSchool(req.user!.organizationId!)

      const grade = await prisma.grade.create({
        data: {
          name: data.name,
          nameAm: data.nameAm,
          level: data.level,
          schoolId: school.id,
        },
      })
      res.status(201).json(grade)
    } catch (err: any) {
      if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
      res.status(500).json({ error: "Failed to create grade" })
    }
  }
)

// ——— Student attendance (school) ———
router.get("/attendance", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const school = await prisma.school.findUnique({ where: { organizationId } })
  if (!school) return res.json([])

  const { date, nextDay } = dayBounds(req.query.date as string | undefined)

  const records = await prisma.attendance.findMany({
    where: {
      student: { schoolId: school.id },
      date: { gte: date, lt: nextDay },
    },
    include: { student: true },
  })
  res.json(records)
})

router.post(
  "/attendance",
  requireRole(Role.OWNER, Role.DIRECTOR, Role.TEACHER, Role.MANAGER),
  async (req, res) => {
    try {
      const data = z
        .object({
          studentId: z.string(),
          status: z.enum(["present", "absent", "late", "PRESENT", "ABSENT", "LATE"]),
          note: z.string().optional(),
          date: z.string().optional(),
        })
        .parse(req.body)

      const { date } = dayBounds(data.date)
      const status = data.status.toLowerCase()

      const record = await prisma.attendance.upsert({
        where: {
          studentId_date: {
            studentId: data.studentId,
            date,
          },
        },
        create: {
          studentId: data.studentId,
          date,
          status,
          note: data.note,
        },
        update: {
          status,
          note: data.note,
        },
      })

      res.status(201).json(record)
    } catch (err: any) {
      if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
      console.error(err)
      res.status(500).json({ error: err.message || "Failed to mark attendance" })
    }
  }
)

export default router
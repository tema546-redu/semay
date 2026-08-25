import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

// Get students
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

// Create student
router.post("/students", requireRole(Role.OWNER, Role.DIRECTOR, Role.MANAGER), async (req, res) => {
  try {
    const data = z.object({
      fullName: z.string().min(2),
      fullNameAm: z.string().optional(),
      gender: z.string().optional(),
      gradeId: z.string().optional(),
    }).parse(req.body)

    const organizationId = req.user!.organizationId!
    let school = await prisma.school.findUnique({ where: { organizationId } })
    if (!school) {
      school = await prisma.school.create({
        data: { name: "School", organizationId, level: "secondary" },
      })
    }

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
    console.error(err)
    res.status(500).json({ error: "Failed to create student" })
  }
})

// Attendance for a date
router.get("/attendance", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const school = await prisma.school.findUnique({ where: { organizationId } })
  if (!school) return res.json([])

  const date = req.query.date ? new Date(req.query.date as string) : new Date()
  date.setHours(0, 0, 0, 0)
  const nextDay = new Date(date)
  nextDay.setDate(nextDay.getDate() + 1)

  const records = await prisma.attendance.findMany({
    where: {
      student: { schoolId: school.id },
      date: { gte: date, lt: nextDay },
    },
    include: { student: true },
  })
  res.json(records)
})

// Mark attendance
router.post("/attendance", requireRole(Role.OWNER, Role.DIRECTOR, Role.TEACHER, Role.MANAGER), async (req, res) => {
  try {
    const data = z.object({
      studentId: z.string(),
      status: z.enum(["present", "absent", "late"]),
      note: z.string().optional(),
    }).parse(req.body)

    const record = await prisma.attendance.create({
      data: {
        studentId: data.studentId,
        status: data.status,
        note: data.note,
      },
    })
    res.status(201).json(record)
  } catch (err) {
    res.status(500).json({ error: "Failed to mark attendance" })
  }
})

export default router

// Grades
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

router.post("/grades", requireRole(Role.OWNER, Role.DIRECTOR, Role.MANAGER), async (req, res) => {
  try {
    const data = z.object({
      name: z.string().min(1),
      nameAm: z.string().optional(),
      level: z.number().int().optional(),
    }).parse(req.body)

    const organizationId = req.user!.organizationId!
    let school = await prisma.school.findUnique({ where: { organizationId } })
    if (!school) {
      school = await prisma.school.create({
        data: { name: "School", organizationId, level: "secondary" },
      })
    }
    const grade = await prisma.grade.create({
      data: { name: data.name, nameAm: data.nameAm, level: data.level, schoolId: school.id },
    })
    res.status(201).json(grade)
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    res.status(500).json({ error: "Failed to create grade" })
  }
})

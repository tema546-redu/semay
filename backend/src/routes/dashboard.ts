import { Router } from "express"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { OrderStatus, Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

router.get("/stats", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const startOfDay = new Date()
  startOfDay.setHours(0, 0, 0, 0)

  const org = await prisma.organization.findUnique({ where: { id: organizationId } })
  const isSchool = org?.type === "SCHOOL" || org?.type === "UNIVERSITY"

  if (isSchool) {
    const school = await prisma.school.findUnique({ where: { organizationId } })
    const studentCount = school
      ? await prisma.student.count({ where: { schoolId: school.id } })
      : 0
    const todayAttendance = school
      ? await prisma.attendance.count({
          where: {
            student: { schoolId: school.id },
            date: { gte: startOfDay },
            status: "present",
          },
        })
      : 0
    return res.json({ type: "school", students: studentCount, presentToday: todayAttendance })
  }

  // Restaurant stats
  const todayOrders = await prisma.order.findMany({
    where: {
      organizationId,
      createdAt: { gte: startOfDay },
      status: { not: OrderStatus.CANCELLED },
    },
    select: { total: true, status: true, tableNumber: true },
  })

  const todaySales = todayOrders.reduce((s, o) => s + Number(o.total), 0)
  const activeOrders = await prisma.order.count({
    where: {
      organizationId,
      status: { in: [OrderStatus.SENT, OrderStatus.PREPARING, OrderStatus.READY] },
    },
  })
  const openTables = new Set(
    (await prisma.order.findMany({
      where: {
        organizationId,
        status: { in: [OrderStatus.SENT, OrderStatus.PREPARING, OrderStatus.READY, OrderStatus.OPEN] },
      },
      select: { tableNumber: true },
    })).map((o) => o.tableNumber)
  ).size

  res.json({
    type: "restaurant",
    todaySales: Math.round(todaySales * 100) / 100,
    todayOrders: todayOrders.length,
    activeOrders,
    openTables,
  })
})

export default router

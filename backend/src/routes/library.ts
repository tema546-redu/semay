import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()

function dayStart() {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

function normalizeName(s: string) {
  return s.trim().replace(/\s+/g, " ")
}

function zodMessage(e: any): string {
  if (e?.errors && Array.isArray(e.errors)) {
    return e.errors.map((x: any) => x.message).join(", ")
  }
  return e?.message || "Invalid request"
}

function frontendBase() {
  return (process.env.FRONTEND_URL || "https://semaiy.netlify.app").replace(/\/$/, "")
}

// ========== PUBLIC (no auth) ==========

router.get("/public/list", async (_req, res) => {
  const orgs = await prisma.organization.findMany({
    where: { type: "LIBRARY" as any },
    select: {
      id: true,
      name: true,
      address: true,
      city: true,
      phone: true,
      isOpen: true,
      inviteCode: true,
      openTime: true,
      closeTime: true,
      photoUrl: true,
    },
    orderBy: { name: "asc" },
  })
  res.json(orgs)
})

router.get("/public/:orgId", async (req, res) => {
  const id = String(req.params.orgId)
  const org = await prisma.organization.findFirst({
    where: { id, type: "LIBRARY" as any },
    select: {
      id: true,
      name: true,
      address: true,
      city: true,
      phone: true,
      isOpen: true,
      openTime: true,
      closeTime: true,
      inviteCode: true,
      photoUrl: true,
    },
  })
  if (!org) return res.status(404).json({ error: "Not found" })

  const [books, reviewAgg] = await Promise.all([
    prisma.book.findMany({
      where: { organizationId: id },
      orderBy: { title: "asc" },
    }),
    prisma.libraryReview.aggregate({
      where: { organizationId: id },
      _avg: { rating: true },
      _count: { rating: true },
    }),
  ])

  res.json({
    library: org,
    books,
    averageRating: reviewAgg._avg.rating ? Number(reviewAgg._avg.rating.toFixed(1)) : 0,
    totalReviews: reviewAgg._count.rating,
  })
})

router.get("/public/:orgId/suggest-names", async (req, res) => {
  const q = String(req.query.q || "").trim()
  if (q.length < 1) return res.json([])
  const organizationId = String(req.params.orgId)
  const rows = await prisma.libraryVisit.findMany({
    where: {
      organizationId,
      visitorName: { contains: q, mode: "insensitive" },
    },
    take: 40,
    orderBy: { createdAt: "desc" },
    select: { visitorName: true },
  })
  const seen = new Set<string>()
  const names: string[] = []
  for (const r of rows) {
    const n = normalizeName(r.visitorName)
    const key = n.toLowerCase()
    if (!seen.has(key)) {
      seen.add(key)
      names.push(n)
    }
    if (names.length >= 8) break
  }
  res.json(names)
})

router.post("/public/:orgId/check-in", async (req, res) => {
  try {
    const data = z
      .object({
        visitorName: z.string().min(2),
        phone: z.string().optional(),
      })
      .parse(req.body)
    const organizationId = String(req.params.orgId)
    const visitorName = normalizeName(data.visitorName)

    const org = await prisma.organization.findFirst({
      where: { id: organizationId, type: "LIBRARY" as any },
    })
    if (!org) return res.status(404).json({ error: "Library not found" })

    const since = dayStart()
    const existing = await prisma.libraryVisit.findFirst({
      where: {
        organizationId,
        createdAt: { gte: since },
        visitorName: { equals: visitorName, mode: "insensitive" },
      },
    })
    if (existing) {
      return res.status(409).json({
        error: "Already marked present today",
        visit: existing,
      })
    }

    const visit = await prisma.libraryVisit.create({
      data: {
        visitorName,
        phone: data.phone,
        organizationId,
      },
    })
    res.status(201).json(visit)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: zodMessage(e) })
    res.status(500).json({ error: "Failed" })
  }
})

router.get("/public/:orgId/reviews", async (req, res) => {
  const organizationId = String(req.params.orgId)
  const [reviewList, agg] = await Promise.all([
    prisma.libraryReview.findMany({
      where: { organizationId },
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
    prisma.libraryReview.aggregate({
      where: { organizationId },
      _avg: { rating: true },
      _count: { rating: true },
    }),
  ])
  res.json({
    reviews: reviewList,
    averageRating: agg._avg.rating ? Number(agg._avg.rating.toFixed(1)) : 0,
    totalReviews: agg._count.rating,
  })
})

router.post("/public/:orgId/reviews", async (req, res) => {
  try {
    const data = z
      .object({
        visitorName: z.string().min(2),
        rating: z.number().int().min(1).max(5),
        comment: z.string().max(500).optional(),
      })
      .parse(req.body)
    const organizationId = String(req.params.orgId)
    const org = await prisma.organization.findFirst({
      where: { id: organizationId, type: "LIBRARY" as any },
    })
    if (!org) return res.status(404).json({ error: "Library not found" })
    const review = await prisma.libraryReview.create({
      data: {
        visitorName: data.visitorName.trim(),
        rating: data.rating,
        comment: data.comment,
        organizationId,
      },
    })
    res.status(201).json(review)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: zodMessage(e) })
    res.status(500).json({ error: "Failed to save review" })
  }
})

// ========== AUTH ==========
router.use(authenticate, requireOrganization)

// ——— L1 Door: today register / suggest / check-in ———

router.get(
  "/visits/today",
  requireRole(Role.OWNER, Role.MANAGER, Role.STAFF, Role.WAITER),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const since = dayStart()
      const visits = await prisma.libraryVisit.findMany({
        where: { organizationId, createdAt: { gte: since } },
        orderBy: { createdAt: "asc" },
        select: { id: true, visitorName: true, createdAt: true },
      })
      res.json({
        date: since.toISOString().slice(0, 10),
        count: visits.length,
        visits: visits.map((v) => ({
          id: v.id,
          visitorName: v.visitorName,
          name: v.visitorName,
          createdAt: v.createdAt,
        })),
      })
    } catch (e: any) {
      console.error(e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

router.get(
  "/visits/suggest",
  requireRole(Role.OWNER, Role.MANAGER, Role.STAFF, Role.WAITER),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const q = String(req.query.q || "").trim()
      if (q.length < 1) return res.json([])

      const rows = await prisma.libraryVisit.findMany({
        where: {
          organizationId,
          visitorName: { contains: q, mode: "insensitive" },
        },
        select: { visitorName: true },
        orderBy: { createdAt: "desc" },
        take: 40,
      })

      const seen = new Set<string>()
      const names: string[] = []
      for (const r of rows) {
        const n = normalizeName(r.visitorName)
        const key = n.toLowerCase()
        if (!seen.has(key)) {
          seen.add(key)
          names.push(n)
        }
        if (names.length >= 8) break
      }
      res.json(names)
    } catch (e: any) {
      console.error(e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

router.post(
  "/visits/check-in",
  requireRole(Role.OWNER, Role.MANAGER, Role.STAFF, Role.WAITER),
  async (req, res) => {
    try {
      const organizationId = req.user!.organizationId!
      const body = z.object({ visitorName: z.string().min(2).max(120) }).parse(req.body)
      const visitorName = normalizeName(body.visitorName)
      const since = dayStart()

      const existing = await prisma.libraryVisit.findFirst({
        where: {
          organizationId,
          createdAt: { gte: since },
          visitorName: { equals: visitorName, mode: "insensitive" },
        },
      })
      if (existing) {
        return res.status(409).json({
          error: "Already marked present today",
          visit: {
            id: existing.id,
            visitorName: existing.visitorName,
            createdAt: existing.createdAt,
          },
        })
      }

      const visit = await prisma.libraryVisit.create({
        data: { organizationId, visitorName },
      })
      res.status(201).json({
        id: visit.id,
        visitorName: visit.visitorName,
        name: visit.visitorName,
        createdAt: visit.createdAt,
        message: "Present",
      })
    } catch (e: any) {
      if (e.name === "ZodError") return res.status(400).json({ error: zodMessage(e) })
      console.error(e)
      res.status(500).json({ error: e.message || "Failed" })
    }
  }
)

router.get("/dashboard", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const since = dayStart()
  const [visitsToday, books, openLoans, top, org] = await Promise.all([
    prisma.libraryVisit.count({
      where: { organizationId, createdAt: { gte: since } },
    }),
    prisma.book.count({ where: { organizationId } }),
    prisma.bookLoan.count({
      where: { organizationId, returnedAt: null },
    }),
    prisma.libraryVisit.groupBy({
      by: ["visitorName"],
      where: { organizationId, createdAt: { gte: since } },
      _count: { visitorName: true },
      orderBy: { _count: { visitorName: "desc" } },
      take: 10,
    }),
    prisma.organization.findUnique({
      where: { id: organizationId },
      select: {
        isOpen: true,
        inviteCode: true,
        name: true,
        photoUrl: true,
        isGovernment: true,
        openTime: true,
        closeTime: true,
      },
    }),
  ])

  res.json({
    visitsToday,
    bookCount: books,
    openLoans,
    topVisitors: top.map((t) => ({
      name: t.visitorName,
      count: t._count.visitorName,
    })),
    isOpen: org?.isOpen ?? true,
    inviteCode: org?.inviteCode,
    name: org?.name,
    photoUrl: org?.photoUrl,
    isGovernment: org?.isGovernment ?? false,
    openTime: org?.openTime || "08:00",
    closeTime: org?.closeTime || "22:00",
  })
})

router.patch("/status", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const { isOpen } = z.object({ isOpen: z.boolean() }).parse(req.body)
  const org = await prisma.organization.update({
    where: { id: req.user!.organizationId! },
    data: { isOpen },
  })
  res.json({ isOpen: org.isOpen })
})

router.get("/settings", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const org = await prisma.organization.findUnique({
    where: { id: organizationId },
    select: {
      name: true,
      openTime: true,
      closeTime: true,
      photoUrl: true,
      address: true,
      city: true,
      phone: true,
      isOpen: true,
    },
  })
  if (!org) return res.status(404).json({ error: "Not found" })
  res.json({
    name: org.name,
    openTime: org.openTime || "08:00",
    closeTime: org.closeTime || "22:00",
    photoUrl: org.photoUrl || null,
    address: org.address || null,
    city: org.city || null,
    phone: org.phone || null,
    isOpen: org.isOpen ?? true,
  })
})

router.patch("/settings", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const data = z
      .object({
        name: z.string().min(1).optional(),
        openTime: z.string().optional(),
        closeTime: z.string().optional(),
        photoUrl: z.string().nullable().optional(),
        address: z.string().optional(),
        city: z.string().optional(),
        phone: z.string().optional(),
      })
      .parse(req.body)

    const organizationId = req.user!.organizationId!
    const org = await prisma.organization.update({
      where: { id: organizationId },
      data: {
        ...(data.name != null && { name: data.name }),
        ...(data.openTime != null && { openTime: data.openTime }),
        ...(data.closeTime != null && { closeTime: data.closeTime }),
        ...(data.photoUrl !== undefined && { photoUrl: data.photoUrl }),
        ...(data.address != null && { address: data.address }),
        ...(data.city != null && { city: data.city }),
        ...(data.phone != null && { phone: data.phone }),
      },
      select: {
        name: true,
        openTime: true,
        closeTime: true,
        photoUrl: true,
        address: true,
        city: true,
        phone: true,
      },
    })
    res.json(org)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: zodMessage(e) })
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.patch("/photo", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const { photoUrl } = z.object({ photoUrl: z.string().nullable() }).parse(req.body)
    const org = await prisma.organization.update({
      where: { id: req.user!.organizationId! },
      data: { photoUrl },
    })
    res.json({ photoUrl: org.photoUrl })
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: zodMessage(e) })
    res.status(500).json({ error: "Failed" })
  }
})

router.post("/ensure-invite", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const organizationId = req.user!.organizationId!
  let org = await prisma.organization.findUnique({ where: { id: organizationId } })
  if (!org?.inviteCode) {
    const code = Math.random().toString(36).slice(2, 8).toUpperCase()
    org = await prisma.organization.update({
      where: { id: organizationId },
      data: { inviteCode: code },
    })
  }
  const joinUrl = `${frontendBase()}/public/libraries/${organizationId}?code=${org!.inviteCode}`
  res.json({
    inviteCode: org!.inviteCode,
    joinUrl,
  })
})

// Books
router.get("/books", async (req, res) => {
  const list = await prisma.book.findMany({
    where: { organizationId: req.user!.organizationId! },
    orderBy: { title: "asc" },
  })
  res.json(list)
})

router.post("/books", requireRole(Role.OWNER, Role.MANAGER, Role.STAFF), async (req, res) => {
  try {
    const data = z
      .object({
        title: z.string().min(1),
        author: z.string().optional(),
        isbn: z.string().optional(),
        category: z.string().optional(),
        imageUrl: z.string().optional().nullable(),
        copiesTotal: z.number().int().positive().default(1),
      })
      .parse(req.body)
    const book = await prisma.book.create({
      data: {
        ...data,
        copiesAvailable: data.copiesTotal,
        organizationId: req.user!.organizationId!,
      },
    })
    res.status(201).json(book)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: zodMessage(e) })
    res.status(500).json({ error: "Failed" })
  }
})

router.patch("/books/:id", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const id = String(req.params.id)
  const data = z
    .object({
      title: z.string().optional(),
      author: z.string().optional(),
      imageUrl: z.string().nullable().optional(),
      copiesTotal: z.number().int().optional(),
      copiesAvailable: z.number().int().optional(),
    })
    .parse(req.body)
  await prisma.book.updateMany({
    where: { id, organizationId: req.user!.organizationId! },
    data,
  })
  const book = await prisma.book.findUnique({ where: { id } })
  res.json(book)
})

router.delete("/books/:id", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const id = String(req.params.id)
  const organizationId = req.user!.organizationId!
  const book = await prisma.book.findFirst({ where: { id, organizationId } })
  if (!book) return res.status(404).json({ error: "Not found" })
  await prisma.book.delete({ where: { id } })
  res.json({ ok: true })
})

// Loans
router.post("/loans", requireRole(Role.OWNER, Role.MANAGER, Role.STAFF), async (req, res) => {
  try {
    const data = z
      .object({
        bookId: z.string(),
        borrowerName: z.string().min(2),
        nationalId: z.string().min(3),
        phone: z.string().optional(),
        dueAt: z.string().optional(),
      })
      .parse(req.body)
    const organizationId = req.user!.organizationId!
    const book = await prisma.book.findFirst({
      where: { id: data.bookId, organizationId },
    })
    if (!book || book.copiesAvailable < 1) {
      return res.status(400).json({ error: "No copies available" })
    }
    const [loan] = await prisma.$transaction([
      prisma.bookLoan.create({
        data: {
          bookId: data.bookId,
          borrowerName: data.borrowerName,
          nationalId: data.nationalId,
          phone: data.phone,
          dueAt: data.dueAt ? new Date(data.dueAt) : null,
          organizationId,
        },
      }),
      prisma.book.update({
        where: { id: data.bookId },
        data: { copiesAvailable: { decrement: 1 } },
      }),
    ])
    res.status(201).json(loan)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: zodMessage(e) })
    res.status(400).json({ error: e.message || "Failed" })
  }
})

router.post("/loans/:id/return", requireRole(Role.OWNER, Role.MANAGER, Role.STAFF), async (req, res) => {
  const id = String(req.params.id)
  const organizationId = req.user!.organizationId!
  const loan = await prisma.bookLoan.findFirst({
    where: { id, organizationId, returnedAt: null },
  })
  if (!loan) return res.status(404).json({ error: "Not found" })
  await prisma.$transaction([
    prisma.bookLoan.update({
      where: { id },
      data: { returnedAt: new Date() },
    }),
    prisma.book.update({
      where: { id: loan.bookId },
      data: { copiesAvailable: { increment: 1 } },
    }),
  ])
  res.json({ ok: true })
})

router.get("/loans", async (req, res) => {
  const list = await prisma.bookLoan.findMany({
    where: {
      organizationId: req.user!.organizationId!,
      returnedAt: null,
    },
    include: { book: { select: { title: true } } },
    orderBy: { createdAt: "desc" },
  })
  res.json(list)
})

// Tables
router.get("/tables", async (req, res) => {
  const list = await prisma.libraryTable.findMany({
    where: { organizationId: req.user!.organizationId! },
    include: {
      reservations: {
        where: { startsAt: { gte: dayStart() } },
        take: 5,
      },
    },
  })
  res.json(list)
})

router.post("/tables", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const data = z
    .object({ label: z.string(), seats: z.number().int().positive().default(4) })
    .parse(req.body)
  const row = await prisma.libraryTable.create({
    data: { ...data, organizationId: req.user!.organizationId! },
  })
  res.status(201).json(row)
})

router.post("/tables/:id/reserve", async (req, res) => {
  const data = z
    .object({
      guestName: z.string().min(2),
      startsAt: z.string(),
      endsAt: z.string().optional(),
    })
    .parse(req.body)
  const tableId = String(req.params.id)
  const organizationId = req.user!.organizationId!
  const table = await prisma.libraryTable.findFirst({
    where: { id: tableId, organizationId },
  })
  if (!table) return res.status(404).json({ error: "Table not found" })
  const row = await prisma.tableReservation.create({
    data: {
      tableId,
      guestName: data.guestName,
      startsAt: new Date(data.startsAt),
      endsAt: data.endsAt ? new Date(data.endsAt) : null,
      organizationId,
    },
  })
  res.status(201).json(row)
})

// Students + attendance
router.get("/students", async (req, res) => {
  const list = await prisma.libraryStudent.findMany({
    where: { organizationId: req.user!.organizationId! },
    orderBy: { fullName: "asc" },
  })
  res.json(list)
})

router.post("/students", requireRole(Role.OWNER, Role.MANAGER, Role.STAFF), async (req, res) => {
  try {
    const data = z
      .object({
        fullName: z.string().min(2),
        studentCode: z.string().optional(),
        grade: z.string().optional(),
      })
      .parse(req.body)
    const student = await prisma.libraryStudent.create({
      data: { ...data, organizationId: req.user!.organizationId! },
    })
    res.status(201).json(student)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: zodMessage(e) })
    res.status(500).json({ error: "Failed" })
  }
})

router.delete("/students/:id", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const id = String(req.params.id)
  const organizationId = req.user!.organizationId!
  const student = await prisma.libraryStudent.findFirst({ where: { id, organizationId } })
  if (!student) return res.status(404).json({ error: "Not found" })
  await prisma.libraryStudent.delete({ where: { id } })
  res.json({ ok: true })
})

router.post("/students/:id/check-in", requireRole(Role.OWNER, Role.MANAGER, Role.STAFF), async (req, res) => {
  const studentId = String(req.params.id)
  const organizationId = req.user!.organizationId!
  const student = await prisma.libraryStudent.findFirst({ where: { id: studentId, organizationId } })
  if (!student) return res.status(404).json({ error: "Student not found" })
  const today = dayStart()
  try {
    const record = await prisma.libraryAttendance.upsert({
      where: { studentId_date: { studentId, date: today } },
      update: {},
      create: { studentId, organizationId, date: today },
    })
    res.status(201).json(record)
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.get("/students/attendance/today", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const today = dayStart()
  const [students, present] = await Promise.all([
    prisma.libraryStudent.findMany({ where: { organizationId }, orderBy: { fullName: "asc" } }),
    prisma.libraryAttendance.findMany({ where: { organizationId, date: today } }),
  ])
  const presentIds = new Set(present.map((p) => p.studentId))
  res.json(
    students.map((s) => ({
      ...s,
      presentToday: presentIds.has(s.id),
    }))
  )
})

// Reports today | week | month
router.get("/reports", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const range = String(req.query.range || "today") // today | week | month
  const start = dayStart()

  if (range === "week") {
    start.setDate(start.getDate() - 6)
  } else if (range === "month") {
    start.setDate(1)
  }

  const [visits, reviews, top] = await Promise.all([
    prisma.libraryVisit.findMany({
      where: { organizationId, createdAt: { gte: start } },
      orderBy: { createdAt: "desc" },
      take: 500,
    }),
    prisma.libraryReview.findMany({
      where: { organizationId, createdAt: { gte: start } },
      orderBy: { createdAt: "desc" },
      take: 200,
    }),
    prisma.libraryVisit.groupBy({
      by: ["visitorName"],
      where: { organizationId, createdAt: { gte: start } },
      _count: { visitorName: true },
      orderBy: { _count: { visitorName: "desc" } },
      take: 20,
    }),
  ])

  const unique = new Set(
    visits.map((v) => v.visitorName.trim().toLowerCase()).filter(Boolean)
  )

  res.json({
    range,
    from: start.toISOString(),
    visitCount: visits.length,
    uniqueVisitors: unique.size,
    visits,
    reviews,
    topVisitors: top.map((t) => ({
      name: t.visitorName,
      count: t._count.visitorName,
    })),
  })
})

router.get("/reports/annual", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const organizationId = req.user!.organizationId!
  const year = Number(req.query.year) || new Date().getFullYear()
  const start = new Date(year, 0, 1)
  const end = new Date(year + 1, 0, 1)

  const [visitsByMonth, attendanceByMonth, activeLoans, totalBooks, totalStudents] = await Promise.all([
    prisma.$queryRaw`
      SELECT date_trunc('month', "createdAt") as month, count(*)::int as count
      FROM "LibraryVisit" WHERE "organizationId"=${organizationId}
      AND "createdAt" >= ${start} AND "createdAt" < ${end} GROUP BY 1 ORDER BY 1`,
    prisma.$queryRaw`
      SELECT date_trunc('month', "date") as month, count(*)::int as count
      FROM "LibraryAttendance" WHERE "organizationId"=${organizationId}
      AND "date" >= ${start} AND "date" < ${end} GROUP BY 1 ORDER BY 1`,
    prisma.bookLoan.count({ where: { organizationId, returnedAt: null } }),
    prisma.book.count({ where: { organizationId } }),
    prisma.libraryStudent.count({ where: { organizationId } }),
  ])

  res.json({ year, visitsByMonth, attendanceByMonth, activeLoans, totalBooks, totalStudents })
})

export default router
import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"

const router = Router()

/** Public: verified only — never return national ID images */
router.get("/delalas", async (req, res) => {
  try {
    const city = req.query.city ? String(req.query.city) : undefined
    const subCity = req.query.subCity ? String(req.query.subCity) : undefined
    const category = req.query.category
      ? String(req.query.category).toLowerCase()
      : undefined

    const list = await prisma.delalaContact.findMany({
      where: {
        verified: true,
        ...(city ? { city } : {}),
        ...(subCity ? { subCity } : {}),
        ...(category ? { categories: { has: category } } : {}),
      },
      orderBy: { name: "asc" },
      take: 100,
      select: {
        id: true,
        name: true,
        nameAm: true,
        phone: true,
        phone2: true,
        phone3: true,
        phone4: true,
        city: true,
        subCity: true,
        area: true,
        categories: true,
        photoUrl: true,
        address: true,
        mapsUrl: true,
        verified: true,
        // idFrontUrl / idBackUrl intentionally omitted
      },
    })
    res.json(list)
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.post("/events", async (req, res) => {
  try {
    const data = z
      .object({
        name: z.string().min(1).max(64),
        path: z.string().optional().nullable(),
        meta: z.any().optional(),
        visitorId: z.string().optional().nullable(),
        at: z.string().optional(),
      })
      .parse(req.body)

    await prisma.analyticsEvent.create({
      data: {
        name: data.name,
        path: data.path || null,
        meta: data.meta ?? undefined,
        visitorId: data.visitorId || null,
      },
    })
    res.status(201).json({ ok: true })
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.get("/contacts", async (req, res) => {
  try {
    const category = req.query.category
      ? String(req.query.category).toLowerCase()
      : undefined

    const list = await prisma.contactListing.findMany({
      where: {
        verified: true,
        ...(category ? { category } : {}),
      },
      orderBy: { nameEn: "asc" },
      take: 100,
    })
    res.json(list)
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.get("/contact-categories", async (_req, res) => {
  try {
    const list = await prisma.contactCategory.findMany({
      orderBy: [{ sortOrder: "asc" }, { labelEn: "asc" }],
    })
    res.json(list)
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.get("/delala-cities", async (_req, res) => {
  try {
    const list = await prisma.delalaCity.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    })
    res.json(list)
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed" })
  }
})

/** Public apply — pending until admin verifies. Stores ID for admin only. */
router.post("/delala-apply", async (req, res) => {
  try {
    const raw = z
      .object({
        name: z.string().min(1),
        nameAm: z.string().optional().nullable(),
        phone: z.string().min(3),
        phone2: z.string().optional().nullable(),
        phone3: z.string().optional().nullable(),
        phone4: z.string().optional().nullable(),
        city: z.string().min(1),
        subCity: z.string().optional().nullable(),
        area: z.string().optional().nullable(),
        categories: z.array(z.string()).min(1),
        photoUrl: z.string().optional().nullable(),
        address: z.string().optional().nullable(),
        mapsUrl: z.string().optional().nullable(),
        idFrontUrl: z.string().min(1),
        idBackUrl: z.string().min(1),
      })
      .parse(req.body)

    const emptyToNull = (v: unknown) => {
      if (v == null) return null
      const s = String(v).trim()
      return s ? s : null
    }

    const row = await prisma.delalaContact.create({
      data: {
        name: raw.name.trim(),
        nameAm: emptyToNull(raw.nameAm),
        phone: raw.phone.trim(),
        phone2: emptyToNull(raw.phone2),
        phone3: emptyToNull(raw.phone3),
        phone4: emptyToNull(raw.phone4),
        city: raw.city.trim(),
        subCity: emptyToNull(raw.subCity),
        area: emptyToNull(raw.area),
        categories: raw.categories
          .map((c) => c.trim().toLowerCase())
          .filter(Boolean),
        photoUrl: emptyToNull(raw.photoUrl),
        address: emptyToNull(raw.address),
        mapsUrl: emptyToNull(raw.mapsUrl),
        idFrontUrl: raw.idFrontUrl,
        idBackUrl: raw.idBackUrl,
        verified: false,
      },
    })

    res.status(201).json({
      ok: true,
      id: row.id,
      message: "Applied successfully. Semaiy will review within 24 hours.",
    })
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(400).json({ error: e.message || "Failed" })
  }
})
export default router
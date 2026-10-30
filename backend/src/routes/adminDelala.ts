import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"

const router = Router()
const ADMIN_KEY = process.env.SEMAY_ADMIN_KEY || "semay-approve-2026"

function check(req: any, res: any) {
  const key = String(req.headers["x-admin-key"] || req.query.key || "")
  if (key !== ADMIN_KEY) {
    res.status(401).json({ error: "Unauthorized" })
    return false
  }
  return true
}

const emptyToNull = (v: unknown) => {
  if (v == null) return null
  const s = String(v).trim()
  return s ? s : null
}

router.get("/", async (req, res) => {
  if (!check(req, res)) return
  try {
    const list = await prisma.delalaContact.findMany({
      orderBy: { createdAt: "desc" },
      take: 200,
    })
    res.json(list)
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.post("/", async (req, res) => {
  if (!check(req, res)) return
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
        categories: z.array(z.string()).default([]),
        photoUrl: z.string().optional().nullable(),
        address: z.string().optional().nullable(),
        mapsUrl: z.string().optional().nullable(),
        verified: z.boolean().optional().default(false),
      })
      .parse(req.body)

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
        categories: (raw.categories || []).map((c) => c.trim().toLowerCase()).filter(Boolean),
        photoUrl: emptyToNull(raw.photoUrl),
        address: emptyToNull(raw.address),
        mapsUrl: emptyToNull(raw.mapsUrl),
        verified: raw.verified ?? false,
      },
    })
    res.status(201).json(row)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(400).json({ error: e.message || "Failed" })
  }
})

router.patch("/:id", async (req, res) => {
  if (!check(req, res)) return
  try {
    const raw = z
      .object({
        name: z.string().optional(),
        nameAm: z.string().optional().nullable(),
        phone: z.string().optional(),
        phone2: z.string().optional().nullable(),
        phone3: z.string().optional().nullable(),
        phone4: z.string().optional().nullable(),
        city: z.string().optional(),
        subCity: z.string().optional().nullable(),
        area: z.string().optional().nullable(),
        categories: z.array(z.string()).optional(),
        photoUrl: z.string().optional().nullable(),
        address: z.string().optional().nullable(),
        mapsUrl: z.string().optional().nullable(),
        verified: z.boolean().optional(),
      })
      .parse(req.body)

    const data: any = {}
    if (raw.name != null) data.name = raw.name.trim()
    if (raw.nameAm !== undefined) data.nameAm = emptyToNull(raw.nameAm)
    if (raw.phone != null) data.phone = raw.phone.trim()
    if (raw.phone2 !== undefined) data.phone2 = emptyToNull(raw.phone2)
    if (raw.phone3 !== undefined) data.phone3 = emptyToNull(raw.phone3)
    if (raw.phone4 !== undefined) data.phone4 = emptyToNull(raw.phone4)
    if (raw.city != null) data.city = raw.city.trim()
    if (raw.subCity !== undefined) data.subCity = emptyToNull(raw.subCity)
    if (raw.area !== undefined) data.area = emptyToNull(raw.area)
    if (raw.categories) {
      data.categories = raw.categories.map((c) => c.trim().toLowerCase()).filter(Boolean)
    }
    if (raw.photoUrl !== undefined) data.photoUrl = emptyToNull(raw.photoUrl)
    if (raw.address !== undefined) data.address = emptyToNull(raw.address)
    if (raw.mapsUrl !== undefined) data.mapsUrl = emptyToNull(raw.mapsUrl)
    if (raw.verified !== undefined) data.verified = raw.verified

    const row = await prisma.delalaContact.update({
      where: { id: req.params.id },
      data,
    })
    res.json(row)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(400).json({ error: e.message || "Failed" })
  }
})

router.delete("/:id", async (req, res) => {
  if (!check(req, res)) return
  try {
    await prisma.delalaContact.delete({ where: { id: req.params.id } })
    res.json({ ok: true })
  } catch (e: any) {
    res.status(400).json({ error: e.message || "Failed" })
  }
})

// ——— Cities ———

router.get("/cities", async (req, res) => {
  if (!check(req, res)) return
  try {
    const list = await prisma.delalaCity.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    })
    res.json(list)
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.post("/cities", async (req, res) => {
  if (!check(req, res)) return
  try {
    const body = z
      .object({
        name: z.string().min(1),
        country: z.string().optional().default("Ethiopia"),
        sortOrder: z.number().optional().default(0),
      })
      .parse(req.body)

    const row = await prisma.delalaCity.create({
      data: {
        name: body.name.trim(),
        country: (body.country || "Ethiopia").trim(),
        sortOrder: body.sortOrder ?? 0,
      },
    })
    res.status(201).json(row)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(400).json({ error: e.message || "Failed" })
  }
})

router.delete("/cities/:id", async (req, res) => {
  if (!check(req, res)) return
  try {
    await prisma.delalaCity.delete({ where: { id: req.params.id } })
    res.json({ ok: true })
  } catch (e: any) {
    res.status(400).json({ error: e.message || "Failed" })
  }
})

export default router
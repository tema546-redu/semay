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

const listingBody = z.object({
  nameEn: z.string().min(1),
  nameAm: z.string().optional().nullable(),
  phone: z.string().min(2),
  phone2: z.string().optional().nullable(),
  phone3: z.string().optional().nullable(),
  phone4: z.string().optional().nullable(),
  category: z.string().min(1),
  noteEn: z.string().optional().nullable(),
  noteAm: z.string().optional().nullable(),
  photoUrl: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  mapsUrl: z.string().optional().nullable(),
  website: z.string().optional().nullable(),
  verified: z.boolean().optional().default(false),
})

const listingPatch = listingBody.partial()

router.get("/", async (req, res) => {
  if (!check(req, res)) return
  try {
    const list = await prisma.contactListing.findMany({
      orderBy: [{ category: "asc" }, { createdAt: "desc" }],
      take: 300,
    })
    res.json(list)
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.post("/", async (req, res) => {
  if (!check(req, res)) return
  try {
    const raw = listingBody.parse(req.body)
    const data = {
      nameEn: raw.nameEn.trim(),
      nameAm: emptyToNull(raw.nameAm),
      phone: raw.phone.trim(),
      phone2: emptyToNull(raw.phone2),
      phone3: emptyToNull(raw.phone3),
      phone4: emptyToNull(raw.phone4),
      category: raw.category.trim().toLowerCase(),
      noteEn: emptyToNull(raw.noteEn),
      noteAm: emptyToNull(raw.noteAm),
      photoUrl: emptyToNull(raw.photoUrl),
      address: emptyToNull(raw.address),
      mapsUrl: emptyToNull(raw.mapsUrl),
      website: emptyToNull(raw.website),
      verified: raw.verified ?? false,
    }
    const row = await prisma.contactListing.create({ data })
    res.status(201).json(row)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(400).json({ error: e.message || "Failed" })
  }
})

router.patch("/:id", async (req, res) => {
  if (!check(req, res)) return
  try {
    const raw = listingPatch.parse(req.body)
    const data: any = {}
    if (raw.nameEn != null) data.nameEn = raw.nameEn.trim()
    if (raw.nameAm !== undefined) data.nameAm = emptyToNull(raw.nameAm)
    if (raw.phone != null) data.phone = raw.phone.trim()
    if (raw.phone2 !== undefined) data.phone2 = emptyToNull(raw.phone2)
    if (raw.phone3 !== undefined) data.phone3 = emptyToNull(raw.phone3)
    if (raw.phone4 !== undefined) data.phone4 = emptyToNull(raw.phone4)
    if (raw.category != null) data.category = raw.category.trim().toLowerCase()
    if (raw.noteEn !== undefined) data.noteEn = emptyToNull(raw.noteEn)
    if (raw.noteAm !== undefined) data.noteAm = emptyToNull(raw.noteAm)
    if (raw.photoUrl !== undefined) data.photoUrl = emptyToNull(raw.photoUrl)
    if (raw.address !== undefined) data.address = emptyToNull(raw.address)
    if (raw.mapsUrl !== undefined) data.mapsUrl = emptyToNull(raw.mapsUrl)
    if (raw.verified !== undefined) data.verified = raw.verified
    if (raw.website !== undefined) data.website = emptyToNull(raw.website)

    const row = await prisma.contactListing.update({
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
    await prisma.contactListing.delete({ where: { id: req.params.id } })
    res.json({ ok: true })
  } catch (e: any) {
    res.status(400).json({ error: e.message || "Failed" })
  }
})

// ——— Categories ———

router.get("/categories/list", async (req, res) => {
  if (!check(req, res)) return
  try {
    const list = await prisma.contactCategory.findMany({
      orderBy: [{ sortOrder: "asc" }, { labelEn: "asc" }],
    })
    res.json(list)
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.post("/categories", async (req, res) => {
  if (!check(req, res)) return
  try {
    const body = z
      .object({
        key: z.string().min(1),
        labelEn: z.string().min(1),
        labelAm: z.string().optional().nullable(),
        sortOrder: z.number().optional().default(0),
      })
      .parse(req.body)

    const key = body.key
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-_]/g, "")

    const row = await prisma.contactCategory.create({
      data: {
        key,
        labelEn: body.labelEn.trim(),
        labelAm: emptyToNull(body.labelAm),
        sortOrder: body.sortOrder ?? 0,
      },
    })
    res.status(201).json(row)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(400).json({ error: e.message || "Failed" })
  }
})

router.delete("/categories/:id", async (req, res) => {
  if (!check(req, res)) return
  try {
    const id = String(req.params.id || "").trim()
    if (!id) return res.status(400).json({ error: "Missing id" })

    const existing = await prisma.contactCategory.findUnique({ where: { id } })
    if (!existing) {
      return res.status(404).json({ error: "Category not found (already deleted?)" })
    }

    // Optional: block delete if contacts still use this category key
    const inUse = await prisma.contactListing.count({
      where: { category: existing.key },
    })
    if (inUse > 0) {
      return res.status(400).json({
        error: `Cannot delete: ${inUse} contact(s) still use “${existing.key}”`,
      })
    }

    await prisma.contactCategory.delete({ where: { id } })
    res.json({ ok: true })
  } catch (e: any) {
    res.status(400).json({ error: e.message || "Delete failed" })
  }
})

export default router
import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate } from "../middleware/auth.js"

const router = Router()
const ADMIN_KEY = process.env.SEMAY_ADMIN_KEY || "semay-approve-2026"

function adminOk(req: any, res: any) {
  const key = String(req.headers["x-admin-key"] || "")
  if (key !== ADMIN_KEY) {
    res.status(401).json({ error: "Unauthorized" })
    return false
  }
  return true
}

/** Owner/staff send feedback */
router.post("/", authenticate, async (req, res) => {
  try {
    const data = z
      .object({
        message: z.string().min(3).max(2000),
        email: z.string().email().optional(),
      })
      .parse(req.body)

    const row = await prisma.feedback.create({
      data: {
        message: data.message,
        email: data.email || null,
        organizationId: req.user!.organizationId || null,
        userId: req.user!.userId,
      },
    })
    res.status(201).json(row)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    console.error(e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

/** Owner sees their org’s feedback + admin replies */
router.get("/mine", authenticate, async (req, res) => {
  try {
    const organizationId = req.user!.organizationId
    const list = await prisma.feedback.findMany({
      where: organizationId
        ? { organizationId }
        : { userId: req.user!.userId },
      orderBy: { createdAt: "desc" },
      take: 50,
    })
    res.json(list)
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed" })
  }
})

/** Admin list all */
router.get("/admin", async (req, res) => {
  if (!adminOk(req, res)) return
  const list = await prisma.feedback.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  })
  res.json(list)
})

/** Admin reply */
router.post("/admin/:id/reply", async (req, res) => {
  if (!adminOk(req, res)) return
  try {
    const id = String(req.params.id)
    const { reply } = z.object({ reply: z.string().min(1).max(2000) }).parse(req.body)
    const updated = await prisma.feedback.update({
      where: { id },
      data: { reply, repliedAt: new Date() },
    })
    res.json(updated)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(400).json({ error: e.message || "Failed" })
  }
})

export default router
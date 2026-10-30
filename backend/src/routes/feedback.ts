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

/** Auth payload may use id or userId depending on middleware */
function userIdOf(req: any): string | null {
  const u = req.user
  if (!u) return null
  return (u.userId || u.id || null) as string | null
}

function orgIdOf(req: any): string | null {
  const u = req.user
  if (!u) return null
  return (u.organizationId || u.orgId || null) as string | null
}

/** Owner sends a chat message */
router.post("/chat", authenticate, async (req, res) => {
  try {
    const data = z
      .object({
        body: z.string().min(1).max(4000),
        email: z.string().email().optional(),
      })
      .parse(req.body)

    const organizationId = orgIdOf(req)
    const userId = userIdOf(req)

    if (!organizationId) {
      return res.status(400).json({
        error:
          "No organization on this account. Log out and log in again as the business owner.",
      })
    }

    const row = await prisma.supportMessage.create({
      data: {
        body: data.body,
        sender: "OWNER",
        email: data.email || null,
        organizationId,
        userId,
      },
    })

    res.status(201).json(row)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    console.error("POST /api/feedback/chat", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

/** Owner: full thread for their org */
router.get("/chat/mine", authenticate, async (req, res) => {
  try {
    const organizationId = orgIdOf(req)
    const userId = userIdOf(req)

    const list = await prisma.supportMessage.findMany({
      where: organizationId
        ? { organizationId }
        : userId
          ? { userId }
          : { id: "impossible" },
      orderBy: { createdAt: "asc" },
      take: 200,
    })

    res.json(list)
  } catch (e: any) {
    console.error("GET /api/feedback/chat/mine", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

/** Admin: list threads (newest message first per org) */
router.get("/chat/threads", async (req, res) => {
  if (!adminOk(req, res)) return
  try {
    const messages = await prisma.supportMessage.findMany({
      orderBy: { createdAt: "desc" },
      take: 500,
    })

    const orgIds = [
      ...new Set(
        messages.map((m) => m.organizationId).filter(Boolean) as string[]
      ),
    ]

    const orgs =
      orgIds.length > 0
        ? await prisma.organization.findMany({
            where: { id: { in: orgIds } },
            select: { id: true, name: true, type: true },
          })
        : []

    const orgMap = Object.fromEntries(orgs.map((o) => [o.id, o]))

    const threadMap = new Map<string, any>()

    for (const m of messages) {
      if (!m.organizationId) continue // skip orphan rows (no org)

      const key = m.organizationId
      if (threadMap.has(key)) continue // first hit is newest (desc order)

      const org = orgMap[m.organizationId]
      threadMap.set(key, {
        threadKey: key,
        organizationId: m.organizationId,
        userId: m.userId,
        orgName: org?.name || "Unknown business",
        orgType: org?.type || null,
        lastBody: m.body,
        lastAt: m.createdAt,
        lastSender: m.sender,
        unreadFromOwner: m.sender === "OWNER",
      })
    }

    const threads = Array.from(threadMap.values()).sort(
      (a, b) => new Date(b.lastAt).getTime() - new Date(a.lastAt).getTime()
    )

    res.json(threads)
  } catch (e: any) {
    console.error("GET /api/feedback/chat/threads", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

/** Admin: messages in one org thread */
router.get("/chat/thread/:organizationId", async (req, res) => {
  if (!adminOk(req, res)) return
  try {
    const organizationId = String(req.params.organizationId)
    const list = await prisma.supportMessage.findMany({
      where: { organizationId },
      orderBy: { createdAt: "asc" },
      take: 300,
    })
    res.json(list)
  } catch (e: any) {
    console.error("GET /api/feedback/chat/thread", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

/** Admin reply */
router.post("/chat/reply", async (req, res) => {
  if (!adminOk(req, res)) return
  try {
    const data = z
      .object({
        organizationId: z.string().min(1),
        body: z.string().min(1).max(4000),
      })
      .parse(req.body)

    const row = await prisma.supportMessage.create({
      data: {
        body: data.body,
        sender: "ADMIN",
        organizationId: data.organizationId,
      },
    })

    res.status(201).json(row)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    console.error("POST /api/feedback/chat/reply", e)
    res.status(400).json({ error: e.message || "Failed" })
  }
})

// ——— Legacy feedback (still works; also mirrors into SupportMessage) ———

router.post("/", authenticate, async (req, res) => {
  try {
    const data = z
      .object({
        message: z.string().min(3).max(2000),
        email: z.string().email().optional(),
      })
      .parse(req.body)

    const organizationId = orgIdOf(req)
    const userId = userIdOf(req)

    const row = await prisma.feedback.create({
      data: {
        message: data.message,
        email: data.email || null,
        organizationId,
        userId,
      },
    })

    if (organizationId) {
      await prisma.supportMessage.create({
        data: {
          body: data.message,
          sender: "OWNER",
          email: data.email || null,
          organizationId,
          userId,
        },
      })
    }

    res.status(201).json(row)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    console.error("POST /api/feedback", e)
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.get("/mine", authenticate, async (req, res) => {
  try {
    const organizationId = orgIdOf(req)
    const userId = userIdOf(req)

    const list = await prisma.feedback.findMany({
      where: organizationId
        ? { organizationId }
        : userId
          ? { userId }
          : { id: "impossible" },
      orderBy: { createdAt: "desc" },
      take: 50,
    })
    res.json(list)
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.get("/admin", async (req, res) => {
  if (!adminOk(req, res)) return
  try {
    const list = await prisma.feedback.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
    })
    res.json(list)
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.post("/admin/:id/reply", async (req, res) => {
  if (!adminOk(req, res)) return
  try {
    const id = String(req.params.id)
    const { reply } = z
      .object({ reply: z.string().min(1).max(2000) })
      .parse(req.body)

    const updated = await prisma.feedback.update({
      where: { id },
      data: { reply, repliedAt: new Date() },
    })

    if (updated.organizationId) {
      await prisma.supportMessage.create({
        data: {
          body: reply,
          sender: "ADMIN",
          organizationId: updated.organizationId,
          userId: updated.userId,
        },
      })
    }

    res.json(updated)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(400).json({ error: e.message || "Failed" })
  }
})

export default router
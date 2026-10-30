import { Router } from "express"
import { prisma } from "../lib/prisma.js"

const router = Router()
const ADMIN_KEY = process.env.SEMAY_ADMIN_KEY || "semay-approve-2026"

function check(req: any, res: any) {
  const key = String(req.headers["x-admin-key"] || "")
  if (key !== ADMIN_KEY) {
    res.status(401).json({ error: "Unauthorized" })
    return false
  }
  return true
}

router.get("/summary", async (req, res) => {
  if (!check(req, res)) return
  try {
    const days = Math.min(30, Math.max(1, Number(req.query.days) || 7))
    const since = new Date()
    since.setDate(since.getDate() - days)

    const events = await prisma.analyticsEvent.findMany({
      where: { createdAt: { gte: since } },
      select: { name: true, visitorId: true, createdAt: true },
    })

    const visitors = new Set(events.map((e) => e.visitorId).filter(Boolean))
    const delalaOpens = events.filter((e) => e.name === "delala_open").length

    const visitorsByDayMap: Record<string, Set<string>> = {}
    const eventsByHour = Array.from({ length: 24 }, (_, h) => ({ hour: h, count: 0 }))

    for (const e of events) {
      const day = e.createdAt.toISOString().slice(0, 10)
      if (!visitorsByDayMap[day]) visitorsByDayMap[day] = new Set()
      if (e.visitorId) visitorsByDayMap[day].add(e.visitorId)
      eventsByHour[e.createdAt.getHours()].count++
    }

    res.json({
      events7d: events.length,
      visitors7d: visitors.size,
      delalaOpens7d: delalaOpens,
      visitorsByDay: Object.entries(visitorsByDayMap)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([date, set]) => ({ date, count: set.size })),
      eventsByHour,
    })
  } catch (e: any) {
    res.status(500).json({ error: e.message || "Failed" })
  }
})

export default router
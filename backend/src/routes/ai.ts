import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate } from "../middleware/auth.js"
import { OrderStatus } from "@prisma/client"

const router = Router()
router.use(authenticate)

router.post("/chat", async (req, res) => {
  try {
    const { message, context } = z.object({
      message: z.string().min(1),
      context: z.string().optional(),
    }).parse(req.body)

    const userId = req.user!.userId
    const organizationId = req.user!.organizationId
    const lower = message.toLowerCase()

    let orgType = ""
    let orgName = ""
    let liveHint = ""

    if (organizationId) {
      const org = await prisma.organization.findUnique({ where: { id: organizationId } })
      orgType = org?.type || ""
      orgName = org?.name || ""

      // Live restaurant stats for smarter answers
      if (orgType === "RESTAURANT" || orgType === "CAFE") {
        const start = new Date()
        start.setHours(0, 0, 0, 0)
        const orders = await prisma.order.findMany({
          where: { organizationId, createdAt: { gte: start }, status: { not: OrderStatus.CANCELLED } },
        })
        const sales = orders.reduce((s, o) => s + Number(o.total), 0)
        const active = await prisma.order.count({
          where: { organizationId, status: { in: [OrderStatus.SENT, OrderStatus.PREPARING, OrderStatus.READY] } },
        })
        liveHint = `Today at ${orgName}: ${orders.length} orders, ${Math.round(sales)} ETB sales, ${active} active in kitchen.`
      }
      if (orgType === "GYM") {
        const members = await prisma.gymMember.count({ where: { organizationId, status: "active" } })
        liveHint = `${orgName} has ${members} active gym members.`
      }
      if (orgType === "HOTEL") {
        const rooms = await prisma.hotelRoom.findMany({ where: { organizationId } })
        const avail = rooms.filter((r) => r.status === "available").length
        liveHint = `${orgName}: ${avail}/${rooms.length} rooms available.`
      }
      if (orgType === "SCHOOL" || orgType === "UNIVERSITY") {
        const school = await prisma.school.findUnique({ where: { organizationId } })
        const n = school ? await prisma.student.count({ where: { schoolId: school.id } }) : 0
        liveHint = `${orgName}: ${n} students registered.`
      }
    }

    let reply = ""

    if (lower.includes("hello") || lower.includes("hi") || lower.includes("ሰላም") || lower.includes("እንደምን")) {
      reply = orgType
        ? `ሰላም! I'm Semay AI for ${orgName} (${orgType}). ${liveHint} How can I help?`
        : "ሰላም! I am Semay AI. How can I help?"
    } else if (lower.includes("sales") || lower.includes("ሽያጭ") || lower.includes("today") || lower.includes("ዛሬ")) {
      reply = liveHint || "Open Dashboard for today's sales. Use Closing Report at end of day."
    } else if (lower.includes("order") || lower.includes("pos") || lower.includes("kitchen") || lower.includes("ትዕዛዝ")) {
      reply = "Restaurant: POS → add items → Send to Kitchen → KDS → Mark Ready. Offline orders queue until you're back online."
    } else if (lower.includes("reservation") || lower.includes("ሪዘርቬ")) {
      reply = "Use Reservations to book guests by name, party size, table and time. Seat or cancel from the list."
    } else if (lower.includes("staff") || lower.includes("ሰራተኛ")) {
      reply = "Staff page lists everyone in your organization (Owner, Manager, Waiter, Kitchen). They join under the same business."
    } else if (lower.includes("billing") || lower.includes("plan") || lower.includes("subscription") || lower.includes("ክፍያ")) {
      reply = "Open Billing to see trial days left and choose Monthly / 3 / 6 / Annual plans for your business type. Activate after payment."
    } else if (lower.includes("gym") || lower.includes("member") || lower.includes("check") || lower.includes("አባል")) {
      reply = "Gym: Members → add & assign plan. Check-In when they arrive. Freeze if needed. Classes for schedule. Plans to set prices."
    } else if (lower.includes("hotel") || lower.includes("room") || lower.includes("ክፍል")) {
      reply = "Hotel: Rooms → add room, set Available / Occupied / Cleaning. Dashboard shows counts."
    } else if (lower.includes("student") || lower.includes("attendance") || lower.includes("ተማሪ")) {
      reply = "School: Students, Attendance (Present/Absent/Late), Grades. Dashboard shows present today."
    } else if (lower.includes("help") || lower.includes("እርዳታ")) {
      reply = `I help with ${orgType || "your business"}: sales, orders, reservations, staff, billing, gym, hotel, school. ${liveHint}`
    } else {
      reply = liveHint
        ? `${liveHint} Ask about sales, orders, reservations, billing, gym, hotel, or school — or say help.`
        : "Ask about sales, orders, reservations, billing, gym, hotel, school — or say help."
    }

    try {
      await prisma.aiMessage.create({ data: { role: "user", content: message, context: context || orgType || "general", userId } })
      await prisma.aiMessage.create({ data: { role: "assistant", content: reply, context: context || orgType || "general", userId } })
    } catch { /* ignore */ }

    res.json({ reply })
  } catch (err: any) {
    if (err.name === "ZodError") return res.status(400).json({ error: err.errors })
    res.status(500).json({ error: "AI request failed" })
  }
})

export default router

import "dotenv/config"
import express, { Request, Response, NextFunction } from "express"
import cors from "cors"

import { prisma } from "./lib/prisma.js"

import authRoutes from "./routes/auth.js"
import orderRoutes from "./routes/orders.js"
import menuRoutes from "./routes/menu.js"
import schoolRoutes from "./routes/school.js"
import dashboardRoutes from "./routes/dashboard.js"
import gymRoutes from "./routes/gym.js"
import hotelRoutes from "./routes/hotel.js"
import aiRoutes from "./routes/ai.js"
import restaurantRoutes from "./routes/restaurant.js"
import billingRoutes from "./routes/billing.js"
import reservationRoutes from "./routes/reservations.js"
import staffRoutes from "./routes/staff.js"
import adminBillingRoutes from "./routes/adminBilling.js"
import bakeryRoutes from "./routes/bakery.js"
import feedbackRoutes from "./routes/feedback.js"
import attendanceRoutes from "./routes/attendance.js"
import pharmacyRoutes from "./routes/pharmacy.js"
import stockRoutes from "./routes/stock.js"
import branchRoutes from "./routes/branches.js"
import libraryRoutes from "./routes/library.js"
import publicMenuRoutes from "./routes/publicMenu.js"
import libraryNetworkRoutes from "./routes/libraryNetwork.js"
import salonRouter from "./routes/salon"
import publicSalonRouter from "./routes/publicSalon.js"
import garmentRoutes from "./routes/garment.js"

const app = express()
const PORT = Number(process.env.PORT) || 3001

const allowedOrigins = [
  "https://semaiy.netlify.app",
  "https://semaii.netlify.app",
  "http://localhost:5173",
  "http://localhost:3000",
]

app.use(
  cors({
    origin(origin, cb) {
      if (!origin) return cb(null, true)
      if (allowedOrigins.includes(origin)) return cb(null, true)
      return cb(new Error("Not allowed by CORS"))
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-admin-key"],
    maxAge: 86400,
  })
)

// Explicit preflight for all routes
app.options("*", cors({
  origin: true,
  credentials: true,
}))

app.use(express.json({ limit: "2mb" }))

// Health check with DB verification
app.get("/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`
    res.status(200).json({
      status: "ok",
      db: "connected",
      service: "semaiy-backend",
      name: "Semaiy",
      nameAm: "ሰማይ",
      phase: "3-restaurant-pro",
    })
  } catch {
    res.status(503).json({
      status: "error",
      db: "disconnected",
      service: "semaiy-backend",
    })
  }
})

// API routes
app.use("/api/auth", authRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/menu", menuRoutes)
app.use("/api/school", schoolRoutes)
app.use("/api/dashboard", dashboardRoutes)
app.use("/api/gym", gymRoutes)
app.use("/api/hotel", hotelRoutes)
app.use("/api/ai", aiRoutes)
app.use("/api/restaurant", restaurantRoutes)
app.use("/api/billing", billingRoutes)
app.use("/api/reservations", reservationRoutes)
app.use("/api/staff", staffRoutes)
app.use("/api/admin/billing", adminBillingRoutes)
app.use("/api/bakery", bakeryRoutes)
app.use("/api/feedback", feedbackRoutes)
app.use("/api/staff/attendance", attendanceRoutes)
app.use("/api/pharmacy", pharmacyRoutes)
app.use("/api/stock", stockRoutes)
app.use("/api/branches", branchRoutes)
app.use("/api/library", libraryRoutes)
app.use("/api/public", publicMenuRoutes)
app.use("/api/salon", publicSalonRouter)
app.use("/api/garment", garmentRoutes)

// 404 handler
app.use((_req, res) => res.status(404).json({ error: "Not found" }))

// Global error handler — MUST be after all routes
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err)
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === "production" ? "Internal server error" : err.message,
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Semaiy backend on port ${PORT}`)
})
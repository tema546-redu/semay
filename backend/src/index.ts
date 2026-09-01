import "dotenv/config"
import express from "express"
import cors from "cors"

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
      // Allow server-to-server / curl (no Origin)
      if (!origin) return cb(null, true)
      if (allowedOrigins.includes(origin)) return cb(null, true)
      // Temporary: allow any origin so register works while we debug
      return cb(null, true)
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

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "semaiy-backend",
    name: "Semaiy",
    nameAm: "ሰማይ",
    phase: "3-restaurant-pro",
  })
})

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

app.use((_req, res) => res.status(404).json({ error: "Not found" }))

app.listen(PORT, () => {
  console.log(`🚀 Semaiy backend on port ${PORT}`)
})
import "dotenv/config"
import express from "express"

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

const app = express()
const PORT = Number(process.env.PORT) || 3001

// ============================================================
// CORS
// ============================================================

const allowedOrigins = [
  "https://semaii.netlify.app",
  "http://localhost:3000",
  "http://localhost:5173",
]

app.use((req, res, next) => {
  const origin = req.headers.origin

  // Allow requests from known frontend origins
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin)
    res.setHeader("Access-Control-Allow-Credentials", "true")
    res.setHeader("Vary", "Origin")
  }

  // Tell the browser which methods are allowed
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  )

  // Tell the browser which request headers are allowed
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, x-admin-key"
  )

  // Cache successful preflight responses
  res.setHeader("Access-Control-Max-Age", "86400")

  // Handle browser preflight requests
  if (req.method === "OPTIONS") {
    if (origin && allowedOrigins.includes(origin)) {
      return res.sendStatus(204)
    }

    return res.status(403).json({
      error: "CORS origin not allowed",
    })
  }

  next()
})

// ============================================================
// BODY PARSING
// ============================================================

app.use(express.json({ limit: "2mb" }))

// ============================================================
// HEALTH CHECK
// ============================================================

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "semay-backend",
    name: "Semay",
    nameAm: "ሰማይ",
    phase: "3-restaurant-pro",
  })
})

// ============================================================
// API ROUTES
// ============================================================

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

// ============================================================
// 404
// ============================================================

app.use((_req, res) => {
  res.status(404).json({
    error: "Not found",
  })
})

// ============================================================
// START SERVER
// ============================================================

app.listen(PORT, () => {
  console.log(`🚀 Semay backend running on port ${PORT}`)
  console.log(`🌐 Port: ${PORT}`)
})
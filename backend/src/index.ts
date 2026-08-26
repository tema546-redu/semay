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

const app = express()
const PORT = Number(process.env.PORT) || 3001

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://semaii.netlify.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-admin-key"],
  })
)

// Answer preflight for all routes
app.options("*", cors({
  origin: [
    "http://localhost:5173",
    "https://semaii.netlify.app",
  ],
  credentials: true,
}))

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://semaii.netlify.app",
      process.env.FRONTEND_URL,
    ].filter(Boolean) as string[],
    credentials: true,
  })
)

app.use(express.json({ limit: "2mb" }))

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "semay-backend",
    name: "Semay",
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

app.use((_req, res) => res.status(404).json({ error: "Not found" }))

app.listen(PORT, () => {
  console.log(`🚀 Semay backend running on port ${PORT}`)
})
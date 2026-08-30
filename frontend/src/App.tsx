import { Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./lib/auth"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import RestaurantDashboard from "./pages/restaurant/RestaurantDashboard"
import POS from "./pages/restaurant/POS"
import KDS from "./pages/restaurant/KDS"
import MenuPage from "./pages/restaurant/Menu"
import Reservations from "./pages/restaurant/Reservations"
import StaffPage from "./pages/restaurant/Staff"
import RestaurantSettings from "./pages/restaurant/Settings"
import Students from "./pages/school/Students"
import Attendance from "./pages/school/Attendance"
import Grades from "./pages/school/Grades"
import GymMembers from "./pages/gym/Members"
import GymCheckIn from "./pages/gym/CheckIn"
import GymClasses from "./pages/gym/Classes"
import GymPlans from "./pages/gym/Plans"
import HotelRooms from "./pages/hotel/Rooms"
import AiChat from "./pages/AiChat"
import Billing from "./pages/Billing"
import Join from "./pages/Join"
import TablesPage from "./pages/restaurant/Tables"
import AdminApprove from "./pages/AdminApprove"
import Profile from "./pages/Profile"
import Expenses from "./pages/restaurant/Expenses"
import Reports from "./pages/restaurant/Reports"
import BakeryDashboard from "./pages/bakery/BakeryDashboard"
import BakeryProducts from "./pages/bakery/Products"
import BakeryProduce from "./pages/bakery/Produce"
import BakerySell from "./pages/bakery/Sell"
import BakeryWaste from "./pages/bakery/Waste"
import BakeryExpenses from "./pages/bakery/Expenses"
import BakerySettings from "./pages/bakery/Settings"
import BakeryReports from "./pages/bakery/Reports"
import PharmacyDashboard from "./pages/pharmacy/PharmacyDashboard"
import PharmacyProducts from "./pages/pharmacy/Products"
import PharmacySell from "./pages/pharmacy/Sell"

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth()
  if (loading) return <div className="min-h-svh flex items-center justify-center bg-semay-50 text-semay-500 text-sm">Loading Semay...</div>
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return <>{children}</>
}

function SmartDashboard() {
  const { organization } = useAuth()
  const t = organization?.type
  if (t === "RESTAURANT" || t === "CAFE") return <RestaurantDashboard />
  if (t === "BAKERY") return <BakeryDashboard />
  return <Dashboard />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<ProtectedRoute><SmartDashboard /></ProtectedRoute>} />
      <Route path="/pos" element={<ProtectedRoute><POS /></ProtectedRoute>} />
      <Route path="/kds" element={<ProtectedRoute><KDS /></ProtectedRoute>} />
      <Route path="/menu" element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
      <Route path="/reservations" element={<ProtectedRoute><Reservations /></ProtectedRoute>} />
      <Route path="/staff" element={<ProtectedRoute><StaffPage /></ProtectedRoute>} />
      <Route path="/restaurant/settings" element={<ProtectedRoute><RestaurantSettings /></ProtectedRoute>} />
      <Route path="/gym/plans" element={<ProtectedRoute><GymPlans /></ProtectedRoute>} />
      <Route path="/students" element={<ProtectedRoute><Students /></ProtectedRoute>} />
      <Route path="/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
      <Route path="/grades" element={<ProtectedRoute><Grades /></ProtectedRoute>} />
      <Route path="/gym/members" element={<ProtectedRoute><GymMembers /></ProtectedRoute>} />
      <Route path="/gym/check-in" element={<ProtectedRoute><GymCheckIn /></ProtectedRoute>} />
      <Route path="/gym/classes" element={<ProtectedRoute><GymClasses /></ProtectedRoute>} />
      <Route path="/hotel/rooms" element={<ProtectedRoute><HotelRooms /></ProtectedRoute>} />
      <Route path="/ai" element={<ProtectedRoute><AiChat /></ProtectedRoute>} />
      <Route path="/billing" element={<ProtectedRoute><Billing /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/join/:code" element={<Join />} />
      <Route path="/tables" element={<ProtectedRoute><TablesPage /></ProtectedRoute>} />
      <Route path="/admin/approve" element={<AdminApprove />} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/bakery" element={<ProtectedRoute><BakeryDashboard /></ProtectedRoute>} />
      <Route path="/bakery/products" element={<ProtectedRoute><BakeryProducts /></ProtectedRoute>} />
      <Route path="/bakery/produce" element={<ProtectedRoute><BakeryProduce /></ProtectedRoute>} />
      <Route path="/bakery/sell" element={<ProtectedRoute><BakerySell /></ProtectedRoute>} />
      <Route path="/bakery/waste" element={<ProtectedRoute><BakeryWaste /></ProtectedRoute>} />
      <Route path="/bakery/expenses" element={<ProtectedRoute><BakeryExpenses /></ProtectedRoute>} />
      <Route path="/bakery/settings" element={<ProtectedRoute><BakerySettings /></ProtectedRoute>} />
      <Route path="/bakery/reports" element={<ProtectedRoute><BakeryReports /></ProtectedRoute>} />
      <Route path="/pharmacy" element={<ProtectedRoute><PharmacyDashboard /></ProtectedRoute>} />
<Route path="/pharmacy/products" element={<ProtectedRoute><PharmacyProducts /></ProtectedRoute>} />
<Route path="/pharmacy/sell" element={<ProtectedRoute><PharmacySell /></ProtectedRoute>} />
    <Route
  path="/expenses"
  element={
    <ProtectedRoute>
      <Expenses />
    </ProtectedRoute>
  }
/>
<Route
  path="/reports"
  element={
    <ProtectedRoute>
      <Reports />
    </ProtectedRoute>
  }
/>
      
    </Routes>
  )
}

export default App

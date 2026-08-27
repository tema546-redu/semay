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
    </Routes>
  )
}

export default App

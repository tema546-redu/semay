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
import Stock from "./pages/restaurant/Stock"
import PublicHome from "./pages/public/PublicHome"
import PublicLibraries from "./pages/public/PublicLibraries"
import PublicLibraryDetail from "./pages/public/PublicLibraryDetail"
import LibraryDashboard from "./pages/library/LibraryDashboard"
import LibraryBooks from "./pages/library/LibraryBooks"
import SubscriptionGate from "./components/SubscriptionGate"
import Help from "./pages/Help"
import LibrarySettings from "./pages/library/Settings"
import LibraryReports from "./pages/library/Reports"
import LibraryAttendance from "./pages/library/Attendance"
import LibraryNetwork from "./pages/library/Network"
import LibraryLoans from "./pages/library/Loans"
import LibraryTables from "./pages/library/Tables"
import SalonDashboard from "./pages/salon/SalonDashboard"
import SalonServices from "./pages/salon/Services"
import SalonStylists from "./pages/salon/Stylists"
import SalonBook from "./pages/salon/Book"
import SalonPOS from "./pages/salon/POS"
import SalonSettings from "./pages/salon/Settings"
import PublicSalonBooking from "./pages/public/PublicSalonBooking"
import SalonReports from "./pages/salon/Reports"
import StaffHome from "./pages/restaurant/StaffHome"
import CustomerOrder from "./pages/restaurant/CustomerOrder"
import PublicReceipt from "./pages/restaurant/PublicReceipt"
import GarmentDashboard from "./pages/garment/GarmentDashboard"
import GarmentInventory from "./pages/garment/GarmentInventory"
import GarmentOrders from "./pages/garment/GarmentOrders"
import GarmentStyles from "./pages/garment/GarmentStyles"
import GarmentOrderDetail from "./pages/garment/GarmentOrderDetail"

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth()
  if (loading) {
    return (
      <div className="min-h-svh flex items-center justify-center bg-semay-50 text-semay-500 text-sm">
        Loading Semaiy...
      </div>
    )
  }
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return <>{children}</>
}

function SmartDashboard() {
  const { organization, user } = useAuth()
  const t = organization?.type
  const role = String(user?.role || "").toUpperCase()

  if (
    (t === "RESTAURANT" || t === "CAFE") &&
    (role === "WAITER" || role === "KITCHEN" || role === "STAFF")
  ) {
    return <Navigate to="/staff-home" replace />
  }
  if (t === "LIBRARY") return <Navigate to="/library" replace />
  if (t === "RESTAURANT" || t === "CAFE") return <RestaurantDashboard />
  if (t === "BAKERY") return <BakeryDashboard />
  if (t === "PHARMACY") return <PharmacyDashboard />
  if (t === "SALON") return <SalonDashboard />
  if (t === "GARMENT") return <Navigate to="/garment" replace />
  return <Dashboard />
}

function ProtectedApp({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <SubscriptionGate>{children}</SubscriptionGate>
    </ProtectedRoute>
  )
}

export default function App() {
  return (
    <Routes>
      {/* Public routes — no auth needed */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/join/:code" element={<Join />} />
      <Route path="/admin/approve" element={<AdminApprove />} />
      <Route path="/public" element={<PublicHome />} />
      <Route path="/public/libraries" element={<PublicLibraries />} />
      <Route path="/public/libraries/:id" element={<PublicLibraryDetail />} />

      {/* Protected + Subscription-gated routes */}
      <Route path="/dashboard" element={<ProtectedApp><SmartDashboard /></ProtectedApp>} />
      <Route path="/library" element={<ProtectedApp><LibraryDashboard /></ProtectedApp>} />
      <Route path="/library/books" element={<ProtectedApp><LibraryBooks /></ProtectedApp>} />
      <Route path="/help" element={<ProtectedApp><Help /></ProtectedApp>} />

      <Route path="/pos" element={<ProtectedApp><POS /></ProtectedApp>} />
      <Route path="/kds" element={<ProtectedApp><KDS /></ProtectedApp>} />
      <Route path="/menu" element={<ProtectedApp><MenuPage /></ProtectedApp>} />
      <Route path="/reservations" element={<ProtectedApp><Reservations /></ProtectedApp>} />
      <Route path="/staff" element={<ProtectedApp><StaffPage /></ProtectedApp>} />
      <Route path="/restaurant/settings" element={<ProtectedApp><RestaurantSettings /></ProtectedApp>} />
      <Route path="/tables" element={<ProtectedApp><TablesPage /></ProtectedApp>} />
      <Route path="/stock" element={<ProtectedApp><Stock /></ProtectedApp>} />
      <Route path="/expenses" element={<ProtectedApp><Expenses /></ProtectedApp>} />
      <Route path="/reports" element={<ProtectedApp><Reports /></ProtectedApp>} />
      <Route path="/profile" element={<ProtectedApp><Profile /></ProtectedApp>} />
      <Route path="/billing" element={<ProtectedApp><Billing /></ProtectedApp>} />
      <Route path="/ai" element={<ProtectedApp><AiChat /></ProtectedApp>} />

      <Route path="/students" element={<ProtectedApp><Students /></ProtectedApp>} />
      <Route path="/attendance" element={<ProtectedApp><Attendance /></ProtectedApp>} />
      <Route path="/grades" element={<ProtectedApp><Grades /></ProtectedApp>} />

      <Route path="/gym/members" element={<ProtectedApp><GymMembers /></ProtectedApp>} />
      <Route path="/gym/check-in" element={<ProtectedApp><GymCheckIn /></ProtectedApp>} />
      <Route path="/gym/classes" element={<ProtectedApp><GymClasses /></ProtectedApp>} />
      <Route path="/gym/plans" element={<ProtectedApp><GymPlans /></ProtectedApp>} />
      <Route path="/hotel/rooms" element={<ProtectedApp><HotelRooms /></ProtectedApp>} />

      <Route path="/bakery" element={<ProtectedApp><BakeryDashboard /></ProtectedApp>} />
      <Route path="/bakery/products" element={<ProtectedApp><BakeryProducts /></ProtectedApp>} />
      <Route path="/bakery/produce" element={<ProtectedApp><BakeryProduce /></ProtectedApp>} />
      <Route path="/bakery/sell" element={<ProtectedApp><BakerySell /></ProtectedApp>} />
      <Route path="/bakery/waste" element={<ProtectedApp><BakeryWaste /></ProtectedApp>} />
      <Route path="/bakery/expenses" element={<ProtectedApp><BakeryExpenses /></ProtectedApp>} />
      <Route path="/bakery/settings" element={<ProtectedApp><BakerySettings /></ProtectedApp>} />
      <Route path="/bakery/reports" element={<ProtectedApp><BakeryReports /></ProtectedApp>} />

      <Route path="/pharmacy" element={<ProtectedApp><PharmacyDashboard /></ProtectedApp>} />
      <Route path="/pharmacy/products" element={<ProtectedApp><PharmacyProducts /></ProtectedApp>} />
      <Route path="/pharmacy/sell" element={<ProtectedApp><PharmacySell /></ProtectedApp>} />
      <Route path="/salon" element={<ProtectedApp><SalonDashboard /></ProtectedApp>} />
      <Route path="/salon/services" element={<ProtectedApp><SalonServices /></ProtectedApp>} />
      <Route path="/salon/stylists" element={<ProtectedApp><SalonStylists /></ProtectedApp>} />
      <Route path="/salon/book" element={<ProtectedApp><SalonBook /></ProtectedApp>} />
      <Route path="/salon/pos" element={<ProtectedApp><SalonPOS /></ProtectedApp>} />
      <Route path="/salon/settings" element={<ProtectedApp><SalonSettings /></ProtectedApp>} />
      <Route path="/library/settings" element={<ProtectedApp><LibrarySettings /></ProtectedApp>} />
      <Route path="/library/reports" element={<ProtectedApp><LibraryReports /></ProtectedApp>} />
      <Route path="/join" element={<Join />} />
      <Route path="/library/attendance" element={<ProtectedApp><LibraryAttendance /></ProtectedApp>} />
      <Route path="/library/network" element={<ProtectedApp><LibraryNetwork /></ProtectedApp>} />
      <Route path="/library/loans" element={<ProtectedApp><LibraryLoans /></ProtectedApp>} />
      <Route path="/library/tables" element={<ProtectedApp><LibraryTables /></ProtectedApp>} />
      <Route path="/book/:orgId" element={<PublicSalonBooking />} />
      <Route path="/salon/reports" element={<ProtectedApp><SalonReports /></ProtectedApp>} />
      <Route path="/staff-home" element={<ProtectedApp><StaffHome /></ProtectedApp>} />
      <Route path="/order/:orgId" element={<CustomerOrder />} />
      <Route path="/r/:code" element={<PublicReceipt />} />
      <Route path="/receipt/:code" element={<PublicReceipt />} />
      <Route path="/garment" element={<ProtectedApp><GarmentDashboard /></ProtectedApp>} />
      <Route path="/garment/inventory" element={<ProtectedApp><GarmentInventory /></ProtectedApp>} />
      <Route path="/garment/orders" element={<ProtectedApp><GarmentOrders /></ProtectedApp>} />
      <Route path="/garment/styles" element={<ProtectedApp><GarmentStyles /></ProtectedApp>} />
      <Route path="/garment/orders/:id" element={<ProtectedApp><GarmentOrderDetail /></ProtectedApp>} />

      {/* Catch-all MUST be last */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useAuth } from "../lib/auth"
import {
  dashboardApi,
  gymApi,
  hotelApi,
  bakeryApi,
  pharmacyApi,
  libraryApi,
} from "../lib/api"
import {
  LayoutDashboard,
  UtensilsCrossed,
  GraduationCap,
  Users,
  Settings,
  LogOut,
  Globe,
  Monitor,
  BookOpen,
  Dumbbell,
  UserCheck,
  BedDouble,
  Sparkles,
  Croissant,
  Factory,
  Trash2,
  Pill,
  ShoppingCart,
  Package,
  CreditCard,
  Library,
} from "lucide-react"

export default function Dashboard() {
  const { t, i18n } = useTranslation()
  const { user, organization, logout } = useAuth()
  const navigate = useNavigate()
  const isAm = i18n.language === "am"
  const type = organization?.type

  const isSchool = type === "SCHOOL" || type === "UNIVERSITY"
  const isGym = type === "GYM"
  const isHotel = type === "HOTEL"
  const isBakery = type === "BAKERY"
  const isPharmacy = type === "PHARMACY"
  const isLibrary = type === "LIBRARY"
  const isRestaurant =
    type === "RESTAURANT" || type === "CAFE" || (!type && !isSchool)

  const showRestaurant =
    isRestaurant && !isSchool && !isGym && !isHotel && !isBakery && !isPharmacy && !isLibrary

  const [stats, setStats] = useState<any>(null)

  // Library owners go to dedicated home
  useEffect(() => {
    if (isLibrary) navigate("/library", { replace: true })
  }, [isLibrary, navigate])

  useEffect(() => {
    if (isLibrary) return
    const load = () => {
      if (isGym) gymApi.stats().then(setStats).catch(() => {})
      else if (isHotel) hotelApi.stats().then(setStats).catch(() => {})
      else if (isBakery) bakeryApi.dashboard().then(setStats).catch(() => {})
      else if (isPharmacy) pharmacyApi.dashboard().then(setStats).catch(() => {})
      else dashboardApi.stats().then(setStats).catch(() => {})
    }
    load()
    const interval = setInterval(load, 15000)
    return () => clearInterval(interval)
  }, [isGym, isHotel, isBakery, isPharmacy, isLibrary])

  if (isLibrary) {
    return (
      <div className="min-h-svh flex items-center justify-center bg-semay-50 text-sm text-semay-500">
        {isAm ? "ወደ ቤተ መጻሕፍት..." : "Opening library…"}
      </div>
    )
  }

  return (
    <div className="min-h-svh bg-semay-50 flex">
      <aside className="w-60 bg-white border-r border-semay-200 flex flex-col fixed h-full">
        <div className="p-5 border-b border-semay-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-semay-900 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">ሰ</span>
            </div>
            <div>
              <div className="font-semibold text-semay-900 text-sm">Semaiy</div>
              <div className="text-xs text-semay-400 truncate max-w-[140px]">
                {organization?.name || "Organization"}
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <NavLink to="/dashboard" icon={<LayoutDashboard className="w-4 h-4" />} label={t("dashboard")} active />

          {showRestaurant && (
            <>
              <NavLink to="/pos" icon={<UtensilsCrossed className="w-4 h-4" />} label={t("pos")} />
              <NavLink to="/kds" icon={<Monitor className="w-4 h-4" />} label={t("kitchen")} />
              <NavLink to="/menu" icon={<BookOpen className="w-4 h-4" />} label={t("menu")} />
            </>
          )}

          {isBakery && (
            <>
              <NavLink to="/bakery/sell" icon={<Croissant className="w-4 h-4" />} label={isAm ? "ሽያጭ" : "Sell"} />
              <NavLink to="/bakery/produce" icon={<Factory className="w-4 h-4" />} label={isAm ? "ማምረት" : "Produce"} />
              <NavLink to="/bakery/products" icon={<BookOpen className="w-4 h-4" />} label={isAm ? "ምርቶች" : "Products"} />
              <NavLink to="/bakery/waste" icon={<Trash2 className="w-4 h-4" />} label={isAm ? "ብክነት" : "Waste"} />
            </>
          )}

          {isPharmacy && (
            <>
              <NavLink to="/pharmacy" icon={<Pill className="w-4 h-4" />} label={isAm ? "ፋርማሲ" : "Pharmacy"} />
              <NavLink to="/pharmacy/sell" icon={<ShoppingCart className="w-4 h-4" />} label={isAm ? "ሽያጭ" : "Sell"} />
              <NavLink to="/pharmacy/products" icon={<Package className="w-4 h-4" />} label={isAm ? "ክምችት" : "Stock"} />
            </>
          )}

          {isSchool && (
            <>
              <NavLink to="/students" icon={<GraduationCap className="w-4 h-4" />} label={t("students")} />
              <NavLink to="/attendance" icon={<Users className="w-4 h-4" />} label={t("attendance")} />
              <NavLink to="/grades" icon={<BookOpen className="w-4 h-4" />} label={isAm ? "ክፍሎች" : "Grades"} />
            </>
          )}

          {isGym && (
            <>
              <NavLink to="/gym/members" icon={<Dumbbell className="w-4 h-4" />} label={isAm ? "አባላት" : "Members"} />
              <NavLink to="/gym/check-in" icon={<UserCheck className="w-4 h-4" />} label={isAm ? "ቼክ-ኢን" : "Check-In"} />
              <NavLink to="/gym/classes" icon={<BookOpen className="w-4 h-4" />} label={isAm ? "መርሃ ግብር" : "Classes"} />
              <NavLink to="/gym/plans" icon={<BookOpen className="w-4 h-4" />} label={isAm ? "እቅዶች" : "Plans"} />
            </>
          )}

          {isHotel && (
            <NavLink to="/hotel/rooms" icon={<BedDouble className="w-4 h-4" />} label={isAm ? "ክፍሎች" : "Rooms"} />
          )}

          <NavLink to="/billing" icon={<CreditCard className="w-4 h-4" />} label={isAm ? "ክፍያ" : "Billing"} />
          <NavLink to="/ai" icon={<Sparkles className="w-4 h-4" />} label="Semay AI" />
          <NavLink to="/staff" icon={<Users className="w-4 h-4" />} label={t("staff")} />
          <NavLink to="/profile" icon={<Settings className="w-4 h-4" />} label={t("settings")} />
        </nav>

        <div className="p-4 border-t border-semay-100 space-y-3">
          <button
            type="button"
            onClick={() => i18n.changeLanguage(isAm ? "en" : "am")}
            className="flex items-center gap-2 text-xs text-semay-500 hover:text-semay-800 w-full"
          >
            <Globe className="w-3.5 h-3.5" /> {isAm ? "English" : "አማርኛ"}
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-semay-200 flex items-center justify-center text-sm font-medium text-semay-700">
              {user?.name?.charAt(0) || "U"}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-semay-900 truncate">{user?.name}</div>
              <div className="text-xs text-semay-400">{user?.role}</div>
            </div>
          </div>
          <button type="button" onClick={logout} className="flex items-center gap-2 text-xs text-semay-500">
            <LogOut className="w-3.5 h-3.5" /> {t("logout")}
          </button>
        </div>
      </aside>

      <main className="flex-1 ml-60">
        <header className="bg-white border-b border-semay-200 px-8 h-16 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-lg font-semibold text-semay-900">{t("dashboard")}</h1>
            <p className="text-xs text-semay-400">
              {organization?.name} · {organization?.type}
            </p>
          </div>
          <div className="flex gap-2">
            {showRestaurant && (
              <Link to="/pos" className="text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full">
                {isAm ? "POS" : "Open POS"}
              </Link>
            )}
            {isBakery && (
              <Link to="/bakery/sell" className="text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full">
                {isAm ? "ሽያጭ" : "Sell"}
              </Link>
            )}
            {isPharmacy && (
              <Link to="/pharmacy/sell" className="text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full">
                {isAm ? "ሽያጭ" : "Sell"}
              </Link>
            )}
            {isGym && (
              <Link to="/gym/check-in" className="text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full">
                Check-In
              </Link>
            )}
            {isHotel && (
              <Link to="/hotel/rooms" className="text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full">
                {isAm ? "ክፍሎች" : "Rooms"}
              </Link>
            )}
            <Link
              to="/ai"
              className="text-sm font-medium border border-semay-200 text-semay-700 px-4 py-2 rounded-full flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" /> AI
            </Link>
          </div>
        </header>

        <div className="p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {showRestaurant && (
              <>
                <StatCard label={isAm ? "የዛሬ ሽያጭ" : "Today's Sales"} value={`${stats?.todaySales ?? 0} ETB`} />
                <StatCard label={isAm ? "ትዕዛዞች" : "Orders"} value={String(stats?.todayOrders ?? 0)} />
                <StatCard label={isAm ? "ንቁ" : "Active"} value={String(stats?.activeOrders ?? 0)} />
                <StatCard label={isAm ? "ጠረጴዛዎች" : "Open Tables"} value={String(stats?.openTables ?? 0)} />
              </>
            )}
            {isBakery && (
              <>
                <StatCard label={isAm ? "የዛሬ ሽያጭ" : "Today Sales"} value={`Br ${Number(stats?.todaySales ?? 0).toFixed(2)}`} />
                <StatCard label={isAm ? "ትዕዛዞች" : "Orders"} value={String(stats?.todayOrders ?? 0)} />
                <StatCard label={isAm ? "የተመረተ" : "Produced"} value={String(stats?.produced ?? 0)} />
                <StatCard label={isAm ? "የተባከነ" : "Wasted"} value={String(stats?.wasted ?? 0)} />
              </>
            )}
            {isPharmacy && (
              <>
                <StatCard label={isAm ? "የዛሬ ሽያጭ" : "Today sales"} value={`${stats?.todaySales ?? 0} ETB`} />
                <StatCard label={isAm ? "ሽያጮች" : "Sales"} value={String(stats?.todayOrders ?? 0)} />
                <StatCard label={isAm ? "ምርቶች" : "Products"} value={String(stats?.productCount ?? 0)} />
                <StatCard label={isAm ? "ዝቅተኛ ክምችት" : "Low stock"} value={String(stats?.lowStock?.length ?? 0)} />
              </>
            )}
            {isSchool && (
              <>
                <StatCard label={isAm ? "ተማሪዎች" : "Students"} value={String(stats?.students ?? 0)} />
                <StatCard label={isAm ? "ዛሬ የተገኙ" : "Present"} value={String(stats?.presentToday ?? 0)} />
              </>
            )}
            {isGym && (
              <>
                <StatCard label={isAm ? "ንቁ አባላት" : "Active Members"} value={String(stats?.activeMembers ?? 0)} />
                <StatCard label={isAm ? "ቼክ-ኢን" : "Check-ins"} value={String(stats?.todayCheckIns ?? 0)} />
                <StatCard label={isAm ? "የሚያበቁ" : "Expiring"} value={String(stats?.expiringSoon ?? 0)} />
              </>
            )}
            {isHotel && (
              <>
                <StatCard label={isAm ? "ክፍሎች" : "Rooms"} value={String(stats?.total ?? 0)} />
                <StatCard label={isAm ? "ክፍት" : "Available"} value={String(stats?.available ?? 0)} />
                <StatCard label={isAm ? "ተይዘዋል" : "Occupied"} value={String(stats?.occupied ?? 0)} />
                <StatCard label={isAm ? "ጽዳት" : "Cleaning"} value={String(stats?.cleaning ?? 0)} />
              </>
            )}
          </div>

          <div className="bg-white border border-semay-200 rounded-2xl p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-semay-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">{isPharmacy ? "💊" : "ሰ"}</span>
            </div>
            <h2 className="text-xl font-semibold text-semay-900 mb-2">
              {isAm ? "እንኳን ወደ ሰማይ በደህና መጡ" : "Welcome to Semaiy"}
            </h2>
            <p className="text-semay-500 max-w-md mx-auto">
              {isAm
                ? "መረጃዎ ደህንነቱ የተጠበቀ ነው። ከላይ ያሉትን ምናሌዎች ይጠቀሙ።"
                : "Your data is safe. Use the menu on the left to work day to day."}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

function NavLink({
  to,
  icon,
  label,
  active = false,
}: {
  to: string
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
        active ? "bg-semay-900 text-white" : "text-semay-600 hover:bg-semay-50 hover:text-semay-900"
      }`}
    >
      {icon}
      {label}
    </Link>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-semay-200 rounded-2xl p-5">
      <div className="text-xs font-medium text-semay-400 uppercase tracking-wide mb-2">{label}</div>
      <div className="text-2xl font-semibold text-semay-900">{value}</div>
    </div>
  )
}
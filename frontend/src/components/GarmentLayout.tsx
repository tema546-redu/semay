import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useAuth } from "../lib/auth"
import {
  isGarmentAdmin,
  isGarmentStaffOnly,
  navForRole,
} from "../lib/garmentRoles"
import {
  Home,
  Scissors,
  Package,
  Shirt,
  Users,
  AlertTriangle,
  ClipboardList,
  Wallet,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

/**
 * REPLACE: src/components/GarmentLayout.tsx
 * Role-based sidebar + mobile nav
 * Manager = same as Owner | Staff = short menu
 */

const ICONS: Record<string, any> = {
  Home,
  Scissors,
  Package,
  Shirt,
  Users,
  AlertTriangle,
  ClipboardList,
  Wallet,
  BarChart3,
}

export default function GarmentLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const { user, organization, logout } = useAuth() as any
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const role = user?.role
  const admin = isGarmentAdmin(role)
  const staffOnly = isGarmentStaffOnly(role)
  const items = navForRole(role)

  const onLogout = () => {
    try {
      logout?.()
    } catch {
      localStorage.clear()
    }
    navigate("/login")
  }

  const label = (en: string, am: string) => (isAm ? am : en)

  const NavList = ({ mobile = false }: { mobile?: boolean }) => (
    <nav className={`flex ${mobile ? "flex-row overflow-x-auto gap-1 px-2 py-2" : "flex-col gap-1 p-3"}`}>
      {items.map((item) => {
        const Icon = ICONS[item.icon] || Home
        return (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              mobile
                ? `flex flex-col items-center min-w-[64px] px-2 py-1 rounded-lg text-[10px] ${
                    isActive ? "text-semay-900 font-semibold" : "text-semay-500"
                  }`
                : `flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm ${
                    isActive
                      ? "bg-semay-900 text-white"
                      : "text-semay-700 hover:bg-semay-50"
                  }`
            }
          >
            <Icon className={mobile ? "w-5 h-5" : "w-4 h-4"} />
            <span>{label(item.en, item.am)}</span>
          </NavLink>
        )
      })}
    </nav>
  )

  return (
    <div className="min-h-screen bg-semay-50/80 flex">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:w-56 lg:w-60 flex-col border-r border-semay-200 bg-white">
        <div className="p-4 border-b border-semay-100">
         <Link
   to={staffOnly ? "/garment/staff-home" : "/garment"}
  className="flex items-center gap-2"
>
            <div className="w-8 h-8 rounded-lg bg-semay-900 text-white flex items-center justify-center text-sm font-bold">
              S
            </div>
            <div>
              <div className="font-semibold text-sm text-semay-900 truncate max-w-[140px]">
                {organization?.name || "Semaiy"}
              </div>
              <div className="text-[10px] text-semay-500">
                {staffOnly
                  ? isAm
                    ? "ሰራተኛ"
                    : "Staff"
                  : admin
                    ? isAm
                      ? role === "MANAGER"
                        ? "ማኔጀር"
                        : "ባለቤት"
                      : role === "MANAGER"
                        ? "Manager"
                        : "Owner"
                    : ""}
              </div>
            </div>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto">
          <NavList />
        </div>

        <div className="p-3 border-t border-semay-100 space-y-1">
          {/* Language */}
          <div className="flex gap-1 mb-2">
            <button
              type="button"
              onClick={() => i18n.changeLanguage("en")}
              className={`flex-1 text-xs py-1.5 rounded-lg border ${
                !isAm ? "bg-semay-900 text-white border-semay-900" : "border-semay-200"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => i18n.changeLanguage("am")}
              className={`flex-1 text-xs py-1.5 rounded-lg border ${
                isAm ? "bg-semay-900 text-white border-semay-900" : "border-semay-200"
              }`}
            >
              አማ
            </button>
          </div>

          {admin && (
            <Link
              to="/garment/settings"
              className="flex items-center gap-2 px-3 py-2 text-sm text-semay-700 hover:bg-semay-50 rounded-xl"
            >
              <Settings className="w-4 h-4" />
              {isAm ? "ቅንብሮች" : "Settings"}
            </Link>
          )}
          <button
            type="button"
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl"
          >
            <LogOut className="w-4 h-4" />
            {isAm ? "ውጣ" : "Logout"}
          </button>
          <div className="px-3 pt-1 text-[10px] text-semay-400 truncate">
            {user?.name}
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile top bar */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-semay-200">
          <div className="font-semibold text-semay-900 truncate">
            {organization?.name || "Semaiy"}
          </div>
          <button type="button" onClick={() => setOpen(!open)} className="p-2">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {open && (
          <div className="md:hidden bg-white border-b border-semay-200 p-3 space-y-2">
            <NavList />
            <div className="flex gap-1 px-2">
              <button
                type="button"
                onClick={() => i18n.changeLanguage("en")}
                className="flex-1 text-xs py-2 border rounded-lg"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => i18n.changeLanguage("am")}
                className="flex-1 text-xs py-2 border rounded-lg"
              >
                አማ
              </button>
            </div>
            {admin && (
              <Link
                to="/garment/settings"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm"
              >
                {isAm ? "ቅንብሮች" : "Settings"}
              </Link>
            )}
            <button
              type="button"
              onClick={onLogout}
              className="block w-full text-left px-3 py-2 text-sm text-red-600"
            >
              {isAm ? "ውጣ" : "Logout"}
            </button>
          </div>
        )}

        <main className="flex-1 pb-20 md:pb-6">{children ?? <Outlet />}</main>

        {/* Mobile bottom nav */}
        <div className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-semay-200 z-40">
          <NavList mobile />
        </div>
      </div>
    </div>
  )
}

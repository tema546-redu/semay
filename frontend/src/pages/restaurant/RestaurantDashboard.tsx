import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
  LayoutDashboard,
  UtensilsCrossed,
  ChefHat,
  BookOpen,
  CalendarDays,
  Users,
  Settings,
  CreditCard,
  Sparkles,
  LogOut,
  FileText,
  AlertTriangle,
  TrendingUp,
  Menu,
  X,
  UserCircle,
  Table2,
} from "lucide-react"
import { restaurantApi, billingApi } from "../../lib/api"
import { cn } from "../../lib/utils"

function SideLink({
  to,
  icon,
  label,
  active,
  onClick,
}: {
  to: string
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition",
        active ? "bg-semay-900 text-white" : "text-semay-600 hover:bg-semay-100"
      )}
    >
      {icon}
      {label}
    </Link>
  )
}

// Consistent currency formatting across the whole dashboard
function fmtETB(n: number | undefined | null) {
  const val = Number(n) || 0
  return `${val.toLocaleString()} ETB`
}

export default function RestaurantDashboard() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const location = useLocation()
  const path = location.pathname

  const [data, setData] = useState<any>(null)
  const [settings, setSettings] = useState<any>(null)
  const [trial, setTrial] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const load = () =>
      Promise.all([
        restaurantApi.analytics(),
        restaurantApi.settings(),
        billingApi.current().catch(() => null),
      ]).then(([a, s, b]) => {
        setData(a)
        setSettings(s)
        setTrial(b?.subscription || null)
      })

    load()
      .catch(console.error)
      .finally(() => setLoading(false))

    const onFocus = () => {
      restaurantApi.settings().then(setSettings).catch(() => {})
      restaurantApi.analytics().then(setData).catch(() => {})
    }
    window.addEventListener("focus", onFocus)

    const t = setInterval(() => {
      restaurantApi.analytics().then(setData).catch(() => {})
    }, 15000)

    return () => {
      clearInterval(t)
      window.removeEventListener("focus", onFocus)
    }
  }, [])

  const hours = data?.hourlyChart || []
  const maxHourSales = Math.max(1, ...hours.map((d: any) => Number(d.sales) || 0))
  const health = data?.healthScore ?? 0
  const healthLabel = health >= 80 ? "Strong" : health >= 50 ? "OK" : "Needs attention"
  const healthColor =
    health >= 80 ? "text-emerald-600" : health >= 50 ? "text-amber-600" : "text-red-500"

  const closeMobileMenu = () => setMobileMenuOpen(false)

  const handleLogout = () => {
    localStorage.removeItem("semay_token")
    localStorage.removeItem("token")
    window.location.href = "/login"
  }

  const nav = [
    { to: "/dashboard", icon: <LayoutDashboard className="w-4 h-4" />, label: "Dashboard" },
    { to: "/pos", icon: <UtensilsCrossed className="w-4 h-4" />, label: "POS" },
    { to: "/kds", icon: <ChefHat className="w-4 h-4" />, label: "Kitchen" },
    { to: "/menu", icon: <BookOpen className="w-4 h-4" />, label: "Menu" },
    { to: "/reservations", icon: <CalendarDays className="w-4 h-4" />, label: "Reservations" },
    { to: "/staff", icon: <Users className="w-4 h-4" />, label: "Staff" },
    { to: "/tables", icon: <Table2 className="w-4 h-4" />, label: isAm ? "ጠረጴዛ" : "Tables" },
    { to: "/expenses", icon: <FileText className="w-4 h-4" />, label: isAm ? "ወጪ" : "Expenses" },
    { to: "/reports", icon: <FileText className="w-4 h-4" />, label: "Reports" },
    { to: "/restaurant/settings", icon: <Settings className="w-4 h-4" />, label: "Settings" },
    { to: "/billing", icon: <CreditCard className="w-4 h-4" />, label: "Billing" },
    { to: "/ai", icon: <Sparkles className="w-4 h-4" />, label: "Semay AI" },
    { to: "/profile", icon: <UserCircle className="w-4 h-4" />, label: isAm ? "መገለጫ" : "Profile" },
  ]

  const footerNav = [
    { to: "/dashboard", label: "Home", icon: <LayoutDashboard className="w-5 h-5" /> },
    { to: "/pos", label: "POS", icon: <UtensilsCrossed className="w-5 h-5" /> },
    { to: "/reports", label: "Reports", icon: <FileText className="w-5 h-5" /> },
    { to: "/restaurant/settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
    { to: "/profile", label: "Profile", icon: <UserCircle className="w-5 h-5" /> },
  ]

  const isActive = (to: string) => path === to || (to !== "/dashboard" && path.startsWith(to))

  return (
    <div className="min-h-svh bg-semay-50 flex">
      <aside className="hidden md:flex w-56 flex-col border-r border-semay-200 bg-white shrink-0 h-svh sticky top-0">
        <div className="flex items-center gap-2 px-4 pt-4 pb-3">
          <div className="w-8 h-8 rounded-xl bg-semay-900 text-white flex items-center justify-center text-sm font-bold">
            ሰ
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-semay-900 text-sm">Semay</div>
            <div className="text-[10px] text-semay-400 truncate max-w-[120px]">
              {settings?.name || "Restaurant"}
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 space-y-0.5 pb-2">
          {nav.map((item) => (
            <SideLink
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              active={isActive(item.to)}
            />
          ))}
        </nav>
        <div className="p-3 border-t border-semay-100">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-2 px-3 py-2 text-sm text-semay-500 hover:text-semay-900 rounded-xl hover:bg-semay-50"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={closeMobileMenu} aria-hidden />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[280px] max-w-[85vw] bg-white shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-out",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-semay-100">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-semay-900 text-white flex items-center justify-center text-sm font-bold shrink-0">
              ሰ
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-semay-900 text-sm">Semay</div>
              <div className="text-[10px] text-semay-400 truncate">{settings?.name || "Restaurant"}</div>
            </div>
          </div>
          <button type="button" onClick={closeMobileMenu} className="w-9 h-9 rounded-xl flex items-center justify-center">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-0.5">
          {nav.map((item) => (
            <SideLink
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              active={isActive(item.to)}
              onClick={closeMobileMenu}
            />
          ))}
        </nav>
        <div className="p-4 border-t border-semay-100">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-semay-500"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 min-w-0 pb-20 md:pb-0">
        <header className="bg-gradient-to-r from-semay-900 via-slate-800 to-semay-900 text-white px-4 md:px-6 h-14 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-9 h-9 shrink-0 rounded-xl flex items-center justify-center bg-white/10"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="min-w-0">
              <h1 className="text-sm font-semibold truncate">Restaurant Health</h1>
              <p className="text-[11px] text-white/70 truncate">
                {settings?.openTime || "08:00"} – {settings?.closeTime || "22:00"}
                {settings?.name ? ` · ${settings.name}` : ""}
              </p>
            </div>
          </div>
          <Link
            to="/pos"
            className="text-xs font-semibold bg-emerald-400 text-semay-900 px-4 py-1.5 rounded-full shadow-sm"
          >
            POS
          </Link>
        </header>

        <div className="p-4 md:p-6 space-y-4 max-w-6xl">
          {trial?.isTrial && trial.daysLeft != null && (
            <div
              className={cn(
                "rounded-xl px-4 py-3 text-sm flex flex-wrap items-center justify-between gap-2 shadow-sm border",
                trial.daysLeft <= 1
                  ? "bg-amber-50 border-amber-200 text-amber-900"
                  : "bg-white border-semay-100 text-semay-800"
              )}
            >
              <span>
                {isAm
                  ? `ነጻ ሙከራ፡ ${trial.daysLeft} ቀናት ቀርተዋል`
                  : `Free trial: ${trial.daysLeft} day${trial.daysLeft === 1 ? "" : "s"} left`}
              </span>
              <Link to="/billing" className="font-semibold underline underline-offset-2">
                {isAm ? "እቅድ ይምረጡ" : "Choose a plan"}
              </Link>
            </div>
          )}

          {loading ? (
            <p className="text-sm text-semay-400">Loading...</p>
          ) : (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: "TODAY SALES", value: fmtETB(data?.today?.sales) },
                  { label: "TODAY ORDERS", value: (data?.today?.orders ?? 0).toLocaleString() },
                  { label: "ACTIVE NOW", value: (data?.today?.activeOrders ?? 0).toLocaleString() },
                  {
                    label: "HEALTH SCORE",
                    value: health,
                    sub: healthLabel,
                    accent: true,
                  },
                ].map((k) => (
                  <div
                    key={k.label}
                    className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-[10px] font-semibold tracking-wide text-semay-400 uppercase">{k.label}</div>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <div className="text-2xl font-semibold text-semay-900 tabular-nums">{k.value}</div>
                      {k.accent && (
                        <TrendingUp className={cn("w-4 h-4", healthColor)} />
                      )}
                    </div>
                    {k.sub && (
                      <div className={cn("text-xs mt-0.5 font-medium", k.accent ? healthColor : "text-semay-500")}>
                        {k.sub}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-semibold text-semay-900 flex items-center gap-2">
                    <span className="relative flex w-2 h-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                      <span className="relative inline-flex rounded-full w-2 h-2 bg-amber-400" />
                    </span>
                    Active orders
                  </h2>
                  <Link to="/kds" className="text-xs font-medium text-semay-600">
                    Open Kitchen →
                  </Link>
                </div>
                {!data?.activeList?.length ? (
                  <p className="text-sm text-semay-400">No active tickets</p>
                ) : (
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {data.activeList.map((o: any) => (
                      <Link
                        key={o.id}
                        to="/kds"
                        className="shrink-0 min-w-[140px] rounded-xl border border-semay-100 bg-semay-50 px-3 py-2 hover:border-semay-200 transition-colors"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-medium">
                          <span className="relative flex w-1.5 h-1.5">
                            {o.status === "READY" && (
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            )}
                            <span
                              className={cn(
                                "relative inline-flex w-1.5 h-1.5 rounded-full",
                                o.status === "READY" ? "bg-green-500" : "bg-amber-400"
                              )}
                            />
                          </span>
                          Table {o.tableNumber}
                        </div>
                        <div className="text-[11px] text-semay-500 mt-0.5 tabular-nums">
                          {o.status} · {o.itemCount} items · {fmtETB(o.total)}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Daily (hourly) chart */}
              <div className="bg-white border border-semay-100 rounded-xl p-4 md:p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h2 className="text-sm font-semibold text-semay-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    Today by hour
                  </h2>
                  <div className="text-xs text-semay-500 tabular-nums">
                    Today: {fmtETB(data?.today?.sales)} · {data?.today?.orders ?? 0} orders
                  </div>
                </div>
                <div className="flex items-end gap-1 h-36 overflow-x-auto">
                  {hours.length === 0 ? (
                    <p className="text-sm text-semay-400 w-full text-center py-8">No data yet — open POS</p>
                  ) : (
                    hours.map((d: any) => {
                      const sales = Number(d.sales) || 0
                      const h = sales <= 0 ? 3 : Math.max(6, Math.round((sales / maxHourSales) * 100))
                      return (
                        <div
                          key={d.hour}
                          className="flex-1 min-w-[28px] flex flex-col items-center gap-1 h-full justify-end group relative"
                        >
                          <div className="absolute bottom-full mb-1 opacity-0 group-hover:opacity-100 text-[10px] bg-semay-900 text-white px-1.5 py-0.5 rounded z-10 whitespace-nowrap tabular-nums">
                            {d.label}: {fmtETB(sales)}
                          </div>
                          <div
                            className="w-full rounded-t-md bg-emerald-600/90 hover:bg-emerald-700 transition-all"
                            style={{ height: `${h}%` }}
                          />
                          <div className="text-[9px] text-semay-400">{String(d.hour).padStart(2, "0")}</div>
                        </div>
                      )
                    })
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm">
                  <h2 className="text-sm font-semibold text-semay-900 mb-3">Best Sellers</h2>
                  {!data?.bestSellers?.length ? (
                    <div className="text-sm text-semay-400 py-6 text-center">
                      No sales yet
                      <div className="mt-2">
                        <Link to="/pos" className="text-xs font-medium bg-semay-900 text-white px-3 py-1.5 rounded-full">
                          Open POS
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {data.bestSellers.map((item: any, i: number) => (
                        <li key={item.name} className="flex items-center justify-between text-sm gap-3">
                          <span className="text-semay-700 truncate">
                            {i + 1}. {item.name}
                          </span>
                          <span className="text-semay-500 tabular-nums shrink-0 text-right">
                            {item.qty} · {Math.round(item.revenue).toLocaleString()} ETB
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between mb-2">
                      <h2 className="text-sm font-semibold text-semay-900">Today's reservations</h2>
                      <Link to="/reservations" className="text-xs text-semay-500">
                        All
                      </Link>
                    </div>
                    {!data?.upcomingReservations?.length ? (
                      <p className="text-sm text-semay-400">None upcoming</p>
                    ) : (
                      <ul className="space-y-2">
                        {data.upcomingReservations.map((r: any) => (
                          <li key={r.id} className="text-sm flex justify-between">
                            <span className="text-semay-800">{r.guestName}</span>
                            <span className="text-xs text-semay-500 tabular-nums">
                              {new Date(r.reservedAt).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}{" "}
                              · {r.partySize}p
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm">
                    <h2 className="text-sm font-semibold text-semay-900 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Staff
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {(data?.staff || []).slice(0, 8).map((u: any) => (
                        <span
                          key={u.id}
                          className="text-xs px-2 py-1 rounded-full bg-semay-50 border border-semay-100 text-semay-700"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1" />
                          {u.name}
                          <span className="text-semay-400"> · {u.role}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm">
                    <h2 className="text-sm font-semibold text-semay-900 mb-1 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      Low Stock
                    </h2>
                    {!data?.lowStock?.length ? (
                      <p className="text-sm text-semay-400">All stock levels OK</p>
                    ) : (
                      <ul className="text-sm space-y-1">
                        {data.lowStock.map((m: any) => (
                          <li key={m.id} className="flex justify-between">
                            <span>{m.name}</span>
                            <span className="text-amber-600 tabular-nums">{m.stockQty}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Mobile footer: Home, POS, Reports, Settings, Profile */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-semay-200">
        <div className="grid grid-cols-5 h-16">
          {footerNav.map((item) => {
            const active = isActive(item.to)
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium",
                  active ? "text-semay-900" : "text-semay-400"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
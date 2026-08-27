import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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
        active
          ? "bg-semay-900 text-white"
          : "text-semay-600 hover:bg-semay-100"
      )}
    >
      {icon}
      {label}
    </Link>
  )
}

export default function RestaurantDashboard() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  const [data, setData] = useState<any>(null)
  const [settings, setSettings] = useState<any>(null)
  const [trial, setTrial] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    Promise.all([
      restaurantApi.analytics(),
      restaurantApi.settings(),
      billingApi.current().catch(() => null),
    ])
      .then(([a, s, b]) => {
        setData(a)
        setSettings(s)
        setTrial(b?.subscription || null)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const maxSales = Math.max(
    1,
    ...(data?.last7Days || []).map((d: any) => d.sales || 0)
  )

  const health = data?.healthScore ?? 0

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/login"
  }

  return (
    <div className="min-h-svh bg-semay-50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-56 flex-col border-r border-semay-200 bg-white p-4 shrink-0">
        <div className="flex items-center gap-2 px-2 mb-6">
          <div className="w-8 h-8 rounded-xl bg-semay-900 text-white flex items-center justify-center text-sm font-bold">
            ሰ
          </div>

          <div>
            <div className="font-semibold text-semay-900 text-sm">Semay</div>
            <div className="text-[10px] text-semay-400 truncate max-w-[120px]">
              {settings?.name || "Restaurant"}
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-0.5">
          <SideLink
            to="/dashboard"
            icon={<LayoutDashboard className="w-4 h-4" />}
            label="Dashboard"
            active
          />

          <SideLink
            to="/pos"
            icon={<UtensilsCrossed className="w-4 h-4" />}
            label="POS"
          />

          <SideLink
            to="/kds"
            icon={<ChefHat className="w-4 h-4" />}
            label="Kitchen"
          />

          <SideLink
            to="/menu"
            icon={<BookOpen className="w-4 h-4" />}
            label="Menu"
          />

          <SideLink
            to="/reservations"
            icon={<CalendarDays className="w-4 h-4" />}
            label="Reservations"
          />

          <SideLink
            to="/staff"
            icon={<Users className="w-4 h-4" />}
            label="Staff"
          />

          <SideLink
            to="/tables"
            icon={<LayoutDashboard className="w-4 h-4" />}
            label={isAm ? "ጠረጴዛ" : "Tables"}
          />

          <SideLink
            to="/expenses"
            icon={<FileText className="w-4 h-4" />}
            label={isAm ? "ወጪ" : "Expenses"}
          />

          <SideLink
            to="/restaurant/settings"
            icon={<Settings className="w-4 h-4" />}
            label="Settings"
          />

          <SideLink
            to="/billing"
            icon={<CreditCard className="w-4 h-4" />}
            label="Billing"
          />

          <SideLink
            to="/ai"
            icon={<Sparkles className="w-4 h-4" />}
            label="Semay AI"
          />
        </nav>

        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 text-sm text-semay-500 hover:text-semay-900"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[280px] max-w-[85vw] bg-white shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-out",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Mobile Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-semay-100">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-semay-900 text-white flex items-center justify-center text-sm font-bold shrink-0">
              ሰ
            </div>

            <div className="min-w-0">
              <div className="font-semibold text-semay-900 text-sm">
                Semay
              </div>

              <div className="text-[10px] text-semay-400 truncate">
                {settings?.name || "Restaurant"}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-semay-500 hover:bg-semay-100 hover:text-semay-900 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-0.5">
          <SideLink
            to="/dashboard"
            icon={<LayoutDashboard className="w-4 h-4" />}
            label="Dashboard"
            active
            onClick={closeMobileMenu}
          />

          <SideLink
            to="/pos"
            icon={<UtensilsCrossed className="w-4 h-4" />}
            label="POS"
            onClick={closeMobileMenu}
          />

          <SideLink
            to="/kds"
            icon={<ChefHat className="w-4 h-4" />}
            label="Kitchen"
            onClick={closeMobileMenu}
          />

          <SideLink
            to="/menu"
            icon={<BookOpen className="w-4 h-4" />}
            label="Menu"
            onClick={closeMobileMenu}
          />

          <SideLink
            to="/reservations"
            icon={<CalendarDays className="w-4 h-4" />}
            label="Reservations"
            onClick={closeMobileMenu}
          />

          <SideLink
            to="/staff"
            icon={<Users className="w-4 h-4" />}
            label="Staff"
            onClick={closeMobileMenu}
          />

          <SideLink
            to="/tables"
            icon={<LayoutDashboard className="w-4 h-4" />}
            label={isAm ? "ጠረጴዛ" : "Tables"}
            onClick={closeMobileMenu}
          />

          <SideLink
            to="/expenses"
            icon={<FileText className="w-4 h-4" />}
            label={isAm ? "ወጪ" : "Expenses"}
            onClick={closeMobileMenu}
          />

          <SideLink
            to="/restaurant/settings"
            icon={<Settings className="w-4 h-4" />}
            label="Settings"
            onClick={closeMobileMenu}
          />

          <SideLink
            to="/billing"
            icon={<CreditCard className="w-4 h-4" />}
            label="Billing"
            onClick={closeMobileMenu}
          />

          <SideLink
            to="/ai"
            icon={<Sparkles className="w-4 h-4" />}
            label="Semay AI"
            onClick={closeMobileMenu}
          />
        </nav>

        {/* Mobile Logout */}
        <div className="p-4 border-t border-semay-100">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-semay-500 hover:bg-semay-100 hover:text-semay-900 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0">
        <header className="bg-white border-b border-semay-200 px-4 md:px-6 h-14 flex items-center justify-between sticky top-0 z-30">
          {/* Mobile Menu Button + Title */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden w-9 h-9 shrink-0 rounded-xl flex items-center justify-center text-semay-700 hover:bg-semay-100 active:bg-semay-200 transition"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="min-w-0">
              <h1 className="text-sm font-semibold text-semay-900 truncate">
                Restaurant Health
              </h1>

              <p className="text-xs text-semay-400 truncate">
                {settings?.openTime || "08:00"} –{" "}
                {settings?.closeTime || "22:00"}
                {settings?.name ? ` · ${settings.name}` : ""}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/closing"
              className="hidden sm:inline-flex text-xs font-medium border border-semay-200 px-3 py-1.5 rounded-full hover:bg-semay-50"
            >
              Closing Report
            </Link>

            <Link
              to="/pos"
              className="text-xs font-medium bg-semay-900 text-white px-4 py-1.5 rounded-full"
            >
              POS
            </Link>
          </div>
        </header>

        <div className="p-4 md:p-6 space-y-4 max-w-6xl">
          {/* Trial banner */}
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
                  : `Free trial: ${trial.daysLeft} day${
                      trial.daysLeft === 1 ? "" : "s"
                    } left`}
              </span>

              <Link
                to="/billing"
                className="font-semibold underline underline-offset-2"
              >
                {isAm ? "እቅድ ይምረጡ" : "Choose a plan"}
              </Link>
            </div>
          )}

          {loading ? (
            <p className="text-sm text-semay-400">Loading...</p>
          ) : (
            <>
              {/* KPI cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  {
                    label: "TODAY SALES",
                    value: `${data?.today?.sales ?? 0} ETB`,
                  },
                  {
                    label: "TODAY ORDERS",
                    value: data?.today?.orders ?? 0,
                  },
                  {
                    label: "ACTIVE NOW",
                    value: data?.today?.activeOrders ?? 0,
                  },
                  {
                    label: "HEALTH SCORE",
                    value: health,
                    sub:
                      health >= 80
                        ? "Strong"
                        : health >= 50
                        ? "OK"
                        : "Needs attention",
                  },
                ].map((k) => (
                  <div
                    key={k.label}
                    className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm"
                  >
                    <div className="text-[10px] font-semibold tracking-wide text-semay-400 uppercase">
                      {k.label}
                    </div>

                    <div className="text-2xl font-semibold text-semay-900 mt-1">
                      {k.value}
                    </div>

                    {k.sub && (
                      <div className="text-xs text-semay-500 mt-0.5">
                        {k.sub}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Active orders strip */}
              <div className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-semibold text-semay-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Active orders
                  </h2>

                  <Link
                    to="/kds"
                    className="text-xs font-medium text-semay-600 hover:text-semay-900"
                  >
                    Open Kitchen →
                  </Link>
                </div>

                {!data?.activeList?.length ? (
                  <p className="text-sm text-semay-400">
                    No active tickets
                  </p>
                ) : (
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {data.activeList.map((o: any) => (
                      <Link
                        key={o.id}
                        to="/kds"
                        className="shrink-0 min-w-[140px] rounded-xl border border-semay-100 bg-semay-50 px-3 py-2 hover:border-semay-300"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-medium text-semay-900">
                          <span
                            className={cn(
                              "w-1.5 h-1.5 rounded-full",
                              o.status === "READY"
                                ? "bg-green-500"
                                : "bg-amber-400"
                            )}
                          />

                          Table {o.tableNumber}
                        </div>

                        <div className="text-[11px] text-semay-500 mt-0.5">
                          {o.status} · {o.itemCount} items · {o.total} ETB
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Chart */}
              <div className="bg-white border border-semay-100 rounded-xl p-4 md:p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h2 className="text-sm font-semibold text-semay-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Last 7 Days Sales
                  </h2>

                  <div className="text-xs text-semay-500">
                    Week: {data?.week?.sales ?? 0} ETB · avg{" "}
                    {data?.week?.avgDaily ?? 0}/day
                  </div>
                </div>

                <div className="flex items-end gap-2 h-36">
                  {(data?.last7Days || []).map((d: any) => {
                    const h = Math.max(
                      4,
                      Math.round((d.sales / maxSales) * 100)
                    )

                    return (
                      <div
                        key={d.date}
                        className="flex-1 flex flex-col items-center gap-1 group relative"
                      >
                        <div className="absolute -top-7 opacity-0 group-hover:opacity-100 text-[10px] bg-semay-900 text-white px-1.5 py-0.5 rounded whitespace-nowrap z-10">
                          {d.sales} ETB · {d.orders} orders
                        </div>

                        <div
                          className="w-full rounded-t-md bg-semay-800/90 hover:bg-semay-900 transition-all"
                          style={{ height: `${h}%` }}
                          title={`${d.date}: ${d.sales} ETB`}
                        />

                        <div className="text-[10px] text-semay-400">
                          {d.date.slice(5)}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {/* Best sellers */}
                <div className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm">
                  <h2 className="text-sm font-semibold text-semay-900 mb-3">
                    Best Sellers
                  </h2>

                  {!data?.bestSellers?.length ? (
                    <div className="text-sm text-semay-400 py-6 text-center">
                      No sales yet

                      <div className="mt-2">
                        <Link
                          to="/pos"
                          className="text-xs font-medium bg-semay-900 text-white px-3 py-1.5 rounded-full"
                        >
                          Open POS
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {data.bestSellers.map((item: any, i: number) => (
                        <li
                          key={item.name}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-semay-700">
                            {i + 1}. {item.name}
                          </span>

                          <span className="text-semay-500 tabular-nums">
                            {item.qty} · {Math.round(item.revenue)} ETB
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Reservations + staff + low stock */}
                <div className="space-y-3">
                  <div className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between mb-2">
                      <h2 className="text-sm font-semibold text-semay-900">
                        Today’s reservations
                      </h2>

                      <Link
                        to="/reservations"
                        className="text-xs text-semay-500"
                      >
                        All
                      </Link>
                    </div>

                    {!data?.upcomingReservations?.length ? (
                      <p className="text-sm text-semay-400">
                        None upcoming
                      </p>
                    ) : (
                      <ul className="space-y-2">
                        {data.upcomingReservations.map((r: any) => (
                          <li
                            key={r.id}
                            className="text-sm flex justify-between"
                          >
                            <span className="text-semay-800">
                              {r.guestName}
                            </span>

                            <span className="text-xs text-semay-500">
                              {new Date(
                                r.reservedAt
                              ).toLocaleTimeString([], {
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
                          <span className="text-semay-400">
                            {" "}
                            · {u.role}
                          </span>
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
                      <p className="text-sm text-semay-400">
                        All stock levels OK
                      </p>
                    ) : (
                      <ul className="text-sm space-y-1">
                        {data.lowStock.map((m: any) => (
                          <li
                            key={m.id}
                            className="flex justify-between"
                          >
                            <span>{m.name}</span>
                            <span className="text-amber-600">
                              {m.stockQty}
                            </span>
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
    </div>
  )
}
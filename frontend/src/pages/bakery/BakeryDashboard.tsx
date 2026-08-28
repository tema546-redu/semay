import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  ChefHat,
  Trash2,
  FileText,
  CreditCard,
  Settings,
  UserCircle,
  LogOut,
  Menu,
  X,
  TrendingUp,
} from "lucide-react"
import { bakeryApi } from "../../lib/api"
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

export default function BakeryDashboard() {
  const location = useLocation()
  const path = location.pathname
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    bakeryApi
      .dashboard()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("semay_token")
    localStorage.removeItem("token")
    window.location.href = "/login"
  }

  const nav = [
    { to: "/bakery", icon: <LayoutDashboard className="w-4 h-4" />, label: "Home" },
    { to: "/bakery/sell", icon: <ShoppingBag className="w-4 h-4" />, label: "POS / Sell" },
    { to: "/bakery/products", icon: <Package className="w-4 h-4" />, label: "Store / Products" },
    { to: "/bakery/produce", icon: <ChefHat className="w-4 h-4" />, label: "Produce" },
    { to: "/bakery/waste", icon: <Trash2 className="w-4 h-4" />, label: "Waste" },
    { to: "/bakery/expenses", icon: <FileText className="w-4 h-4" />, label: "Expenses" },
    { to: "/bakery/reports", icon: <TrendingUp className="w-4 h-4" />, label: "Reports" },
    { to: "/billing", icon: <CreditCard className="w-4 h-4" />, label: "Billing" },
    { to: "/bakery/settings", icon: <Settings className="w-4 h-4" />, label: "Settings" },
    { to: "/profile", icon: <UserCircle className="w-4 h-4" />, label: "Profile" },
  ]

  const footerNav = [
    { to: "/bakery", label: "Home", icon: <LayoutDashboard className="w-5 h-5" /> },
    { to: "/bakery/sell", label: "POS", icon: <ShoppingBag className="w-5 h-5" /> },
    { to: "/bakery/products", label: "Store", icon: <Package className="w-5 h-5" /> },
    { to: "/bakery/reports", label: "Reports", icon: <TrendingUp className="w-5 h-5" /> },
    { to: "/profile", label: "Profile", icon: <UserCircle className="w-5 h-5" /> },
  ]

  const isActive = (to: string) =>
    path === to || (to !== "/bakery" && path.startsWith(to))

  return (
    <div className="min-h-svh bg-semay-50 flex">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-56 flex-col border-r border-semay-200 bg-white shrink-0 h-svh sticky top-0">
        <div className="flex items-center gap-2 px-4 pt-4 pb-3">
          <div className="w-8 h-8 rounded-xl bg-amber-700 text-white flex items-center justify-center text-sm font-bold">
            ቢ
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-semay-900 text-sm">Semay Bakery</div>
            <div className="text-[10px] text-semay-400">Daily ops</div>
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
        <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[280px] max-w-[85vw] bg-white shadow-2xl md:hidden flex flex-col transition-transform duration-300",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <div className="font-semibold text-semay-900">Semay Bakery</div>
          <button type="button" onClick={() => setMobileMenuOpen(false)} className="p-2">
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
              onClick={() => setMobileMenuOpen(false)}
            />
          ))}
        </nav>
        <div className="p-4 border-t">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-2 px-3 py-2 text-sm text-semay-500"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 min-w-0 pb-20 md:pb-0">
        <header className="bg-gradient-to-r from-amber-900 via-amber-800 to-semay-900 text-white px-4 md:px-6 h-14 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center bg-white/10"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="min-w-0">
              <h1 className="text-sm font-semibold truncate">Bakery Health</h1>
              <p className="text-[11px] text-white/70">Produce · Sell · Remaining</p>
            </div>
          </div>
          <Link
            to="/bakery/sell"
            className="text-xs font-semibold bg-amber-300 text-amber-950 px-4 py-1.5 rounded-full"
          >
            POS
          </Link>
        </header>

        <div className="p-4 md:p-6 space-y-4 max-w-5xl">
          {loading ? (
            <p className="text-sm text-semay-400">Loading...</p>
          ) : (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: "TODAY SALES", value: `${data?.todaySales ?? 0} ETB` },
                  { label: "SALES COUNT", value: data?.todayOrders ?? 0 },
                  { label: "PRODUCED", value: data?.produced ?? 0 },
                  { label: "REMAINING", value: data?.remaining ?? 0 },
                ].map((k) => (
                  <div key={k.label} className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm">
                    <div className="text-[10px] font-semibold tracking-wide text-semay-400 uppercase">
                      {k.label}
                    </div>
                    <div className="text-2xl font-semibold text-semay-900 mt-1">{k.value}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm">
                <div className="flex justify-between mb-3">
                  <h2 className="text-sm font-semibold text-semay-900">Store stock</h2>
                  <Link to="/bakery/products" className="text-xs text-semay-500">
                    Manage →
                  </Link>
                </div>
                {!data?.products?.length ? (
                  <div className="text-sm text-semay-400 py-6 text-center">
                    No products yet
                    <div className="mt-2">
                      <Link
                        to="/bakery/products"
                        className="text-xs font-medium bg-semay-900 text-white px-3 py-1.5 rounded-full"
                      >
                        Add product
                      </Link>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {data.products.slice(0, 12).map((p: any) => (
                      <li key={p.id} className="flex justify-between text-sm">
                        <span className="text-semay-800">{p.name}</span>
                        <span
                          className={cn(
                            "tabular-nums font-medium",
                            p.stockQty <= 5 ? "text-amber-600" : "text-semay-500"
                          )}
                        >
                          {p.stockQty} left · {Number(p.price)} ETB
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/bakery/produce"
                  className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm hover:border-amber-300"
                >
                  <ChefHat className="w-5 h-5 text-amber-700 mb-2" />
                  <div className="text-sm font-semibold text-semay-900">Produce</div>
                  <div className="text-xs text-semay-400">Record baked items</div>
                </Link>
                <Link
                  to="/bakery/waste"
                  className="bg-white border border-semay-100 rounded-xl p-4 shadow-sm hover:border-amber-300"
                >
                  <Trash2 className="w-5 h-5 text-semay-500 mb-2" />
                  <div className="text-sm font-semibold text-semay-900">Waste</div>
                  <div className="text-xs text-semay-400">
                    Today: {data?.wasted ?? 0}
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Mobile footer */}
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
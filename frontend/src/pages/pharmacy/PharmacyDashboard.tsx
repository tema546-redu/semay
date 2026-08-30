import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  AlertTriangle,
  Clock,
  LogOut,
  CreditCard,
  Settings,
} from "lucide-react"
import { pharmacyApi } from "../../lib/api"
import { cn } from "../../lib/utils"

const nav = [
  { to: "/pharmacy", icon: LayoutDashboard, label: "Home" },
  { to: "/pharmacy/sell", icon: ShoppingCart, label: "Sell" },
  { to: "/pharmacy/products", icon: Package, label: "Stock" },
  { to: "/billing", icon: CreditCard, label: "Billing" },
  { to: "/profile", icon: Settings, label: "Profile" },
]

export default function PharmacyDashboard() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    pharmacyApi.dashboard().then(setData).catch(console.error)
  }, [])

  const logout = () => {
    localStorage.removeItem("semay_token")
    window.location.href = "/login"
  }

  return (
    <div className="min-h-svh bg-semay-50 flex">
      <aside className="hidden md:flex w-56 flex-col border-r bg-white p-3 gap-1">
        <div className="px-2 py-3 font-semibold text-semay-900">Semay Pharmacy</div>
        {nav.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-semay-700 hover:bg-semay-100"
          >
            <n.icon className="w-4 h-4" /> {n.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={logout}
          className="mt-auto flex items-center gap-2 px-3 py-2 text-sm text-rose-600"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </aside>

      <main className="flex-1 p-4 pb-24 max-w-3xl mx-auto w-full space-y-4">
        <h1 className="text-lg font-semibold text-semay-900">Pharmacy health</h1>

        <div className="grid grid-cols-2 gap-3">
          <Card label="Today sales" value={`${data?.todaySales ?? "—"} ETB`} />
          <Card label="Sales count" value={data?.todayOrders ?? "—"} />
          <Card label="Products" value={data?.productCount ?? "—"} />
          <Card
            label="Low stock"
            value={data?.lowStock?.length ?? "—"}
            warn={(data?.lowStock?.length || 0) > 0}
          />
        </div>

        <section className="bg-white border rounded-2xl p-4 shadow-sm">
          <h2 className="text-sm font-semibold flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-amber-500" /> Expiring ≤ 30 days
          </h2>
          {!data?.expiring?.length ? (
            <p className="text-sm text-semay-400">None</p>
          ) : (
            <ul className="text-sm space-y-1">
              {data.expiring.map((p: any) => (
                <li key={p.id} className="flex justify-between">
                  <span>{p.name}</span>
                  <span className="text-amber-600">
                    {p.expiryDate ? new Date(p.expiryDate).toLocaleDateString() : ""}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="bg-white border rounded-2xl p-4 shadow-sm">
          <h2 className="text-sm font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-rose-500" /> Low stock
          </h2>
          {!data?.lowStock?.length ? (
            <p className="text-sm text-semay-400">Stock OK</p>
          ) : (
            <ul className="text-sm space-y-1">
              {data.lowStock.map((p: any) => (
                <li key={p.id} className="flex justify-between">
                  <span>{p.name}</span>
                  <span className="text-rose-600">{p.stockQty}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <Link
          to="/pharmacy/sell"
          className="block text-center bg-semay-900 text-white py-3 rounded-xl font-medium"
        >
          Open sell (POS)
        </Link>
      </main>

      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t grid grid-cols-5 gap-1 px-1 py-2 z-20">
        {nav.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            className="flex flex-col items-center text-[10px] text-semay-600"
          >
            <n.icon className="w-5 h-5 mb-0.5" />
            {n.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

function Card({
  label,
  value,
  warn,
}: {
  label: string
  value: string | number
  warn?: boolean
}) {
  return (
    <div
      className={cn(
        "bg-white border rounded-2xl p-4 shadow-sm",
        warn && "border-amber-300"
      )}
    >
      <div className="text-xs text-semay-500">{label}</div>
      <div className="text-xl font-semibold text-semay-900 mt-1">{value}</div>
    </div>
  )
}
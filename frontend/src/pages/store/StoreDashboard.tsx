import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Package,
  ArrowDownToLine,
  ArrowUpFromLine,
  FileText,
  Settings,
  UserCircle,
  LogOut,
  AlertTriangle,
  Menu,
  X,
} from "lucide-react"
import { storeApi } from "../../lib/api"

export default function StoreDashboard() {
  const nav = useNavigate()
  const [data, setData] = useState<any>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  const load = () =>
    storeApi
      .summary()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))

  useEffect(() => {
    load()
    const t = setInterval(load, 15000)
    return () => clearInterval(t)
  }, [])

  const logout = () => {
    localStorage.removeItem("semay_token")
    localStorage.removeItem("token")
    window.location.href = "/login"
  }

  const low = data?.lowStockCount || 0

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-stone-900 text-white px-4 h-14 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <div className="text-sm font-semibold">Semay Store</div>
            <div className="text-[10px] text-white/60">Inventory · In / Out</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {low > 0 && (
            <span className="text-[10px] bg-rose-500 text-white px-2 py-0.5 rounded-full font-bold">
              Low {low}
            </span>
          )}
          <Link to="/store/settings" className="p-2 rounded-lg bg-white/10">
            <Settings className="w-4 h-4" />
          </Link>
          <Link to="/profile" className="p-2 rounded-lg bg-white/10">
            <UserCircle className="w-4 h-4" />
          </Link>
          <button type="button" onClick={logout} className="p-2 rounded-lg bg-white/10">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setMenuOpen(false)}>
          <aside
            className="w-64 bg-white h-full p-4 space-y-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Menu</span>
              <button type="button" onClick={() => setMenuOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            {[
              ["/store", "Home"],
              ["/store/items", "Stock items"],
              ["/store/receive", "Receive (IN)"],
              ["/store/out", "Send out (OUT)"],
              ["/store/reports", "Reports"],
              ["/store/settings", "Settings · Billing"],
              ["/profile", "Profile"],
            ].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm hover:bg-stone-100"
              >
                {label}
              </Link>
            ))}
            <button
              type="button"
              onClick={logout}
              className="w-full text-left px-3 py-2 text-sm text-rose-600"
            >
              Logout
            </button>
          </aside>
        </div>
      )}

      <main className="max-w-3xl mx-auto p-4 space-y-4 pb-24">
        {loading ? (
          <p className="text-sm text-stone-400">Loading…</p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border rounded-2xl p-4 shadow-sm">
                <div className="text-[10px] uppercase text-stone-400 font-semibold">
                  Items
                </div>
                <div className="text-2xl font-semibold tabular-nums">
                  {data?.itemCount ?? 0}
                </div>
              </div>
              <div className="bg-white border rounded-2xl p-4 shadow-sm">
                <div className="text-[10px] uppercase text-stone-400 font-semibold">
                  Stock value
                </div>
                <div className="text-2xl font-semibold tabular-nums">
                  {Number(data?.stockValue || 0).toLocaleString()} ETB
                </div>
              </div>
              <div className="bg-white border rounded-2xl p-4 shadow-sm col-span-2">
                <div className="flex items-center gap-2 text-[10px] uppercase text-stone-400 font-semibold">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  Low stock
                </div>
                <div className="text-2xl font-semibold tabular-nums text-rose-600">
                  {low}
                </div>
                {low > 0 && (
                  <ul className="mt-2 text-sm space-y-1">
                    {(data?.lowStock || []).map((i: any) => (
                      <li key={i.id} className="flex justify-between">
                        <span>{i.name}</span>
                        <span className="tabular-nums text-stone-500">
                          {i.quantity} {i.unit}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/store/receive"
                className="flex flex-col items-center gap-2 bg-emerald-700 text-white rounded-2xl py-5 shadow"
              >
                <ArrowDownToLine className="w-6 h-6" />
                <span className="text-sm font-medium">Receive</span>
              </Link>
              <Link
                to="/store/out"
                className="flex flex-col items-center gap-2 bg-stone-900 text-white rounded-2xl py-5 shadow"
              >
                <ArrowUpFromLine className="w-6 h-6" />
                <span className="text-sm font-medium">Send out</span>
              </Link>
              <Link
                to="/store/items"
                className="flex flex-col items-center gap-2 bg-white border rounded-2xl py-4"
              >
                <Package className="w-5 h-5" />
                <span className="text-xs font-medium">Items</span>
              </Link>
              <Link
                to="/store/reports"
                className="flex flex-col items-center gap-2 bg-white border rounded-2xl py-4"
              >
                <FileText className="w-5 h-5" />
                <span className="text-xs font-medium">Reports · PDF</span>
              </Link>
            </div>

            <div className="bg-white border rounded-2xl p-4 shadow-sm">
              <h2 className="text-sm font-semibold mb-3">Today’s movements</h2>
              {!data?.todayMoves?.length ? (
                <p className="text-sm text-stone-400">None yet</p>
              ) : (
                <ul className="space-y-2 text-sm">
                  {data.todayMoves.map((m: any) => (
                    <li
                      key={m.id}
                      className="flex justify-between gap-2 border-b border-stone-50 pb-2"
                    >
                      <div>
                        <span
                          className={
                            m.type === "IN" ? "text-emerald-700" : "text-amber-700"
                          }
                        >
                          {m.type}
                        </span>{" "}
                        {m.stockItem?.name} · {m.quantity}
                        <div className="text-[11px] text-stone-400">
                          {m.fromWhere || "—"} → {m.toWhere || "—"} ·{" "}
                          {m.user?.name || "—"} ·{" "}
                          {new Date(m.createdAt).toLocaleTimeString()}
                        </div>
                      </div>
                      <span className="tabular-nums text-xs shrink-0">
                        {Number(m.totalAmount).toLocaleString()}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </main>

      <nav className="fixed bottom-0 inset-x-0 bg-white border-t grid grid-cols-5 h-16 z-20">
        {[
          ["/store", "Home", Package],
          ["/store/receive", "In", ArrowDownToLine],
          ["/store/out", "Out", ArrowUpFromLine],
          ["/store/reports", "Report", FileText],
          ["/store/settings", "Settings", Settings],
        ].map(([to, label, Icon]) => (
          <Link
            key={to as string}
            to={to as string}
            className="flex flex-col items-center justify-center text-[10px] text-stone-600 gap-0.5"
          >
            <Icon className="w-5 h-5" />
            {label as string}
          </Link>
        ))}
      </nav>
    </div>
  )
}
import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../lib/auth"
import { ordersApi, restaurantApi } from "../../lib/api"
import {
  ensureNotifyPermission,
  notifyNewOrderRequest,
} from "../../lib/notify"
import {
  UtensilsCrossed,
  ChefHat,
  UserCircle,
  LogOut,
  FileText,
  HelpCircle,
  Bell,
  Package,
} from "lucide-react"

/**
 * Home for WAITER / KITCHEN / STAFF — not the owner analytics dashboard.
 * Same POS and KDS as the owner (shared organization data).
 */
export default function StaffHome() {
  const { user, organization, logout } = useAuth()
  const role = String(user?.role || "").toUpperCase()
  const isKitchen = role === "KITCHEN"
  const isWaiter = role === "WAITER" || role === "STAFF"

  const [requests, setRequests] = useState<any[]>([])
  const [busyId, setBusyId] = useState<string | null>(null)
  const [lowStock, setLowStock] = useState<any[]>([])
  const [showOrdersBell, setShowOrdersBell] = useState(false)
  const [showStockBell, setShowStockBell] = useState(false)
  const prevRequestCount = useRef(0)

  const loadAlerts = () => {
    ordersApi
      .requests()
      .then((list) => {
        const next = Array.isArray(list) ? list : []
        const prev = prevRequestCount.current
        if (next.length > prev && prev >= 0) {
          const newest = next[next.length - 1] || next[0]
          notifyNewOrderRequest({
            tableNumber: newest?.tableNumber,
            total: newest?.total,
            customerName: newest?.customerName,
            count: next.length - prev,
          })
        }
        prevRequestCount.current = next.length
        setRequests(next)
      })
      .catch(() => setRequests([]))

    restaurantApi
      .analytics()
      .then((a) => setLowStock(Array.isArray(a?.lowStock) ? a.lowStock : []))
      .catch(() => setLowStock([]))
  }

  useEffect(() => {
    ensureNotifyPermission()
    loadAlerts()
    const t = setInterval(loadAlerts, 10000)
    return () => clearInterval(t)
  }, [role])

  const accept = async (id: string) => {
    setBusyId(id)
    try {
      await ordersApi.accept(id)
      loadAlerts()
    } catch (e: any) {
      alert(e?.message || "Accept failed")
    } finally {
      setBusyId(null)
    }
  }

  const reject = async (id: string) => {
    if (!confirm("Reject this request?")) return
    setBusyId(id)
    try {
      await ordersApi.reject(id)
      loadAlerts()
    } catch (e: any) {
      alert(e?.message || "Reject failed")
    } finally {
      setBusyId(null)
    }
  }

  return (
    <div className="min-h-svh bg-[#f3f1ec] flex flex-col">
      <header className="bg-stone-900 text-white px-5 pt-8 pb-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-white/50">
              Semaiy
            </p>
            <h1 className="text-xl font-semibold mt-1 tracking-tight">
              {organization?.name || "Restaurant"}
            </h1>
            <p className="text-sm text-white/70 mt-1">
              {user?.name || "Staff"} · {role}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setShowOrdersBell((v) => !v)
                setShowStockBell(false)
              }}
              className="relative w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"
            >
              <Bell className="w-5 h-5 text-emerald-300" />
              {requests.length > 0 && (
                <>
                  <span className="absolute inline-flex h-full w-full rounded-xl bg-emerald-400/30 animate-ping" />
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-emerald-400 text-stone-900 text-[10px] font-bold flex items-center justify-center">
                    {requests.length}
                  </span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setShowStockBell((v) => !v)
                setShowOrdersBell(false)
              }}
              className="relative w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"
            >
              <Package className="w-5 h-5 text-rose-300" />
              {lowStock.length > 0 && (
                <>
                  <span className="absolute inline-flex h-full w-full rounded-xl bg-rose-400/30 animate-ping" />
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {lowStock.length}
                  </span>
                </>
              )}
            </button>

            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-lg font-semibold">
              {(organization?.name || "ሰ")[0]}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 -mt-3 space-y-3 pb-10">
        {requests.length > 0 && (
          <div className="bg-white border border-emerald-200 rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-stone-900">
                  Order requests ({requests.length})
                </div>
                <div className="text-xs text-stone-500">
                  Accept → sends to Kitchen / Bar
                </div>
              </div>
            </div>
            {requests.map((o) => (
              <div
                key={o.id}
                className="border border-stone-100 rounded-xl p-3 space-y-2"
              >
                <div className="flex justify-between gap-2 text-sm">
                  <span className="font-semibold">Place {o.tableNumber}</span>
                  <span className="tabular-nums text-stone-600">
                    {Number(o.total).toLocaleString()} ETB
                  </span>
                </div>
                {(o.customerName || o.customerPhone) && (
                  <p className="text-xs text-stone-500">
                    {[o.customerName, o.customerPhone]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                )}
                <ul className="text-xs text-stone-600 space-y-0.5">
                  {(o.items || []).map((it: any) => (
                    <li key={it.id}>
                      {it.quantity}× {it.name}
                      {it.menuItem?.station === "BAR" ? " · Bar" : " · Kitchen"}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <button
                    type="button"
                    disabled={busyId === o.id}
                    onClick={() => accept(o.id)}
                    className="flex-1 text-xs font-medium py-2 rounded-lg bg-emerald-700 text-white disabled:opacity-50"
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    disabled={busyId === o.id}
                    onClick={() => reject(o.id)}
                    className="text-xs font-medium px-3 py-2 rounded-lg border border-stone-200 text-stone-600 disabled:opacity-50"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {showStockBell && lowStock.length > 0 && (
          <div className="bg-white border border-rose-200 rounded-2xl p-4 shadow-sm space-y-2">
            <div className="font-semibold text-stone-900 text-sm">Low stock</div>
            <ul className="text-sm space-y-1">
              {lowStock.map((s: any) => (
                <li key={s.id} className="flex justify-between gap-2">
                  <span className="truncate">{s.name}</span>
                  <span className="text-rose-600 tabular-nums shrink-0">
                    {s.stockQty ?? `${s.quantity ?? ""} ${s.unit || ""}`}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/stock"
              className="text-xs font-medium text-rose-700 underline"
            >
              Open stock →
            </Link>
          </div>
        )}

        {showOrdersBell && requests.length === 0 && (
          <div className="bg-white border rounded-2xl p-3 text-sm text-stone-500 text-center">
            No pending order requests
          </div>
        )}

        {isWaiter && (
          <Link
            to="/pos"
            className="flex items-center gap-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm active:scale-[0.99] transition"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-stone-900">POS — Take orders</div>
              <div className="text-xs text-stone-500">Send tables to the kitchen</div>
            </div>
          </Link>
        )}

        {(isKitchen || isWaiter) && (
          <>
            <Link
              to="/kds/kitchen"
              className="flex items-center gap-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                <ChefHat className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-stone-900">Kitchen display</div>
                <div className="text-xs text-stone-500">Food tickets from POS</div>
              </div>
            </Link>
            <Link
              to="/kds/bar"
              className="flex items-center gap-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-800 flex items-center justify-center">
                <ChefHat className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-stone-900">Bar display</div>
                <div className="text-xs text-stone-500">Drinks / bar tickets</div>
              </div>
            </Link>
          </>
        )}

        {isWaiter && (
          <Link
            to="/reports"
            className="flex items-center gap-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-800 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-stone-900">Payments & receipts</div>
              <div className="text-xs text-stone-500">
                Set cash / bank · print receipt
              </div>
            </div>
          </Link>
        )}

        <Link
          to="/profile"
          className="flex items-center gap-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm"
        >
          <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center">
            <UserCircle className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-stone-900">My profile</div>
            <div className="text-xs text-stone-500">{user?.email}</div>
          </div>
        </Link>

        <Link
          to="/help"
          className="flex items-center gap-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm"
        >
          <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-600 flex items-center justify-center">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div className="font-semibold text-stone-900 text-sm">Help</div>
        </Link>

        <button
          type="button"
          onClick={() => logout()}
          className="w-full flex items-center justify-center gap-2 text-sm text-stone-500 py-3"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>

        <p className="text-center text-[10px] text-stone-400 pt-2">
          You work under {organization?.name || "this restaurant"}. Owner
          manages menu & billing.
        </p>
      </main>
    </div>
  )
}
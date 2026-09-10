import { Link } from "react-router-dom"
import { useAuth } from "../../lib/auth"
import {
  UtensilsCrossed,
  ChefHat,
  UserCircle,
  LogOut,
  FileText,
  HelpCircle,
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

  return (
    <div className="min-h-svh bg-[#f3f1ec] flex flex-col">
      <header className="bg-stone-900 text-white px-5 pt-8 pb-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-white/50">Semaiy</p>
            <h1 className="text-xl font-semibold mt-1 tracking-tight">
              {organization?.name || "Restaurant"}
            </h1>
            <p className="text-sm text-white/70 mt-1">
              {user?.name || "Staff"} · {role}
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-lg font-semibold">
            {(organization?.name || "ሰ")[0]}
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 -mt-3 space-y-3 pb-10">
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
          <Link
            to="/kds"
            className="flex items-center gap-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
              <ChefHat className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-stone-900">Kitchen display</div>
              <div className="text-xs text-stone-500">Live tickets from POS</div>
            </div>
          </Link>
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
              <div className="text-xs text-stone-500">Set cash / bank · print receipt</div>
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
          You work under {organization?.name || "this restaurant"}. Owner manages menu & billing.
        </p>
      </main>
    </div>
  )
}

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { billingApi } from "../lib/api"

/** Always reachable while locked — so they can pay */
const ALLOW = ["/billing", "/profile", "/help", "/login", "/register", "/join"]

export default function SubscriptionGate({ children }: { children: React.ReactNode }) {
  const loc = useLocation()
  const [state, setState] = useState<"loading" | "ok" | "locked">("loading")
  const [daysLeft, setDaysLeft] = useState(0)
  const [reason, setReason] = useState("")
  const [status, setStatus] = useState("")

  const pathOk = ALLOW.some(
    (p) => loc.pathname === p || loc.pathname.startsWith(p + "/")
  )

  useEffect(() => {
    let cancelled = false

    // Billing page etc. — no need to block rendering
    if (pathOk) {
      setState("ok")
      return
    }

    setState("loading")
    billingApi
      .current()
      .then((d) => {
        if (cancelled) return
        const sub = d?.subscription
        const allowed =
          sub?.allowed === true ||
          sub?.isActive === true

        setDaysLeft(Number(sub?.daysLeft ?? 0))
        setStatus(String(sub?.status || ""))
        setReason(
          sub?.lockReason ||
            "Your free trial has ended. Your data is safe. Subscribe to continue."
        )

        setState(allowed ? "ok" : "locked")
      })
      .catch(() => {
        // Safer default: lock on billing failure (was "ok" before — that kept app open)
        if (!cancelled) {
          setReason("Could not verify subscription. Open Billing or try again.")
          setState("locked")
        }
      })

    return () => {
      cancelled = true
    }
  }, [loc.pathname, pathOk])

  if (pathOk) return <>{children}</>

  if (state === "loading") {
    return (
      <div className="min-h-svh flex items-center justify-center text-sm text-stone-500 bg-stone-50">
        Checking access…
      </div>
    )
  }

  if (state === "locked") {
    return (
      <div className="min-h-svh bg-stone-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white border border-stone-200 rounded-2xl p-8 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center mx-auto text-lg font-semibold">
            ሰ
          </div>
          <h1 className="text-xl font-semibold text-stone-900">
            Your free period has ended
          </h1>
          <p className="text-sm text-stone-500 leading-relaxed">{reason}</p>
          {(status || daysLeft === 0) && (
            <p className="text-xs text-stone-400">
              {status ? `Status: ${status}` : ""}
              {daysLeft === 0 ? " · 0 days left" : ""}
            </p>
          )}
          <Link
            to="/billing"
            className="inline-flex justify-center w-full bg-stone-900 text-white py-3 rounded-xl text-sm font-medium"
          >
            Choose a plan &amp; pay
          </Link>
          <Link to="/profile" className="block text-sm text-stone-500 hover:underline">
            Profile &amp; account
          </Link>
          <p className="text-[11px] text-stone-400">
            After Telebirr/CBE, submit the reference on Billing. We activate after verification.
          </p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getToken } from "../../lib/api"

const API = import.meta.env.VITE_API_URL || "http://localhost:3001"

export default function PublicReceipt() {
  const { code } = useParams<{ code: string }>()
  const [data, setData] = useState<any>(null)
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(true)
  const [scanMsg, setScanMsg] = useState("")

  useEffect(() => {
    if (!code) return
    let cancelled = false

    const run = async () => {
      setLoading(true)
      setErr("")
      setScanMsg("")
      try {
        const r = await fetch(
          `${API}/api/restaurant/public/receipt/${encodeURIComponent(code)}`
        )
        const j = await r.json()
        if (!r.ok) throw new Error(j.error || "Not found")
        if (cancelled) return
        setData(j)

        // Logged-in staff of this restaurant → auto-scan once
        const token = getToken()
        if (token && !j.scanned) {
          try {
            const s = await fetch(`${API}/api/restaurant/receipt/scan`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ code: j.receiptCode || code }),
            })
            const sj = await s.json().catch(() => ({}))
            if (cancelled) return
            if (s.ok) {
              setScanMsg("Verified by your restaurant · locked in Reports")
              setData((d: any) => (d ? { ...d, scanned: true } : d))
            } else if (s.status === 409) {
              setScanMsg(
                sj.message || "Already scanned · locked (not accepted again)"
              )
              setData((d: any) => (d ? { ...d, scanned: true } : d))
            } else if (s.status === 401 || s.status === 403) {
              // Other org or not staff — public view only
            } else {
              // ignore soft fail for customer UX
            }
          } catch {
            /* public view still works */
          }
        }
      } catch (e: any) {
        if (!cancelled) setErr(e.message || "Receipt not found")
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [code])

  if (loading) {
    return (
      <div className="min-h-svh flex items-center justify-center text-sm text-stone-500">
        Loading receipt…
      </div>
    )
  }

  if (err || !data) {
    return (
      <div className="min-h-svh flex flex-col items-center justify-center p-6 text-center">
        <p className="text-sm text-stone-600">{err || "Not found"}</p>
        <Link to="/" className="mt-4 text-sm text-stone-900 underline">
          Semaiy
        </Link>
      </div>
    )
  }

  const org = data.organization || {}

  return (
    <div className="min-h-svh bg-stone-100 flex justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl border border-stone-200 shadow-sm p-5 space-y-3">
        <div className="text-center">
          <div className="font-semibold text-lg text-stone-900">
            {org.name || "Restaurant"}
          </div>
          {(org.address || org.city) && (
            <div className="text-xs text-stone-500">
              {[org.address, org.city].filter(Boolean).join(", ")}
            </div>
          )}
          {org.phone && (
            <div className="text-xs text-stone-500">Tel: {org.phone}</div>
          )}
        </div>

        {scanMsg && (
          <div className="text-xs text-center bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-xl px-3 py-2">
            {scanMsg}
          </div>
        )}

        <div className="border-t border-dashed border-stone-200 pt-2 text-xs text-stone-600 space-y-0.5">
          <div>
            Code:{" "}
            <span className="font-mono font-semibold">{data.receiptCode}</span>
          </div>
          <div>Table: {data.tableNumber}</div>
          <div>
            {data.createdAt ? new Date(data.createdAt).toLocaleString() : ""}
          </div>
          {data.scanned && (
            <div className="text-emerald-700 font-medium mt-1">
              Verified by restaurant
            </div>
          )}
        </div>

        <div className="border-t border-dashed border-stone-200 pt-2 space-y-1">
          {(data.items || []).map((i: any, idx: number) => (
            <div key={idx} className="flex justify-between text-sm">
              <span>
                {i.quantity}× {i.name}
              </span>
              <span className="tabular-nums">
                {(i.quantity * i.price).toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-900 pt-2 flex justify-between font-semibold text-sm">
          <span>TOTAL</span>
          <span className="tabular-nums">
            {Number(data.total).toLocaleString()} ETB
          </span>
        </div>
        {data.paymentMethod && (
          <div className="text-xs text-stone-500">
            Payment: {data.paymentMethod}
          </div>
        )}

        <p className="text-center text-[10px] text-stone-400 pt-2">
          Thank you · semaiy.netlify.app · NON-FISCAL
        </p>
      </div>
    </div>
  )
}
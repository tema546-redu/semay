import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  Camera,
  Wallet,
  Smartphone,
  CreditCard,
  TrendingUp,
  ShoppingBag,
  ImageIcon,
} from "lucide-react"
import { request } from "../../lib/api"
import { cn } from "../../lib/utils"

type PayOrder = {
  id: string
  tableNumber: string
  total: number
  paymentMethod: string | null
  paymentReceipt: string | null
  paidAt: string | null
  createdAt: string
  status: string
}

export default function Reports() {
  const [data, setData] = useState<{
    orders: PayOrder[]
    byMethod: Record<string, number>
  } | null>(null)
  const [busyId, setBusyId] = useState<string | null>(null)
  const [msg, setMsg] = useState("")

  const load = () =>
    request<{ orders: PayOrder[]; byMethod: Record<string, number> }>(
      "/api/restaurant/payment-report"
    )
      .then(setData)
      .catch(console.error)

  useEffect(() => {
    load()
    request("/api/restaurant/cleanup-receipts", { method: "POST" }).catch(() => {})
  }, [])

  const summary = useMemo(() => {
    const orders = data?.orders || []
    const byMethod = data?.byMethod || {}
    const total = Object.values(byMethod).reduce((s, n) => s + Number(n || 0), 0)
    const withPhoto = orders.filter((o) => o.paymentReceipt).length
    const paid = orders.filter((o) => o.paymentMethod && o.paymentMethod !== "unknown").length
    const cash = Number(byMethod.cash || 0)
    const telebirr = Number(byMethod.telebirr || 0)
    const cbe = Number(byMethod.cbe || 0)
    const card = Number(byMethod.card || 0)
    const unknown = Number(byMethod.unknown || 0)

    const topMethod =
      Object.entries(byMethod).sort((a, b) => Number(b[1]) - Number(a[1]))[0]?.[0] ||
      "—"

    return {
      total,
      count: orders.length,
      withPhoto,
      paid,
      cash,
      telebirr,
      cbe,
      card,
      unknown,
      topMethod,
    }
  }, [data])

  const onPhoto = async (orderId: string, method: string, file: File) => {
    if (file.size > 1_200_000) {
      setMsg("Photo max ~1.2MB")
      return
    }
    setBusyId(orderId)
    setMsg("")
    const reader = new FileReader()
    reader.onload = async () => {
      try {
        await request(`/api/orders/${orderId}/payment`, {
          method: "PATCH",
          body: JSON.stringify({
            paymentMethod: method,
            paymentReceipt: String(reader.result),
          }),
        })
        setMsg("Receipt saved")
        load()
      } catch (e: any) {
        setMsg(e.message || "Failed")
      } finally {
        setBusyId(null)
      }
    }
    reader.readAsDataURL(file)
  }

  const pct = (part: number) =>
    summary.total > 0 ? Math.round((part / summary.total) * 100) : 0

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Reports & payments</h1>
      </header>

      <div className="max-w-2xl mx-auto p-4 space-y-4 pb-10">
        {/* ——— Beautiful summary ——— */}
        <section className="rounded-2xl overflow-hidden shadow-sm border border-semay-100">
          <div className="bg-gradient-to-br from-semay-900 via-slate-800 to-emerald-900 text-white p-5">
            <p className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
              Last 7 days · payment summary
            </p>
            <p className="text-3xl font-semibold mt-1 tabular-nums">
              {summary.total.toLocaleString()}{" "}
              <span className="text-lg font-medium text-white/80">ETB</span>
            </p>
            <p className="text-sm text-white/70 mt-1">
              {summary.count} orders · {summary.paid} with method · {summary.withPhoto} with
              receipt photo
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[11px] bg-white/15 rounded-full px-2.5 py-1">
                Top: {summary.topMethod}
              </span>
              <span className="text-[11px] bg-emerald-400/20 text-emerald-100 rounded-full px-2.5 py-1">
                Photos auto-clear after 7 days
              </span>
            </div>
          </div>

          <div className="bg-white p-4 grid grid-cols-2 gap-3">
            <SummaryTile
              icon={<Wallet className="w-4 h-4 text-emerald-600" />}
              label="Cash"
              amount={summary.cash}
              pct={pct(summary.cash)}
              barClass="bg-emerald-500"
            />
            <SummaryTile
              icon={<Smartphone className="w-4 h-4 text-sky-600" />}
              label="Telebirr"
              amount={summary.telebirr}
              pct={pct(summary.telebirr)}
              barClass="bg-sky-500"
            />
            <SummaryTile
              icon={<CreditCard className="w-4 h-4 text-violet-600" />}
              label="CBE / Card"
              amount={summary.cbe + summary.card}
              pct={pct(summary.cbe + summary.card)}
              barClass="bg-violet-500"
            />
            <SummaryTile
              icon={<ShoppingBag className="w-4 h-4 text-amber-600" />}
              label="Unset / other"
              amount={summary.unknown}
              pct={pct(summary.unknown)}
              barClass="bg-amber-500"
            />
          </div>

          {/* Mix bar */}
          {summary.total > 0 && (
            <div className="px-4 pb-4 bg-white">
              <div className="flex h-2.5 rounded-full overflow-hidden bg-semay-100">
                {summary.cash > 0 && (
                  <div
                    className="bg-emerald-500"
                    style={{ width: `${pct(summary.cash)}%` }}
                    title="Cash"
                  />
                )}
                {summary.telebirr > 0 && (
                  <div
                    className="bg-sky-500"
                    style={{ width: `${pct(summary.telebirr)}%` }}
                    title="Telebirr"
                  />
                )}
                {summary.cbe + summary.card > 0 && (
                  <div
                    className="bg-violet-500"
                    style={{ width: `${pct(summary.cbe + summary.card)}%` }}
                    title="CBE/Card"
                  />
                )}
                {summary.unknown > 0 && (
                  <div
                    className="bg-amber-400"
                    style={{ width: `${pct(summary.unknown)}%` }}
                    title="Other"
                  />
                )}
              </div>
              <div className="flex flex-wrap gap-3 mt-2 text-[10px] text-semay-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Cash {pct(summary.cash)}%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-sky-500" /> Telebirr {pct(summary.telebirr)}%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-violet-500" /> Bank/Card{" "}
                  {pct(summary.cbe + summary.card)}%
                </span>
              </div>
            </div>
          )}
        </section>

        <div className="flex items-center gap-2 text-xs text-semay-500">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Attach receipt photos for Telebirr/CBE after the guest pays.</span>
        </div>

        {msg && <p className="text-sm text-semay-700 bg-white border rounded-xl px-3 py-2">{msg}</p>}

        {/* ——— Existing order list ——— */}
        <div className="bg-white border border-semay-100 rounded-2xl divide-y shadow-sm">
          {!data?.orders?.length ? (
            <p className="p-8 text-sm text-semay-400 text-center">No orders in last 7 days</p>
          ) : (
            data.orders.map((o) => (
              <div key={o.id} className="p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-semay-900">
                    Table {o.tableNumber}
                    <span className="text-semay-400 font-normal"> · {o.status}</span>
                  </span>
                  <span className="font-semibold tabular-nums">{Number(o.total)} ETB</span>
                </div>
                <div className="text-xs text-semay-500 flex flex-wrap gap-x-2">
                  <span>{new Date(o.createdAt).toLocaleString()}</span>
                  <span>· {o.paymentMethod || "no method yet"}</span>
                  {o.paymentReceipt && (
                    <span className="text-emerald-600 inline-flex items-center gap-0.5">
                      <ImageIcon className="w-3 h-3" /> photo
                    </span>
                  )}
                </div>
                {o.paymentReceipt && (
                  <img
                    src={o.paymentReceipt}
                    alt="Receipt"
                    className="h-24 rounded-lg border object-cover"
                  />
                )}
                <div className="flex flex-wrap gap-2 items-center">
                  {["cash", "telebirr", "cbe", "card"].map((m) => (
                    <label
                      key={m}
                      className={cn(
                        "text-xs px-2 py-1.5 rounded-lg border cursor-pointer inline-flex items-center gap-1",
                        o.paymentMethod === m
                          ? "border-semay-900 bg-semay-900 text-white"
                          : "border-semay-200 hover:bg-semay-50"
                      )}
                    >
                      <Camera className="w-3 h-3" />
                      {m}
                      <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        className="hidden"
                        disabled={busyId === o.id}
                        onChange={(e) => {
                          const f = e.target.files?.[0]
                          if (f) onPhoto(o.id, m, f)
                        }}
                      />
                    </label>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

function SummaryTile({
  icon,
  label,
  amount,
  pct,
  barClass,
}: {
  icon: React.ReactNode
  label: string
  amount: number
  pct: number
  barClass: string
}) {
  return (
    <div className="rounded-xl border border-semay-100 bg-semay-50/50 p-3">
      <div className="flex items-center gap-1.5 text-[11px] font-medium text-semay-500">
        {icon}
        {label}
      </div>
      <div className="text-lg font-semibold text-semay-900 mt-1 tabular-nums">
        {amount.toLocaleString()} <span className="text-xs font-medium text-semay-400">ETB</span>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-semay-100 overflow-hidden">
        <div className={cn("h-full rounded-full", barClass)} style={{ width: `${pct}%` }} />
      </div>
      <div className="text-[10px] text-semay-400 mt-1">{pct}% of total</div>
    </div>
  )
}
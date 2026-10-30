import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { garmentApi } from "../../lib/api"
import GarmentLayout from "../../components/GarmentLayout"
import { Printer } from "lucide-react"

type Range = "today" | "7d" | "month" | "year"

function staffLabel(name?: string | null) {
  const n = String(name || "").trim()
  if (!n) return "—"
  if (n.includes("@") && n === n.toLowerCase()) {
    return n.split("@")[0] || n
  }
  if (n.toLowerCase() === "staff") return "Staff"
  return n
}

function orderLabel(order?: any) {
  if (!order) return "—"
  const customer = String(order.customerName || "").trim()
  const code = order.orderNumber || ""
  if (customer) return customer
  return code || "—"
}

function orderCode(order?: any) {
  if (!order) return ""
  const customer = String(order.customerName || "").trim()
  if (customer && order.orderNumber) return String(order.orderNumber)
  return ""
}

function styleHint(order?: any) {
  if (!order) return ""
  const lines = Array.isArray(order.lines) ? order.lines : []
  if (lines.length > 1) return `${lines.length} styles`
  const name =
    lines[0]?.style?.name || order.style?.name || order.styleName || ""
  return name || ""
}

function formatReportDate(r: any) {
  const raw = r.reportDate || r.createdAt
  if (!raw) return "—"
  try {
    const d = new Date(raw)
    if (Number.isNaN(d.getTime())) return "—"
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  } catch {
    return "—"
  }
}

export default function GarmentReports() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  const [range, setRange] = useState<Range>("month")
  const [selectedDate, setSelectedDate] = useState("")
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const params = selectedDate ? { date: selectedDate } : { range }
      const res = await garmentApi.reports(params)
      setData(res)
    } catch (e) {
      console.error(e)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [range, selectedDate])

  const periodLabel = selectedDate
    ? selectedDate
    : range === "today"
      ? isAm
        ? "ዛሬ"
        : "Today"
      : range === "7d"
        ? isAm
          ? "7 ቀን"
          : "Last 7 days"
        : range === "month"
          ? isAm
            ? "ይህ ወር"
            : "This month"
          : isAm
            ? "ይህ ዓመት"
            : "This year"

  const byStage = data?.byStage
    ? Object.entries(data.byStage as Record<string, number>)
    : []
  const byStaff = Array.isArray(data?.byStaff) ? data.byStaff : []
  const rows = Array.isArray(data?.reports) ? data.reports : []

  const printReport = () => {
    window.print()
  }

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-3xl mx-auto print:hidden">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div>
            <h1 className="text-xl font-semibold text-semay-900">
              {isAm ? "ሪፖርት" : "Reports"}
            </h1>
            <p className="text-sm text-semay-500 mt-0.5">
              {isAm
                ? "የምርት ማጠቃለያ · ደንበኛ · ቀን"
                : "Production summary · customer · date"}
            </p>
          </div>
          <button
            type="button"
            onClick={printReport}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-semay-900 text-white text-sm font-medium"
          >
            <Printer className="w-4 h-4" />
            {isAm ? "አትም / PDF" : "Print / PDF"}
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border border-semay-200 rounded-xl text-sm"
          />
          {(
            [
              ["today", isAm ? "ዛሬ" : "Today"],
              ["7d", isAm ? "7 ቀን" : "7 days"],
              ["month", isAm ? "ወር" : "Month"],
              ["year", isAm ? "ዓመት" : "Year"],
            ] as const
          ).map(([key, lab]) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setSelectedDate("")
                setRange(key)
              }}
              className={`px-3 py-2 rounded-full text-sm border ${
                !selectedDate && range === key
                  ? "bg-semay-900 text-white border-semay-900"
                  : "bg-white border-semay-200 text-semay-700"
              }`}
            >
              {lab}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-semay-500 py-16">
            {isAm ? "በመጫን ላይ..." : "Loading..."}
          </p>
        ) : !data ? (
          <p className="text-center text-semay-500 py-16">
            {isAm ? "ሪፖርት አልተገኘም" : "No report data"}
          </p>
        ) : (
          <div className="space-y-6">
            <div className="border border-semay-200 rounded-2xl bg-white overflow-hidden">
              <div className="px-5 py-4 border-b border-semay-100">
                <div className="text-xs uppercase tracking-wide text-semay-400">
                  {periodLabel}
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tabular-nums text-semay-900">
                    {data.totalPieces ?? 0}
                  </span>
                  <span className="text-sm text-semay-500">
                    {isAm ? "ቁራጭ" : "pieces"}
                  </span>
                </div>
                <p className="text-sm text-semay-500 mt-1">
                  {data.reportCount ?? 0} {isAm ? "ሪፖርት" : "reports"} ·{" "}
                  {data.activeCount ?? 0} {isAm ? "ንቁ" : "active"} ·{" "}
                  {data.delayedCount ?? 0}{" "}
                  {isAm ? "ዘግይተዋል" : "delayed"}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-semay-100">
                <Metric
                  label={isAm ? "ጉድለቶች" : "Defects"}
                  value={String(data.defectQty ?? 0)}
                />
                <Metric
                  label={isAm ? "የማስተካከያ ወጪ" : "Rework cost"}
                  value={`${Number(data.reworkCost || 0).toLocaleString()} ETB`}
                  danger
                />
                <Metric
                  label={isAm ? "ንቁ ትዕዛዝ" : "Active orders"}
                  value={String(data.activeCount ?? 0)}
                />
                <Metric
                  label={isAm ? "ዘግይተዋል" : "Delayed"}
                  value={String(data.delayedCount ?? 0)}
                  warn
                />
              </div>
            </div>

            <Block
              title={
                isAm
                  ? "በደረጃ የተመዘገቡ ቁራጮች"
                  : "Pieces reported by stage"
              }
            >
              {byStage.length === 0 ? (
                <Empty isAm={isAm} />
              ) : (
                <table className="w-full text-sm">
                  <tbody>
                    {byStage.map(([stage, qty]) => (
                      <tr
                        key={stage}
                        className="border-b border-semay-50 last:border-0"
                      >
                        <td className="py-2.5 text-semay-700">{stage}</td>
                        <td className="py-2.5 text-right font-medium tabular-nums">
                          {qty as number} pcs
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Block>

            <Block title={isAm ? "በሰራተኛ" : "Output by staff"}>
              {byStaff.length === 0 ? (
                <Empty isAm={isAm} />
              ) : (
                <table className="w-full text-sm">
                  <tbody>
                    {byStaff.map((s: any, i: number) => (
                      <tr
                        key={i}
                        className="border-b border-semay-50 last:border-0"
                      >
                        <td className="py-2.5 text-semay-700">
                          {i + 1}. {staffLabel(s.name)}
                        </td>
                        <td className="py-2.5 text-right font-medium tabular-nums">
                          {s.qty} pcs
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Block>

            <Block title={isAm ? "ዝርዝር ሪፖርቶች" : "Report lines"}>
              {rows.length === 0 ? (
                <Empty isAm={isAm} />
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[520px]">
                    <thead>
                      <tr className="text-left text-xs text-semay-400 border-b border-semay-100">
                        <th className="pb-2 font-medium pr-2">
                          {isAm ? "ቀን" : "Date"}
                        </th>
                        <th className="pb-2 font-medium pr-2">
                          {isAm ? "ደንበኛ / ምርት" : "Customer / product"}
                        </th>
                        <th className="pb-2 font-medium pr-2">
                          {isAm ? "ሰራተኛ" : "Staff"}
                        </th>
                        <th className="pb-2 font-medium pr-2">
                          {isAm ? "ደረጃ" : "Stage"}
                        </th>
                        <th className="pb-2 font-medium text-right">
                          {isAm ? "ብዛት" : "Qty"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((r: any) => {
                        const product = styleHint(r.order)
                        const code = orderCode(r.order)
                        return (
                          <tr
                            key={r.id}
                            className="border-b border-semay-50 last:border-0 align-top"
                          >
                            <td className="py-2.5 text-semay-600 whitespace-nowrap pr-2">
                              {formatReportDate(r)}
                            </td>
                            <td className="py-2.5 pr-2">
                              <div className="font-medium text-semay-900">
                                {orderLabel(r.order)}
                              </div>
                              {(product || code) && (
                                <div className="text-xs text-semay-500 mt-0.5">
                                  {[product, code].filter(Boolean).join(" · ")}
                                </div>
                              )}
                            </td>
                            <td className="py-2.5 text-semay-700 pr-2">
                              {staffLabel(r.userName)}
                            </td>
                            <td className="py-2.5 text-semay-600 pr-2">
                              {r.stage || "—"}
                            </td>
                            <td className="py-2.5 text-right font-medium tabular-nums">
                              {r.quantity}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </Block>
          </div>
        )}
      </div>

      {/* Print */}
      {!loading && data && (
        <div className="hidden print:block print-report px-8 py-6 text-black">
          <header className="border-b border-black pb-3 mb-4">
            <div className="text-lg font-bold tracking-tight">
              Semaiy · Garment
            </div>
            <div className="text-sm mt-0.5">
              {isAm ? "የምርት ሪፖርት" : "Production report"} — {periodLabel}
            </div>
            <div className="text-xs text-gray-600 mt-1">
              {isAm ? "ታተመ" : "Printed"}: {new Date().toLocaleString()}
            </div>
          </header>

          <section className="mb-5">
            <div className="text-2xl font-bold tabular-nums">
              {data.totalPieces ?? 0}{" "}
              <span className="text-base font-normal">
                {isAm ? "ቁራጭ" : "pieces"}
              </span>
            </div>
            <div className="text-sm mt-1">
              {data.reportCount ?? 0} {isAm ? "ሪፖርት" : "reports"} ·{" "}
              {data.activeCount ?? 0} {isAm ? "ንቁ" : "active"} ·{" "}
              {data.delayedCount ?? 0} {isAm ? "ዘግይተዋል" : "delayed"} ·{" "}
              {isAm ? "ጉድለት" : "Defects"} {data.defectQty ?? 0} ·{" "}
              {isAm ? "ማስተካከያ" : "Rework"}{" "}
              {Number(data.reworkCost || 0).toLocaleString()} ETB
            </div>
          </section>

          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">
              {isAm
                ? "በደረጃ የተመዘገቡ ቁራጮች"
                : "Pieces reported by stage"}
            </h2>
            <table className="w-full text-sm">
              <tbody>
                {byStage.map(([stage, qty]) => (
                  <tr key={String(stage)}>
                    <td className="py-1">{stage as string}</td>
                    <td className="py-1 text-right tabular-nums">
                      {qty as number} pcs
                    </td>
                  </tr>
                ))}
                {byStage.length === 0 && (
                  <tr>
                    <td className="py-1 text-gray-500">—</td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>

          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">
              {isAm ? "በሰራተኛ" : "By staff"}
            </h2>
            <table className="w-full text-sm">
              <tbody>
                {byStaff.map((s: any, i: number) => (
                  <tr key={i}>
                    <td className="py-1">
                      {i + 1}. {staffLabel(s.name)}
                    </td>
                    <td className="py-1 text-right tabular-nums">
                      {s.qty} pcs
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">
              {isAm ? "ዝርዝር" : "Detail lines"}
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs border-b border-gray-300">
                  <th className="py-1 font-semibold">
                    {isAm ? "ቀን" : "Date"}
                  </th>
                  <th className="py-1 font-semibold">
                    {isAm ? "ደንበኛ" : "Customer"}
                  </th>
                  <th className="py-1 font-semibold">
                    {isAm ? "ምርት" : "Product"}
                  </th>
                  <th className="py-1 font-semibold">
                    {isAm ? "ሰራተኛ" : "Staff"}
                  </th>
                  <th className="py-1 font-semibold">
                    {isAm ? "ደረጃ" : "Stage"}
                  </th>
                  <th className="py-1 font-semibold text-right">
                    {isAm ? "ብዛት" : "Qty"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r: any) => (
                  <tr key={r.id} className="border-b border-gray-100">
                    <td className="py-1.5">{formatReportDate(r)}</td>
                    <td className="py-1.5">
                      {orderLabel(r.order)}
                      {orderCode(r.order) ? (
                        <span className="text-gray-500">
                          {" "}
                          ({orderCode(r.order)})
                        </span>
                      ) : null}
                    </td>
                    <td className="py-1.5">{styleHint(r.order) || "—"}</td>
                    <td className="py-1.5">{staffLabel(r.userName)}</td>
                    <td className="py-1.5">{r.stage || "—"}</td>
                    <td className="py-1.5 text-right tabular-nums">
                      {r.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <footer className="mt-8 pt-3 border-t border-gray-300 text-xs text-gray-500">
            Semaiy Garment · {new Date().toLocaleString()}
          </footer>
        </div>
      )}

      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          .print-report, .print-report * { visibility: visible !important; }
          .print-report {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white;
          }
          @page { margin: 16mm; }
        }
      `}</style>
    </GarmentLayout>
  )
}

function Metric({
  label,
  value,
  danger,
  warn,
}: {
  label: string
  value: string
  danger?: boolean
  warn?: boolean
}) {
  return (
    <div className="px-4 py-3">
      <div className="text-[11px] text-semay-500">{label}</div>
      <div
        className={`text-lg font-semibold mt-0.5 tabular-nums ${
          danger ? "text-red-600" : warn ? "text-amber-600" : "text-semay-900"
        }`}
      >
        {value}
      </div>
    </div>
  )
}

function Block({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="border border-semay-200 rounded-2xl bg-white p-5">
      <h2 className="text-sm font-semibold text-semay-900 mb-3">{title}</h2>
      {children}
    </div>
  )
}

function Empty({ isAm }: { isAm: boolean }) {
  return (
    <p className="text-sm text-semay-400 py-2">
      {isAm ? "ለዚህ ጊዜ ውሂብ የለም" : "No data for this period"}
    </p>
  )
}
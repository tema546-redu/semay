import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { garmentApi } from "../../lib/api"
import GarmentLayout from "../../components/GarmentLayout"
import { Printer } from "lucide-react"

type RangeKey = "today" | "7d" | "month" | "year"

export default function GarmentReports() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  const [range, setRange] = useState<RangeKey>("today")
  const [selectedDate, setSelectedDate] = useState("")
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const load = () => {
    setLoading(true)
    const params = selectedDate
      ? { date: selectedDate }
      : { range }
    garmentApi
      .reports(params)
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [range, selectedDate])

  const headerLabel = selectedDate
    ? selectedDate
    : range === "today"
    ? isAm
      ? "ዛሬ"
      : "Today"
    : range === "7d"
    ? isAm
      ? "7 ቀናት"
      : "Last 7 days"
    : range === "month"
    ? isAm
      ? "ይህ ወር"
      : "This month"
    : isAm
    ? "ይህ ዓመት"
    : "This year"

  const d = data || {}

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-4xl space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold text-semay-900">
              {isAm ? "ሪፖርቶች" : "Reports"}
            </h1>
            <p className="text-sm text-semay-500 mt-0.5">
              {isAm ? "ምርት እና ገንዘብ ማጠቃለያ" : "Production & money summary"}
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border border-semay-200 bg-white"
          >
            <Printer className="w-4 h-4" />
            {isAm ? "አትም" : "Print"}
          </button>
        </div>

        {/* Date + range */}
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="text-xs border border-semay-200 rounded-lg px-2 py-1.5 bg-white"
          />
          {selectedDate && (
            <button
              onClick={() => setSelectedDate("")}
              className="text-xs text-semay-600 underline"
            >
              {isAm ? "አጽዳ" : "Clear"}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {(["today", "7d", "month", "year"] as RangeKey[]).map((r) => (
            <button
              key={r}
              onClick={() => {
                setRange(r)
                setSelectedDate("")
              }}
              className={`text-xs px-3 py-1.5 rounded-full border font-medium ${
                !selectedDate && range === r
                  ? "bg-semay-900 text-white border-semay-900"
                  : "border-semay-200 text-semay-600 bg-white"
              }`}
            >
              {r === "today"
                ? isAm
                  ? "ዛሬ"
                  : "Today"
                : r === "7d"
                ? isAm
                  ? "7 ቀናት"
                  : "7 days"
                : r === "month"
                ? isAm
                  ? "ወር"
                  : "Month"
                : isAm
                ? "ዓመት"
                : "Year"}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-sm text-semay-500">{isAm ? "በመጫን ላይ..." : "Loading..."}</p>
        ) : (
          <>
            {/* Hero */}
            <div className="rounded-2xl overflow-hidden border border-semay-200">
              <div className="bg-semay-900 text-white p-5">
                <p className="text-[11px] uppercase tracking-wider text-white/60">
                  {headerLabel}
                </p>
                <p className="text-3xl font-semibold mt-1 tabular-nums">
                  {d.totalPieces || 0}{" "}
                  <span className="text-lg font-medium text-white/80">
                    {isAm ? "ቁርጥራጮች" : "pieces"}
                  </span>
                </p>
                <p className="text-sm text-white/70 mt-1">
                  {d.reportCount || 0} {isAm ? "ሪፖርቶች" : "reports"} ·{" "}
                  {d.activeCount || 0} {isAm ? "ንቁ ትዕዛዞች" : "active orders"} ·{" "}
                  {d.delayedCount || 0} {isAm ? "የዘገዩ" : "delayed"}
                </p>
              </div>
              <div className="bg-white p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="rounded-xl bg-semay-50 border border-semay-100 p-3">
                  <div className="text-[11px] text-semay-500">
                    {isAm ? "ጉድለቶች" : "Defects"}
                  </div>
                  <div className="text-lg font-semibold">{d.defectQty || 0}</div>
                </div>
                <div className="rounded-xl bg-semay-50 border border-semay-100 p-3">
                  <div className="text-[11px] text-semay-500">
                    {isAm ? "የዳግም ስራ ወጪ" : "Rework cost"}
                  </div>
                  <div className="text-lg font-semibold text-danger">
                    {(d.reworkCost || 0).toLocaleString()} ETB
                  </div>
                </div>
                <div className="rounded-xl bg-semay-50 border border-semay-100 p-3">
                  <div className="text-[11px] text-semay-500">
                    {isAm ? "ንቁ" : "Active"}
                  </div>
                  <div className="text-lg font-semibold">{d.activeCount || 0}</div>
                </div>
                <div className="rounded-xl bg-semay-50 border border-semay-100 p-3">
                  <div className="text-[11px] text-semay-500">
                    {isAm ? "የዘገዩ" : "Delayed"}
                  </div>
                  <div className="text-lg font-semibold text-warning">
                    {d.delayedCount || 0}
                  </div>
                </div>
              </div>
            </div>

            {/* By stage */}
            <div className="bg-white border border-semay-200 rounded-2xl p-4">
              <h2 className="font-medium mb-3">
                {isAm ? "በደረጃ" : "Output by stage"}
              </h2>
              {d.byStage && Object.keys(d.byStage).length > 0 ? (
                <div className="space-y-2">
                  {Object.entries(d.byStage).map(([stage, qty]: any) => (
                    <div key={stage} className="flex justify-between text-sm">
                      <span>{stage}</span>
                      <span className="font-medium tabular-nums">{qty} pcs</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-semay-400">
                  {isAm ? "ምንም የለም" : "No data"}
                </p>
              )}
            </div>

            {/* By staff */}
            <div className="bg-white border border-semay-200 rounded-2xl p-4">
              <h2 className="font-medium mb-3">
                {isAm ? "በሰራተኛ" : "Output by staff"}
              </h2>
              {d.byStaff?.length > 0 ? (
                <div className="space-y-2">
                  {d.byStaff.map((s: any, i: number) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span>
                        {i + 1}. {s.name}
                      </span>
                      <span className="font-medium tabular-nums">{s.qty} pcs</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-semay-400">
                  {isAm ? "ምንም የለም" : "No data"}
                </p>
              )}
            </div>

            {/* Defects by type */}
            {d.byDefectType && Object.keys(d.byDefectType).length > 0 && (
              <div className="bg-white border border-semay-200 rounded-2xl p-4">
                <h2 className="font-medium mb-3">
                  {isAm ? "ጉድለቶች በዓይነት" : "Defects by type"}
                </h2>
                <div className="space-y-2">
                  {Object.entries(d.byDefectType).map(([type, qty]: any) => (
                    <div key={type} className="flex justify-between text-sm">
                      <span>{type}</span>
                      <span className="font-medium">{qty}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent reports list */}
            <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-semay-100 font-medium">
                {isAm ? "ሪፖርቶች" : "Reports in period"}
              </div>
              {!d.reports?.length ? (
                <p className="p-6 text-center text-sm text-semay-400">
                  {isAm ? "ምንም የለም" : "No reports"}
                </p>
              ) : (
                d.reports.slice(0, 30).map((r: any) => (
                  <div
                    key={r.id}
                    className="px-4 py-3 border-b border-semay-50 flex justify-between text-sm"
                  >
                    <div>
                      <div className="font-medium">
                        {r.userName || "Staff"} · {r.quantity} pcs
                      </div>
                      <div className="text-xs text-semay-500 mt-0.5">
                        {r.order?.orderNumber || "-"} · {r.stage} ·{" "}
                        {new Date(r.reportDate || r.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </GarmentLayout>
  )
}
import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Star, Printer } from "lucide-react"
import { libraryApi } from "../../lib/api"

type RangeTab = "today" | "week" | "month" | "annual"

function monthLabel(iso: string) {
  try {
    const d = new Date(iso)
    return d.toLocaleString(undefined, { month: "short", year: "numeric" })
  } catch {
    return iso
  }
}

export default function LibraryReports() {
  const [tab, setTab] = useState<RangeTab>("today")
  const [data, setData] = useState<any>(null)
  const [annual, setAnnual] = useState<any>(null)
  const [year, setYear] = useState(new Date().getFullYear())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    if (tab === "annual") {
      libraryApi
        .annualReport(year)
        .then(setAnnual)
        .catch(() => setAnnual(null))
        .finally(() => setLoading(false))
      return
    }
    libraryApi
      .reports(tab)
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [tab, year])

  const uniqueNames = useMemo(() => {
    if (data?.uniqueVisitors != null) return Number(data.uniqueVisitors)
    const visits = data?.visits || []
    const set = new Set(
      visits
        .map((v: any) => String(v.visitorName || "").trim().toLowerCase())
        .filter(Boolean)
    )
    return set.size
  }, [data])

  const printPage = () => window.print()

  const tabs: { id: RangeTab; label: string }[] = [
    { id: "today", label: "Today" },
    { id: "week", label: "7 days" },
    { id: "month", label: "Month" },
    { id: "annual", label: "Annual" },
  ]

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-white border-b h-14 px-4 flex items-center justify-between print:hidden">
        <div className="flex items-center gap-3">
          <Link to="/library" className="text-stone-500">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-semibold text-sm">Reports</h1>
        </div>
        <button
          type="button"
          onClick={printPage}
          className="flex items-center gap-1 text-xs border px-3 py-1.5 rounded-full"
        >
          <Printer className="w-3.5 h-3.5" /> Print
        </button>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-4 pb-10">
        <div className="grid grid-cols-4 gap-1.5 print:hidden">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`py-2 rounded-xl text-xs font-medium border ${
                tab === t.id
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-600"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "annual" && (
          <div className="flex items-center gap-2 print:hidden">
            <label className="text-xs text-stone-500">Year</label>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="text-sm border rounded-lg px-2 py-1.5"
            >
              {[0, 1, 2].map((i) => {
                const y = new Date().getFullYear() - i
                return (
                  <option key={y} value={y}>
                    {y}
                  </option>
                )
              })}
            </select>
          </div>
        )}

        {loading ? (
          <p className="text-sm text-stone-400">Loading…</p>
        ) : tab === "annual" ? (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white border rounded-xl p-3 text-center">
                <div className="text-lg font-semibold tabular-nums">
                  {annual?.totalBooks ?? 0}
                </div>
                <div className="text-[10px] text-stone-500">Books</div>
              </div>
              <div className="bg-white border rounded-xl p-3 text-center">
                <div className="text-lg font-semibold tabular-nums">
                  {annual?.activeLoans ?? 0}
                </div>
                <div className="text-[10px] text-stone-500">Open loans</div>
              </div>
              <div className="bg-white border rounded-xl p-3 text-center">
                <div className="text-lg font-semibold tabular-nums">
                  {annual?.totalStudents ?? 0}
                </div>
                <div className="text-[10px] text-stone-500">Students</div>
              </div>
            </div>

            <div className="bg-white border rounded-xl p-4 space-y-2">
              <h2 className="text-sm font-semibold">Visits by month ({year})</h2>
              {(annual?.visitsByMonth || []).length === 0 ? (
                <p className="text-xs text-stone-400">No visit data</p>
              ) : (
                (annual.visitsByMonth as any[]).map((row, i) => (
                  <div key={i} className="text-sm flex justify-between">
                    <span>{monthLabel(row.month)}</span>
                    <span className="tabular-nums text-stone-600">{row.count}</span>
                  </div>
                ))
              )}
            </div>

            <div className="bg-white border rounded-xl p-4 space-y-2">
              <h2 className="text-sm font-semibold">Student attendance by month</h2>
              {(annual?.attendanceByMonth || []).length === 0 ? (
                <p className="text-xs text-stone-400">No attendance data</p>
              ) : (
                (annual.attendanceByMonth as any[]).map((row, i) => (
                  <div key={i} className="text-sm flex justify-between">
                    <span>{monthLabel(row.month)}</span>
                    <span className="tabular-nums text-stone-600">{row.count}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white border rounded-xl p-3 text-center">
                <div className="text-lg font-semibold tabular-nums">
                  {data?.visitCount ?? 0}
                </div>
                <div className="text-[10px] text-stone-500">Visits</div>
              </div>
              <div className="bg-white border rounded-xl p-3 text-center">
                <div className="text-lg font-semibold tabular-nums">{uniqueNames}</div>
                <div className="text-[10px] text-stone-500">Unique names</div>
              </div>
              <div className="bg-white border rounded-xl p-3 text-center">
                <div className="text-lg font-semibold tabular-nums">
                  {(data?.reviews || []).length}
                </div>
                <div className="text-[10px] text-stone-500">Reviews</div>
              </div>
            </div>

            <div className="bg-white border rounded-xl p-4 space-y-2">
              <h2 className="text-sm font-semibold">Top visitors</h2>
              {(data?.topVisitors || []).length === 0 ? (
                <p className="text-xs text-stone-400">None yet</p>
              ) : (
                (data.topVisitors as any[]).map((v) => (
                  <div key={v.name} className="text-sm flex justify-between">
                    <span>{v.name}</span>
                    <span className="text-stone-500 tabular-nums">{v.count}</span>
                  </div>
                ))
              )}
            </div>

            <div className="bg-white border rounded-xl p-4 space-y-2">
              <h2 className="text-sm font-semibold">Visit log</h2>
              {(data?.visits || []).length === 0 ? (
                <p className="text-xs text-stone-400">No visits</p>
              ) : (
                <ul className="text-sm space-y-1 max-h-48 overflow-auto">
                  {(data.visits as any[]).slice(0, 80).map((v) => (
                    <li key={v.id} className="flex justify-between gap-2">
                      <span className="truncate">{v.visitorName}</span>
                      <span className="text-xs text-stone-400 shrink-0">
                        {v.createdAt
                          ? new Date(v.createdAt).toLocaleString([], {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-white border rounded-xl p-4 space-y-2">
              <h2 className="text-sm font-semibold">Reviews</h2>
              {(data?.reviews || []).length === 0 ? (
                <p className="text-xs text-stone-400">No reviews in this range</p>
              ) : (
                (data.reviews as any[]).map((r) => (
                  <div key={r.id} className="border-b border-stone-100 last:border-0 pb-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-3 h-3 ${
                            s <= r.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-stone-200"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-stone-500 ml-1">{r.visitorName}</span>
                    </div>
                    {r.comment && (
                      <p className="text-xs text-stone-600 mt-0.5">{r.comment}</p>
                    )}
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
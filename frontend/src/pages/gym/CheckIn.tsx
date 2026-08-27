import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Search, Check } from "lucide-react"
import { gymApi } from "../../lib/api"
import { cn } from "../../lib/utils"

export default function GymCheckIn() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [members, setMembers] = useState<any[]>([])
  const [today, setToday] = useState<any[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [checking, setChecking] = useState<string | null>(null)
  const [msg, setMsg] = useState("")

  const load = () => {
    Promise.all([gymApi.members(), gymApi.todayCheckIns()])
      .then(([m, c]) => {
        setMembers(m.filter((x: any) => x.status === "active"))
        setToday(c)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }
  useEffect(() => { load() }, [])

  const doCheckIn = async (memberId: string) => {
    setChecking(memberId)
    setMsg("")
    try {
      await gymApi.checkIn(memberId)
      setMsg(isAm ? "ተመዝግቧል" : "Checked in")
      load()
      setTimeout(() => setMsg(""), 2000)
    } catch (err: any) {
      setMsg(err.message || "Failed")
    } finally {
      setChecking(null)
    }
  }

  const filtered = members.filter((m) => {
    const name = (isAm && m.fullNameAm ? m.fullNameAm : m.fullName) || ""
    return name.toLowerCase().includes(search.toLowerCase()) || (m.phone || "").includes(search)
  })

  const checkedIds = new Set(today.map((c: any) => c.memberId))

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 px-6 h-14 flex items-center gap-4 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100"><ArrowLeft className="w-5 h-5 text-semay-600" /></Link>
        <h1 className="font-semibold text-semay-900">{isAm ? "ቼክ-ኢን" : "Check-In"}</h1>
        <span className="ml-auto text-sm text-semay-500">{today.length} {isAm ? "ዛሬ" : "today"}</span>
      </header>

      <div className="max-w-2xl mx-auto p-6 space-y-4">
        {msg && (
          <div className="bg-semay-900 text-white text-sm font-medium px-4 py-3 rounded-xl text-center">{msg}</div>
        )}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-semay-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isAm ? "ስም ወይም ስልክ ፈልግ..." : "Search name or phone..."}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>

        {loading ? <div className="text-semay-400 text-sm">Loading...</div> : (
          <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden divide-y divide-semay-100">
            {filtered.length === 0 ? (
              <div className="px-5 py-8 text-center text-semay-400 text-sm">{isAm ? "አባል አልተገኘም" : "No members found"}</div>
            ) : filtered.map((m) => {
              const already = checkedIds.has(m.id)
              return (
                <div key={m.id} className="px-5 py-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-medium text-semay-900 text-sm truncate">
                      {isAm && m.fullNameAm ? m.fullNameAm : m.fullName}
                    </div>
                    <div className="text-xs text-semay-400">{m.phone || "—"}</div>
                  </div>
                  <button
                    disabled={already || checking === m.id}
                    onClick={() => doCheckIn(m.id)}
                    className={cn(
                      "flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition",
                      already
                        ? "bg-success/15 text-success cursor-default"
                        : "bg-semay-900 text-white hover:bg-semay-800"
                    )}
                  >
                    <Check className="w-4 h-4" />
                    {already ? (isAm ? "ተመዝግቧል" : "Checked") : checking === m.id ? "..." : (isAm ? "ቼክ-ኢን" : "Check In")}
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

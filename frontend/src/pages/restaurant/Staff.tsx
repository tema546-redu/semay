import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Copy, UserPlus, CalendarDays } from "lucide-react"
import { staffApi, branchesApi } from "../../lib/api"
import { cn } from "../../lib/utils"

const STATUSES = [
  { id: "PRESENT", label: "Present", color: "bg-emerald-500" },
  { id: "LATE", label: "Late", color: "bg-amber-500" },
  { id: "HALF", label: "Half", color: "bg-sky-500" },
  { id: "ABSENT", label: "Absent", color: "bg-rose-500" },
  { id: "OFF", label: "Off", color: "bg-slate-400" },
] as const

export default function StaffPage() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  const [users, setUsers] = useState<any[]>([])
  const [invites, setInvites] = useState<any[]>([])
  const [role, setRole] = useState("WAITER")
  const [loading, setLoading] = useState(true)
  const [lastLink, setLastLink] = useState("")
  const [msg, setMsg] = useState("")

  const [branchId, setBranchIdState] = useState("")
  const [branches, setBranches] = useState<any[]>([])

  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth() + 1)
  const [selectedUserId, setSelectedUserId] = useState<string>("")
  const [records, setRecords] = useState<any[]>([])
  const [attBusy, setAttBusy] = useState(false)

  const load = () =>
    staffApi
      .list()
      .then((d) => {
        setUsers(d.users || [])
        setInvites(d.invites || [])
        if (!selectedUserId && (d.users || [])[0]) {
          setSelectedUserId(d.users[0].id)
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false))

  const loadAttendance = () =>
    staffApi
      .attendance?.(year, month)
      ?.then((d: any) => {
        setRecords(d.records || [])
        if (d.users?.length && !selectedUserId) {
          setSelectedUserId(d.users[0].id)
        }
      })
      .catch(console.error)

  useEffect(() => {
    load()
    branchesApi
      .list()
      .then(setBranches)
      .catch(() => setBranches([]))
    branchesApi.ensureMain?.().catch(() => {})
  }, [])

  useEffect(() => {
    loadAttendance()
  }, [year, month])

  const createInvite = async () => {
    setMsg("")
    try {
      const inv = await staffApi.createInvite(role, branchId || undefined)
      const code = inv.code
      const link = `${window.location.origin}/join/${code}${
        inv.branchId || branchId
          ? `?branch=${inv.branchId || branchId}`
          : ""
      }`
      setLastLink(link)
      setMsg(isAm ? "ግብዣ ተፈጥሯል" : "Invite created — copy the link")
      load()
    } catch (e: any) {
      setMsg(e.message || "Failed")
    }
  }

  const copy = async () => {
    if (!lastLink) return
    await navigator.clipboard.writeText(lastLink)
    setMsg(isAm ? "ሊንክ ተቀድቷል" : "Link copied")
  }

  const daysInMonth = useMemo(() => new Date(year, month, 0).getDate(), [year, month])
  const firstWeekday = useMemo(() => {
    const js = new Date(year, month - 1, 1).getDay()
    return js === 0 ? 6 : js - 1
  }, [year, month])

  const statusFor = (day: number) => {
    if (!selectedUserId) return null
    const key = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return records.find((r) => r.userId === selectedUserId && r.date === key)
  }

  const mark = async (day: number, status: string) => {
    if (!selectedUserId || !staffApi.markAttendance) return
    const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    setAttBusy(true)
    try {
      await staffApi.markAttendance({ userId: selectedUserId, date, status })
      await loadAttendance()
    } catch (e: any) {
      setMsg(e.message || "Attendance failed")
    } finally {
      setAttBusy(false)
    }
  }

  const prevMonth = () => {
    if (month === 1) {
      setMonth(12)
      setYear((y) => y - 1)
    } else setMonth((m) => m - 1)
  }
  const nextMonth = () => {
    if (month === 12) {
      setMonth(1)
      setYear((y) => y + 1)
    } else setMonth((m) => m + 1)
  }

  const monthName = new Date(year, month - 1, 1).toLocaleString(undefined, {
    month: "long",
  })

  const counts = useMemo(() => {
    const map: Record<string, number> = {}
    for (const s of STATUSES) map[s.id] = 0
    for (const r of records) {
      if (r.userId === selectedUserId && map[r.status] !== undefined) map[r.status]++
    }
    return map
  }, [records, selectedUserId])

  return (
    <div className="min-h-svh bg-semay-50 pb-10">
      <header className="bg-white border-b border-semay-200 px-6 h-14 flex items-center gap-4 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5 text-semay-600" />
        </Link>
        <h1 className="font-semibold text-semay-900">{isAm ? "ሰራተኞች" : "Staff"}</h1>
      </header>

      <div className="max-w-2xl mx-auto p-6 space-y-6">
        {/* Invite */}
        <div className="bg-white border border-semay-200 rounded-2xl p-5 space-y-4 shadow-sm">
          <h2 className="font-semibold text-semay-900 flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            {isAm ? "ሰራተኛ ጋብዝ" : "Invite staff"}
          </h2>
          <p className="text-sm text-semay-500">
            {isAm
              ? "ሚና እና ቅርንጫፍ ይምረጡ። ሊንኩን ለሰራተኛው ይላኩ።"
              : "Choose role and branch. Send the link to your staff."}
          </p>
          <div className="flex flex-wrap gap-2 items-center">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="px-3 py-2 rounded-xl border border-semay-200 text-sm"
            >
              <option value="WAITER">Waiter (POS)</option>
              <option value="KITCHEN">Kitchen (KDS)</option>
              <option value="MANAGER">Manager</option>
              <option value="STAFF">Staff</option>
            </select>
            <select
              value={branchId}
              onChange={(e) => setBranchIdState(e.target.value)}
              className="px-3 py-2 rounded-xl border border-semay-200 text-sm min-w-[140px]"
            >
              <option value="">{isAm ? "ዋና / ሁሉም" : "Main / any"}</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={createInvite}
              className="bg-semay-900 text-white text-sm font-medium px-4 py-2 rounded-full"
            >
              {isAm ? "ግብዣ ፍጠር" : "Create invite"}
            </button>
          </div>
          {lastLink && (
            <div className="flex gap-2 items-center bg-semay-50 rounded-xl p-3">
              <code className="text-xs flex-1 break-all text-semay-800">{lastLink}</code>
              <button
                type="button"
                onClick={copy}
                className="p-2 rounded-lg hover:bg-white border border-semay-200"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          )}
          {msg && <p className="text-sm text-semay-600">{msg}</p>}
        </div>

        {/* Team */}
        <div>
          <h3 className="text-sm font-semibold text-semay-500 uppercase tracking-wide mb-3">
            {isAm ? "ቡድን" : "Team"}
          </h3>
          {loading ? (
            <p className="text-sm text-semay-400">Loading...</p>
          ) : (
            <div className="bg-white border border-semay-200 rounded-2xl divide-y divide-semay-100 shadow-sm">
              {users.map((u) => (
  <div key={u.id} className="px-4 py-3 flex justify-between items-center gap-2">
    <div>
      <div className="text-sm font-medium text-semay-900">{u.name}</div>
      <div className="text-xs text-semay-400">{u.email}</div>
      {u.branch?.name && (
        <div className="text-[11px] text-semay-400">{u.branch.name}</div>
      )}
    </div>
    <div className="flex items-center gap-2 shrink-0">
      <span className="text-xs font-medium bg-semay-100 text-semay-700 px-2 py-1 rounded-full">
        {u.role}
      </span>
      {u.role !== "OWNER" && (
        <button
          type="button"
          className="text-[11px] text-rose-600 px-2 py-1"
          onClick={async () => {
            if (!confirm(`Remove ${u.name}?`)) return
            try {
              await staffApi.remove(u.id)
              load()
            } catch (e: any) {
              setMsg(e.message || "Failed")
            }
          }}
        >
          Remove
        </button>
      )}
    </div>
  </div>
))}
            </div>
          )}
        </div>

        {invites.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-semay-500 uppercase tracking-wide mb-3">
              {isAm ? "ንቁ ግብዣዎች" : "Open invites"}
            </h3>
            <div className="bg-white border border-semay-200 rounded-2xl divide-y divide-semay-100">
              {invites.map((inv) => (
                <div key={inv.id} className="px-4 py-3 flex justify-between text-sm gap-2">
                  <span className="font-mono">{inv.code}</span>
                  <span className="text-semay-500">
                    {inv.role}
                    {inv.branch?.name ? ` · ${inv.branch.name}` : ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Attendance */}
        <div className="bg-white border border-semay-200 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-semibold text-semay-900 flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              {isAm ? "የሰራተኛ አቴንዳንስ" : "Attendance"}
            </h2>
            <div className="flex items-center gap-2 text-sm">
              <button type="button" onClick={prevMonth} className="px-2 py-1 border rounded-lg">
                ‹
              </button>
              <span className="font-medium min-w-[120px] text-center">
                {monthName} {year}
              </span>
              <button type="button" onClick={nextMonth} className="px-2 py-1 border rounded-lg">
                ›
              </button>
            </div>
          </div>

          <select
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border text-sm"
          >
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name} · {u.role}
              </option>
            ))}
          </select>

          <div className="flex flex-wrap gap-2 text-[10px]">
            {STATUSES.map((s) => (
              <span key={s.id} className="inline-flex items-center gap-1 text-semay-600">
                <span className={cn("w-2 h-2 rounded-full", s.color)} />
                {s.label} ({counts[s.id] || 0})
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-semay-400 font-medium">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstWeekday }).map((_, i) => (
              <div key={`e-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const rec = statusFor(day)
              const st = STATUSES.find((s) => s.id === rec?.status)
              return (
                <button
                  key={day}
                  type="button"
                  disabled={attBusy || !selectedUserId}
                  onClick={() => {
                    const order = ["PRESENT", "LATE", "HALF", "ABSENT", "OFF"]
                    const cur = rec?.status || null
                    const next = order[(order.indexOf(cur || "") + 1) % order.length]
                    mark(day, next)
                  }}
                  className={cn(
                    "aspect-square rounded-xl border text-xs font-medium flex flex-col items-center justify-center transition",
                    st
                      ? "text-white border-transparent " + st.color
                      : "border-semay-100 bg-semay-50 text-semay-700 hover:border-semay-300"
                  )}
                  title="Tap to cycle status"
                >
                  <span>{day}</span>
                </button>
              )
            })}
          </div>
          <p className="text-[11px] text-semay-400">
            Tap a day: Present → Late → Half → Absent → Off. Owner/Manager only.
          </p>
        </div>
      </div>
    </div>
  )
}
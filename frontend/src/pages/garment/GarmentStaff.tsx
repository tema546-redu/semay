import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { garmentApi, staffApi } from "../../lib/api"
import { useAuth } from "../../lib/auth"
import GarmentLayout from "../../components/GarmentLayout"
import {
  Users,
  Plus,
  Copy,
  Check,
  Trash2,
  ClipboardList,
  CalendarDays,
  Pencil,
} from "lucide-react"
import { offlineMutate, offlineGet, isOnline } from "../../lib/garmentOffline"
import { garmentUrl } from "../../lib/garmentApiBase"

type Tab = "people" | "attendance" | "report"
type AttStatus = "UNMARKED" | "PRESENT" | "LATE" | "ABSENT" | "EARLY_LEAVE"

type Mark = {
  status: AttStatus
  reason: string
  note: string
}

const emptyMark = (): Mark => ({
  status: "UNMARKED",
  reason: "",
  note: "",
})

const ABSENT_REASON_OPTIONS = [
  { value: "SICK", en: "1. Sick", am: "1. ህመም" },
  { value: "PERSONAL", en: "2. Personal case", am: "2. የግል ጉዳይ" },
  { value: "EMERGENCY", en: "3. Emergency", am: "3. አደጋ / ድንገተኛ" },
  {
    value: "ANNUAL_LEAVE",
    en: "4. Annual rest (ye amet ereft)",
    am: "4. የዓመት እረፍት",
  },
]

function leaveLeft(w: any) {
  const annual = Number(w?.annualLeaveDays ?? 14)
  const used = Number(w?.usedLeaveDays ?? 0)
  return Math.max(0, annual - used)
}

export default function GarmentStaff() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const { user, organization } = useAuth()

  const canManage =
    user?.role === "OWNER" ||
    user?.role === "MANAGER" ||
    !user?.role

  const [tab, setTab] = useState<Tab>("people")

  const [staff, setStaff] = useState<any[]>([])
  const [workers, setWorkers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const [showInvite, setShowInvite] = useState(false)
  const [inviteRole, setInviteRole] = useState("STAFF")
  const [inviteLink, setInviteLink] = useState("")
  const [copied, setCopied] = useState(false)
  const [creating, setCreating] = useState(false)

  const [showAddWorker, setShowAddWorker] = useState(false)
  const [workerName, setWorkerName] = useState("")
  const [workerPhone, setWorkerPhone] = useState("")
  const [workerAnnual, setWorkerAnnual] = useState("14")
  const [savingWorker, setSavingWorker] = useState(false)

  const [editLeave, setEditLeave] = useState<any>(null)
  const [leaveAnnual, setLeaveAnnual] = useState("14")
  const [leaveUsed, setLeaveUsed] = useState("0")
  const [savingLeave, setSavingLeave] = useState(false)

  const [workDate, setWorkDate] = useState(
    () => new Date().toISOString().slice(0, 10)
  )
  const [marks, setMarks] = useState<Record<string, Mark>>({})
  const [attLoading, setAttLoading] = useState(false)
  const [savingDay, setSavingDay] = useState(false)
  const [saveMsg, setSaveMsg] = useState("")

  const [summary, setSummary] = useState<any>(null)
  const [summaryLoading, setSummaryLoading] = useState(false)

  const [detail, setDetail] = useState<any>(null)
  const [detailLoading, setDetailLoading] = useState(false)

  const loadPeople = async () => {
    try {
      const [staffRes, workerRes] = await Promise.all([
        staffApi.list().catch(() => []),
        garmentApi.workers().catch(() => []),
      ])
      const list = Array.isArray(staffRes)
        ? staffRes
        : staffRes?.users || staffRes?.staff || []
      setStaff(list)

      const workerList = Array.isArray(workerRes) ? workerRes : []
      if (workerList.length) {
        setWorkers(workerList)
        try {
          const { cacheSet } = await import("../../lib/garmentOffline")
          await cacheSet("garment_workers", workerList)
        } catch {
          /* ignore */
        }
      } else {
        try {
          const cached = await offlineGet<any[]>(
            "garment_workers",
            garmentUrl("/api/garment/workers")
          )
          if (cached.data) setWorkers(cached.data)
          else setWorkers([])
        } catch {
          setWorkers([])
        }
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPeople()
  }, [])

  const attendancePeople = useMemo(() => {
    return workers.map((w) => ({
      id: w.id,
      name: w.name,
      phone: w.phone,
      annualLeaveDays: w.annualLeaveDays ?? 14,
      usedLeaveDays: w.usedLeaveDays ?? 0,
      kind: "worker" as const,
    }))
  }, [workers])

  const loadAttendanceDay = async () => {
    setAttLoading(true)
    setSaveMsg("")
    try {
      const rows = await garmentApi.attendanceDay(workDate)
      const next: Record<string, Mark> = {}
      for (const person of attendancePeople) {
        const found = (rows || []).find((r: any) => r.workerId === person.id)
        next[person.id] = found
          ? {
              status: found.status as AttStatus,
              reason: found.reason || "",
              note: found.note || "",
            }
          : emptyMark()
      }
      setMarks(next)
    } catch (err) {
      console.error(err)
      const next: Record<string, Mark> = {}
      for (const person of attendancePeople) {
        next[person.id] = emptyMark()
      }
      setMarks(next)
    } finally {
      setAttLoading(false)
    }
  }

  useEffect(() => {
    if (tab === "attendance") loadAttendanceDay()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, workDate, workers.length])

  const loadSummary = async () => {
    setSummaryLoading(true)
    try {
      const res = await garmentApi.attendanceSummary(30)
      setSummary(res)
    } catch (err) {
      console.error(err)
      setSummary(null)
    } finally {
      setSummaryLoading(false)
    }
  }

  useEffect(() => {
    if (tab === "report") loadSummary()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  const handleCreateInvite = async () => {
    setCreating(true)
    try {
      const res = await staffApi.createInvite(inviteRole)
      const code = res?.code || res?.invite?.code
      const link = res?.link || `${window.location.origin}/join/${code}`
      setInviteLink(link)
    } catch (err) {
      console.error(err)
      alert(isAm ? "ስህተት ተከስቷል" : "Failed to create invite")
    } finally {
      setCreating(false)
    }
  }

  const copyLink = () => {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRemoveStaff = async (userId: string) => {
    if (!confirm(isAm ? "እርግጠኛ ነዎት?" : "Are you sure?")) return
    try {
      await staffApi.remove(userId)
      loadPeople()
    } catch (err) {
      console.error(err)
      alert(isAm ? "ማስወገድ አልተሳካም" : "Failed to remove")
    }
  }

  const handleAddWorker = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!workerName.trim()) return
    setSavingWorker(true)
    try {
      const data: any = {
        name: workerName.trim(),
        phone: workerPhone.trim() || undefined,
      }
      const annual = Number(workerAnnual)
      if (!Number.isNaN(annual) && annual >= 0) {
        data.annualLeaveDays = annual
        data.usedLeaveDays = 0
      }
      await garmentApi.addWorker(data)
      setWorkerName("")
      setWorkerPhone("")
      setWorkerAnnual("14")
      setShowAddWorker(false)
      await loadPeople()
    } catch (err) {
      console.error(err)
      alert(isAm ? "መጨመር አልተሳካም" : "Failed to add worker")
    } finally {
      setSavingWorker(false)
    }
  }

  const handleRemoveWorker = async (id: string) => {
    if (!confirm(isAm ? "እርግጠኛ ነዎት?" : "Are you sure?")) return
    try {
      await garmentApi.removeWorker(id)
      loadPeople()
    } catch (err) {
      console.error(err)
      alert(isAm ? "ማስወገድ አልተሳካም" : "Failed to remove")
    }
  }

  const openEditLeave = (w: any) => {
    setEditLeave(w)
    setLeaveAnnual(String(w.annualLeaveDays ?? 14))
    setLeaveUsed(String(w.usedLeaveDays ?? 0))
  }

  const saveLeave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editLeave?.id) return
    setSavingLeave(true)
    try {
      if (typeof (garmentApi as any).updateWorker === "function") {
        await (garmentApi as any).updateWorker(editLeave.id, {
          annualLeaveDays: Number(leaveAnnual) || 0,
          usedLeaveDays: Number(leaveUsed) || 0,
        })
      } else {
        const token =
          localStorage.getItem("token") ||
          localStorage.getItem("accessToken") ||
          ""
        const r = await fetch(`/api/garment/workers/${editLeave.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({
            annualLeaveDays: Number(leaveAnnual) || 0,
            usedLeaveDays: Number(leaveUsed) || 0,
          }),
        })
        if (!r.ok) throw new Error(await r.text())
      }
      setEditLeave(null)
      await loadPeople()
    } catch (err) {
      console.error(err)
      alert(
        isAm
          ? "የዓመት እረፍት ማስቀመጥ አልተሳካም — backend PATCH /workers/:id"
          : "Could not save leave — need PATCH /api/garment/workers/:id"
      )
    } finally {
      setSavingLeave(false)
    }
  }

  const roleLabel = (role: string) => {
    const map: any = {
      OWNER: isAm ? "ባለቤት" : "Owner",
      MANAGER: isAm ? "ማኔጀር" : "Manager",
      STAFF: isAm ? "ሰራተኛ (አፕ)" : "Staff (app)",
    }
    return map[role] || role
  }

  const setMark = (id: string, patch: Partial<Mark>) => {
    setMarks((prev) => ({
      ...prev,
      [id]: { ...(prev[id] || emptyMark()), ...patch },
    }))
  }

  const markAllPresent = () => {
    const next: Record<string, Mark> = {}
    for (const p of attendancePeople) {
      next[p.id] = { status: "PRESENT", reason: "", note: "" }
    }
    setMarks(next)
  }

  const reasonLabel = (code: string) => {
    const r = ABSENT_REASON_OPTIONS.find((x) => x.value === code)
    if (r) return isAm ? r.am : r.en
    return code
  }

  const saveDay = async () => {
    if (!canManage) {
      alert(isAm ? "ባለቤት ወይም ማኔጀር ብቻ" : "Only owner or manager")
      return
    }
    setSavingDay(true)
    setSaveMsg("")
    try {
      const bad = attendancePeople.filter((p) => {
        const m = marks[p.id]
        if (!m || m.status === "UNMARKED" || m.status === "PRESENT") return false
        return !String(m.reason || "").trim()
      })
      if (bad.length) {
        alert(
          isAm
            ? "ለዘግይቶ / አልመጣም / ቀድሞ የወጣ: ምክንያት ይምረጡ (ህመም፣ የግል፣ አደጋ፣ የዓመት እረፍት)"
            : "Select reason for Late / Absent / Early (Sick, Personal, Emergency, Annual rest)"
        )
        setSavingDay(false)
        return
      }

      // Annual leave without remaining days
      for (const p of attendancePeople) {
        const m = marks[p.id]
        if (
          m?.status === "ABSENT" &&
          m.reason === "ANNUAL_LEAVE" &&
          leaveLeft(p) <= 0
        ) {
          alert(
            isAm
              ? `${p.name}: የዓመት እረፍት ቀርቷል (0). ሌላ ምክንያት ይምረጡ ወይም ቀናት ጨምሩ።`
              : `${p.name}: no annual rest left. Pick another reason or increase leave days.`
          )
          setSavingDay(false)
          return
        }
      }

      const payload = {
        workDate,
        marks: attendancePeople
          .map((p) => {
            const m = marks[p.id] || emptyMark()
            return {
              workerId: p.id,
              status: m.status,
              reason: m.reason || undefined,
              note: m.note || undefined,
              useAnnualLeave: m.reason === "ANNUAL_LEAVE",
            }
          })
          .filter((m) => m.status && m.status !== "UNMARKED"),
      }

      if (payload.marks.length === 0) {
        alert(
          isAm
            ? "ምንም ምልክት የለም — ቢያንስ አንድ ሰው ምረጡ"
            : "Nothing to save — mark at least one person"
        )
        setSavingDay(false)
        return
      }

      try {
        const res = (await garmentApi.saveAttendanceBulk(payload)) as {
          saved?: number
        }
        setSaveMsg(
          isAm
            ? `ተቀምጧል · ${res?.saved ?? payload.marks.length} ሰዎች`
            : `Saved · ${res?.saved ?? payload.marks.length} people`
        )
        await loadAttendanceDay()
        await loadPeople()
      } catch (apiErr: any) {
        console.error(apiErr)
        const msg =
          apiErr?.message ||
          apiErr?.error ||
          (typeof apiErr === "string" ? apiErr : "")

        if (!isOnline()) {
          const result = await offlineMutate({
            url: garmentUrl("/api/garment/attendance/bulk"),
            method: "POST",
            body: payload,
            label: "Attendance day",
          })
          if (result.queued) {
            setSaveMsg(
              isAm
                ? "ኦፍላይን ተቀምጧል — Sync later"
                : "Saved offline — Sync later"
            )
          } else {
            alert(result.error || msg || (isAm ? "ማስቀመጥ አልተሳካም" : "Save failed"))
          }
        } else {
          alert(
            msg ||
              (isAm
                ? "ማስቀመጥ አልተሳካም — POST /api/garment/attendance/bulk በ backend ያረጋግጡ"
                : "Save failed — check POST /api/garment/attendance/bulk on backend")
          )
        }
      }
    } catch (err) {
      console.error(err)
      alert(isAm ? "ማስቀመጥ አልተሳካም" : "Save failed")
    } finally {
      setSavingDay(false)
    }
  }

  const openWorkerHistory = async (workerId: string) => {
    if (!workerId) return
    setDetailLoading(true)
    setDetail(null)
    try {
      const res = await garmentApi.attendanceHistory(workerId, 30)
      setDetail(res)
    } catch (err) {
      console.error(err)
      alert(isAm ? "ማሳየት አልተሳካም" : "Could not load history")
    } finally {
      setDetailLoading(false)
    }
  }

  const counts = useMemo(() => {
    let present = 0,
      late = 0,
      absent = 0,
      early = 0,
      unmarked = 0
    for (const p of attendancePeople) {
      const m = marks[p.id]
      if (!m || m.status === "UNMARKED") {
        unmarked++
        continue
      }
      if (m.status === "PRESENT") present++
      if (m.status === "LATE") late++
      if (m.status === "ABSENT") absent++
      if (m.status === "EARLY_LEAVE") early++
    }
    return { present, late, absent, early, unmarked }
  }, [marks, attendancePeople])

  const appPeople = staff.map((p) => ({
    id: p.id || p.userId || p.user?.id,
    name: p.name || p.user?.name || "-",
    email: p.email || p.user?.email || "",
    role: p.role || p.user?.role || "STAFF",
  }))

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-4xl">
        <div className="flex items-center justify-between mb-4 gap-3">
          <div>
            <h1 className="text-xl font-semibold text-semay-900">
              {isAm ? "ሰራተኞች እና መገኘት" : "Staff & Attendance"}
            </h1>
            <p className="text-sm text-semay-500 mt-1">
              {isAm
                ? "ስም · የዓመት እረፍት · መገኘት · 30 ቀን"
                : "Names · annual rest · attendance · 30-day"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {(
            [
              { key: "people" as Tab, label: isAm ? "ሰዎች" : "People", icon: Users },
              {
                key: "attendance" as Tab,
                label: isAm ? "መገኘት" : "Attendance",
                icon: ClipboardList,
              },
              {
                key: "report" as Tab,
                label: isAm ? "30 ቀን" : "30-day report",
                icon: CalendarDays,
              },
            ] as const
          ).map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium border ${
                tab === t.key
                  ? "bg-semay-900 text-white border-semay-900"
                  : "bg-white border-semay-200 text-semay-700"
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* ========== PEOPLE ========== */}
        {tab === "people" && (
          <div className="space-y-5">
            <section className="bg-white border border-semay-200 rounded-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-semay-100 flex items-center justify-between gap-2">
                <div>
                  <div className="font-medium">
                    {isAm ? "የስራ ቦታ ሰራተኞች" : "Floor workers"}
                  </div>
                  <div className="text-xs text-semay-500">
                    {isAm
                      ? "ስም + የዓመት እረፍት (ከ Excel)"
                      : "Name + annual rest (from your Excel)"}
                  </div>
                </div>
                {canManage && (
                  <button
                    type="button"
                    onClick={() => setShowAddWorker(true)}
                    className="flex items-center gap-1.5 px-3 py-2 bg-semay-900 text-white rounded-xl text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    {isAm ? "ስም ጨምር" : "Add name"}
                  </button>
                )}
              </div>

              {loading ? (
                <p className="p-6 text-center text-semay-500">
                  {isAm ? "በመጫን ላይ..." : "Loading..."}
                </p>
              ) : workers.length === 0 ? (
                <p className="p-6 text-center text-sm text-semay-500">
                  {isAm
                    ? "እስካሁን ስም የለም — Add name ይጫኑ"
                    : "No names yet — click Add name"}
                </p>
              ) : (
                workers.map((w) => (
                  <div
                    key={w.id}
                    className="px-4 py-3 border-b border-semay-50 flex justify-between items-center gap-2"
                  >
                    <div className="min-w-0">
                      <div className="font-medium">{w.name}</div>
                      {w.phone && (
                        <div className="text-xs text-semay-500">{w.phone}</div>
                      )}
                      <div className="text-xs text-semay-600 mt-0.5">
                        {isAm ? "የዓመት እረፍት ቀሪ" : "Annual rest left"}:{" "}
                        <b>
                          {leaveLeft(w)} / {w.annualLeaveDays ?? 14}
                        </b>{" "}
                        {isAm ? "ቀን" : "days"}
                      </div>
                    </div>
                    {canManage && (
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => openEditLeave(w)}
                          className="p-2 text-semay-500 hover:text-semay-900"
                          title={isAm ? "የዓመት እረፍት" : "Annual leave"}
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRemoveWorker(w.id)}
                          className="p-2 text-semay-400 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </section>

            <section className="bg-white border border-semay-200 rounded-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-semay-100 flex items-center justify-between gap-2">
                <div>
                  <div className="font-medium">
                    {isAm ? "የአፕ ተጠቃሚዎች" : "App users"}
                  </div>
                  <div className="text-xs text-semay-500">
                    {isAm
                      ? "ለዕለታዊ ሪፖርት / ሎጊን — ሊንክ"
                      : "For Daily report login — invite link"}
                  </div>
                </div>
                {canManage && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowInvite(true)
                      setInviteLink("")
                    }}
                    className="text-sm px-3 py-2 border border-semay-200 rounded-xl"
                  >
                    {isAm ? "ሊንክ ጋብዝ" : "Invite link"}
                  </button>
                )}
              </div>
              {appPeople.length === 0 ? (
                <p className="p-4 text-sm text-semay-500">
                  {isAm ? "ምንም የለም" : "None yet"}
                </p>
              ) : (
                appPeople.map((person) => (
                  <div
                    key={person.id}
                    className="px-4 py-3 border-b border-semay-50 flex justify-between"
                  >
                    <div>
                      <div className="font-medium">{person.name}</div>
                      <div className="text-sm text-semay-500">
                        {person.email} · {roleLabel(person.role)}
                      </div>
                    </div>
                    {canManage && person.role !== "OWNER" && (
                      <button
                        type="button"
                        onClick={() => handleRemoveStaff(person.id)}
                        className="p-2 text-semay-400 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))
              )}
            </section>
          </div>
        )}

        {/* ========== ATTENDANCE ========== */}
        {tab === "attendance" && (
          <div className="bg-[#f7f3e8] border border-[#d4c4a8] rounded-sm shadow-md p-4 md:p-6">
            <div className="text-center border-b border-[#c4b48a] pb-3 mb-4">
              <div className="text-lg font-bold tracking-wide">
                {isAm ? "የሰራተኛ መገኘት መዝገብ" : "STAFF ATTENDANCE REGISTER"}
              </div>
              <div className="text-sm text-semay-600 mt-1">
                {organization?.name || "—"} · {workDate}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <input
                type="date"
                value={workDate}
                onChange={(e) => setWorkDate(e.target.value)}
                className="text-sm border border-[#c4b48a] bg-white/80 rounded px-2 py-1.5"
              />
              {canManage && (
                <>
                  <button
                    type="button"
                    onClick={markAllPresent}
                    className="text-xs px-3 py-1.5 bg-semay-900 text-white rounded"
                  >
                    {isAm ? "ሁሉም ተገኝተዋል" : "Mark all present"}
                  </button>
                  <button
                    type="button"
                    onClick={saveDay}
                    disabled={savingDay}
                    className="text-xs px-3 py-1.5 border border-semay-900 rounded font-medium disabled:opacity-60"
                  >
                    {savingDay ? "..." : isAm ? "አስቀምጥ" : "Save day"}
                  </button>
                </>
              )}
              {saveMsg && (
                <span className="text-xs text-emerald-700 font-medium">
                  {saveMsg}
                </span>
              )}
            </div>

            <div className="grid grid-cols-5 gap-1 mb-4 text-center text-[11px]">
              <div className="bg-white/70 rounded p-2 border border-[#e5dcc8]">
                <div className="font-bold text-emerald-700">{counts.present}</div>
                <div>{isAm ? "ተገኝቷል" : "Present"}</div>
              </div>
              <div className="bg-white/70 rounded p-2 border border-[#e5dcc8]">
                <div className="font-bold text-amber-600">{counts.late}</div>
                <div>{isAm ? "ዘግይቷል" : "Late"}</div>
              </div>
              <div className="bg-white/70 rounded p-2 border border-[#e5dcc8]">
                <div className="font-bold text-red-600">{counts.absent}</div>
                <div>{isAm ? "አልመጣም" : "Absent"}</div>
              </div>
              <div className="bg-white/70 rounded p-2 border border-[#e5dcc8]">
                <div className="font-bold text-orange-600">{counts.early}</div>
                <div>{isAm ? "ቀድሞ" : "Early"}</div>
              </div>
              <div className="bg-white/70 rounded p-2 border border-[#e5dcc8]">
                <div className="font-bold text-semay-500">{counts.unmarked}</div>
                <div>{isAm ? "አልተመረጠም" : "Blank"}</div>
              </div>
            </div>

            {attLoading ? (
              <p className="text-center py-8 text-semay-500">
                {isAm ? "በመጫን ላይ..." : "Loading..."}
              </p>
            ) : attendancePeople.length === 0 ? (
              <p className="text-center py-8 text-sm text-semay-500">
                {isAm
                  ? "መጀመሪያ ሰዎች → ስም ጨምር"
                  : "First go to People → Add name"}
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[640px]">
                  <thead>
                    <tr className="border-b border-[#c4b48a] text-left text-xs">
                      <th className="py-2 w-8">#</th>
                      <th className="py-2">{isAm ? "ስም" : "Name"}</th>
                      <th className="py-2">{isAm ? "ሁኔታ" : "Status"}</th>
                      <th className="py-2">{isAm ? "ምክንያት" : "Reason"}</th>
                      <th className="py-2 text-center">
                        {isAm ? "እረፍት ቀሪ" : "Leave left"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendancePeople.map((person, i) => {
                      const m = marks[person.id] || emptyMark()
                      return (
                        <tr
                          key={person.id}
                          className="border-b border-[#e5dcc8]"
                        >
                          <td className="py-2 text-semay-500">{i + 1}</td>
                          <td className="py-2 font-medium">{person.name}</td>
                          <td className="py-2">
                            <select
                              value={m.status}
                              disabled={!canManage}
                              onChange={(e) => {
                                const status = e.target.value as AttStatus
                                setMark(person.id, {
                                  status,
                                  reason:
                                    status === "PRESENT" ||
                                    status === "UNMARKED"
                                      ? ""
                                      : m.reason || "SICK",
                                })
                              }}
                              className="text-xs border border-[#c4b48a] rounded px-1 py-1 bg-white/80"
                            >
                              <option value="UNMARKED">—</option>
                              <option value="PRESENT">
                                {isAm ? "ተገኝቷል" : "Present"}
                              </option>
                              <option value="LATE">
                                {isAm ? "ዘግይቷል" : "Late"}
                              </option>
                              <option value="ABSENT">
                                {isAm ? "አልመጣም" : "Absent"}
                              </option>
                              <option value="EARLY_LEAVE">
                                {isAm ? "ቀድሞ ወጣ" : "Early"}
                              </option>
                            </select>
                          </td>
                          <td className="py-2">
                            {m.status !== "PRESENT" &&
                            m.status !== "UNMARKED" ? (
                              <select
                                value={m.reason}
                                disabled={!canManage}
                                onChange={(e) =>
                                  setMark(person.id, {
                                    reason: e.target.value,
                                  })
                                }
                                className="text-xs border border-[#c4b48a] rounded px-1 py-1 bg-white/80 max-w-[180px]"
                              >
                                <option value="">
                                  {isAm ? "ምክንያት *" : "Reason *"}
                                </option>
                                {ABSENT_REASON_OPTIONS.map((r) => (
                                  <option key={r.value} value={r.value}>
                                    {isAm ? r.am : r.en}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <span className="text-xs text-semay-400">—</span>
                            )}
                          </td>
                          <td className="py-2 text-center text-xs tabular-nums">
                            {leaveLeft(person)}/{person.annualLeaveDays ?? 14}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}

            <p className="text-[10px] text-center text-[#8a7a5a] mt-4">
              {isAm
                ? "ምክንያቶች: ህመም · የግል · አደጋ · የዓመት እረፍት። የዓመት እረፍት ሲመረጥ 1 ቀን ይቀንሳል።"
                : "Reasons: Sick · Personal · Emergency · Annual rest. Annual rest uses 1 day from balance."}
            </p>
          </div>
        )}

        {/* ========== 30-DAY REPORT ========== */}
        {tab === "report" && (
          <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden">
            <div className="px-4 py-3 border-b border-semay-100 flex justify-between items-center">
              <div>
                <div className="font-medium">
                  {isAm ? "የ30 ቀን መገኘት" : "Last 30 days"}
                </div>
                {summary && (
                  <div className="text-xs text-semay-500">
                    {summary.from} → {summary.to}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={loadSummary}
                className="text-xs px-3 py-1.5 border rounded-lg"
              >
                {isAm ? "አድስ" : "Refresh"}
              </button>
            </div>

            {summaryLoading ? (
              <p className="p-8 text-center text-semay-500">
                {isAm ? "በመጫን ላይ..." : "Loading..."}
              </p>
            ) : !summary?.people?.length ? (
              <p className="p-8 text-center text-sm text-semay-500">
                {isAm
                  ? "መጀመሪያ ስሞች + የቀን መዝገብ ያስቀምጡ"
                  : "Add names and save attendance days first"}
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-semay-50 text-xs text-semay-600 text-left">
                      <th className="px-4 py-2">{isAm ? "ስም" : "Name"}</th>
                      <th className="px-2 py-2 text-center">
                        {isAm ? "ተገኝቷል" : "Present"}
                      </th>
                      <th className="px-2 py-2 text-center">
                        {isAm ? "ዘግይቷል" : "Late"}
                      </th>
                      <th className="px-2 py-2 text-center">
                        {isAm ? "አልመጣም" : "Absent"}
                      </th>
                      <th className="px-2 py-2 text-center">
                        {isAm ? "ቀድሞ" : "Early"}
                      </th>
                      <th className="px-4 py-2 text-center font-semibold">
                        {isAm ? "የስራ ቀናት" : "Work days"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...summary.people]
                      .sort(
                        (a: any, b: any) =>
                          (a.workDays || 0) - (b.workDays || 0)
                      )
                      .map((row: any) => (
                        <tr key={row.key || row.name} className="border-t">
                          <td className="px-4 py-2.5">
                            <button
                              type="button"
                              onClick={() =>
                                openWorkerHistory(
                                  row.workerId ||
                                    row.key?.replace?.("w:", "") ||
                                    ""
                                )
                              }
                              className="font-medium text-left text-semay-900 underline-offset-2 hover:underline"
                            >
                              {row.name}
                            </button>
                          </td>
                          <td className="px-2 py-2.5 text-center text-emerald-700">
                            {row.present}
                          </td>
                          <td className="px-2 py-2.5 text-center text-amber-600">
                            {row.late}
                          </td>
                          <td className="px-2 py-2.5 text-center text-red-600">
                            {row.absent}
                          </td>
                          <td className="px-2 py-2.5 text-center text-orange-600">
                            {row.earlyLeave}
                          </td>
                          <td className="px-4 py-2.5 text-center font-semibold">
                            {row.workDays}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
            <p className="px-4 py-3 text-xs text-semay-500 border-t">
              {isAm
                ? "ስም ይጫኑ → ቀን በቀን + ምክንያት። የስራ ቀናት = ተገኝቷል + ዘግይቷል።"
                : "Click name → day by day + reason. Work days = Present + Late."}
            </p>
          </div>
        )}
      </div>

      {/* Add worker */}
      {showAddWorker && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end md:items-center justify-center">
          <form
            onSubmit={handleAddWorker}
            className="bg-white w-full md:max-w-md md:rounded-2xl rounded-t-3xl p-6 space-y-3"
          >
            <h2 className="text-lg font-semibold">
              {isAm ? "የሰራተኛ ስም ጨምር" : "Add worker name"}
            </h2>
            <input
              required
              value={workerName}
              onChange={(e) => setWorkerName(e.target.value)}
              placeholder={isAm ? "ሙሉ ስም *" : "Full name *"}
              className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
            />
            <input
              value={workerPhone}
              onChange={(e) => setWorkerPhone(e.target.value)}
              placeholder={isAm ? "ስልክ (አማራጭ)" : "Phone (optional)"}
              className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
            />
            <div>
              <label className="text-xs text-semay-500">
                {isAm ? "የዓመት እረፍት ቀናት" : "Annual rest days (ye amet ereft)"}
              </label>
              <input
                type="number"
                min={0}
                value={workerAnnual}
                onChange={(e) => setWorkerAnnual(e.target.value)}
                className="w-full mt-1 px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowAddWorker(false)}
                className="flex-1 py-3 border rounded-xl"
              >
                {isAm ? "ሰርዝ" : "Cancel"}
              </button>
              <button
                type="submit"
                disabled={savingWorker}
                className="flex-1 py-3 bg-semay-900 text-white rounded-xl disabled:opacity-60"
              >
                {savingWorker ? "..." : isAm ? "አስቀምጥ" : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Edit annual leave */}
      {editLeave && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end md:items-center justify-center">
          <form
            onSubmit={saveLeave}
            className="bg-white w-full md:max-w-md md:rounded-2xl rounded-t-3xl p-6 space-y-3"
          >
            <h2 className="text-lg font-semibold">
              {isAm ? "የዓመት እረፍት" : "Annual rest"} — {editLeave.name}
            </h2>
            <div>
              <label className="text-xs text-semay-500">
                {isAm ? "ጠቅላላ የዓመት እረፍት" : "Total annual days"}
              </label>
              <input
                type="number"
                min={0}
                value={leaveAnnual}
                onChange={(e) => setLeaveAnnual(e.target.value)}
                className="w-full mt-1 px-3 py-2.5 border rounded-xl text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-semay-500">
                {isAm ? "ያገለገሉ ቀናት" : "Already used"}
              </label>
              <input
                type="number"
                min={0}
                value={leaveUsed}
                onChange={(e) => setLeaveUsed(e.target.value)}
                className="w-full mt-1 px-3 py-2.5 border rounded-xl text-sm"
              />
            </div>
            <p className="text-xs text-semay-500">
              {isAm ? "ቀሪ" : "Left"}:{" "}
              <b>
                {Math.max(
                  0,
                  (Number(leaveAnnual) || 0) - (Number(leaveUsed) || 0)
                )}
              </b>
            </p>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setEditLeave(null)}
                className="flex-1 py-3 border rounded-xl"
              >
                {isAm ? "ሰርዝ" : "Cancel"}
              </button>
              <button
                type="submit"
                disabled={savingLeave}
                className="flex-1 py-3 bg-semay-900 text-white rounded-xl disabled:opacity-60"
              >
                {savingLeave ? "..." : isAm ? "አስቀምጥ" : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Invite */}
      {showInvite && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end md:items-center justify-center">
          <div className="bg-white w-full md:max-w-md md:rounded-2xl rounded-t-3xl p-6 space-y-4">
            <h2 className="text-lg font-semibold">
              {isAm ? "የአፕ ሊንክ" : "App invite link"}
            </h2>
            {!inviteLink ? (
              <>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                  className="w-full px-3 py-2.5 border rounded-xl text-sm"
                >
                  <option value="STAFF">{isAm ? "ሰራተኛ" : "Staff"}</option>
                  <option value="MANAGER">{isAm ? "ማኔጀር" : "Manager"}</option>
                </select>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowInvite(false)}
                    className="flex-1 py-3 border rounded-xl"
                  >
                    {isAm ? "ሰርዝ" : "Cancel"}
                  </button>
                  <button
                    type="button"
                    onClick={handleCreateInvite}
                    disabled={creating}
                    className="flex-1 py-3 bg-semay-900 text-white rounded-xl"
                  >
                    {creating ? "..." : isAm ? "ሊንክ" : "Create link"}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-2">
                  <input
                    readOnly
                    value={inviteLink}
                    className="flex-1 px-3 py-2 border rounded-xl text-sm bg-semay-50"
                  />
                  <button
                    type="button"
                    onClick={copyLink}
                    className="px-4 bg-semay-900 text-white rounded-xl"
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setShowInvite(false)}
                  className="w-full py-3 border rounded-xl"
                >
                  {isAm ? "ዝጋ" : "Close"}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* History modal */}
      {(detail || detailLoading) && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
          <div className="bg-white w-full md:max-w-lg md:rounded-2xl rounded-t-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-semay-100 px-4 py-3 flex items-center justify-between">
              <div>
                <div className="font-semibold text-semay-900">
                  {detailLoading
                    ? isAm
                      ? "በመጫን ላይ..."
                      : "Loading..."
                    : detail?.worker?.name || "—"}
                </div>
                {detail && (
                  <div className="text-xs text-semay-500 mt-0.5">
                    {detail.from} → {detail.to}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  setDetail(null)
                  setDetailLoading(false)
                }}
                className="text-sm px-3 py-1.5 border border-semay-200 rounded-lg"
              >
                {isAm ? "ዝጋ" : "Close"}
              </button>
            </div>

            {detail && (
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-5 gap-2 text-center text-xs">
                  <div className="bg-semay-50 rounded-xl p-2">
                    <div className="font-bold text-emerald-700">
                      {detail.totals?.present ?? 0}
                    </div>
                    <div className="text-semay-500">
                      {isAm ? "ተገኝቷል" : "Present"}
                    </div>
                  </div>
                  <div className="bg-semay-50 rounded-xl p-2">
                    <div className="font-bold text-amber-600">
                      {detail.totals?.late ?? 0}
                    </div>
                    <div className="text-semay-500">
                      {isAm ? "ዘግይቷል" : "Late"}
                    </div>
                  </div>
                  <div className="bg-semay-50 rounded-xl p-2">
                    <div className="font-bold text-red-600">
                      {detail.totals?.absent ?? 0}
                    </div>
                    <div className="text-semay-500">
                      {isAm ? "አልመጣም" : "Absent"}
                    </div>
                  </div>
                  <div className="bg-semay-50 rounded-xl p-2">
                    <div className="font-bold text-orange-600">
                      {detail.totals?.earlyLeave ?? 0}
                    </div>
                    <div className="text-semay-500">
                      {isAm ? "ቀድሞ" : "Early"}
                    </div>
                  </div>
                  <div className="bg-semay-50 rounded-xl p-2">
                    <div className="font-bold">
                      {detail.totals?.workDays ?? 0}
                    </div>
                    <div className="text-semay-500">
                      {isAm ? "ስራ" : "Work"}
                    </div>
                  </div>
                </div>

                <div className="border border-semay-200 rounded-2xl overflow-hidden">
                  <div className="px-3 py-2 bg-semay-50 text-xs font-medium text-semay-600">
                    {isAm ? "በቀን ዝርዝር + ምክንያት" : "Day by day + reason"}
                  </div>
                  {!detail.records?.length ? (
                    <p className="p-4 text-sm text-semay-500 text-center">
                      {isAm ? "ምንም መዝገብ የለም" : "No records in this period"}
                    </p>
                  ) : (
                    detail.records.map((r: any) => (
                      <div
                        key={r.id}
                        className="px-3 py-2.5 border-t border-semay-50 flex justify-between gap-3 text-sm"
                      >
                        <div>
                          <div className="font-medium tabular-nums">
                            {r.date}
                          </div>
                          {r.reason && (
                            <div className="text-xs text-semay-600 mt-0.5">
                              {isAm ? "ምክንያት" : "Reason"}:{" "}
                              {reasonLabel(r.reason)}
                            </div>
                          )}
                          {r.note && (
                            <div className="text-xs text-semay-400 mt-0.5">
                              {r.note}
                            </div>
                          )}
                        </div>
                        <div
                          className={`text-xs font-semibold shrink-0 ${
                            r.status === "PRESENT"
                              ? "text-emerald-700"
                              : r.status === "LATE"
                                ? "text-amber-600"
                                : r.status === "ABSENT"
                                  ? "text-red-600"
                                  : "text-orange-600"
                          }`}
                        >
                          {r.status === "PRESENT"
                            ? isAm
                              ? "ተገኝቷል"
                              : "Present"
                            : r.status === "LATE"
                              ? isAm
                                ? "ዘግይቷል"
                                : "Late"
                              : r.status === "ABSENT"
                                ? isAm
                                  ? "አልመጣም"
                                  : "Absent"
                                : isAm
                                  ? "ቀድሞ ወጣ"
                                  : "Early"}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </GarmentLayout>
  )
}
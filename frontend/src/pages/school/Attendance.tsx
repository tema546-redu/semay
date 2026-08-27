import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Check, X } from "lucide-react"
import { schoolApi } from "../../lib/api"
import { cn } from "../../lib/utils"

export default function Attendance() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [students, setStudents] = useState<any[]>([])
  const [statusMap, setStatusMap] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([schoolApi.students(), schoolApi.attendance()])
      .then(([studs, records]) => {
        setStudents(studs)
        const map: Record<string, string> = {}
        records.forEach((r: any) => { map[r.studentId] = r.status })
        setStatusMap(map)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const mark = async (studentId: string, status: string) => {
    setSaving(studentId)
    try {
      await schoolApi.markAttendance({ studentId, status })
      setStatusMap((p) => ({ ...p, [studentId]: status }))
    } catch (e) {
      console.error(e)
    } finally {
      setSaving(null)
    }
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 px-6 h-14 flex items-center gap-4 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100"><ArrowLeft className="w-5 h-5 text-semay-600" /></Link>
        <h1 className="font-semibold text-semay-900">{isAm ? "አቴንዳንስ" : "Attendance"}</h1>
      </header>
      <div className="max-w-2xl mx-auto p-6 space-y-4">
        <p className="text-sm text-semay-500">{isAm ? "የዛሬ አቴንዳንስ" : "Today's attendance"}</p>
        {loading ? <div className="text-semay-400 text-sm">Loading...</div> : students.length === 0 ? (
          <div className="text-semay-500 text-sm">{isAm ? "መጀመሪያ ተማሪዎችን ያክሉ" : "Add students first"}</div>
        ) : (
          <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden divide-y divide-semay-100">
            {students.map((s) => {
              const st = statusMap[s.id] || ""
              return (
                <div key={s.id} className="px-5 py-4 flex items-center justify-between gap-3">
                  <div className="font-medium text-semay-900 text-sm min-w-0 truncate">
                    {isAm && s.fullNameAm ? s.fullNameAm : s.fullName}
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button
                      disabled={saving === s.id}
                      onClick={() => mark(s.id, "present")}
                      className={cn("px-2.5 py-1.5 rounded-lg text-xs font-medium", st === "present" ? "bg-success/15 text-success" : "bg-semay-100 text-semay-500")}
                    >
                      <Check className="w-3.5 h-3.5 inline" /> {isAm ? "አለ" : "Present"}
                    </button>
                    <button
                      disabled={saving === s.id}
                      onClick={() => mark(s.id, "absent")}
                      className={cn("px-2.5 py-1.5 rounded-lg text-xs font-medium", st === "absent" ? "bg-danger/15 text-danger" : "bg-semay-100 text-semay-500")}
                    >
                      <X className="w-3.5 h-3.5 inline" /> {isAm ? "የለም" : "Absent"}
                    </button>
                    <button
                      disabled={saving === s.id}
                      onClick={() => mark(s.id, "late")}
                      className={cn("px-2.5 py-1.5 rounded-lg text-xs font-medium", st === "late" ? "bg-warning/15 text-warning" : "bg-semay-100 text-semay-500")}
                    >
                      {isAm ? "ዘግይቷል" : "Late"}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

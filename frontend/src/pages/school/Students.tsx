import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, UserPlus, X } from "lucide-react"
import { schoolApi } from "../../lib/api"

export default function Students() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [students, setStudents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ fullName: "", fullNameAm: "", gender: "" })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  const load = () => schoolApi.students().then(setStudents).catch(console.error).finally(() => setLoading(false))
  useEffect(() => { load() }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.fullName.trim()) return
    setSaving(true)
    setError("")
    try {
      await schoolApi.createStudent(form)
      setForm({ fullName: "", fullNameAm: "", gender: "" })
      setShowForm(false)
      load()
    } catch (err: any) {
      setError(err.message || "Failed")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 px-6 h-14 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100"><ArrowLeft className="w-5 h-5 text-semay-600" /></Link>
          <h1 className="font-semibold text-semay-900">{isAm ? "ተማሪዎች" : "Students"}</h1>
        </div>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full hover:bg-semay-800">
          <UserPlus className="w-4 h-4" /> {isAm ? "ተማሪ ጨምር" : "Add Student"}
        </button>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {loading ? <div className="text-semay-400 text-sm">Loading...</div> : (
          <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-semay-50 border-b border-semay-100">
                <tr>
                  <th className="text-left px-5 py-3 font-medium text-semay-500">{isAm ? "ስም" : "Name"}</th>
                  <th className="text-left px-5 py-3 font-medium text-semay-500">{isAm ? "ክፍል" : "Grade"}</th>
                  <th className="text-left px-5 py-3 font-medium text-semay-500">{isAm ? "ጾታ" : "Gender"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-semay-100">
                {students.length === 0 ? (
                  <tr><td colSpan={3} className="px-5 py-8 text-center text-semay-400">{isAm ? "ተማሪ የለም" : "No students yet"}</td></tr>
                ) : students.map((s) => (
                  <tr key={s.id} className="hover:bg-semay-50/50">
                    <td className="px-5 py-3.5 font-medium text-semay-900">{isAm && s.fullNameAm ? s.fullNameAm : s.fullName}</td>
                    <td className="px-5 py-3.5 text-semay-600">{s.grade?.name || "—"}</td>
                    <td className="px-5 py-3.5 text-semay-600">{s.gender || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-semay-900">{isAm ? "አዲስ ተማሪ" : "Add Student"}</h2>
              <button onClick={() => setShowForm(false)} className="p-1 rounded-lg hover:bg-semay-100"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "ሙሉ ስም" : "Full Name"}</label>
                <input required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "ስም በአማርኛ" : "Name in Amharic"}</label>
                <input value={form.fullNameAm} onChange={(e) => setForm({ ...form, fullNameAm: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "ጾታ" : "Gender"}</label>
                <select value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30">
                  <option value="">—</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>
              {error && <div className="text-sm text-danger">{error}</div>}
              <button type="submit" disabled={saving} className="w-full bg-semay-900 text-white py-3 rounded-xl font-medium hover:bg-semay-800 disabled:opacity-60">
                {saving ? "..." : (isAm ? "አስቀምጥ" : "Save Student")}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

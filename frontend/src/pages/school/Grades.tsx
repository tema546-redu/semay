import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Plus, X } from "lucide-react"
import { schoolApi } from "../../lib/api"

export default function Grades() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [grades, setGrades] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: "", nameAm: "", level: "" })
  const [saving, setSaving] = useState(false)

  const load = () => schoolApi.grades().then(setGrades).catch(console.error).finally(() => setLoading(false))
  useEffect(() => { load() }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await schoolApi.createGrade({
        name: form.name,
        nameAm: form.nameAm || undefined,
        level: form.level ? Number(form.level) : undefined,
      })
      setForm({ name: "", nameAm: "", level: "" })
      setShowForm(false)
      load()
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 px-6 h-14 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100"><ArrowLeft className="w-5 h-5 text-semay-600" /></Link>
          <h1 className="font-semibold text-semay-900">{isAm ? "ክፍሎች" : "Grades"}</h1>
        </div>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full hover:bg-semay-800">
          <Plus className="w-4 h-4" /> {isAm ? "ክፍል ጨምር" : "Add Grade"}
        </button>
      </header>
      <div className="max-w-2xl mx-auto p-6">
        {loading ? <div className="text-semay-400 text-sm">Loading...</div> : (
          <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden divide-y divide-semay-100">
            {grades.length === 0 ? (
              <div className="px-5 py-8 text-center text-semay-400 text-sm">{isAm ? "ክፍል የለም" : "No grades yet"}</div>
            ) : grades.map((g) => (
              <div key={g.id} className="px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="font-medium text-semay-900 text-sm">{isAm && g.nameAm ? g.nameAm : g.name}</div>
                  <div className="text-xs text-semay-400">{g._count?.students ?? 0} {isAm ? "ተማሪዎች" : "students"}</div>
                </div>
                {g.level != null && <span className="text-xs text-semay-500">Level {g.level}</span>}
              </div>
            ))}
          </div>
        )}
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-semay-900">{isAm ? "አዲስ ክፍል" : "Add Grade"}</h2>
              <button onClick={() => setShowForm(false)} className="p-1 rounded-lg hover:bg-semay-100"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "ስም" : "Name"}</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Grade 8" className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "ስም በአማርኛ" : "Name (Amharic)"}</label>
                <input value={form.nameAm} onChange={(e) => setForm({ ...form, nameAm: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">Level (optional)</label>
                <input type="number" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <button type="submit" disabled={saving} className="w-full bg-semay-900 text-white py-3 rounded-xl font-medium hover:bg-semay-800 disabled:opacity-60">
                {saving ? "..." : (isAm ? "አስቀምጥ" : "Save")}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

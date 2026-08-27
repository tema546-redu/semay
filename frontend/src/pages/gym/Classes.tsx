import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Plus, X } from "lucide-react"
import { gymClassApi } from "../../lib/api"

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const DAYS_AM = ["እሁድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "አርብ", "ቅዳሜ"]

export default function GymClasses() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [classes, setClasses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: "", nameAm: "", coach: "", dayOfWeek: "1", startTime: "07:00", endTime: "08:00", capacity: "20" })
  const [saving, setSaving] = useState(false)

  const load = () => gymClassApi.list().then(setClasses).catch(console.error).finally(() => setLoading(false))
  useEffect(() => { load() }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await gymClassApi.create({
        name: form.name,
        nameAm: form.nameAm || undefined,
        coach: form.coach || undefined,
        dayOfWeek: Number(form.dayOfWeek),
        startTime: form.startTime,
        endTime: form.endTime,
        capacity: Number(form.capacity) || 20,
      })
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
          <h1 className="font-semibold text-semay-900">{isAm ? "ክፍሎች / መርሃ ግብር" : "Classes"}</h1>
        </div>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full hover:bg-semay-800">
          <Plus className="w-4 h-4" /> {isAm ? "ክፍል ጨምር" : "Add Class"}
        </button>
      </header>
      <div className="max-w-2xl mx-auto p-6">
        {loading ? <div className="text-semay-400 text-sm">Loading...</div> : (
          <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden divide-y divide-semay-100">
            {classes.length === 0 ? (
              <div className="px-5 py-8 text-center text-semay-400 text-sm">{isAm ? "ክፍል የለም" : "No classes yet"}</div>
            ) : classes.map((c) => (
              <div key={c.id} className="px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="font-medium text-semay-900 text-sm">{isAm && c.nameAm ? c.nameAm : c.name}</div>
                  <div className="text-xs text-semay-400">
                    {(isAm ? DAYS_AM : DAYS)[c.dayOfWeek]} · {c.startTime}–{c.endTime}
                    {c.coach ? ` · ${c.coach}` : ""}
                  </div>
                </div>
                <span className="text-xs text-semay-500">{c.capacity} spots</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-semay-900">{isAm ? "አዲስ ክፍል" : "Add Class"}</h2>
              <button onClick={() => setShowForm(false)} className="p-1 rounded-lg hover:bg-semay-100"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={submit} className="space-y-3">
              <input required placeholder={isAm ? "ስም" : "Class name"} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm" />
              <input placeholder={isAm ? "ስም በአማርኛ" : "Name Amharic"} value={form.nameAm} onChange={(e) => setForm({ ...form, nameAm: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm" />
              <input placeholder="Coach" value={form.coach} onChange={(e) => setForm({ ...form, coach: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm" />
              <select value={form.dayOfWeek} onChange={(e) => setForm({ ...form, dayOfWeek: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm">
                {(isAm ? DAYS_AM : DAYS).map((d, i) => <option key={i} value={i}>{d}</option>)}
              </select>
              <div className="flex gap-2">
                <input type="time" value={form.startTime} onChange={(e) => setForm({ ...form, startTime: e.target.value })} className="flex-1 px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm" />
                <input type="time" value={form.endTime} onChange={(e) => setForm({ ...form, endTime: e.target.value })} className="flex-1 px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm" />
              </div>
              <input type="number" placeholder="Capacity" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm" />
              <button type="submit" disabled={saving} className="w-full bg-semay-900 text-white py-3 rounded-xl font-medium hover:bg-semay-800 disabled:opacity-60">
                {saving ? "..." : (isAm ? "አስቀምጥ" : "Save Class")}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Plus, X } from "lucide-react"
import { gymApi } from "../../lib/api"

export default function GymPlans() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [plans, setPlans] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({ name: "", nameAm: "", type: "monthly", price: "", durationDays: "30" })
  const [saving, setSaving] = useState(false)

  const load = () => gymApi.plans().then(setPlans).catch(console.error).finally(() => setLoading(false))
  useEffect(() => { load() }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await gymApi.createPlan({
        name: form.name,
        nameAm: form.nameAm || undefined,
        type: form.type,
        price: Number(form.price),
        durationDays: form.type === "drop_in" ? undefined : Number(form.durationDays) || 30,
      })
      setShow(false)
      load()
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 px-6 h-14 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100"><ArrowLeft className="w-5 h-5 text-semay-600" /></Link>
          <h1 className="font-semibold text-semay-900">{isAm ? "የአባልነት እቅዶች" : "Membership Plans"}</h1>
        </div>
        <button onClick={() => setShow(true)} className="flex items-center gap-2 text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full">
          <Plus className="w-4 h-4" /> {isAm ? "አዲስ" : "Add"}
        </button>
      </header>
      <div className="max-w-2xl mx-auto p-6">
        {loading ? <div className="text-semay-400 text-sm">Loading...</div> : (
          <div className="space-y-3">
            {plans.length === 0 ? <p className="text-semay-400 text-sm">No plans yet</p> : plans.map((p) => (
              <div key={p.id} className="bg-white border border-semay-200 rounded-2xl px-5 py-4 flex justify-between items-center">
                <div>
                  <div className="font-medium text-semay-900">{isAm && p.nameAm ? p.nameAm : p.name}</div>
                  <div className="text-xs text-semay-400 capitalize">{p.type}{p.durationDays ? ` · ${p.durationDays} days` : ""}</div>
                </div>
                <div className="font-semibold text-semay-900">{Number(p.price).toLocaleString()} ETB</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {show && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold">{isAm ? "አዲስ እቅድ" : "New plan"}</h2>
              <button onClick={() => setShow(false)}><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={submit} className="space-y-3">
              <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm" />
              <input placeholder="Name Amharic" value={form.nameAm} onChange={(e) => setForm({ ...form, nameAm: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm" />
              <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm">
                <option value="monthly">Monthly</option>
                <option value="annual">Annual</option>
                <option value="class_pack">Class pack</option>
                <option value="drop_in">Drop-in</option>
              </select>
              <input required type="number" placeholder="Price ETB" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm" />
              {form.type !== "drop_in" && (
                <input type="number" placeholder="Duration days" value={form.durationDays} onChange={(e) => setForm({ ...form, durationDays: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm" />
              )}
              <button type="submit" disabled={saving} className="w-full bg-semay-900 text-white py-3 rounded-xl font-medium">Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

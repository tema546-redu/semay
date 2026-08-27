import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, UserPlus, X } from "lucide-react"
import { gymApi } from "../../lib/api"
import { cn } from "../../lib/utils"

export default function GymMembers() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [members, setMembers] = useState<any[]>([])
  const [plans, setPlans] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ fullName: "", fullNameAm: "", phone: "", planId: "" })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  const load = () => {
    Promise.all([gymApi.members(), gymApi.plans()])
      .then(([m, p]) => { setMembers(m); setPlans(p) })
      .catch(console.error)
      .finally(() => setLoading(false))
  }
  useEffect(() => { load() }, [])

  const setStatus = async (id: string, status: string) => {
    try {
      await gymApi.setMemberStatus(id, status)
      setMembers((p) => p.map((m) => (m.id === id ? { ...m, status } : m)))
    } catch (e) { console.error(e) }
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.fullName.trim()) return
    setSaving(true)
    setError("")
    try {
      await gymApi.createMember({
        fullName: form.fullName,
        fullNameAm: form.fullNameAm || undefined,
        phone: form.phone || undefined,
        planId: form.planId || undefined,
      })
      setForm({ fullName: "", fullNameAm: "", phone: "", planId: "" })
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
          <h1 className="font-semibold text-semay-900">{isAm ? "አባላት" : "Members"}</h1>
        </div>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full hover:bg-semay-800">
          <UserPlus className="w-4 h-4" /> {isAm ? "አባል ጨምር" : "Add Member"}
        </button>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {loading ? <div className="text-semay-400 text-sm">Loading...</div> : (
          <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-semay-50 border-b border-semay-100">
                <tr>
                  <th className="text-left px-5 py-3 font-medium text-semay-500">{isAm ? "ስም" : "Name"}</th>
                  <th className="text-left px-5 py-3 font-medium text-semay-500">{isAm ? "እቅድ" : "Plan"}</th>
                  <th className="text-left px-5 py-3 font-medium text-semay-500">{isAm ? "ሁኔታ" : "Status"}</th>
                  <th className="text-right px-5 py-3 font-medium text-semay-500">{isAm ? "እርምጃ" : "Action"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-semay-100">
                {members.length === 0 ? (
                  <tr><td colSpan={4} className="px-5 py-8 text-center text-semay-400">{isAm ? "አባል የለም" : "No members yet"}</td></tr>
                ) : members.map((m) => {
                  const plan = m.memberships?.[0]?.plan
                  return (
                    <tr key={m.id} className="hover:bg-semay-50/50">
                      <td className="px-5 py-3.5">
                        <div className="font-medium text-semay-900">{isAm && m.fullNameAm ? m.fullNameAm : m.fullName}</div>
                        <div className="text-xs text-semay-400">{m.phone || ""}</div>
                      </td>
                      <td className="px-5 py-3.5 text-semay-600">{plan ? (isAm && plan.nameAm ? plan.nameAm : plan.name) : "—"}</td>
                      <td className="px-5 py-3.5">
                        <span className={cn(
                          "text-xs font-medium px-2 py-0.5 rounded-full capitalize",
                          m.status === "active" ? "bg-success/15 text-success" :
                          m.status === "frozen" ? "bg-warning/15 text-warning" : "bg-semay-100 text-semay-500"
                        )}>
                          {m.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        {m.status === "active" ? (
                          <button onClick={() => setStatus(m.id, "frozen")} className="text-xs font-medium text-warning hover:underline">
                            {isAm ? "አቁም" : "Freeze"}
                          </button>
                        ) : m.status === "frozen" ? (
                          <button onClick={() => setStatus(m.id, "active")} className="text-xs font-medium text-success hover:underline">
                            {isAm ? "አግብር" : "Unfreeze"}
                          </button>
                        ) : null}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-semay-900">{isAm ? "አዲስ አባል" : "Add Member"}</h2>
              <button onClick={() => setShowForm(false)} className="p-1 rounded-lg hover:bg-semay-100"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "ሙሉ ስም" : "Full Name"}</label>
                <input required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "ስም በአማርኛ" : "Name (Amharic)"}</label>
                <input value={form.fullNameAm} onChange={(e) => setForm({ ...form, fullNameAm: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "ስልክ" : "Phone"}</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "እቅድ" : "Plan"}</label>
                <select value={form.planId} onChange={(e) => setForm({ ...form, planId: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm">
                  <option value="">— Optional —</option>
                  {plans.map((p) => (
                    <option key={p.id} value={p.id}>{isAm && p.nameAm ? p.nameAm : p.name} ({p.price} ETB)</option>
                  ))}
                </select>
              </div>
              {error && <div className="text-sm text-danger">{error}</div>}
              <button type="submit" disabled={saving} className="w-full bg-semay-900 text-white py-3 rounded-xl font-medium hover:bg-semay-800 disabled:opacity-60">
                {saving ? "..." : (isAm ? "አስቀምጥ" : "Save Member")}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

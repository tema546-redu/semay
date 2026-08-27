import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Plus, X } from "lucide-react"
import { hotelApi } from "../../lib/api"
import { cn } from "../../lib/utils"

export default function HotelRooms() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [rooms, setRooms] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ number: "", type: "single", price: "", floor: "" })
  const [saving, setSaving] = useState(false)

  const load = () => hotelApi.rooms().then(setRooms).catch(console.error).finally(() => setLoading(false))
  useEffect(() => { load() }, [])

  const setStatus = async (id: string, status: string) => {
    try {
      await hotelApi.updateStatus(id, status)
      setRooms((p) => p.map((r) => (r.id === id ? { ...r, status } : r)))
    } catch (e) { console.error(e) }
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await hotelApi.createRoom({
        number: form.number,
        type: form.type,
        price: Number(form.price),
        floor: form.floor ? Number(form.floor) : undefined,
      })
      setForm({ number: "", type: "single", price: "", floor: "" })
      setShowForm(false)
      load()
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  const statusColor = (s: string) => {
    if (s === "available") return "bg-success/15 text-success"
    if (s === "occupied") return "bg-accent/15 text-accent"
    return "bg-warning/15 text-warning"
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 px-6 h-14 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100"><ArrowLeft className="w-5 h-5 text-semay-600" /></Link>
          <h1 className="font-semibold text-semay-900">{isAm ? "ክፍሎች" : "Rooms"}</h1>
        </div>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full hover:bg-semay-800">
          <Plus className="w-4 h-4" /> {isAm ? "ክፍል ጨምር" : "Add Room"}
        </button>
      </header>

      <div className="max-w-5xl mx-auto p-6">
        {loading ? <div className="text-semay-400 text-sm">Loading...</div> : rooms.length === 0 ? (
          <div className="text-center py-16 text-semay-400">{isAm ? "ክፍል የለም — አክል" : "No rooms yet — add one"}</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rooms.map((r) => (
              <div key={r.id} className="bg-white border border-semay-200 rounded-2xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-lg font-semibold text-semay-900">#{r.number}</div>
                    <div className="text-xs text-semay-400 capitalize">{r.type} {r.floor != null ? `· Floor ${r.floor}` : ""}</div>
                  </div>
                  <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full capitalize", statusColor(r.status))}>
                    {r.status}
                  </span>
                </div>
                <div className="text-sm font-medium text-semay-700 mb-4">{Number(r.price)} ETB / night</div>
                <div className="flex gap-2">
                  {["available", "occupied", "cleaning"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStatus(r.id, s)}
                      className={cn(
                        "flex-1 text-xs font-medium py-2 rounded-lg capitalize transition",
                        r.status === s ? "bg-semay-900 text-white" : "bg-semay-100 text-semay-600 hover:bg-semay-200"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-semay-900">{isAm ? "አዲስ ክፍል" : "Add Room"}</h2>
              <button onClick={() => setShowForm(false)} className="p-1 rounded-lg hover:bg-semay-100"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "ቁጥር" : "Room Number"}</label>
                <input required value={form.number} onChange={(e) => setForm({ ...form, number: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "ዓይነት" : "Type"}</label>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm">
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="suite">Suite</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "ዋጋ (ETB)" : "Price (ETB)"}</label>
                <input required type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <div>
                <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "ፎቅ" : "Floor"}</label>
                <input type="number" value={form.floor} onChange={(e) => setForm({ ...form, floor: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <button type="submit" disabled={saving} className="w-full bg-semay-900 text-white py-3 rounded-xl font-medium hover:bg-semay-800 disabled:opacity-60">
                {saving ? "..." : (isAm ? "አስቀምጥ" : "Save Room")}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

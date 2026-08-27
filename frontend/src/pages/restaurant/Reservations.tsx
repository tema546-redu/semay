import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Plus, X } from "lucide-react"
import { reservationsApi } from "../../lib/api"
import { cn } from "../../lib/utils"

const STATUSES = ["CONFIRMED", "SEATED", "COMPLETED", "CANCELLED", "NO_SHOW"]

export default function Reservations() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [list, setList] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [saving, setSaving] = useState(false)
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [form, setForm] = useState({
    guestName: "",
    phone: "",
    partySize: "2",
    time: "19:00",
    tableNumber: "",
    notes: "",
  })

  const load = () => {
    setLoading(true)
    reservationsApi
      .list(date)
      .then(setList)
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [date])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const reservedAt = new Date(`${date}T${form.time}:00`)
      await reservationsApi.create({
        guestName: form.guestName,
        phone: form.phone || undefined,
        partySize: Number(form.partySize) || 2,
        reservedAt: reservedAt.toISOString(),
        tableNumber: form.tableNumber || undefined,
        notes: form.notes || undefined,
      })
      setShow(false)
      setForm({ guestName: "", phone: "", partySize: "2", time: "19:00", tableNumber: "", notes: "" })
      load()
    } catch (err) {
      console.error(err)
      alert("Failed to create reservation")
    } finally {
      setSaving(false)
    }
  }

  const setStatus = async (id: string, status: string) => {
    try {
      await reservationsApi.updateStatus(id, status)
      load()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 px-6 h-14 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
            <ArrowLeft className="w-5 h-5 text-semay-600" />
          </Link>
          <h1 className="font-semibold text-semay-900">
            {isAm ? "ሪዘርቬሽን" : "Reservations"}
          </h1>
        </div>
        <button
          onClick={() => setShow(true)}
          className="flex items-center gap-2 text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full"
        >
          <Plus className="w-4 h-4" />
          {isAm ? "አዲስ" : "New"}
        </button>
      </header>

      <div className="max-w-2xl mx-auto p-6 space-y-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="px-3 py-2 rounded-xl border border-semay-200 text-sm"
        />

        {loading ? (
          <p className="text-sm text-semay-400">Loading...</p>
        ) : list.length === 0 ? (
          <div className="bg-white border border-dashed border-semay-200 rounded-2xl p-10 text-center text-semay-500 text-sm">
            {isAm ? "ለዚህ ቀን ምንም ሪዘርቬሽን የለም" : "No reservations for this date"}
          </div>
        ) : (
          <div className="space-y-3">
            {list.map((r) => (
              <div key={r.id} className="bg-white border border-semay-200 rounded-2xl p-4">
                <div className="flex justify-between gap-2">
                  <div>
                    <div className="font-medium text-semay-900">{r.guestName}</div>
                    <div className="text-xs text-semay-500 mt-0.5">
                      {new Date(r.reservedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      {" · "}
                      {r.partySize} {isAm ? "ሰዎች" : "guests"}
                      {r.tableNumber ? ` · Table ${r.tableNumber}` : ""}
                      {r.phone ? ` · ${r.phone}` : ""}
                    </div>
                    {r.notes && <p className="text-xs text-semay-400 mt-1">{r.notes}</p>}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium h-fit px-2 py-1 rounded-full",
                      r.status === "CONFIRMED" && "bg-blue-50 text-blue-700",
                      r.status === "SEATED" && "bg-green-50 text-green-700",
                      r.status === "COMPLETED" && "bg-semay-100 text-semay-600",
                      r.status === "CANCELLED" && "bg-red-50 text-red-600",
                      r.status === "NO_SHOW" && "bg-amber-50 text-amber-700"
                    )}
                  >
                    {r.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {STATUSES.filter((s) => s !== r.status).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStatus(r.id, s)}
                      className="text-xs px-2.5 py-1 rounded-full border border-semay-200 hover:bg-semay-50"
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

      {show && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold">{isAm ? "አዲስ ሪዘርቬሽን" : "New reservation"}</h2>
              <button type="button" onClick={() => setShow(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={submit} className="space-y-3">
              <input
                required
                placeholder="Guest name"
                value={form.guestName}
                onChange={(e) => setForm({ ...form, guestName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
              />
              <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  min={1}
                  placeholder="Party size"
                  value={form.partySize}
                  onChange={(e) => setForm({ ...form, partySize: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
                />
                <input
                  type="time"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
                />
              </div>
              <input
                placeholder="Table number (optional)"
                value={form.tableNumber}
                onChange={(e) => setForm({ ...form, tableNumber: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
              />
              <input
                placeholder="Notes (optional)"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
              />
              <button
                type="submit"
                disabled={saving}
                className="w-full bg-semay-900 text-white py-3 rounded-xl font-medium"
              >
                {saving ? "..." : isAm ? "አስቀምጥ" : "Save reservation"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
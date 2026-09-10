import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus } from "lucide-react"
import { salonApi } from "../../lib/api"

export default function Book() {
  const [appointments, setAppointments] = useState<any[]>([])
  const [services, setServices] = useState<any[]>([])
  const [stylists, setStylists] = useState<any[]>([])
  const [clientName, setClientName] = useState("")
  const [clientPhone, setClientPhone] = useState("")
  const [serviceId, setServiceId] = useState("")
  const [stylistId, setStylistId] = useState("")
  const [time, setTime] = useState("")

  const load = () => salonApi.appointments().then(setAppointments).catch(() => setAppointments([]))

  useEffect(() => {
    load()
    salonApi.services().then(setServices).catch(() => setServices([]))
    salonApi.stylists().then(setStylists).catch(() => setStylists([]))
  }, [])

  const add = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!clientName.trim() || !serviceId || !time) return
    const today = new Date()
    const [hh, mm] = time.split(":")
    today.setHours(parseInt(hh, 10), parseInt(mm, 10), 0, 0)
    await salonApi.addAppointment({
      clientName: clientName.trim(),
      clientPhone: clientPhone.trim() || undefined,
      serviceId,
      stylistId: stylistId || undefined,
      startsAt: today.toISOString(),
    })
    setClientName(""); setClientPhone(""); setTime("")
    load()
  }

  const setStatus = async (id: string, status: string) => {
    await salonApi.setAppointmentStatus(id, status)
    load()
  }

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3">
        <Link to="/salon" className="text-stone-500"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="font-semibold text-sm">Book appointment</h1>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-4 pb-10">
        <form onSubmit={add} className="bg-white border rounded-xl p-3 space-y-2">
          <input placeholder="Client name" value={clientName} onChange={(e) => setClientName(e.target.value)} className="w-full px-3 py-2 rounded-xl border text-sm" />
          <input placeholder="Phone (optional)" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} className="w-full px-3 py-2 rounded-xl border text-sm" />
          <select value={serviceId} onChange={(e) => setServiceId(e.target.value)} className="w-full px-3 py-2 rounded-xl border text-sm">
            <option value="">Choose service</option>
            {services.map((s) => <option key={s.id} value={s.id}>{s.name} ({s.durationMin}m · {Number(s.price)} ETB)</option>)}
          </select>
          <select value={stylistId} onChange={(e) => setStylistId(e.target.value)} className="w-full px-3 py-2 rounded-xl border text-sm">
            <option value="">Any stylist</option>
            {stylists.map((s) => <option key={s.id} value={s.id}>{s.fullName}</option>)}
          </select>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-3 py-2 rounded-xl border text-sm" />
          <button type="submit" className="w-full bg-stone-900 text-white py-2 rounded-xl text-sm flex items-center justify-center gap-1">
            <Plus className="w-4 h-4" /> Book
          </button>
        </form>

        <div className="space-y-2">
          {appointments.map((a) => (
            <div key={a.id} className="bg-white border rounded-xl p-3 text-sm space-y-2">
              <div className="flex justify-between">
                <div>
                  <div className="font-medium">{a.clientName}</div>
                  <div className="text-xs text-stone-500">{a.service?.name} · {a.stylist?.fullName ?? "Unassigned"} · {new Date(a.startsAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100">{a.status}</span>
              </div>
              <div className="flex gap-1 flex-wrap">
                {["CONFIRMED", "IN_PROGRESS", "DONE", "NO_SHOW", "CANCELLED"].map((st) => (
                  <button key={st} onClick={() => setStatus(a.id, st)} className="text-[10px] border px-2 py-1 rounded-lg">{st}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
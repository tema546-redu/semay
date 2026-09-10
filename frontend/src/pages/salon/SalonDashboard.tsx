import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Sparkles, CalendarCheck, Users2, Clock } from "lucide-react"
import { salonApi } from "../../lib/api"
import SalonLayout from "./SalonLayout"

function greeting() {
  const h = new Date().getHours()
  if (h < 12) return "Good morning"
  if (h < 17) return "Good afternoon"
  return "Good evening"
}

export default function SalonDashboard() {
  const [data, setData] = useState<any>(null)
  useEffect(() => { salonApi.dashboard().then(setData).catch(() => setData(null)) }, [])
  const appts = data?.todayAppointments ?? []

  return (
    <SalonLayout>
      <div className="max-w-3xl mx-auto px-5 py-6 md:py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[#8A7377]">{greeting()}</p>
            <h1 className="font-serif text-2xl">Today at a glance</h1>
          </div>
          <div className="hidden sm:flex gap-2">
            <Link to="/salon/book" className="px-4 py-2 rounded-full bg-[#B23A5B] text-white text-sm">Book</Link>
            <Link to="/salon/pos" className="px-4 py-2 rounded-full border border-[#EEDEE0] text-sm">Checkout</Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 sm:col-span-1 bg-[#B23A5B] text-white rounded-2xl p-5">
            <div className="flex items-center gap-2 text-white/80 text-xs"><Sparkles className="w-3.5 h-3.5" /> Today's revenue</div>
            <div className="font-serif text-3xl mt-1">{data?.todaySalesTotal ?? 0} <span className="text-base">ETB</span></div>
            <div className="text-white/70 text-xs mt-1">{data?.todaySalesCount ?? 0} sale{data?.todaySalesCount === 1 ? "" : "s"} completed</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-[#EEDEE0]">
            <div className="flex items-center gap-2 text-[#8A7377] text-xs"><CalendarCheck className="w-3.5 h-3.5" /> Appointments</div>
            <div className="font-serif text-3xl mt-1">{appts.length}</div>
            <div className="text-[#8A7377] text-xs mt-1">booked for today</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-[#EEDEE0]">
            <div className="flex items-center gap-2 text-[#8A7377] text-xs"><Users2 className="w-3.5 h-3.5" /> Team</div>
            <div className="font-serif text-3xl mt-1">{data?.stylistCount ?? 0}</div>
            <div className="text-[#8A7377] text-xs mt-1">
              {data?.stylistCount ? "stylists ready" : <Link to="/salon/stylists" className="underline">add your first stylist</Link>}
            </div>
          </div>
        </div>

        <Link to="/salon/services" className="block bg-white border border-[#EEDEE0] rounded-xl py-3 text-center text-sm">
          {data?.serviceCount ?? 0} service{data?.serviceCount === 1 ? "" : "s"} on your menu
        </Link>

        <div className="bg-white rounded-2xl border border-[#EEDEE0] overflow-hidden">
          <div className="px-5 py-4 border-b border-[#EEDEE0] font-serif text-lg">Today's schedule</div>
          {appts.length === 0 ? (
            <div className="px-5 py-10 text-center">
              <Clock className="w-6 h-6 text-[#D8C4C7] mx-auto mb-2" />
              <p className="text-sm text-[#8A7377]">Nothing booked yet today.</p>
              <Link to="/salon/book" className="inline-block mt-3 text-sm text-[#B23A5B] font-medium">Book the first appointment →</Link>
            </div>
          ) : (
            <div className="divide-y divide-[#F3E9EA]">
              {appts.map((a: any) => (
                <div key={a.id} className="px-5 py-3 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">{a.clientName}</div>
                    <div className="text-xs text-[#8A7377]">{a.service?.name} · {a.stylist?.fullName ?? "Unassigned"}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">{new Date(a.startsAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
                    <div className="text-[10px] text-[#B23A5B] font-medium">{a.status.replace("_", " ")}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SalonLayout>
  )
}
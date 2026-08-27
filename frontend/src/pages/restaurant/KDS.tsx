import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Check, Clock } from "lucide-react"
import { ordersApi } from "../../lib/api"
import { cn } from "../../lib/utils"

export default function KDS() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [orders, setOrders] = useState<any[]>([])
  const [now, setNow] = useState(Date.now())
  const [loading, setLoading] = useState(true)

  const load = () => {
    ordersApi.active()
      .then(setOrders)
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
    const poll = setInterval(load, 5000)
    const clock = setInterval(() => setNow(Date.now()), 1000)
    return () => { clearInterval(poll); clearInterval(clock) }
  }, [])

  const markReady = async (id: string) => {
    try {
      await ordersApi.updateStatus(id, "READY")
      load()
    } catch (e) { console.error(e) }
  }

  const bump = async (id: string) => {
    try {
      await ordersApi.updateStatus(id, "PAID")
      load()
    } catch (e) { console.error(e) }
  }

  return (
    <div className="min-h-svh bg-semay-900 text-white flex flex-col">
      <header className="h-14 border-b border-semay-700 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-800"><ArrowLeft className="w-5 h-5 text-semay-300" /></Link>
          <div>
            <div className="font-semibold">{isAm ? "የኩሽና ማሳያ" : "Kitchen Display"}</div>
            <div className="text-xs text-semay-400">Semay KDS</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm text-semay-300">
          <Clock className="w-4 h-4" />
          {new Date(now).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          <span className="bg-semay-700 px-2.5 py-1 rounded-full text-xs">{orders.length} active</span>
        </div>
      </header>
      <div className="flex-1 overflow-x-auto p-6">
        {loading ? <div className="h-full flex items-center justify-center text-semay-500">Loading...</div> :
        orders.length === 0 ? <div className="h-full flex items-center justify-center text-semay-500">{isAm ? "ምንም ትዕዛዝ የለም" : "No active orders"}</div> : (
          <div className="flex gap-5 min-w-max">
            {orders.map((o) => {
              const mins = Math.floor((now - new Date(o.createdAt).getTime()) / 60000)
              const late = mins >= 12
              const warn = mins >= 8
              return (
                <div key={o.id} className={cn("w-72 bg-semay-800 rounded-2xl border flex flex-col", late ? "border-danger/60" : warn ? "border-warning/50" : "border-semay-700")}>
                  <div className={cn("px-4 py-3 flex justify-between", late ? "bg-danger/20" : warn ? "bg-warning/15" : "")}>
                    <div>
                      <div className="text-2xl font-bold">T{o.tableNumber}</div>
                      <div className="text-xs text-semay-300">{o.staff?.name || "—"} · {mins}m</div>
                    </div>
                    <div className={cn("text-sm font-semibold", late ? "text-danger" : warn ? "text-warning" : "text-semay-300")}>{mins}m</div>
                  </div>
                  <div className="flex-1 p-4 space-y-3">
                    {o.items?.map((item: any) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-6 h-6 rounded-md bg-semay-700 flex items-center justify-center text-xs font-bold">{item.quantity}</div>
                        <div className="font-medium text-sm">{item.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-semay-700">
                    {o.status !== "READY" ? (
                      <button onClick={() => markReady(o.id)} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-success/20 text-success font-medium text-sm hover:bg-success/30">
                        <Check className="w-4 h-4" /> {isAm ? "ዝግጁ አድርግ" : "Mark Ready"}
                      </button>
                    ) : (
                      <button onClick={() => bump(o.id)} className="w-full py-2.5 rounded-xl bg-semay-700 text-semay-200 font-medium text-sm hover:bg-semay-600">Bump</button>
                    )}
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

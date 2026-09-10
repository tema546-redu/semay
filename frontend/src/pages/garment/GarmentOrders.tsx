import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import { ArrowLeft, Plus } from "lucide-react"
import GarmentBottomNav from "../../components/GarmentBottomNav"

export default function GarmentOrders() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [orders, setOrders] = useState<any[]>([])
  const [styles, setStyles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    styleId: "",
    customerName: "",
    plannedQty: "",
    dueDate: "",
  })

  const load = () => {
    Promise.all([garmentApi.orders(), garmentApi.styles()])
      .then(([ords, stys]) => {
        setOrders(ords)
        setStyles(stys)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const stageLabel = (s: string) => {
    const map: any = {
      PLANNED: isAm ? "ታቅዷል" : "Planned",
      CUTTING: isAm ? "መቁረጥ" : "Cutting",
      SEWING: isAm ? "መስፋት" : "Sewing",
      QUALITY: isAm ? "ጥራት" : "Quality",
      FINISHING: isAm ? "ማጠናቀቅ" : "Finishing",
      PACKING: isAm ? "ማሸግ" : "Packing",
      COMPLETED: isAm ? "ተጠናቋል" : "Completed",
    }
    return map[s] || s
  }

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await garmentApi.createOrder({
        styleId: form.styleId,
        customerName: form.customerName || undefined,
        plannedQty: Number(form.plannedQty),
        dueDate: form.dueDate || undefined,
      })
      setShowForm(false)
      setForm({ styleId: "", customerName: "", plannedQty: "", dueDate: "" })
      load()
    } catch (err) {
      console.error(err)
      alert(isAm ? "ስህተት ተከስቷል" : "Something went wrong")
    }
  }

  return (
    <div className="min-h-svh bg-semay-50 pb-24">
      <div className="bg-white border-b border-semay-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/garment"><ArrowLeft className="w-5 h-5" /></Link>
          <h1 className="font-semibold text-lg">{isAm ? "የምርት ትዕዛዞች" : "Production Orders"}</h1>
        </div>
        <button onClick={() => setShowForm(true)} className="p-2 bg-semay-900 text-white rounded-xl">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 space-y-3">
        {loading ? (
          <p className="text-center text-semay-500">{isAm ? "በመጫን ላይ..." : "Loading..."}</p>
        ) : orders.length === 0 ? (
          <p className="text-center text-semay-500 py-10">
            {isAm ? "ምንም ትዕዛዝ የለም" : "No orders yet"}
          </p>
        ) : (
          orders.map((o) => (
            <Link
              key={o.id}
              to={`/garment/orders/${o.id}`}
              className="block bg-white border border-semay-200 rounded-2xl p-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">{o.orderNumber}</div>
                  <div className="text-sm text-semay-600 mt-1">
                    {o.style?.name} · {o.plannedQty} pcs
                  </div>
                  {o.customerName && (
                    <div className="text-xs text-semay-500 mt-1">{o.customerName}</div>
                  )}
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-semay-100">
                  {stageLabel(o.stage)}
                </span>
              </div>
              <div className="mt-2 text-sm text-semay-500">
                {o.actualQty} / {o.plannedQty} {isAm ? "ተጠናቋል" : "done"}
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Create Order Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-6 space-y-4">
            <h2 className="text-lg font-semibold">{isAm ? "አዲስ ትዕዛዝ" : "New Production Order"}</h2>
            <form onSubmit={handleCreate} className="space-y-3">
              <select
                required
                value={form.styleId}
                onChange={(e) => setForm({ ...form, styleId: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              >
                <option value="">{isAm ? "ዓይነት ምረጥ" : "Select Style"}</option>
                {styles.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
              <input
                type="number"
                required
                placeholder={isAm ? "ብዛት" : "Quantity"}
                value={form.plannedQty}
                onChange={(e) => setForm({ ...form, plannedQty: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
              <input
                placeholder={isAm ? "የደንበኛ ስም (አማራጭ)" : "Customer name (optional)"}
                value={form.customerName}
                onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
              <input
                type="date"
                value={form.dueDate}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-3 border border-semay-200 rounded-xl">
                  {isAm ? "ሰርዝ" : "Cancel"}
                </button>
                <button type="submit" className="flex-1 py-3 bg-semay-900 text-white rounded-xl">
                  {isAm ? "ፍጠር" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <GarmentBottomNav />
    </div>
  )
}
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import GarmentLayout from "../../components/GarmentLayout"
import { storeApi } from "../../lib/api"
import { ArrowLeft, Plus } from "lucide-react"

export default function GarmentStoreItems() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({
    name: "",
    unit: "pcs",
    quantity: "0",
    unitCost: "",
    lowAt: "",
  })

  const load = () => {
    setLoading(true)
    storeApi
      .items()
      .then((r) => setItems(Array.isArray(r) ? r : []))
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const onCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await storeApi.createItem({
        name: form.name.trim(),
        unit: form.unit,
        quantity: Number(form.quantity) || 0,
        unitCost: form.unitCost ? Number(form.unitCost) : undefined,
        lowAt: form.lowAt ? Number(form.lowAt) : null,
      })
      setShow(false)
      setForm({ name: "", unit: "pcs", quantity: "0", unitCost: "", lowAt: "" })
      load()
    } catch (err: any) {
      alert(err?.message || "Failed")
    }
  }

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-3xl space-y-4 pb-24">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Link to="/garment/store">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold text-lg">
              {isAm ? "ዕቃዎች" : "Stock items"}
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setShow(true)}
            className="p-2 bg-semay-900 text-white rounded-xl"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {loading ? (
          <p className="text-sm text-semay-500">…</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-semay-500 text-center py-10">
            {isAm ? "ምንም ዕቃ የለም" : "No items yet"}
          </p>
        ) : (
          <ul className="space-y-2">
            {items.map((i) => (
              <li
                key={i.id}
                className="bg-white border border-semay-200 rounded-2xl p-4 flex justify-between gap-2"
              >
                <div>
                  <div className="font-medium">{i.name}</div>
                  <div className="text-xs text-semay-500 mt-0.5">
                    {i.quantity} {i.unit}
                    {i.lowAt != null ? ` · low at ${i.lowAt}` : ""}
                  </div>
                </div>
                <div className="text-sm tabular-nums text-semay-600">
                  {i.unitCost != null
                    ? `${Number(i.unitCost).toLocaleString()} ETB`
                    : ""}
                </div>
              </li>
            ))}
          </ul>
        )}

        {show && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-end md:items-center justify-center">
            <form
              onSubmit={onCreate}
              className="bg-white w-full md:max-w-md rounded-t-3xl md:rounded-2xl p-6 space-y-3"
            >
              <h2 className="font-semibold text-lg">
                {isAm ? "አዲስ ዕቃ" : "New item"}
              </h2>
              <input
                required
                placeholder={isAm ? "ስም" : "Name"}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
              <input
                placeholder="Unit (pcs, kg, m…)"
                value={form.unit}
                onChange={(e) => setForm({ ...form, unit: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
              <input
                type="number"
                min={0}
                placeholder={isAm ? "መጠን" : "Quantity"}
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
              <input
                type="number"
                min={0}
                placeholder={isAm ? "የአንድ ዋጋ (አማራጭ)" : "Unit cost (optional)"}
                value={form.unitCost}
                onChange={(e) => setForm({ ...form, unitCost: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
              <input
                type="number"
                min={0}
                placeholder={isAm ? "ዝቅተኛ ደረጃ" : "Low at"}
                value={form.lowAt}
                onChange={(e) => setForm({ ...form, lowAt: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShow(false)}
                  className="flex-1 py-3 border border-semay-200 rounded-xl"
                >
                  {isAm ? "ሰርዝ" : "Cancel"}
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-semay-900 text-white rounded-xl"
                >
                  {isAm ? "አስቀምጥ" : "Save"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </GarmentLayout>
  )
}
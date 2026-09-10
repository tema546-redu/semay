import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import { ArrowLeft, Plus } from "lucide-react"
import GarmentBottomNav from "../../components/GarmentBottomNav"

export default function GarmentInventory() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [materials, setMaterials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState("RAW_MATERIAL")
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    name: "",
    category: "RAW_MATERIAL",
    unit: "m",
    currentStock: "",
    minLevel: "",
  })

  const load = () => {
    garmentApi.materials()
      .then(setMaterials)
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const filtered = materials.filter((m) => m.category === tab)

  const getStatus = (m: any) => {
    const stock = Number(m.currentStock)
    const min = Number(m.minLevel || 0)
    if (stock <= 0) return { text: isAm ? "አልቋል" : "Out", color: "text-danger" }
    if (stock <= min) return { text: isAm ? "ዝቅተኛ" : "Low", color: "text-warning" }
    return { text: "OK", color: "text-success" }
  }

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await garmentApi.createMaterial({
        name: form.name,
        category: form.category,
        unit: form.unit,
        currentStock: Number(form.currentStock) || 0,
        minLevel: form.minLevel ? Number(form.minLevel) : null,
      })
      setShowForm(false)
      setForm({ name: "", category: "RAW_MATERIAL", unit: "m", currentStock: "", minLevel: "" })
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
          <h1 className="font-semibold text-lg">{isAm ? "ክምችት" : "Inventory"}</h1>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="p-2 bg-semay-900 text-white rounded-xl"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-3 overflow-x-auto">
        {[
          { key: "RAW_MATERIAL", label: isAm ? "ጥሬ እቃ" : "Raw Materials" },
          { key: "ACCESSORY", label: isAm ? "ተጨማሪ" : "Accessories" },
          { key: "FINISHED_GOOD", label: isAm ? "የተጠናቀቀ" : "Finished" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              tab === t.key ? "bg-semay-900 text-white" : "bg-white border border-semay-200"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-4 space-y-3">
        {loading ? (
          <p className="text-center text-semay-500">{isAm ? "በመጫን ላይ..." : "Loading..."}</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-semay-500 py-10">
            {isAm ? "ምንም እቃ የለም" : "No items yet"}
          </p>
        ) : (
          filtered.map((m) => {
            const status = getStatus(m)
            return (
              <div key={m.id} className="bg-white border border-semay-200 rounded-2xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{m.name}</div>
                    <div className="text-sm text-semay-500 mt-1">
                      {Number(m.currentStock)} {m.unit}
                      {m.minLevel && ` · Min: ${m.minLevel}`}
                    </div>
                  </div>
                  <span className={`text-sm font-medium ${status.color}`}>{status.text}</span>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Add Material Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-6 space-y-4">
            <h2 className="text-lg font-semibold">
              {isAm ? "አዲስ እቃ ጨምር" : "Add Material"}
            </h2>
            <form onSubmit={handleCreate} className="space-y-3">
              <input
                required
                placeholder={isAm ? "ስም" : "Name"}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              >
                <option value="RAW_MATERIAL">{isAm ? "ጥሬ እቃ" : "Raw Material"}</option>
                <option value="ACCESSORY">{isAm ? "ተጨማሪ" : "Accessory"}</option>
                <option value="FINISHED_GOOD">{isAm ? "የተጠናቀቀ" : "Finished Good"}</option>
              </select>
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder={isAm ? "መለኪያ (m, pcs...)" : "Unit (m, pcs...)"}
                  value={form.unit}
                  onChange={(e) => setForm({ ...form, unit: e.target.value })}
                  className="px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                />
                <input
                  type="number"
                  placeholder={isAm ? "አሁን ያለ" : "Current stock"}
                  value={form.currentStock}
                  onChange={(e) => setForm({ ...form, currentStock: e.target.value })}
                  className="px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                />
              </div>
              <input
                type="number"
                placeholder={isAm ? "ዝቅተኛ ደረጃ" : "Minimum level"}
                value={form.minLevel}
                onChange={(e) => setForm({ ...form, minLevel: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
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
        </div>
      )}

      <GarmentBottomNav />
    </div>
  )
}
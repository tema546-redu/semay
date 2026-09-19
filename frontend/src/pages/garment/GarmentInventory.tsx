import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { garmentApi } from "../../lib/api"
import GarmentLayout from "../../components/GarmentLayout"
import { Plus, Pencil } from "lucide-react"

export default function GarmentInventory() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  const [materials, setMaterials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState("RAW_MATERIAL")
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<any>(null)
  const [form, setForm] = useState({
    name: "",
    category: "RAW_MATERIAL",
    unit: "m",
    currentStock: "",
    minLevel: "",
    costPerUnit: "",
  })

  const load = () => {
    garmentApi
      .materials()
      .then(setMaterials)
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const filtered = materials.filter((m) => m.category === tab)

  const getStatus = (m: any) => {
    const stock = Number(m.currentStock)
    const min = Number(m.minLevel || 0)
    if (stock <= 0) return { text: isAm ? "አልቋል" : "Out", color: "text-danger" }
    if (min > 0 && stock <= min) return { text: isAm ? "ዝቅተኛ" : "Low", color: "text-warning" }
    return { text: "OK", color: "text-success" }
  }

  const openCreate = () => {
    setEditing(null)
    setForm({
      name: "",
      category: tab,
      unit: "m",
      currentStock: "",
      minLevel: "",
      costPerUnit: "",
    })
    setShowForm(true)
  }

  const openEdit = (m: any) => {
    setEditing(m)
    setForm({
      name: m.name || "",
      category: m.category || "RAW_MATERIAL",
      unit: m.unit || "m",
      currentStock: String(m.currentStock ?? ""),
      minLevel: m.minLevel != null ? String(m.minLevel) : "",
      costPerUnit: m.costPerUnit != null ? String(m.costPerUnit) : "",
    })
    setShowForm(true)
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const payload = {
        name: form.name,
        category: form.category,
        unit: form.unit,
        currentStock: Number(form.currentStock) || 0,
        minLevel: form.minLevel ? Number(form.minLevel) : null,
        costPerUnit: form.costPerUnit ? Number(form.costPerUnit) : null,
      }

      if (editing) {
        await garmentApi.updateMaterial(editing.id, payload)
      } else {
        await garmentApi.createMaterial(payload)
      }

      setShowForm(false)
      setEditing(null)
      load()
    } catch (err) {
      console.error(err)
      alert(isAm ? "ስህተት ተከስቷል" : "Something went wrong")
    }
  }

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-3xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-semibold text-semay-900">
              {isAm ? "ክምችት" : "Inventory"}
            </h1>
            <p className="text-sm text-semay-500 mt-1">
              {isAm ? "ቁሳቁሶችን ያስተዳድሩ" : "Manage materials"}
            </p>
          </div>
          <button
            onClick={openCreate}
            className="p-2.5 bg-semay-900 text-white rounded-xl"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {[
            { key: "RAW_MATERIAL", label: isAm ? "ጥሬ እቃ" : "Raw Materials" },
            { key: "ACCESSORY", label: isAm ? "ተጨማሪ" : "Accessories" },
            { key: "FINISHED_GOOD", label: isAm ? "የተጠናቀቀ" : "Finished" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                tab === t.key
                  ? "bg-semay-900 text-white"
                  : "bg-white border border-semay-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {loading ? (
            <p className="text-center text-semay-500 py-8">
              {isAm ? "በመጫን ላይ..." : "Loading..."}
            </p>
          ) : filtered.length === 0 ? (
            <p className="text-center text-semay-500 py-10">
              {isAm ? "ምንም እቃ የለም" : "No items yet"}
            </p>
          ) : (
            filtered.map((m) => {
              const status = getStatus(m)
              return (
                <div
                  key={m.id}
                  className="bg-white border border-semay-200 rounded-2xl p-4 flex justify-between items-start gap-3"
                >
                  <div>
                    <div className="font-medium">{m.name}</div>
                    <div className="text-sm text-semay-500 mt-1">
                      {Number(m.currentStock)} {m.unit}
                      {m.minLevel != null && ` · Min: ${m.minLevel}`}
                      {m.costPerUnit != null &&
                        ` · ${Number(m.costPerUnit)} ETB/${m.unit}`}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${status.color}`}>
                      {status.text}
                    </span>
                    <button
                      onClick={() => openEdit(m)}
                      className="p-2 rounded-lg hover:bg-semay-50 text-semay-500"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>

      {/* Add / Edit modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end md:items-center justify-center">
          <div className="bg-white w-full md:max-w-md md:rounded-2xl rounded-t-3xl p-6 space-y-4">
            <h2 className="text-lg font-semibold">
              {editing
                ? isAm
                  ? "እቃ አርትዕ"
                  : "Edit material"
                : isAm
                ? "አዲስ እቃ"
                : "Add material"}
            </h2>
            <form onSubmit={handleSave} className="space-y-3">
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
                <option value="RAW_MATERIAL">
                  {isAm ? "ጥሬ እቃ" : "Raw Material"}
                </option>
                <option value="ACCESSORY">
                  {isAm ? "ተጨማሪ" : "Accessory"}
                </option>
                <option value="FINISHED_GOOD">
                  {isAm ? "የተጠናቀቀ" : "Finished Good"}
                </option>
              </select>
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder={isAm ? "መለኪያ" : "Unit"}
                  value={form.unit}
                  onChange={(e) => setForm({ ...form, unit: e.target.value })}
                  className="px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                />
                <input
                  type="number"
                  placeholder={isAm ? "አሁን ያለ" : "Current stock"}
                  value={form.currentStock}
                  onChange={(e) =>
                    setForm({ ...form, currentStock: e.target.value })
                  }
                  className="px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  placeholder={isAm ? "ዝቅተኛ ደረጃ" : "Min level"}
                  value={form.minLevel}
                  onChange={(e) =>
                    setForm({ ...form, minLevel: e.target.value })
                  }
                  className="px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                />
                <input
                  type="number"
                  placeholder={isAm ? "ዋጋ በመለኪያ" : "Cost per unit"}
                  value={form.costPerUnit}
                  onChange={(e) =>
                    setForm({ ...form, costPerUnit: e.target.value })
                  }
                  className="px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                />
              </div>
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
    </GarmentLayout>
  )
}
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import { ArrowLeft, Plus } from "lucide-react"
import GarmentBottomNav from "../../components/GarmentBottomNav"

export default function GarmentStyles() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [styles, setStyles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    name: "",
    sku: "",
    category: "T-Shirt",
  })

  const load = () => {
    garmentApi.styles()
      .then(setStyles)
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await garmentApi.createStyle({
        name: form.name,
        sku: form.sku || undefined,
        category: form.category,
      })
      setShowForm(false)
      setForm({ name: "", sku: "", category: "T-Shirt" })
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
          <h1 className="font-semibold text-lg">{isAm ? "የልብስ ዓይነቶች" : "Garment Styles"}</h1>
        </div>
        <button onClick={() => setShowForm(true)} className="p-2 bg-semay-900 text-white rounded-xl">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 space-y-3">
        {loading ? (
          <p className="text-center text-semay-500">{isAm ? "በመጫን ላይ..." : "Loading..."}</p>
        ) : styles.length === 0 ? (
          <p className="text-center text-semay-500 py-10">
            {isAm ? "ምንም ዓይነት የለም" : "No styles yet"}
          </p>
        ) : (
          styles.map((s) => (
            <div key={s.id} className="bg-white border border-semay-200 rounded-2xl p-4">
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-semay-500 mt-1">
                {s.sku && `SKU: ${s.sku} · `}
                {s.category} · {s.variants?.length || 0} {isAm ? "ተለዋዋጮች" : "variants"}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Create Style Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-6 space-y-4">
            <h2 className="text-lg font-semibold">{isAm ? "አዲስ ዓይነት" : "New Style"}</h2>
            <form onSubmit={handleCreate} className="space-y-3">
              <input
                required
                placeholder={isAm ? "ስም (ለምሳሌ Polo Shirt)" : "Name (e.g. Polo Shirt)"}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
              <input
                placeholder="SKU (optional)"
                value={form.sku}
                onChange={(e) => setForm({ ...form, sku: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
              <input
                placeholder={isAm ? "ምድብ" : "Category"}
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
              />
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-3 border border-semay-200 rounded-xl">
                  {isAm ? "ሰርዝ" : "Cancel"}
                </button>
                <button type="submit" className="flex-1 py-3 bg-semay-900 text-white rounded-xl">
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
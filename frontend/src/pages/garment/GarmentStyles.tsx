import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import { ArrowLeft, Plus, Tags } from "lucide-react"
import GarmentLayout from "../../components/GarmentLayout"

const SUGGESTED = [
  "Trouser",
  "T-Shirt",
  "Polo",
  "Hoodie",
  "Uniform",
  "Dress",
  "Jacket",
  "Other",
]

export default function GarmentStyles() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [styles, setStyles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [filterCat, setFilterCat] = useState<string>("ALL")
  const [form, setForm] = useState({
    name: "",
    sku: "",
    category: "",
    newCategory: "",
  })

  const load = () => {
    setLoading(true)
    garmentApi
      .styles()
      .then((s) => setStyles(Array.isArray(s) ? s : []))
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const categories = useMemo(() => {
    const set = new Set<string>()
    SUGGESTED.forEach((c) => set.add(c))
    styles.forEach((s) => {
      if (s.category) set.add(String(s.category))
    })
    return Array.from(set).sort((a, b) => a.localeCompare(b))
  }, [styles])

  const grouped = useMemo(() => {
    const map: Record<string, any[]> = {}
    const list =
      filterCat === "ALL"
        ? styles
        : styles.filter((s) => String(s.category || "") === filterCat)
    for (const s of list) {
      const cat = s.category || (isAm ? "ሌላ" : "Other")
      if (!map[cat]) map[cat] = []
      map[cat].push(s)
    }
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b))
  }, [styles, filterCat, isAm])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    const category =
      form.category === "__new__"
        ? form.newCategory.trim()
        : form.category.trim()
    if (!form.name.trim() || !category) {
      alert(isAm ? "ስም እና ምድብ ያስፈልጋል" : "Name and category required")
      return
    }
    try {
      await garmentApi.createStyle({
        name: form.name.trim(),
        sku: form.sku.trim() || undefined,
        category,
      })
      setShowForm(false)
      setForm({ name: "", sku: "", category: "", newCategory: "" })
      load()
    } catch (err) {
      console.error(err)
      alert(isAm ? "ስህተት ተከስቷል" : "Something went wrong")
    }
  }

  return (
    <GarmentLayout>
      <div className="min-h-svh bg-semay-50 pb-24">
        <div className="bg-white border-b border-semay-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/garment/dashboard">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-semibold text-lg">
                {isAm ? "የልብስ ዓይነቶች" : "Styles & categories"}
              </h1>
              <p className="text-xs text-semay-500">
                {isAm
                  ? "ምድብ እራሳችሁ ጨምሩ · ከዚያ ዓይነት"
                  : "You add categories · then styles"}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="p-2 bg-semay-900 text-white rounded-xl"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Category filter */}
        <div className="px-4 pt-3 flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setFilterCat("ALL")}
            className={`shrink-0 text-xs px-3 py-1.5 rounded-full border ${
              filterCat === "ALL"
                ? "bg-semay-900 text-white border-semay-900"
                : "bg-white border-semay-200"
            }`}
          >
            {isAm ? "ሁሉም" : "All"}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilterCat(c)}
              className={`shrink-0 text-xs px-3 py-1.5 rounded-full border ${
                filterCat === c
                  ? "bg-semay-900 text-white border-semay-900"
                  : "bg-white border-semay-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="p-4 space-y-5">
          {loading ? (
            <p className="text-center text-semay-500">
              {isAm ? "በመጫን ላይ..." : "Loading..."}
            </p>
          ) : styles.length === 0 ? (
            <p className="text-center text-semay-500 py-10">
              {isAm ? "ምንም ዓይነት የለም — + ይጫኑ" : "No styles yet — press +"}
            </p>
          ) : (
            grouped.map(([cat, list]) => (
              <section key={cat}>
                <div className="flex items-center gap-2 mb-2 px-1">
                  <Tags className="w-4 h-4 text-semay-500" />
                  <h2 className="text-sm font-semibold text-semay-700">
                    {cat}
                  </h2>
                  <span className="text-xs text-semay-400">({list.length})</span>
                </div>
                <div className="space-y-2">
                  {list.map((s) => (
                    <Link
                      key={s.id}
                      to={`/garment/styles/${s.id}/bom`}
                      className="block bg-white border border-semay-200 rounded-2xl p-4"
                    >
                      <div className="font-medium">{s.name}</div>
                      <div className="text-sm text-semay-500 mt-1">
                        {s.sku && `SKU: ${s.sku} · `}
                        {s.category}
                      </div>
                      <div className="text-xs text-semay-600 mt-2">
                        {isAm ? "ቢኦኤም / ቁሳቁስ →" : "BOM / materials →"}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))
          )}
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-end md:items-center justify-center">
            <div className="bg-white w-full md:max-w-md md:rounded-2xl rounded-t-3xl p-6 space-y-4">
              <h2 className="text-lg font-semibold">
                {isAm ? "አዲስ ዓይነት" : "New style"}
              </h2>
              <form onSubmit={handleCreate} className="space-y-3">
                <div>
                  <label className="text-xs text-semay-500">
                    {isAm ? "ምድብ (እራሳችሁ)" : "Category (yours)"} *
                  </label>
                  <select
                    required
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                    className="w-full mt-1 px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                  >
                    <option value="">
                      {isAm ? "ምድብ ምረጥ" : "Select category"}
                    </option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                    <option value="__new__">
                      {isAm ? "+ አዲስ ምድብ ጻፍ" : "+ Type new category"}
                    </option>
                  </select>
                </div>
                {form.category === "__new__" && (
                  <input
                    required
                    placeholder={
                      isAm ? "አዲስ ምድብ ስም" : "New category name"
                    }
                    value={form.newCategory}
                    onChange={(e) =>
                      setForm({ ...form, newCategory: e.target.value })
                    }
                    className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                  />
                )}
                <input
                  required
                  placeholder={
                    isAm ? "ስም (ለምሳሌ Polo Shirt)" : "Name (e.g. Polo Shirt)"
                  }
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
      </div>
    </GarmentLayout>
  )
}
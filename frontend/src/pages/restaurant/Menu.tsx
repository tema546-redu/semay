import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, ToggleLeft, ToggleRight, Plus, X } from "lucide-react"
import { menuApi } from "../../lib/api"
import { cn } from "../../lib/utils"

export default function MenuPage() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    name: "",
    nameAm: "",
    category: "Food",
    price: "",
    imageUrl: "",
  })

  const load = () =>
    menuApi
      .list()
      .then(setItems)
      .catch(console.error)
      .finally(() => setLoading(false))

  useEffect(() => {
    load()
  }, [])

  const onImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 1_500_000) {
      alert("Max 1.5MB")
      return
    }
    const reader = new FileReader()
    reader.onload = () => setForm((f) => ({ ...f, imageUrl: String(reader.result || "") }))
    reader.readAsDataURL(file)
  }

  const toggle = async (id: string, current: boolean) => {
    try {
      await menuApi.toggleAvailability(id, !current)
      setItems((p) => p.map((i) => (i.id === id ? { ...i, available: !current } : i)))
    } catch (e) {
      console.error(e)
    }
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.price) return
    setSaving(true)
    try {
      await menuApi.create({
        name: form.name,
        nameAm: form.nameAm || undefined,
        category: form.category || "Food",
        price: Number(form.price),
        imageUrl: form.imageUrl || undefined,
      })
      setShow(false)
      setForm({ name: "", nameAm: "", category: "Food", price: "", imageUrl: "" })
      setLoading(true)
      load()
    } catch (err) {
      console.error(err)
      alert("Failed to add item")
    } finally {
      setSaving(false)
    }
  }

  const cats = Array.from(new Set(items.map((i) => i.category)))

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 px-6 h-14 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
            <ArrowLeft className="w-5 h-5 text-semay-600" />
          </Link>
          <h1 className="font-semibold text-semay-900">{isAm ? "ሜኑ" : "Menu"}</h1>
        </div>
        <button
          type="button"
          onClick={() => setShow(true)}
          className="flex items-center gap-2 text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full"
        >
          <Plus className="w-4 h-4" />
          {isAm ? "አዲስ እቃ" : "Add item"}
        </button>
      </header>

      <div className="max-w-3xl mx-auto p-6 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-semay-900 mb-1">
            {isAm ? "ሜኑ እና ተገኝነት" : "Menu & Availability"}
          </h2>
          <p className="text-sm text-semay-500">
            {isAm ? "እቃ ጨምሩ ወይም 86 ያድርጉ" : "Add items or mark 86'd when out of stock"}
          </p>
        </div>

        {loading ? (
          <div className="text-semay-400 text-sm">Loading...</div>
        ) : items.length === 0 ? (
          <div className="bg-white border border-dashed border-semay-200 rounded-2xl p-10 text-center">
            <p className="text-semay-600 mb-4">
              {isAm ? "ምንም ሜኑ የለም።" : "No menu items yet."}
            </p>
            <button
              type="button"
              onClick={() => setShow(true)}
              className="bg-semay-900 text-white text-sm font-medium px-5 py-2.5 rounded-full"
            >
              {isAm ? "እቃ ጨምር" : "Add menu item"}
            </button>
          </div>
        ) : (
          cats.map((cat) => (
            <div key={cat}>
              <h3 className="text-sm font-semibold text-semay-500 uppercase tracking-wide mb-3">
                {cat}
              </h3>
              <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden divide-y divide-semay-100">
                {items
                  .filter((i) => i.category === cat)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="px-5 py-4 flex items-center justify-between gap-3 hover:bg-semay-50/50"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {item.imageUrl && (
                          <img
                            src={item.imageUrl}
                            alt=""
                            className="w-12 h-12 rounded-lg object-cover border shrink-0"
                          />
                        )}
                        <div className="min-w-0">
                          <div
                            className={cn(
                              "font-medium text-sm",
                              item.available ? "text-semay-900" : "text-semay-400 line-through"
                            )}
                          >
                            {isAm && item.nameAm ? item.nameAm : item.name}
                          </div>
                          <div className="text-xs text-semay-400 mt-0.5">
                            {Number(item.price)} ETB
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggle(item.id, item.available)}
                        className="flex items-center gap-2 text-sm font-medium shrink-0"
                      >
                        {item.available ? (
                          <>
                            <span className="text-green-600">{isAm ? "ይገኛል" : "Available"}</span>
                            <ToggleRight className="w-8 h-8 text-green-600" />
                          </>
                        ) : (
                          <>
                            <span className="text-semay-400">86'd</span>
                            <ToggleLeft className="w-8 h-8 text-semay-300" />
                          </>
                        )}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))
        )}
      </div>

      {show && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-semay-900">
                {isAm ? "አዲስ ሜኑ እቃ" : "New menu item"}
              </h2>
              <button type="button" onClick={() => setShow(false)}>
                <X className="w-5 h-5 text-semay-400" />
              </button>
            </div>
            <form onSubmit={submit} className="space-y-3">
              <input
                required
                placeholder={isAm ? "ስም (እንግሊዝኛ)" : "Name (English)"}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
              />
              <input
                placeholder={isAm ? "ስም (አማርኛ)" : "Name (Amharic)"}
                value={form.nameAm}
                onChange={(e) => setForm({ ...form, nameAm: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
              />
              <input
                placeholder="Category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
              />
              <input
                required
                type="number"
                min="1"
                placeholder="Price (ETB)"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
              />
              <div>
                <label className="text-sm text-semay-600 block mb-1">
                  {isAm ? "ፎቶ (አማራጭ)" : "Photo (optional)"}
                </label>
                <input type="file" accept="image/*" onChange={onImage} className="text-sm w-full" />
                {form.imageUrl && (
                  <img
                    src={form.imageUrl}
                    alt=""
                    className="mt-2 h-20 w-20 object-cover rounded-xl border"
                  />
                )}
              </div>
              <button
                type="submit"
                disabled={saving}
                className="w-full bg-semay-900 text-white py-3 rounded-xl font-medium disabled:opacity-60"
              >
                {saving ? "..." : isAm ? "አስቀምጥ" : "Save item"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
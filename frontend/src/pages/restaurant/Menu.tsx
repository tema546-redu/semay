import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, ToggleLeft, ToggleRight, Plus, X, Pencil, Trash2 } from "lucide-react"
import { menuApi, stockApi } from "../../lib/api"
import { cn } from "../../lib/utils"

const emptyForm = {
  name: "",
  nameAm: "",
  category: "Food",
  price: "",
  imageUrl: "",
}

type RecipeRow = { stockItemId: string; qtyPerSale: string }

export default function MenuPage() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [items, setItems] = useState<any[]>([])
  const [stockList, setStockList] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [recipes, setRecipes] = useState<RecipeRow[]>([{ stockItemId: "", qtyPerSale: "" }])

  const load = () =>
    Promise.all([menuApi.list(), stockApi.list().catch(() => [])])
      .then(([menu, stock]) => {
        setItems(menu || [])
        setStockList(stock || [])
      })
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

  const openCreate = () => {
    setEditingId(null)
    setForm(emptyForm)
    setRecipes([{ stockItemId: "", qtyPerSale: "" }])
    setShow(true)
  }

  const openEdit = async (item: any) => {
    setEditingId(item.id)
    setForm({
      name: item.name || "",
      nameAm: item.nameAm || "",
      category: item.category || "Food",
      price: String(item.price ?? ""),
      imageUrl: item.imageUrl || "",
    })
    try {
      const lines = await stockApi.getRecipe(item.id)
      if (lines?.length) {
        setRecipes(
          lines.map((l: any) => ({
            stockItemId: l.stockItemId,
            qtyPerSale: String(l.qtyPerSale),
          }))
        )
      } else {
        setRecipes([{ stockItemId: "", qtyPerSale: "" }])
      }
    } catch {
      setRecipes([{ stockItemId: "", qtyPerSale: "" }])
    }
    setShow(true)
  }

  const remove = async (id: string) => {
    if (!confirm(isAm ? "እቃው ይሰረዝ?" : "Delete this menu item?")) return
    try {
      await menuApi.remove(id)
      setItems((p) => p.filter((i) => i.id !== id))
    } catch (e: any) {
      alert(e.message || "Delete failed")
    }
  }

  const saveRecipes = async (menuItemId: string) => {
    const valid = recipes.filter((r) => r.stockItemId && Number(r.qtyPerSale) > 0)
    for (const r of valid) {
      await stockApi.setRecipe({
        menuItemId,
        stockItemId: r.stockItemId,
        qtyPerSale: Number(r.qtyPerSale),
      })
    }
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.price) return
    setSaving(true)
    try {
      const payload = {
        name: form.name,
        nameAm: form.nameAm || undefined,
        category: form.category || "Food",
        price: Number(form.price),
        imageUrl: form.imageUrl || null,
      }
      let id = editingId
      if (editingId) {
        await menuApi.update(editingId, payload)
      } else {
        const created = await menuApi.create(payload)
        id = created.id
      }
      if (id) await saveRecipes(id)
      setShow(false)
      setEditingId(null)
      setForm(emptyForm)
      setRecipes([{ stockItemId: "", qtyPerSale: "" }])
      setLoading(true)
      load()
    } catch (err) {
      console.error(err)
      alert(editingId ? "Failed to update" : "Failed to add item")
    } finally {
      setSaving(false)
    }
  }

  const cats = Array.from(new Set(items.map((i) => i.category)))

  return (
    <div className="min-h-svh bg-semay-50 pb-8">
      <header className="bg-white border-b border-semay-200 px-6 h-14 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
            <ArrowLeft className="w-5 h-5 text-semay-600" />
          </Link>
          <h1 className="font-semibold text-semay-900">{isAm ? "ሜኑ" : "Menu"}</h1>
        </div>
        <button
          type="button"
          onClick={openCreate}
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
            {isAm
              ? "እቃ + ንጥረ ነገር ከክምችት — POS ሲሸጥ ክምችት ይቀንሳል"
              : "Add item + ingredients from Stock — POS sales reduce store"}
          </p>
          {stockList.length === 0 && (
            <p className="text-xs text-amber-700 mt-2">
              {isAm ? (
                <>
                  መጀመሪያ{" "}
                  <Link to="/stock" className="underline font-medium">
                    ክምችት
                  </Link>{" "}
                  ላይ ዱቄት/ዘይት ይጨምሩ
                </>
              ) : (
                <>
                  First add flour/oil on{" "}
                  <Link to="/stock" className="underline font-medium">
                    Stock
                  </Link>
                </>
              )}
            </p>
          )}
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
              onClick={openCreate}
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
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt=""
                            className="w-12 h-12 rounded-lg object-cover border shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-semay-100 shrink-0" />
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
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => openEdit(item)}
                          className="p-2 rounded-lg hover:bg-semay-100"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4 text-semay-600" />
                        </button>
                        <button
                          type="button"
                          onClick={() => remove(item.id)}
                          className="p-2 rounded-lg hover:bg-rose-50"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-rose-500" />
                        </button>
                        <button
                          type="button"
                          onClick={() => toggle(item.id, item.available)}
                          className="flex items-center gap-1 text-sm font-medium"
                        >
                          {item.available ? (
                            <>
                              <span className="text-green-600 hidden sm:inline">
                                {isAm ? "ይገኛል" : "On"}
                              </span>
                              <ToggleRight className="w-8 h-8 text-green-600" />
                            </>
                          ) : (
                            <>
                              <span className="text-semay-400 hidden sm:inline">86</span>
                              <ToggleLeft className="w-8 h-8 text-semay-300" />
                            </>
                          )}
                        </button>
                      </div>
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
                {editingId
                  ? isAm
                    ? "እቃ አርትዕ"
                    : "Edit menu item"
                  : isAm
                    ? "አዲስ ሜኑ እቃ"
                    : "New menu item"}
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
                  {isAm ? "ፎቶ" : "Photo"}
                </label>
                <input type="file" accept="image/*" onChange={onImage} className="text-sm w-full" />
                {form.imageUrl && (
                  <div className="mt-2 flex items-center gap-3">
                    <img
                      src={form.imageUrl}
                      alt=""
                      className="h-20 w-20 object-cover rounded-xl border"
                    />
                    <button
                      type="button"
                      className="text-xs text-rose-600"
                      onClick={() => setForm((f) => ({ ...f, imageUrl: "" }))}
                    >
                      {isAm ? "አስወግድ" : "Remove"}
                    </button>
                  </div>
                )}
              </div>

              {/* Ingredients from Stock */}
              <div className="border border-semay-100 rounded-xl p-3 space-y-2 bg-semay-50/50">
                <div className="text-sm font-medium text-semay-800">
                  {isAm ? "ንጥረ ነገር (ለ 1 ምግብ)" : "Ingredients (for 1 sale)"}
                </div>
                <p className="text-[11px] text-semay-500">
                  {isAm
                    ? "ምሳሌ፡ ቡርገር = 0.15 kg ስጋ + 0.02 L ዘይት"
                    : "Example: Burger = 0.15 kg meat + 0.02 L oil"}
                </p>
                {recipes.map((r, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <select
                      value={r.stockItemId}
                      onChange={(e) => {
                        const next = [...recipes]
                        next[idx] = { ...next[idx], stockItemId: e.target.value }
                        setRecipes(next)
                      }}
                      className="flex-1 px-2 py-2 rounded-lg border border-semay-200 text-sm"
                    >
                      <option value="">
                        {isAm ? "ከክምችት ምረጥ" : "From stock…"}
                      </option>
                      {stockList.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.quantity} {s.unit})
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      min="0"
                      step="0.001"
                      placeholder={isAm ? "ብዛት" : "Qty"}
                      value={r.qtyPerSale}
                      onChange={(e) => {
                        const next = [...recipes]
                        next[idx] = { ...next[idx], qtyPerSale: e.target.value }
                        setRecipes(next)
                      }}
                      className="w-20 px-2 py-2 rounded-lg border border-semay-200 text-sm"
                    />
                    <button
                      type="button"
                      className="text-xs text-rose-500 px-1"
                      onClick={() => setRecipes((p) => p.filter((_, i) => i !== idx))}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    setRecipes((p) => [...p, { stockItemId: "", qtyPerSale: "" }])
                  }
                  className="text-xs font-medium text-semay-700 underline"
                >
                  + {isAm ? "ንጥረ ነገር ጨምር" : "Add ingredient"}
                </button>
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
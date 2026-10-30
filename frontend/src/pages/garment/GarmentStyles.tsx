import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import {
  ArrowLeft,
  Plus,
  Tags,
  MoreVertical,
  Pencil,
  Trash2,
} from "lucide-react"
import GarmentLayout from "../../components/GarmentLayout"

/** Same defaults as Production orders */
const DEFAULT_SIZES = ["S", "M", "L", "XL", "XXL"]

/** Same category ideas as Production */
const SUGGESTED = [
  "Trouser",
  "T-Shirt",
  "Polo",
  "Hoodie",
  "Uniform",
  "Dress",
  "Jacket",
  "Pijama",
  "Other",
]

function parseSizeList(input: string): string[] {
  return [
    ...new Set(
      input
        .split(/[,/|]+/)
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => s.toUpperCase())
    ),
  ]
}

function sizesFromStyle(s: any): string[] {
  const fromVariants = [
    ...new Set(
      (s?.variants || [])
        .map((v: any) => String(v.size || "").trim().toUpperCase())
        .filter(Boolean)
    ),
  ] as string[]
  return fromVariants
}

export default function GarmentStyles() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  const [styles, setStyles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [filterCat, setFilterCat] = useState<string>("ALL")
  const [menuId, setMenuId] = useState<string | null>(null)
  const [editing, setEditing] = useState<any | null>(null)
  const [saving, setSaving] = useState(false)

  const [form, setForm] = useState({
    name: "",
    sku: "",
    category: "",
    newCategory: "",
    /** comma list OR built from toggles */
    sizes: "",
    /** selected size chips */
    sizeSet: [] as string[],
    extraInput: "",
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

  useEffect(() => {
    if (!menuId) return
    const close = () => setMenuId(null)
    window.addEventListener("click", close)
    return () => window.removeEventListener("click", close)
  }, [menuId])

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

  const syncSizesToForm = (sizeSet: string[], extraInput = "") => {
    const extra = parseSizeList(extraInput)
    const all = [...new Set([...sizeSet, ...extra])]
    return {
      sizeSet: all.filter((s) => DEFAULT_SIZES.includes(s) || sizeSet.includes(s) || extra.includes(s)),
      sizes: all.join(", "),
      extraInput,
    }
  }

  const toggleSize = (sz: string) => {
    setForm((prev) => {
      const has = prev.sizeSet.includes(sz)
      const sizeSet = has
        ? prev.sizeSet.filter((x) => x !== sz)
        : [...prev.sizeSet, sz]
      const extra = parseSizeList(prev.extraInput)
      const all = [...new Set([...sizeSet, ...extra])]
      return { ...prev, sizeSet, sizes: all.join(", ") }
    })
  }

  const openCreate = () => {
    setEditing(null)
    setForm({
      name: "",
      sku: "",
      category: "",
      newCategory: "",
      sizes: DEFAULT_SIZES.join(", "),
      sizeSet: [...DEFAULT_SIZES],
      extraInput: "",
    })
    setShowForm(true)
    setMenuId(null)
  }

  const openEdit = (s: any) => {
    setEditing(s)
    const fromV = sizesFromStyle(s)
    const sizeSet =
      fromV.length > 0 ? fromV : [...DEFAULT_SIZES]
    const extras = sizeSet.filter((x) => !DEFAULT_SIZES.includes(x))
    setForm({
      name: s.name || "",
      sku: s.sku || "",
      category: s.category || "",
      newCategory: "",
      sizes: sizeSet.join(", "),
      sizeSet,
      extraInput: extras.join(", "),
    })
    setShowForm(true)
    setMenuId(null)
  }

  const handleDelete = async (s: any) => {
    setMenuId(null)
    const ok = window.confirm(
      isAm ? `“${s.name}” ይጥፋ?` : `Delete “${s.name}”?`
    )
    if (!ok) return
    try {
      await garmentApi.deleteStyle(s.id)
      load()
    } catch (err: any) {
      console.error(err)
      alert(
        err?.message ||
          (isAm
            ? "መሰረዝ አልተሳካም (ትዕዛዝ ካለው አይሰረዝም)"
            : "Delete failed (style in use by an order cannot be deleted)")
      )
    }
  }

  const finalSizeList = (): string[] => {
    const fromChips = form.sizeSet.map((s) => s.toUpperCase())
    const fromExtra = parseSizeList(form.extraInput)
    const fromText = parseSizeList(form.sizes)
    return [...new Set([...fromChips, ...fromExtra, ...fromText])]
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const category =
      form.category === "__new__"
        ? form.newCategory.trim()
        : form.category.trim()
    if (!form.name.trim() || !category) {
      alert(isAm ? "ስም እና ምድብ ያስፈልጋል" : "Name and category required")
      return
    }

    const sizeList = finalSizeList()
    // Production needs sizes on the style — warn if empty
    if (sizeList.length === 0) {
      const cont = window.confirm(
        isAm
          ? "መጠን የለም። ትዕዛዝ ሲወሰድ መጠን አይታይም። ይቀጥል?"
          : "No sizes. Orders will not show size boxes. Continue?"
      )
      if (!cont) return
    }

    const variants = sizeList.map((size) => ({
      size,
      color: "Default",
    }))

    setSaving(true)
    try {
      if (editing?.id) {
        await garmentApi.updateStyle(editing.id, {
          name: form.name.trim(),
          sku: form.sku.trim() || undefined,
          category,
          variants,
        })
      } else {
        await garmentApi.createStyle({
          name: form.name.trim(),
          sku: form.sku.trim() || undefined,
          category,
          ...(variants.length ? { variants } : {}),
        })
      }
      setShowForm(false)
      setEditing(null)
      load()
    } catch (err: any) {
      console.error(err)
      alert(err?.message || (isAm ? "ስህተት ተከስቷል" : "Something went wrong"))
    } finally {
      setSaving(false)
    }
  }

  return (
    <GarmentLayout>
      <div className="min-h-svh bg-semay-50 pb-24">
        <div className="bg-white border-b border-semay-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/garment">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-semibold text-lg">
                {isAm ? "የልብስ ዓይነቶች" : "Styles & categories"}
              </h1>
              <p className="text-xs text-semay-500">
                {isAm
                  ? "ምድብ · ስም · መጠን — ለምርት ትዕዛዝ"
                  : "Category · name · sizes — used in Production"}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={openCreate}
            className="p-2 bg-semay-900 text-white rounded-xl"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <p className="px-4 pt-3 text-xs text-semay-500">
          {isAm
            ? "እዚህ የምታስቀምጡት ዓይነት በምርት ትዕዛዝ ውስጥ ይመረጣል። አዲስ ዓይነት ከምርትም መፍጠር ይቻላል።"
            : "Styles saved here appear in Production orders. New styles can also be created inside Production."}
        </p>

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
                  <span className="text-xs text-semay-400">
                    ({list.length})
                  </span>
                </div>
                <div className="space-y-2">
                  {list.map((s) => {
                    const sizes = sizesFromStyle(s)
                    return (
                      <div
                        key={s.id}
                        className="relative bg-white border border-semay-200 rounded-2xl p-4"
                      >
                        <div className="flex items-start gap-2">
                          <Link
                            to={`/garment/styles/${s.id}/bom`}
                            className="flex-1 min-w-0"
                          >
                            <div className="font-medium text-semay-900">
                              {s.name}
                            </div>
                            <div className="text-sm text-semay-500 mt-1">
                              {s.sku && `SKU: ${s.sku} · `}
                              {s.category}
                            </div>
                            {sizes.length > 0 ? (
                              <div className="text-xs text-semay-600 mt-1">
                                {isAm ? "መጠን" : "Sizes"}: {sizes.join(", ")}
                              </div>
                            ) : (
                              <div className="text-xs text-amber-600 mt-1">
                                {isAm
                                  ? "መጠን የለም — አርትዕ በመጠን ያክሉ"
                                  : "No sizes — edit and add sizes"}
                              </div>
                            )}
                            <div className="text-xs text-semay-600 mt-2">
                              {isAm ? "ቢኦኤም / ቁሳቁስ →" : "BOM / materials →"}
                            </div>
                          </Link>

                          <div className="relative shrink-0">
                            <button
                              type="button"
                              className="p-1.5 rounded-lg text-semay-500 hover:bg-semay-100"
                              onClick={(e) => {
                                e.stopPropagation()
                                setMenuId(menuId === s.id ? null : s.id)
                              }}
                              aria-label="More"
                            >
                              <MoreVertical className="w-5 h-5" />
                            </button>
                            {menuId === s.id && (
                              <div
                                className="absolute right-0 top-9 z-20 w-36 bg-white border border-semay-200 rounded-xl shadow-lg py-1 overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <button
                                  type="button"
                                  className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-left hover:bg-semay-50"
                                  onClick={() => openEdit(s)}
                                >
                                  <Pencil className="w-4 h-4" />
                                  {isAm ? "አርትዕ" : "Edit"}
                                </button>
                                <button
                                  type="button"
                                  className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-left text-red-600 hover:bg-red-50"
                                  onClick={() => handleDelete(s)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                  {isAm ? "ሰርዝ" : "Delete"}
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>
            ))
          )}
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-end md:items-center justify-center">
            <div className="bg-white w-full md:max-w-md md:rounded-2xl rounded-t-3xl p-6 space-y-4 max-h-[92vh] overflow-y-auto">
              <h2 className="text-lg font-semibold">
                {editing
                  ? isAm
                    ? "ዓይነት አርትዕ"
                    : "Edit style"
                  : isAm
                    ? "አዲስ ዓይነት"
                    : "New style"}
              </h2>
              <p className="text-xs text-semay-500 -mt-2">
                {isAm
                  ? "መጠኖች ከምርት ትዕዛዝ እና ዕለታዊ ሪፖርት ጋር ይገናኛሉ"
                  : "Sizes connect to Production orders and Daily report"}
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-xs text-semay-500">
                    {isAm ? "ምድብ" : "Category"} *
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
                    placeholder={isAm ? "አዲስ ምድብ ስም" : "New category name"}
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
                    isAm
                      ? "ስም (ለምሳሌ School trouser)"
                      : "Name (e.g. School trouser)"
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

                {/* Sizes — same idea as Production */}
                <div>
                  <label className="text-xs text-semay-500">
                    {isAm ? "መጠን (Unit sizes)" : "Unit sizes"} *
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {DEFAULT_SIZES.map((sz) => {
                      const on = form.sizeSet.includes(sz)
                      return (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => toggleSize(sz)}
                          className={`text-xs px-3 py-1.5 rounded-full border font-medium ${
                            on
                              ? "bg-semay-900 text-white border-semay-900"
                              : "bg-white border-semay-200 text-semay-700"
                          }`}
                        >
                          {sz}
                        </button>
                      )
                    })}
                  </div>
                  <input
                    placeholder={
                      isAm
                        ? "ተጨማሪ: XS, 3XL, 28, 30"
                        : "Extra: XS, 3XL, 28, 30"
                    }
                    value={form.extraInput}
                    onChange={(e) => {
                      const extraInput = e.target.value
                      const extra = parseSizeList(extraInput)
                      const all = [
                        ...new Set([...form.sizeSet, ...extra]),
                      ]
                      setForm({
                        ...form,
                        extraInput,
                        sizes: all.join(", "),
                      })
                    }}
                    className="w-full mt-2 px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                  />
                  <p className="text-[11px] text-semay-400 mt-1">
                    {isAm
                      ? "እነዚህ መጠኖች በትዕዛዝ እና በዕለታዊ ሪፖርት ይታያሉ"
                      : "These sizes show on orders and daily reports"}
                    {finalSizeList().length > 0 && (
                      <>
                        {" · "}
                        <b>{finalSizeList().join(", ")}</b>
                      </>
                    )}
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false)
                      setEditing(null)
                    }}
                    className="flex-1 py-3 border border-semay-200 rounded-xl"
                  >
                    {isAm ? "ሰርዝ" : "Cancel"}
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 py-3 bg-semay-900 text-white rounded-xl disabled:opacity-60"
                  >
                    {saving ? "..." : isAm ? "አስቀምጥ" : "Save"}
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
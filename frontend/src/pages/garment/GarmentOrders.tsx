import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import { ArrowLeft, Plus, MoreVertical, Pencil, Trash2, ChevronDown, ChevronUp } from "lucide-react"
import GarmentLayout from "../../components/GarmentLayout"

const DEFAULT_SIZES = ["S", "M", "L", "XL", "XXL"]


function parseSizes(input: string): string[] {
  return [
    ...new Set(
      input
        .split(/[,/|]+/)
        .map((s) => s.trim())
        .filter(Boolean)
    ),
  ]
}

function sizeNoteFromNotes(notes?: string | null) {
  if (!notes) return null
  const m = notes.match(/Sizes:\s*(.+)/i)
  return m ? m[1].trim() : null
}

function emptySizeQtys(sizes: string[]) {
  const o: Record<string, string> = {}
  sizes.forEach((sz) => {
    o[sz] = ""
  })
  return o
}

function buildSizeNote(
  sizeList: string[],
  sizeQtys: Record<string, string>
): string | undefined {
  const parts: string[] = []
  sizeList.forEach((sz) => {
    const q = Number(sizeQtys[sz]) || 0
    if (q > 0) parts.push(`${sz}=${q}`)
  })
  return parts.length ? parts.join(", ") : undefined
}

function sumSizes(sizeList: string[], sizeQtys: Record<string, string>) {
  return sizeList.reduce((s, sz) => s + (Number(sizeQtys[sz]) || 0), 0)
}

type LineDraft = {
  key: string
  /** existing style id, or "" if creating new */
  styleId: string
  /** when creating new style from Production */
  newStyleName: string
  newCategory: string
  sizeQtys: Record<string, string>
  /** extra size labels beyond defaults (XS, 3XL, …) */
  extraSizes: string[]
  extraInput: string
  plannedQty: string
  collapsed: boolean
}

function newLine(collapsed = false): LineDraft {
  return {
    key: Math.random().toString(36).slice(2),
    styleId: "",
    newStyleName: "",
    newCategory: "",
    sizeQtys: emptySizeQtys(DEFAULT_SIZES),
    extraSizes: [],
    extraInput: "",
    plannedQty: "",
    collapsed,
  }
}

export default function GarmentOrders() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const location = useLocation() as { state?: { editOrderId?: string } }

  const [orders, setOrders] = useState<any[]>([])
  const [styles, setStyles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showFinished, setShowFinished] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<any | null>(null)
  const [saving, setSaving] = useState(false)
  const [menuId, setMenuId] = useState<string | null>(null)

  const [customerName, setCustomerName] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [lines, setLines] = useState<LineDraft[]>([newLine()])

  const load = () => {
    setLoading(true)
    Promise.all([garmentApi.orders(), garmentApi.styles()])
      .then(([ords, stys]) => {
        setOrders(Array.isArray(ords) ? ords : [])
        setStyles(Array.isArray(stys) ? stys : [])
      })
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
    styles.forEach((s) => {
      if (s.category) set.add(String(s.category))
    })
    ;["Hoodie", "T-Shirt", "Trouser", "Uniform", "Jacket", "Other"].forEach(
      (c) => set.add(c)
    )
    return Array.from(set).sort((a, b) => a.localeCompare(b))
  }, [styles])

  const stageLabel = (s: string) => {
    const map: Record<string, string> = {
      PLANNED: isAm ? "ታቅዷል" : "Planned",
      CUTTING: isAm ? "መቁረጥ" : "Cutting",
      SEWING: isAm ? "መስፋት" : "Sewing",
      QUALITY: isAm ? "ጥራት" : "Quality",
      FINISHING: isAm ? "ማጠናቀቅ" : "Finishing",
      PACKING: isAm ? "ማሸግ" : "Packing",
      COMPLETED: isAm ? "ተጠናቋል" : "Completed",
      CANCELLED: isAm ? "ተሰርዟል" : "Cancelled",
    }
    return map[s] || s
  }

  const isFullyDone = (o: any) => {
    const left = Math.max(
      0,
      Number(o.plannedQty || 0) - Number(o.actualQty || 0)
    )
    return String(o.stage) === "COMPLETED" && left <= 0
  }

  const visibleOrders = useMemo(() => {
    return orders.filter((o) => {
      if (String(o.stage) === "CANCELLED") return false
      const done = isFullyDone(o)
      return showFinished ? done : !done
    })
  }, [orders, showFinished])

  const sizeListFor = (line: LineDraft) => {
    const style = styles.find((s) => s.id === line.styleId)
    const fromStyle = [
      ...new Set(
        (style?.variants || [])
          .map((v: any) => String(v.size || "").trim())
          .filter(Boolean)
      ),
    ] as string[]
    const set = new Set<string>([
      ...DEFAULT_SIZES,
      ...fromStyle,
      ...line.extraSizes,
    ])
    const extras = [...set].filter((s) => !DEFAULT_SIZES.includes(s))
    return [...DEFAULT_SIZES, ...extras]
  }

  const lineTotal = (line: LineDraft) => {
    const sizes = sizeListFor(line)
    const fromSizes = sumSizes(sizes, line.sizeQtys)
    if (fromSizes > 0) return fromSizes
    return Number(line.plannedQty) || 0
  }

  const grandTotal = lines.reduce((s, l) => s + lineTotal(l), 0)

  const lineTitle = (line: LineDraft, idx: number) => {
    if (line.styleId) {
      const s = styles.find((x) => x.id === line.styleId)
      return s?.name || `${isAm ? "መስመር" : "Line"} ${idx + 1}`
    }
    if (line.newStyleName.trim()) return line.newStyleName.trim()
    return `${isAm ? "መስመር" : "Line"} ${idx + 1}`
  }

  const openCreate = () => {
    setEditing(null)
    setCustomerName("")
    setDueDate("")
    setLines([newLine(false)])
    setShowForm(true)
  }

  const openEdit = (o: any, e?: React.MouseEvent) => {
    e?.preventDefault()
    e?.stopPropagation()
    setMenuId(null)
    setEditing(o)
    setCustomerName(o.customerName || "")
    setDueDate(
      o.dueDate ? new Date(o.dueDate).toISOString().slice(0, 10) : ""
    )

    if (o.lines?.length) {
      setLines(
        o.lines.map((ln: any, i: number) => {
          const qtys = emptySizeQtys(DEFAULT_SIZES)
          const extras: string[] = []
          if (ln.sizeNote) {
            ln.sizeNote.split(",").forEach((part: string) => {
              const [k, v] = part.split("=").map((x: string) => x.trim())
              if (k && v) {
                qtys[k] = v
                if (!DEFAULT_SIZES.includes(k)) extras.push(k)
              }
            })
          }
          return {
            key: ln.id || Math.random().toString(36).slice(2),
            styleId: ln.styleId || ln.style?.id || "",
            newStyleName: "",
            newCategory: "",
            sizeQtys: qtys,
            extraSizes: [...new Set(extras)],
            extraInput: "",
            plannedQty: String(ln.plannedQty || ""),
            collapsed: i > 0,
          } as LineDraft
        })
      )
    } else {
      const qtys = emptySizeQtys(DEFAULT_SIZES)
      const sn = sizeNoteFromNotes(o.notes)
      const extras: string[] = []
      if (sn) {
        sn.split(",").forEach((part) => {
          const [k, v] = part.split("=").map((x) => x.trim())
          if (k && v) {
            qtys[k] = v
            if (!DEFAULT_SIZES.includes(k)) extras.push(k)
          }
        })
      }
      setLines([
        {
          key: "legacy",
          styleId: o.styleId || o.style?.id || "",
          newStyleName: "",
          newCategory: "",
          sizeQtys: qtys,
          extraSizes: extras,
          extraInput: "",
          plannedQty: String(o.plannedQty || ""),
          collapsed: false,
        },
      ])
    }
    setShowForm(true)
  }
  useEffect(() => {
    const editId = location.state?.editOrderId
    if (!editId || !orders.length) return
    const o = orders.find((x) => x.id === editId)
    if (o) openEdit(o)
    window.history.replaceState({}, document.title)
  }, [location.state, orders])
  const updateLine = (key: string, patch: Partial<LineDraft>) => {
    setLines((prev) =>
      prev.map((l) => (l.key === key ? { ...l, ...patch } : l))
    )
  }

  const removeLine = (key: string) => {
    setLines((prev) =>
      prev.length <= 1 ? prev : prev.filter((l) => l.key !== key)
    )
  }

  const addExtraSizes = (key: string, line: LineDraft) => {
    const parsed = parseSizes(line.extraInput)
    if (!parsed.length) return
    const nextExtras = [...new Set([...line.extraSizes, ...parsed])]
    const qtys = { ...line.sizeQtys }
    parsed.forEach((sz) => {
      if (qtys[sz] == null) qtys[sz] = ""
    })
    updateLine(key, {
      extraSizes: nextExtras,
      extraInput: "",
      sizeQtys: qtys,
    })
  }

  /** Ensure style exists in catalog; returns styleId */
  const ensureStyleId = async (line: LineDraft): Promise<string> => {
    if (line.styleId) return line.styleId

    const name = line.newStyleName.trim()
    if (!name) {
      throw new Error(
        isAm ? "የአዲስ ዓይነት ስም ያስፈልጋል" : "New style needs a name"
      )
    }

    // reuse if same name already in list
    const existing = styles.find(
      (s) =>
        String(s.name).toLowerCase() === name.toLowerCase() &&
        (!line.newCategory.trim() ||
          String(s.category || "").toLowerCase() ===
            line.newCategory.trim().toLowerCase())
    )
    if (existing?.id) return existing.id

    const sizeLabels = sizeListFor(line)
    const variants = sizeLabels.map((size) => ({
      size,
      color: "Default",
    }))

    const created: any = await garmentApi.createStyle({
      name,
      category: line.newCategory.trim() || "Other",
      variants,
    })

    const id = created?.id || created?.style?.id
    if (!id) throw new Error(isAm ? "ዓይነት አልተፈጠረም" : "Style was not created")

    // refresh local catalog so next line can pick it
    const fresh = await garmentApi.styles().catch(() => null)
    if (Array.isArray(fresh)) setStyles(fresh)
    else setStyles((prev) => [...prev, created])

    return id
  }

  const doneOnLine = async (key: string) => {
    const line = lines.find((l) => l.key === key)
    if (!line) return

    try {
      if (!line.styleId && line.newStyleName.trim()) {
        const id = await ensureStyleId(line)
        updateLine(key, {
          styleId: id,
          newStyleName: "",
          collapsed: true,
        })
      } else if (line.styleId || lineTotal(line) > 0) {
        updateLine(key, { collapsed: true })
      } else {
        alert(
          isAm
            ? "ዓይነት ይምረጡ ወይም አዲስ ስም ይጻፉ"
            : "Select a style or type a new name"
        )
        return
      }
    } catch (err: any) {
      alert(err?.message || (isAm ? "ስህተት" : "Error"))
    }
  }

  const handleDelete = async (o: any) => {
    setMenuId(null)
    const label = o.customerName?.trim() || o.orderNumber
    if (!window.confirm(isAm ? `“${label}” ይጥፋ?` : `Delete “${label}”?`))
      return
    try {
      await (garmentApi as any).deleteOrder(o.id)
      load()
    } catch (err: any) {
      alert(err?.message || (isAm ? "መሰረዝ አልተሳካም" : "Delete failed"))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setSaving(true)
    try {
      const payloadLines: {
        styleId: string
        plannedQty: number
        sizeNote?: string
      }[] = []

      for (const line of lines) {
        const styleId = await ensureStyleId(line)
        const sizes = sizeListFor({ ...line, styleId })
        const note = buildSizeNote(sizes, line.sizeQtys)
        let pq = sumSizes(sizes, line.sizeQtys)
        if (pq <= 0) pq = Number(line.plannedQty) || 0
        if (pq <= 0) {
          alert(
            isAm
              ? "እያንዳንዱ መስመር ብዛት ያስፈልጋል"
              : "Each line needs a quantity"
          )
          setSaving(false)
          return
        }
        payloadLines.push({ styleId, plannedQty: pq, sizeNote: note })
      }

      if (payloadLines.length === 0) {
        alert(isAm ? "ቢያንስ አንድ መስመር" : "Add at least one line")
        setSaving(false)
        return
      }

      if (editing?.id) {
        await (garmentApi as any).updateOrder(editing.id, {
          customerName: customerName.trim() || null,
          dueDate: dueDate || null,
          lines: payloadLines,
        })
      } else {
        await garmentApi.createOrder({
          customerName: customerName.trim() || undefined,
          dueDate: dueDate || undefined,
          lines: payloadLines,
        })
      }
      setShowForm(false)
      setEditing(null)
      load()
    } catch (err: any) {
      console.error(err)
      alert(err?.message || (isAm ? "ስህተት" : "Something went wrong"))
    } finally {
      setSaving(false)
    }
  }

  const styleLabel = (o: any) => {
    if (o.lines?.length > 1) {
      return isAm
        ? `${o.lines.length} ዓይነቶች`
        : `${o.lines.length} styles`
    }
    if (o.lines?.length === 1) {
      return o.lines[0].style?.name || o.style?.name || "—"
    }
    return o.style?.name || "—"
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
                {isAm ? "የምርት ትዕዛዞች" : "Production Orders"}
              </h1>
              <p className="text-xs text-semay-500">
                {isAm
                  ? "አንድ ደንበኛ · ብዙ ዓይነት · መጠን"
                  : "One customer · many styles · sizes"}
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

        <div className="flex gap-2 px-4 pt-3">
          <button
            type="button"
            onClick={() => setShowFinished(false)}
            className={`text-xs px-3 py-1.5 rounded-full border ${
              !showFinished
                ? "bg-semay-900 text-white border-semay-900"
                : "bg-white border-semay-200"
            }`}
          >
            {isAm ? "ንቁ" : "Active"}
          </button>
          <button
            type="button"
            onClick={() => setShowFinished(true)}
            className={`text-xs px-3 py-1.5 rounded-full border ${
              showFinished
                ? "bg-semay-900 text-white border-semay-900"
                : "bg-white border-semay-200"
            }`}
          >
            {isAm ? "የተጠናቀቁ" : "Finished"}
          </button>
        </div>

        <div className="p-4 space-y-3">
          {loading ? (
            <p className="text-center text-semay-500">
              {isAm ? "በመጫን ላይ..." : "Loading..."}
            </p>
          ) : visibleOrders.length === 0 ? (
            <p className="text-center text-semay-500 py-10">
              {showFinished
                ? isAm
                  ? "የተጠናቀቀ የለም"
                  : "No finished orders"
                : isAm
                  ? "ንቁ የለም — + ይጫኑ"
                  : "No active — press +"}
            </p>
          ) : (
            visibleOrders.map((o) => {
              const left = Math.max(
                0,
                Number(o.plannedQty || 0) - Number(o.actualQty || 0)
              )
              const reallyDone = isFullyDone(o)
              const isPartial =
                left > 0 &&
                (o.stage === "COMPLETED" || Number(o.actualQty) > 0)
              const title = o.customerName?.trim() || o.orderNumber
              const sizesText =
                o.lines?.length === 1
                  ? o.lines[0].sizeNote
                  : sizeNoteFromNotes(o.notes)

              return (
                <div
                  key={o.id}
                  className="relative bg-white border border-semay-200 rounded-2xl p-4"
                >
                  <Link to={`/garment/orders/${o.id}`} className="block pr-12">
                    <div className="flex justify-between items-start gap-2">
                      <div className="min-w-0">
                        <div className="font-medium text-semay-900 truncate">
                          {title}
                        </div>
                        <div className="text-sm text-semay-600 mt-1">
                          {styleLabel(o)} · {o.plannedQty} pcs
                          {o.customerName?.trim() ? (
                            <span className="text-semay-400">
                              {" "}
                              · {o.orderNumber}
                            </span>
                          ) : null}
                        </div>
                        {o.lines?.length > 1 && (
                          <div className="text-xs text-semay-500 mt-1 space-y-0.5">
                            {o.lines.slice(0, 4).map((ln: any) => (
                              <div key={ln.id}>
                                · {ln.style?.name || "—"}: {ln.plannedQty}
                                {ln.sizeNote ? ` (${ln.sizeNote})` : ""}
                              </div>
                            ))}
                            {o.lines.length > 4 && (
                              <div>
                                +{o.lines.length - 4}{" "}
                                {isAm ? "ተጨማሪ" : "more"}
                              </div>
                            )}
                          </div>
                        )}
                        {sizesText && (!o.lines || o.lines.length <= 1) && (
                          <div className="text-xs text-semay-500 mt-0.5">
                            {isAm ? "መጠን" : "Sizes"}: {sizesText}
                          </div>
                        )}
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full shrink-0 ${
                          reallyDone
                            ? "bg-emerald-100 text-emerald-800"
                            : isPartial
                              ? "bg-amber-100 text-amber-800"
                              : "bg-semay-100 text-semay-700"
                        }`}
                      >
                        {reallyDone
                          ? stageLabel("COMPLETED")
                          : isPartial
                            ? isAm
                              ? "በከፊል"
                              : "Partial"
                            : stageLabel(o.stage)}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-semay-500">
                      {o.actualQty} / {o.plannedQty}{" "}
                      {isAm ? "ተጠናቋል" : "done"}
                      {left > 0 && (
                        <span className="text-amber-600">
                          {" "}
                          · {isAm ? "ቀሪ" : "left"} {left}
                        </span>
                      )}
                    </div>
                  </Link>

                  {!showFinished && (
                    <div className="absolute top-3 right-3">
                      <button
                        type="button"
                        className="p-2 rounded-lg border border-semay-200 bg-white"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          setMenuId(menuId === o.id ? null : o.id)
                        }}
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                      {menuId === o.id && (
                        <div
                          className="absolute right-0 mt-1 w-36 bg-white border border-semay-200 rounded-xl shadow-lg z-20 py-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            type="button"
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-semay-50 text-left"
                            onClick={() => openEdit(o)}
                          >
                            <Pencil className="w-3.5 h-3.5" />
                            {isAm ? "አርትዕ" : "Edit"}
                          </button>
                          <button
                            type="button"
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-red-50 text-red-600 text-left"
                            onClick={() => handleDelete(o)}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            {isAm ? "ሰርዝ" : "Delete"}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-end md:items-center justify-center">
            <div className="bg-white w-full md:max-w-lg md:rounded-2xl rounded-t-3xl p-6 space-y-4 max-h-[92vh] overflow-y-auto">
              <h2 className="text-lg font-semibold">
                {editing
                  ? isAm
                    ? "ትዕዛዝ አርትዕ"
                    : "Edit order"
                  : isAm
                    ? "አዲስ ትዕዛዝ (ብዙ ዓይነት)"
                    : "New order (many styles)"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-semay-500">
                    {isAm ? "ደንበኛ / ኩባንያ" : "Customer / company"}
                  </label>
                  <input
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={isAm ? "ለምሳሌ Lem school" : "e.g. Lem school"}
                    className="w-full mt-1 px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-semay-500">
                    {isAm ? "የመጨረሻ ቀን" : "Due date"}
                  </label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full mt-1 px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {isAm ? "የልብስ መስመሮች" : "Product lines"}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setLines((prev) => {
                          const collapsed = prev.map((l) => ({
                            ...l,
                            collapsed: true,
                          }))
                          return [...collapsed, newLine(false)]
                        })
                      }}
                      className="text-xs px-3 py-1.5 rounded-lg bg-semay-900 text-white"
                    >
                      + {isAm ? "ዓይነት ጨምር" : "Add style"}
                    </button>
                  </div>

                  {lines.map((line, idx) => {
                    const sizes = sizeListFor(line)
                    const total = lineTotal(line)
                    const isNew = !line.styleId

                    return (
                      <div
                        key={line.key}
                        className="border border-semay-200 rounded-xl overflow-hidden"
                      >
                        {/* header — click expand/collapse */}
                        <button
                          type="button"
                          className="w-full flex items-center justify-between gap-2 px-3 py-2.5 bg-semay-50 text-left"
                          onClick={() =>
                            updateLine(line.key, {
                              collapsed: !line.collapsed,
                            })
                          }
                        >
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-semay-500">
                              {isAm ? "መስመር" : "Line"} {idx + 1}
                            </div>
                            <div className="text-sm font-medium truncate">
                              {lineTitle(line, idx)}
                              {total > 0 ? ` · ${total} pcs` : ""}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            {lines.length > 1 && (
                              <span
                                role="button"
                                tabIndex={0}
                                className="text-xs text-red-600 px-1"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  removeLine(line.key)
                                }}
                              >
                                {isAm ? "አስወግድ" : "Remove"}
                              </span>
                            )}
                            {line.collapsed ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronUp className="w-4 h-4" />
                            )}
                          </div>
                        </button>

                        {!line.collapsed && (
                          <div className="p-3 space-y-3">
                            {/* existing style */}
                            <select
                              value={isNew ? "__new__" : line.styleId}
                              onChange={(e) => {
                                const v = e.target.value
                                if (v === "__new__") {
                                  updateLine(line.key, {
                                    styleId: "",
                                    sizeQtys: emptySizeQtys(DEFAULT_SIZES),
                                  })
                                } else {
                                  updateLine(line.key, {
                                    styleId: v,
                                    newStyleName: "",
                                    newCategory: "",
                                    sizeQtys: emptySizeQtys(DEFAULT_SIZES),
                                  })
                                }
                              }}
                              className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                            >
                              <option value="">
                                {isAm ? "ዓይነት ምረጥ" : "Select style"}
                              </option>
                              <option value="__new__">
                                {isAm
                                  ? "+ አዲስ ዓይነት / ምድብ ፍጠር"
                                  : "+ Create new style / category"}
                              </option>
                              {styles.map((s) => (
                                <option key={s.id} value={s.id}>
                                  {s.name}
                                  {s.category ? ` (${s.category})` : ""}
                                </option>
                              ))}
                            </select>

                            {isNew && (
                              <div className="space-y-2 rounded-xl border border-dashed border-semay-200 p-3 bg-semay-50/50">
                                <p className="text-xs text-semay-500">
                                  {isAm
                                    ? "አዲስ ዓይነት እዚህ ይፃፉ — በቅናሽ በራስ-ሰር ይቀመጣል"
                                    : "Type a new style here — it is saved to Styles automatically"}
                                </p>
                                <input
                                  value={line.newStyleName}
                                  onChange={(e) =>
                                    updateLine(line.key, {
                                      newStyleName: e.target.value,
                                    })
                                  }
                                  placeholder={
                                    isAm
                                      ? "የዓይነት ስም (ለምሳሌ Polo)"
                                      : "Style name (e.g. Polo)"
                                  }
                                  className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm bg-white"
                                />
                                <input
                                  list={`cat-${line.key}`}
                                  value={line.newCategory}
                                  onChange={(e) =>
                                    updateLine(line.key, {
                                      newCategory: e.target.value,
                                    })
                                  }
                                  placeholder={
                                    isAm
                                      ? "ምድብ (ለምሳሌ Uniform)"
                                      : "Category (e.g. Uniform)"
                                  }
                                  className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm bg-white"
                                />
                                <datalist id={`cat-${line.key}`}>
                                  {categories.map((c) => (
                                    <option key={c} value={c} />
                                  ))}
                                </datalist>
                              </div>
                            )}

                            {(line.styleId || line.newStyleName.trim()) && (
                              <>
                                <div className="text-xs font-medium text-semay-700">
                                  {isAm ? "መጠን × ብዛት" : "Size × qty"}
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                  {sizes.map((sz) => (
                                    <div
                                      key={sz}
                                      className="flex items-center gap-2 rounded-lg border border-semay-200 bg-white px-2 py-1.5"
                                    >
                                      <span className="w-9 text-xs font-semibold text-semay-700 shrink-0">
                                        {sz}
                                      </span>
                                      <input
                                        type="number"
                                        min={0}
                                        value={line.sizeQtys[sz] || ""}
                                        onChange={(e) =>
                                          updateLine(line.key, {
                                            sizeQtys: {
                                              ...line.sizeQtys,
                                              [sz]: e.target.value,
                                            },
                                          })
                                        }
                                        className="w-full min-w-0 border-0 p-0 text-sm focus:ring-0"
                                        placeholder="0"
                                      />
                                    </div>
                                  ))}
                                </div>

                                <div className="flex gap-2">
                                  <input
                                    value={line.extraInput}
                                    onChange={(e) =>
                                      updateLine(line.key, {
                                        extraInput: e.target.value,
                                      })
                                    }
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter") {
                                        e.preventDefault()
                                        addExtraSizes(line.key, line)
                                      }
                                    }}
                                    placeholder={
                                      isAm
                                        ? "ተጨማሪ መጠን: XS, 3XL, 28"
                                        : "Extra sizes: XS, 3XL, 28"
                                    }
                                    className="flex-1 px-3 py-2 border border-semay-200 rounded-lg text-sm"
                                  />
                                  <button
                                    type="button"
                                    onClick={() =>
                                      addExtraSizes(line.key, line)
                                    }
                                    className="px-3 py-2 rounded-lg border border-semay-200 text-sm shrink-0"
                                  >
                                    {isAm ? "ጨምር" : "Add"}
                                  </button>
                                </div>
                                <p className="text-[11px] text-semay-400">
                                  {isAm
                                    ? "ብዙ መጠን በኮማ ይለዩ፣ ከዚያ ጨምር ይጫኑ"
                                    : "Separate many sizes with commas, then Add"}
                                </p>

                                {total === 0 && (
                                  <input
                                    type="number"
                                    min={1}
                                    placeholder={
                                      isAm
                                        ? "ወይም ጠቅላላ ብዛት ብቻ"
                                        : "Or total qty only"
                                    }
                                    value={line.plannedQty}
                                    onChange={(e) =>
                                      updateLine(line.key, {
                                        plannedQty: e.target.value,
                                      })
                                    }
                                    className="w-full px-3 py-2 border border-semay-200 rounded-lg text-sm"
                                  />
                                )}

                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-xs text-semay-600">
                                    {isAm ? "ድምር" : "Line total"}:{" "}
                                    <b>{total}</b>
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => doneOnLine(line.key)}
                                    className="text-xs px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-medium"
                                  >
                                    {isAm
                                      ? "✓ መስመር ተጠናቋል"
                                      : "✓ Done on this line"}
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                <div className="text-sm font-medium text-center py-1">
                  {isAm ? "ጠቅላላ" : "Order total"}: <b>{grandTotal}</b> pcs
                </div>

                <div className="flex gap-3 pt-1">
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
                    {saving
                      ? "..."
                      : editing
                        ? isAm
                          ? "አስቀምጥ"
                          : "Save"
                        : isAm
                          ? "ፍጠር"
                          : "Create"}
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
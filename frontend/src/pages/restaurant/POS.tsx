import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Plus, Minus, Send, Search, WifiOff } from "lucide-react"
import { menuApi, ordersApi } from "../../lib/api"
import { isOnline, queueOrder, flushQueue } from "../../lib/offline"
import { cn } from "../../lib/utils"

const MENU_CACHE_KEY = "semay_menu_cache"

export default function POS() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [table, setTable] = useState("1")
  const [menu, setMenu] = useState<any[]>([])
  const [cart, setCart] = useState<
    { id: string; name: string; price: number; qty: number }[]
  >([])
  const [search, setSearch] = useState("")
  const [cat, setCat] = useState("All")
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")
  const [payMethod, setPayMethod] = useState<"cash" | "telebirr" | "card">(
    "cash"
  )
  const [online, setOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  )

  useEffect(() => {
    const on = () => setOnline(true)
    const off = () => setOnline(false)

    window.addEventListener("online", on)
    window.addEventListener("offline", off)

    return () => {
      window.removeEventListener("online", on)
      window.removeEventListener("offline", off)
    }
  }, [])

  useEffect(() => {
    menuApi
      .list(false)
      .then((items) => {
        const list = items || []

        try {
          localStorage.setItem(MENU_CACHE_KEY, JSON.stringify(list))
        } catch {}

        const available = list.filter((m: any) => m.available !== false)
        setMenu(available.length ? available : list)
      })
      .catch(() => {
        try {
          const cached = JSON.parse(
            localStorage.getItem(MENU_CACHE_KEY) || "[]"
          )

          setMenu(Array.isArray(cached) ? cached : [])
        } catch {
          setMenu([])
        }
      })
  }, [])

  // When back online, flush queued orders
  useEffect(() => {
    if (!online) return

    flushQueue((p) => ordersApi.create(p)).catch(() => {})
  }, [online])

  const categories = [
    "All",
    ...Array.from(new Set(menu.map((m) => m.category))),
  ]

  const emptyMenu = menu.length === 0

  const filtered = menu.filter((m) => {
    const name = (isAm && m.nameAm ? m.nameAm : m.name) || ""

    return (
      (cat === "All" || m.category === cat) &&
      name.toLowerCase().includes(search.toLowerCase()) &&
      m.available !== false
    )
  })

  const add = (item: any) => {
    setCart((prev) => {
      const exist = prev.find((c) => c.id === item.id)

      if (exist) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        )
      }

      return [
        ...prev,
        {
          id: item.id,
          name: isAm && item.nameAm ? item.nameAm : item.name,
          price: Number(item.price),
          qty: 1,
        },
      ]
    })
  }

  const updateQty = (id: string, d: number) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.id === id ? { ...c, qty: Math.max(0, c.qty + d) } : c
        )
        .filter((c) => c.qty > 0)
    )
  }

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0)

  const send = async () => {
    if (!cart.length) return

    setSending(true)
    setError("")

    const payload = {
      tableNumber: table,
      paymentMethod: payMethod,
      items: cart.map((c) => ({
        menuItemId: String(c.id).startsWith("d") ? undefined : c.id,
        name: c.name,
        quantity: c.qty,
        price: c.price,
      })),
    }

    try {
      if (!isOnline()) {
        queueOrder(payload)
        setSent(true)
        setCart([])

        setTimeout(() => setSent(false), 2500)

        return
      }

      await ordersApi.create(payload)
      await flushQueue((p) => ordersApi.create(p))

      setSent(true)
      setCart([])

      setTimeout(() => setSent(false), 2000)
    } catch (err: any) {
      queueOrder(payload)
      setError(err.message || "Saved offline — will sync later")
      setCart([])
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-svh bg-semay-50 flex flex-col">
      <header className="bg-white border-b border-semay-200 px-4 h-14 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            className="p-2 -ml-2 rounded-lg hover:bg-semay-100"
          >
            <ArrowLeft className="w-5 h-5 text-semay-600" />
          </Link>

          <div>
            <div className="text-sm font-semibold text-semay-900">POS</div>

            <div className="text-xs text-semay-400">
              {isAm ? "የጠረጴዛ አገልግሎት" : "Table service"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!online && (
            <span className="flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
              <WifiOff className="w-3 h-3" />
              Offline
            </span>
          )}

          <span className="text-xs text-semay-500">
            {isAm ? "ጠረጴዛ" : "Table"}
          </span>

          <input
            value={table}
            onChange={(e) => setTable(e.target.value)}
            className="w-14 text-center text-sm font-medium border border-semay-200 rounded-full py-1.5"
          />
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row min-h-0">
        <div className="flex-1 flex flex-col min-h-0 border-r border-semay-200">
          <div className="p-3 space-y-2 bg-white border-b border-semay-100">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-semay-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-semay-200 text-sm"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={cn(
                    "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium",
                    cat === c
                      ? "bg-semay-900 text-white"
                      : "bg-semay-100 text-semay-600"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 grid grid-cols-2 sm:grid-cols-3 gap-2 content-start">
            {emptyMenu ? (
              <div className="col-span-full flex flex-col items-center justify-center py-16 px-6 text-center">
                <p className="text-semay-600 text-sm mb-3">
                  {isAm
                    ? "ሜኑ ባዶ ነው። መጀመሪያ እቃዎችን ይጨምሩ።"
                    : "Menu is empty. Add items first."}
                </p>

                <Link
                  to="/menu"
                  className="text-sm font-medium bg-semay-900 text-white px-4 py-2 rounded-full"
                >
                  {isAm ? "ወደ ሜኑ" : "Go to Menu"}
                </Link>
              </div>
            ) : (
              filtered.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => add(item)}
                  className="bg-white border border-semay-200 rounded-xl p-3 text-left hover:border-semay-400 transition shadow-sm"
                >
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="w-full h-16 object-cover rounded-lg mb-2"
                    />
                  )}

                  <div className="text-sm font-medium text-semay-900 line-clamp-2">
                    {isAm && item.nameAm ? item.nameAm : item.name}
                  </div>

                  <div className="text-xs text-semay-500 mt-1">
                    {Number(item.price)} ETB
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        <div className="w-full md:w-80 bg-white flex flex-col border-t md:border-t-0 max-h-[45vh] md:max-h-none">
          <div className="p-4 border-b border-semay-100">
            <div className="font-semibold text-semay-900">
              {isAm ? "ትዕዛዝ" : "Order"} · {table}
            </div>

            <div className="text-xs text-semay-400">
              {cart.length} {isAm ? "እቃዎች" : "items"}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2 min-h-0">
            {cart.length === 0 ? (
              <p className="text-sm text-semay-400 text-center py-8">
                {isAm ? "እቃዎችን ይጫኑ" : "Tap items to add"}
              </p>
            ) : (
              cart.map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-semay-900 truncate">
                      {c.name}
                    </div>

                    <div className="text-xs text-semay-400">
                      {c.price} × {c.qty}
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => updateQty(c.id, -1)}
                      className="w-7 h-7 rounded-full border border-semay-200 flex items-center justify-center"
                    >
                      <Minus className="w-3 h-3" />
                    </button>

                    <span className="w-6 text-center text-sm font-medium">
                      {c.qty}
                    </span>

                    <button
                      type="button"
                      onClick={() => updateQty(c.id, 1)}
                      className="w-7 h-7 rounded-full border border-semay-200 flex items-center justify-center"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-4 border-t border-semay-100 space-y-2 sticky bottom-0 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.04)]">
            {error && <p className="text-xs text-red-500">{error}</p>}

            {sent && (
              <p className="text-xs text-green-600">
                {isAm
                  ? online
                    ? "ወደ ኩሽና ተልኳል"
                    : "ኦፍላይን ተቀምጧል — ሲገናኝ ይላካል"
                  : online
                    ? "Sent to kitchen"
                    : "Saved offline — will sync when online"}
              </p>
            )}

            <div className="flex gap-1">
              {[
                { id: "cash" as const, label: isAm ? "ጥሬ" : "Cash" },
                { id: "telebirr" as const, label: "Telebirr" },
                { id: "card" as const, label: isAm ? "ካርድ" : "Card" },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setPayMethod(m.id)}
                  className={cn(
                    "flex-1 text-xs py-1.5 rounded-lg border font-medium",
                    payMethod === m.id
                      ? "bg-semay-900 text-white border-semay-900"
                      : "border-semay-200 text-semay-600"
                  )}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="flex justify-between text-sm font-semibold">
              <span>Total</span>
              <span>{total} ETB</span>
            </div>

            <button
              type="button"
              disabled={!cart.length || sending}
              onClick={send}
              className="w-full flex items-center justify-center gap-2 bg-semay-900 text-white py-3 rounded-xl text-sm font-medium disabled:opacity-40"
            >
              <Send className="w-4 h-4" />

              {sending
                ? "..."
                : isAm
                  ? "ወደ ኩሽና ላክ"
                  : "Send to Kitchen"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
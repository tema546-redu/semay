import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { Minus, Plus, Send, UtensilsCrossed, History } from "lucide-react"

const API = import.meta.env.VITE_API_URL || "http://localhost:3001"

type CartLine = {
  id?: string
  name: string
  price: number
  qty: number
  imageUrl?: string | null
}

type Step = "menu" | "place" | "contact"

export default function CustomerOrder() {
  const { orgId } = useParams()
  const [org, setOrg] = useState<any>(null)
  const [items, setItems] = useState<any[]>([])
  const [place, setPlace] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [cart, setCart] = useState<CartLine[]>([])
  const [msg, setMsg] = useState("")
  const [sending, setSending] = useState(false)
  const [loading, setLoading] = useState(true)
  const [cat, setCat] = useState("All")
  const [step, setStep] = useState<Step>("menu")

  useEffect(() => {
    if (!orgId) return
    setLoading(true)
    fetch(`${API}/api/restaurant/public/${orgId}/menu`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) throw new Error(d.error)
        setOrg(d.organization)
        setItems(Array.isArray(d.items) ? d.items : [])
      })
      .catch(() => setMsg("Could not load menu. Check connection."))
      .finally(() => setLoading(false))
  }, [orgId])

  const categories = useMemo(() => {
    const set = new Set<string>()
    items.forEach((m) => {
      if (m.category) set.add(m.category)
    })
    return ["All", ...Array.from(set)]
  }, [items])

  const filtered = items.filter((m) => cat === "All" || m.category === cat)

  const add = (m: any) => {
    setCart((c) => {
      const i = c.find((x) => x.id === m.id || x.name === m.name)
      if (i) {
        return c.map((x) =>
          x.id === m.id || x.name === m.name ? { ...x, qty: x.qty + 1 } : x
        )
      }
      return [
        ...c,
        {
          id: m.id,
          name: m.name,
          price: Number(m.price),
          qty: 1,
          imageUrl: m.imageUrl || null,
        },
      ]
    })
  }

  const setQty = (name: string, d: number) => {
    setCart((c) =>
      c
        .map((x) => (x.name === name ? { ...x, qty: Math.max(0, x.qty + d) } : x))
        .filter((x) => x.qty > 0)
    )
  }

  const total = cart.reduce((s, x) => s + x.price * x.qty, 0)
  const count = cart.reduce((s, x) => s + x.qty, 0)

  const startCheckout = () => {
    if (!cart.length) return
    setMsg("")
    setStep("place")
  }

  const continueToContact = () => {
    if (!place.trim()) {
      setMsg("Please enter your table, room, or place.")
      return
    }
    setMsg("")
    setStep("contact")
  }

  const send = async () => {
    if (!cart.length || !orgId || sending) return
    if (!place.trim()) {
      setMsg("Please enter your place.")
      setStep("place")
      return
    }
    if (!customerName.trim() || !customerPhone.trim()) {
      setMsg("Please enter your name and phone number.")
      setStep("contact")
      return
    }
    setSending(true)
    setMsg("")
    try {
      const res = await fetch(`${API}/api/restaurant/public/${orgId}/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tableNumber: place.trim(),
          customerName: customerName.trim(),
          customerPhone: customerPhone.trim(),
          items: cart.map((c) => ({
            menuItemId: c.id,
            name: c.name,
            quantity: c.qty,
            price: c.price,
          })),
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed")

      // local history (Phase G later can expand this)
      try {
        const key = "semay_order_history"
        const prev = JSON.parse(localStorage.getItem(key) || "[]")
        prev.unshift({
          at: new Date().toISOString(),
          orgId,
          orgName: org?.name,
          place: place.trim(),
          customerName: customerName.trim(),
          customerPhone: customerPhone.trim(),
          total,
          items: cart.map((c) => ({ name: c.name, qty: c.qty, price: c.price })),
        })
        localStorage.setItem(key, JSON.stringify(prev.slice(0, 30)))
      } catch {
        /* ignore */
      }

      setCart([])
      setStep("menu")
      setMsg(
        data.message ||
          "Request sent. Please wait — staff will accept your order. Thank you!"
      )
    } catch (e: any) {
      setMsg(e.message || "Failed to send")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-svh bg-[#f6f4f0] pb-32">
      <header className="relative overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0 opacity-30">
          {org?.photoUrl ? (
            <img src={org.photoUrl} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-stone-800 to-stone-950" />
          )}
        </div>
        <div className="relative px-5 pt-10 pb-8 max-w-lg mx-auto">
          <div className="flex items-end gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 overflow-hidden shrink-0 flex items-center justify-center">
              {org?.photoUrl ? (
                <img src={org.photoUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <UtensilsCrossed className="w-7 h-7 text-white/80" />
              )}
            </div>
            <div className="min-w-0 pb-0.5 flex-1">
              <p className="text-[11px] uppercase tracking-widest text-white/60 mb-1">
                Welcome
              </p>
              <h1 className="font-semibold text-2xl tracking-tight truncate">
                {org?.name || "Menu"}
              </h1>
              <p className="text-sm text-white/70 mt-0.5">Order from your place</p>
            </div>
            <button
              type="button"
              onClick={() => {
                const raw = localStorage.getItem("semay_order_history")
                const list = raw ? JSON.parse(raw) : []
                if (!list.length) {
                  alert("No past orders on this phone yet.")
                  return
                }
                const text = list
                  .slice(0, 10)
                  .map(
                    (h: any) =>
                      `${h.orgName || "Restaurant"} · ${h.place} · ${Number(h.total).toLocaleString()} ETB\n${(h.items || [])
                        .map((i: any) => `${i.qty}× ${i.name}`)
                        .join(", ")}`
                  )
                  .join("\n\n")
                alert(text)
              }}
              className="shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"
              title="Order history"
            >
              <History className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {msg && (
        <div className="max-w-lg mx-auto px-4 mt-3">
          <p
            className={`text-sm px-4 py-3 rounded-2xl ${
              msg.includes("Thank") ||
              msg.includes("sent") ||
              msg.includes("Request") ||
              msg.includes("wait")
                ? "bg-emerald-50 text-emerald-800 border border-emerald-100"
                : "bg-amber-50 text-amber-900 border border-amber-100"
            }`}
          >
            {msg}
          </p>
        </div>
      )}

      {step === "menu" && (
        <>
          {categories.length > 1 && (
            <div className="max-w-lg mx-auto px-4 mt-4 flex gap-2 overflow-x-auto pb-1">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                    cat === c
                      ? "bg-stone-900 text-white"
                      : "bg-white text-stone-600 border border-stone-200"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          <div className="max-w-lg mx-auto px-4 mt-4 space-y-3">
            {loading ? (
              <p className="text-center text-sm text-stone-400 py-16">Loading menu…</p>
            ) : filtered.length === 0 ? (
              <p className="text-center text-sm text-stone-400 py-16">No items available</p>
            ) : (
              filtered.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => add(m)}
                  className="w-full flex gap-3 bg-white border border-stone-200/90 rounded-2xl p-2.5 text-left shadow-sm"
                >
                  <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-stone-100">
                    {m.imageUrl ? (
                      <img
                        src={m.imageUrl}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-300">
                        <UtensilsCrossed className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 py-1 pr-1 flex flex-col justify-between">
                    <div>
                      <div className="font-semibold text-stone-900 text-[15px]">
                        {m.name}
                      </div>
                      {m.category ? (
                        <div className="text-[11px] text-stone-400 mt-0.5">
                          {m.category}
                        </div>
                      ) : null}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-semibold tabular-nums">
                        {Number(m.price).toLocaleString()}{" "}
                        <span className="text-xs text-stone-400">ETB</span>
                      </span>
                      <span className="text-[11px] font-medium bg-stone-900 text-white px-2.5 py-1 rounded-full">
                        Add
                      </span>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </>
      )}

      {/* Step: place */}
      {step === "place" && (
        <div className="max-w-lg mx-auto px-4 mt-6 space-y-4">
          <h2 className="text-lg font-semibold text-stone-900">Where should we bring it?</h2>
          <p className="text-sm text-stone-500">
            Table number, room number, or seat (e.g. Table 5, Room 12)
          </p>
          <input
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-stone-200 bg-white text-sm font-medium"
            placeholder="e.g. Table 5 or Room 12"
            autoFocus
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep("menu")}
              className="flex-1 py-3 rounded-2xl border border-stone-200 text-sm font-medium"
            >
              Back
            </button>
            <button
              type="button"
              onClick={continueToContact}
              className="flex-1 py-3 rounded-2xl bg-stone-900 text-white text-sm font-medium"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step: name + phone */}
      {step === "contact" && (
        <div className="max-w-lg mx-auto px-4 mt-6 space-y-4">
          <h2 className="text-lg font-semibold text-stone-900">Your details</h2>
          <p className="text-sm text-stone-500">
            Staff will see your name and phone with this order
          </p>
          <input
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-stone-200 bg-white text-sm font-medium"
            placeholder="Your name"
            autoFocus
          />
          <input
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-stone-200 bg-white text-sm font-medium"
            placeholder="Phone number"
            inputMode="tel"
          />
          <p className="text-xs text-stone-400">
            Place: <span className="font-medium text-stone-700">{place}</span> ·{" "}
            {total.toLocaleString()} ETB
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep("place")}
              className="flex-1 py-3 rounded-2xl border border-stone-200 text-sm font-medium"
            >
              Back
            </button>
            <button
              type="button"
              disabled={sending}
              onClick={send}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-stone-900 text-white text-sm font-medium disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {sending ? "Sending…" : "Send request"}
            </button>
          </div>
        </div>
      )}

      {/* Cart bar — menu step only */}
      {step === "menu" && cart.length > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-20">
          <div className="max-w-lg mx-auto bg-white/95 backdrop-blur border-t border-stone-200 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] px-4 pt-3 pb-5 space-y-2">
            <div className="max-h-28 overflow-y-auto space-y-1.5">
              {cart.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between gap-2 text-sm"
                >
                  <span className="truncate text-stone-800 font-medium">{c.name}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => setQty(c.name, -1)}
                      className="w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-5 text-center tabular-nums font-medium">
                      {c.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty(c.name, 1)}
                      className="w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <span className="w-16 text-right tabular-nums text-stone-600 text-xs">
                      {(c.qty * c.price).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm font-semibold pt-1">
              <span>
                Total · {count} item{count === 1 ? "" : "s"}
              </span>
              <span className="tabular-nums">{total.toLocaleString()} ETB</span>
            </div>
            <button
              type="button"
              onClick={startCheckout}
              className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white py-3.5 rounded-2xl text-sm font-medium"
            >
              <Send className="w-4 h-4" />
              Send request
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
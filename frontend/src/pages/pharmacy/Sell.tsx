import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus, Minus, Send } from "lucide-react"
import { pharmacyApi } from "../../lib/api"
import { cn } from "../../lib/utils"

export default function PharmacySell() {
  const [products, setProducts] = useState<any[]>([])
  const [q, setQ] = useState("")
  const [cart, setCart] = useState<{ id: string; name: string; price: number; qty: number }[]>(
    []
  )
  const [payMethod, setPayMethod] = useState("cash")
  const [msg, setMsg] = useState("")
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    pharmacyApi.products(q || undefined).then(setProducts).catch(console.error)
  }, [q])

  const add = (p: any) => {
    setCart((c) => {
      const i = c.find((x) => x.id === p.id)
      if (i) return c.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x))
      return [...c, { id: p.id, name: p.name, price: Number(p.price), qty: 1 }]
    })
  }

  const total = cart.reduce((s, x) => s + x.price * x.qty, 0)

  const sell = async () => {
    if (!cart.length) return
    setBusy(true)
    setMsg("")
    try {
      await pharmacyApi.sell({
        paymentMethod: payMethod,
        items: cart.map((x) => ({ productId: x.id, quantity: x.qty })),
      })
      setCart([])
      setMsg("Sale saved · stock updated")
      pharmacyApi.products(q || undefined).then(setProducts)
    } catch (e: any) {
      setMsg(e.message || "Failed")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-svh bg-semay-50 flex flex-col">
      <header className="h-14 bg-white border-b px-4 flex items-center gap-3">
        <Link to="/pharmacy">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Sell</h1>
      </header>
      <div className="p-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search medicine..."
          className="w-full border rounded-xl px-3 py-2.5 text-sm"
        />
      </div>
      <div className="flex-1 overflow-auto px-3 grid grid-cols-2 gap-2 content-start pb-40">
        {products
          .filter((p) => p.available && p.stockQty > 0)
          .map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => add(p)}
              className="text-left bg-white border rounded-xl p-3 text-sm shadow-sm"
            >
              <div className="font-medium line-clamp-2">{p.name}</div>
              <div className="text-xs text-semay-400 mt-1">
                {p.stockQty} left · {Number(p.price)} ETB
              </div>
            </button>
          ))}
      </div>
      <div className="fixed bottom-0 inset-x-0 bg-white border-t p-3 space-y-2 shadow-lg">
        {cart.map((x) => (
          <div key={x.id} className="flex items-center justify-between text-sm">
            <span>
              {x.name} × {x.qty}
            </span>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setCart((c) => c.map((i) => i.id === x.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))}>
                <Minus className="w-4 h-4" />
              </button>
              <button type="button" onClick={() => setCart((c) => c.map((i) => i.id === x.id ? { ...i, qty: i.qty + 1 } : i))}>
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        <div className="flex gap-1">
          {["cash", "telebirr", "cbe", "card"].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setPayMethod(m)}
              className={cn(
                "flex-1 text-xs py-1.5 rounded-lg border capitalize",
                payMethod === m ? "bg-semay-900 text-white" : ""
              )}
            >
              {m}
            </button>
          ))}
        </div>
        <div className="flex justify-between font-semibold text-sm">
          <span>Total</span>
          <span>{total} ETB</span>
        </div>
        {msg && <p className="text-xs text-semay-600">{msg}</p>}
        <button
          type="button"
          disabled={!cart.length || busy}
          onClick={sell}
          className="w-full flex items-center justify-center gap-2 bg-semay-900 text-white py-3 rounded-xl text-sm disabled:opacity-40"
        >
          <Send className="w-4 h-4" /> Complete sale
        </button>
      </div>
    </div>
  )
}
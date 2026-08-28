import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus, Minus, Send } from "lucide-react"
import { bakeryApi } from "../../lib/api"
import { cn } from "../../lib/utils"

export default function BakerySell() {
  const [products, setProducts] = useState<any[]>([])
  const [cart, setCart] = useState<{ id: string; name: string; price: number; qty: number }[]>([])
  const [pay, setPay] = useState<"cash" | "telebirr" | "cbe" | "card">("cash")
  const [msg, setMsg] = useState("")
  const [busy, setBusy] = useState(false)

  const load = () => bakeryApi.products().then((p) => setProducts((p || []).filter((x: any) => x.available !== false)))
  useEffect(() => {
    load()
  }, [])

  const add = (p: any) => {
    setCart((c) => {
      const i = c.find((x) => x.id === p.id)
      if (i) return c.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x))
      return [...c, { id: p.id, name: p.name, price: Number(p.price), qty: 1 }]
    })
  }

  const total = cart.reduce((s, x) => s + x.price * x.qty, 0)

  const send = async () => {
    if (!cart.length) return
    setBusy(true)
    setMsg("")
    try {
      await bakeryApi.sell({
        paymentMethod: pay,
        items: cart.map((x) => ({ productId: x.id, quantity: x.qty })),
      })
      setCart([])
      setMsg("Sold · stock updated")
      load()
    } catch (e: any) {
      setMsg(e.message || "Failed")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-svh bg-semay-50 flex flex-col">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0">
        <Link to="/bakery" className="p-2 -ml-2">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">POS / Sell</h1>
      </header>
      <div className="flex-1 grid md:grid-cols-2 gap-0">
        <div className="p-3 grid grid-cols-2 gap-2 content-start">
          {products.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => add(p)}
              disabled={p.stockQty < 1}
              className="text-left bg-white border rounded-xl p-3 disabled:opacity-40"
            >
              <div className="text-sm font-medium">{p.name}</div>
              <div className="text-xs text-semay-500">
                {Number(p.price)} ETB · {p.stockQty} left
              </div>
            </button>
          ))}
        </div>
        <div className="bg-white border-t md:border-t-0 md:border-l p-4 flex flex-col sticky bottom-0">
          <div className="flex-1 space-y-2">
            {cart.map((x) => (
              <div key={x.id} className="flex items-center justify-between text-sm">
                <span>
                  {x.name} × {x.qty}
                </span>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => setCart((c) => c.map((i) => (i.id === x.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i)))}>
                    <Minus className="w-4 h-4" />
                  </button>
                  <button type="button" onClick={() => setCart((c) => c.map((i) => (i.id === x.id ? { ...i, qty: i.qty + 1 } : i)))}>
                    <Plus className="w-4 h-4" />
                  </button>
                  <span className="w-16 text-right">{x.price * x.qty}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-1 my-2">
            {(["cash", "telebirr", "cbe", "card"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setPay(m)}
                className={cn(
                  "flex-1 text-xs py-1.5 rounded-lg border capitalize",
                  pay === m ? "bg-semay-900 text-white border-semay-900" : "border-semay-200"
                )}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="flex justify-between font-semibold text-sm mb-2">
            <span>Total</span>
            <span>{total} ETB</span>
          </div>
          {msg && <p className="text-xs text-semay-600 mb-2">{msg}</p>}
          <button
            type="button"
            disabled={!cart.length || busy}
            onClick={send}
            className="w-full flex items-center justify-center gap-2 bg-semay-900 text-white py-3 rounded-xl text-sm font-medium disabled:opacity-40"
          >
            <Send className="w-4 h-4" />
            {busy ? "..." : "Complete sale"}
          </button>
        </div>
      </div>
    </div>
  )
}
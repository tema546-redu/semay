import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { salonApi } from "../../lib/api"

export default function POS() {
  const [services, setServices] = useState<any[]>([])
  const [cart, setCart] = useState<any[]>([])
  const [payment, setPayment] = useState("Cash")

  useEffect(() => { salonApi.services().then(setServices).catch(() => setServices([])) }, [])

  const addToCart = (s: any) => setCart((c) => [...c, { serviceId: s.id, name: s.name, price: Number(s.price), quantity: 1 }])
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const checkout = async () => {
    if (cart.length === 0) return
    await salonApi.checkout({ paymentMethod: payment, items: cart })
    setCart([])
  }

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3">
        <Link to="/salon" className="text-stone-500"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="font-semibold text-sm">Checkout</h1>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-4 pb-10">
        <div className="grid grid-cols-2 gap-2">
          {services.map((s) => (
            <button key={s.id} onClick={() => addToCart(s)} className="bg-white border rounded-xl p-3 text-left text-sm">
              <div className="font-medium">{s.name}</div>
              <div className="text-xs text-stone-500">{Number(s.price)} ETB</div>
            </button>
          ))}
        </div>

        <div className="bg-white border rounded-xl p-3 space-y-2">
          <div className="text-sm font-semibold">Cart</div>
          {cart.length === 0 ? (
            <p className="text-xs text-stone-400 py-2 text-center">Tap a service above</p>
          ) : (
            cart.map((i, idx) => (
              <div key={idx} className="flex justify-between text-sm">
                <span>{i.name}</span><span>{i.price} ETB</span>
              </div>
            ))
          )}
          <div className="flex gap-2 pt-2 border-t">
            {["Cash", "Telebirr", "Card"].map((m) => (
              <button key={m} onClick={() => setPayment(m)} className={`flex-1 text-xs py-1.5 rounded-lg border ${payment === m ? "bg-stone-900 text-white" : ""}`}>{m}</button>
            ))}
          </div>
          <div className="flex justify-between font-semibold pt-1">
            <span>Total</span><span>{total} ETB</span>
          </div>
          <button onClick={checkout} className="w-full bg-stone-900 text-white py-2.5 rounded-xl text-sm">Complete checkout</button>
        </div>
      </div>
    </div>
  )
}
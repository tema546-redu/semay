import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Camera } from "lucide-react"
import { request } from "../../lib/api"

export default function Reports() {
  const [data, setData] = useState<{ orders: any[]; byMethod: Record<string, number> } | null>(null)
  const [busyId, setBusyId] = useState<string | null>(null)
  const [msg, setMsg] = useState("")

  const load = () =>
    request<any>("/api/restaurant/payment-report")
      .then(setData)
      .catch(console.error)

  useEffect(() => {
    load()
    request("/api/restaurant/cleanup-receipts", { method: "POST" }).catch(() => {})
  }, [])

  const onPhoto = async (orderId: string, method: string, file: File) => {
    if (file.size > 1_200_000) {
      setMsg("Photo max ~1.2MB")
      return
    }
    setBusyId(orderId)
    setMsg("")
    const reader = new FileReader()
    reader.onload = async () => {
      try {
        await request(`/api/orders/${orderId}/payment`, {
          method: "PATCH",
          body: JSON.stringify({
            paymentMethod: method,
            paymentReceipt: String(reader.result),
          }),
        })
        setMsg("Receipt saved")
        load()
      } catch (e: any) {
        setMsg(e.message || "Failed")
      } finally {
        setBusyId(null)
      }
    }
    reader.readAsDataURL(file)
  }

  const methods = data?.byMethod || {}

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Reports & payments</h1>
      </header>

      <div className="max-w-2xl mx-auto p-4 space-y-4">
        {msg && <p className="text-sm text-semay-600">{msg}</p>}

        <div className="grid grid-cols-2 gap-2">
          {["cash", "telebirr", "cbe", "card", "unknown"].map((m) => (
            <div key={m} className="bg-white border rounded-xl p-3">
              <div className="text-[10px] uppercase text-semay-400 font-semibold">{m}</div>
              <div className="text-lg font-semibold">{Math.round(methods[m] || 0)} ETB</div>
            </div>
          ))}
        </div>

        <p className="text-xs text-semay-500">
          After the guest pays by Telebirr/CBE, attach a receipt photo. Photos older than 7 days are cleared.
        </p>

        <div className="bg-white border rounded-2xl divide-y">
          {!data?.orders?.length ? (
            <p className="p-6 text-sm text-semay-400 text-center">No orders in last 7 days</p>
          ) : (
            data.orders.map((o) => (
              <div key={o.id} className="p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">
                    Table {o.tableNumber} · {o.status}
                  </span>
                  <span className="font-semibold">{Number(o.total)} ETB</span>
                </div>
                <div className="text-xs text-semay-500">
                  {new Date(o.createdAt).toLocaleString()} · {o.paymentMethod || "no method yet"}
                </div>
                {o.paymentReceipt && (
                  <img
                    src={o.paymentReceipt}
                    alt="Receipt"
                    className="h-24 rounded-lg border object-cover"
                  />
                )}
                <div className="flex flex-wrap gap-2 items-center">
                  {["cash", "telebirr", "cbe", "card"].map((m) => (
                    <label
                      key={m}
                      className="text-xs px-2 py-1.5 rounded-lg border border-semay-200 cursor-pointer hover:bg-semay-50 inline-flex items-center gap-1"
                    >
                      <Camera className="w-3 h-3" />
                      {m}
                      <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        className="hidden"
                        disabled={busyId === o.id}
                        onChange={(e) => {
                          const f = e.target.files?.[0]
                          if (f) onPhoto(o.id, m, f)
                        }}
                      />
                    </label>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
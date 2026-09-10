import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import { ArrowLeft, AlertTriangle, CheckCircle } from "lucide-react"

export default function GarmentOrderDetail() {
  const { id } = useParams()
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [order, setOrder] = useState<any>(null)
  const [check, setCheck] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    Promise.all([
      garmentApi.orders().then((list) => list.find((o: any) => o.id === id)),
      garmentApi.materialCheck(id),
    ])
      .then(([ord, chk]) => {
        setOrder(ord)
        setCheck(chk)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <div className="min-h-svh flex items-center justify-center text-semay-500">{isAm ? "በመጫን ላይ..." : "Loading..."}</div>
  }

  if (!order) {
    return <div className="p-6 text-center">{isAm ? "ትዕዛዝ አልተገኘም" : "Order not found"}</div>
  }

  return (
    <div className="min-h-svh bg-semay-50 pb-10">
      <div className="bg-white border-b border-semay-200 px-4 py-3 flex items-center gap-3">
        <Link to="/garment/orders"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="font-semibold text-lg">{order.orderNumber}</h1>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-white border border-semay-200 rounded-2xl p-4">
          <div className="font-medium text-lg">{order.style?.name}</div>
          <div className="text-sm text-semay-500 mt-1">
            {order.plannedQty} pcs · {order.customerName || "-"}
          </div>
        </div>

        {/* Material Check Result */}
        {check && (
          <div className={`rounded-2xl p-4 border ${check.canStart ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
            <div className="flex items-center gap-2 mb-2">
              {check.canStart ? (
                <CheckCircle className="w-5 h-5 text-success" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-danger" />
              )}
              <span className="font-medium">
                {check.canStart
                  ? (isAm ? "ሁሉም እቃዎች በቂ ናቸው" : "All materials are enough")
                  : (isAm ? "ትዕዛዙ አሁን መጀመር አይችልም" : "Order cannot start yet")}
              </span>
            </div>
            <p className="text-sm text-semay-600">{check.message}</p>
          </div>
        )}

        {/* Materials table */}
        {check?.checks?.length > 0 && (
          <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden">
            <div className="px-4 py-3 border-b border-semay-100 font-medium">
              {isAm ? "የቁሳቁስ ሁኔታ" : "Material Status"}
            </div>
            {check.checks.map((c: any) => (
              <div key={c.materialId} className="px-4 py-3 border-b border-semay-50 flex justify-between text-sm">
                <div>
                  <div className="font-medium">{c.name}</div>
                  <div className="text-semay-500">
                    {isAm ? "ያስፈልጋል" : "Need"}: {c.needed} {c.unit} · {isAm ? "ያለ" : "Have"}: {c.available}
                  </div>
                </div>
                <span className={
                  c.status === "SHORTAGE" ? "text-danger font-medium" :
                  c.status === "LOW" ? "text-warning font-medium" : "text-success"
                }>
                  {c.status === "SHORTAGE" ? (isAm ? "እጥረት" : "Shortage") :
                   c.status === "LOW" ? (isAm ? "ዝቅተኛ" : "Low") : "OK"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, CreditCard, Copy } from "lucide-react"
import { billingApi } from "../lib/api"
import { cn } from "../lib/utils"

export default function Billing() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [data, setData] = useState<any>(null)
  const [pending, setPending] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<string | null>(null)
  const [amount, setAmount] = useState(0)
  const [reference, setReference] = useState("")
  const [method, setMethod] = useState<"telebirr" | "cbe">("telebirr")
  const [receipt, setReceipt] = useState("")
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState("")

  const load = async () => {
    try {
      const cur = await billingApi.current()
      setData(cur)
      if (cur?.subscription?.plan) {
        setSelected(cur.subscription.plan)
        setAmount(Number(cur.subscription.amount) || 0)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
    try {
      const list = await billingApi.pending()
      setPending(list || [])
    } catch {
      setPending([])
    }
  }

  useEffect(() => {
    load()
  }, [])

  const onReceipt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 1_500_000) {
      setMsg("Image too large (max ~1.5MB)")
      return
    }
    const reader = new FileReader()
    reader.onload = () => setReceipt(String(reader.result || ""))
    reader.readAsDataURL(file)
  }

  const choose = async (plan: string, planAmount: number) => {
    setBusy(true)
    setMsg("")
    try {
      await billingApi.selectPlan(plan)
      setSelected(plan)
      setAmount(planAmount)
      setMsg(isAm ? "እቅድ ተመርጧል። ክፍያ ይፈጽሙ።" : "Plan selected. Complete payment below.")
      await load()
    } catch (e: any) {
      setMsg(e.message || "Failed")
    } finally {
      setBusy(false)
    }
  }

  const markPaid = async () => {
    if (!selected || reference.trim().length < 3) {
      setMsg(isAm ? "የክፍያ ማጣቀሻ ያስገቡ" : "Enter payment reference")
      return
    }
    setBusy(true)
    try {
      await billingApi.markPaid(selected, reference.trim(), method, receipt || undefined)
      setMsg(
        isAm
          ? "ክፍያ ተልኳል — የSemay ፈቃድ በጥቂት ደቂቃዎች ይጠበቃል"
          : "Payment submitted — waiting for Semay approval"
      )
      setReference("")
      setReceipt("")
      await load()
    } catch (e: any) {
      setMsg(e.message || "Failed")
    } finally {
      setBusy(false)
    }
  }

  const approve = async (organizationId: string) => {
    setBusy(true)
    try {
      await billingApi.approve(organizationId)
      setMsg(isAm ? "ፀድቋል — ደንበኝነት ንቁ ነው" : "Approved — subscription ACTIVE")
      await load()
    } catch (e: any) {
      setMsg(e.message || "Approve failed")
    } finally {
      setBusy(false)
    }
  }

  const reject = async (organizationId: string) => {
    setBusy(true)
    try {
      await billingApi.reject(organizationId)
      setMsg(isAm ? "ተከልክሏል" : "Payment rejected")
      await load()
    } catch (e: any) {
      setMsg(e.message || "Reject failed")
    } finally {
      setBusy(false)
    }
  }

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setMsg(isAm ? "ተቀድቷል" : "Copied")
  }

  const sub = data?.subscription
  const plans = data?.plans || []
  const pay = data?.payment
  const isPending = sub?.status === "PENDING_PAYMENT" || sub?.isPending

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 px-6 h-14 flex items-center gap-4 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5 text-semay-600" />
        </Link>
        <h1 className="font-semibold text-semay-900 flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          {isAm ? "ደንበኝነት እና ክፍያ" : "Subscription & Billing"}
        </h1>
      </header>

      <div className="max-w-3xl mx-auto p-6 space-y-6">
        {loading ? (
          <div className="text-semay-400 text-sm">Loading...</div>
        ) : (
          <>
            <div className="bg-white border border-semay-200 rounded-2xl p-5 text-sm space-y-1 shadow-sm">
              <div className="text-xs font-medium text-semay-400 uppercase mb-2">
                {isAm ? "ሁኔታ" : "Status"}
              </div>
              {sub ? (
                <>
                  <div className="flex justify-between">
                    <span className="text-semay-500">Status</span>
                    <span
                      className={cn(
                        "font-semibold",
                        sub.isActive && "text-green-600",
                        isPending && "text-amber-600",
                        !sub.isActive && !isPending && "text-amber-600"
                      )}
                    >
                      {sub.status}
                      {sub.isTrial ? " (trial)" : ""}
                      {isPending ? (isAm ? " — በመጠባበቅ ላይ" : " — awaiting approval") : ""}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-semay-500">{isAm ? "ቀናት የቀሩ" : "Days left"}</span>
                    <span className="font-semibold">{sub.daysLeft}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-semay-500">Until</span>
                    <span>{new Date(sub.endDate).toLocaleDateString()}</span>
                  </div>
                  {sub.paymentRef && (
                    <div className="flex justify-between">
                      <span className="text-semay-500">Ref</span>
                      <span className="font-mono text-xs">{sub.paymentRef}</span>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-semay-500">No subscription</p>
              )}
              <p className="text-xs text-semay-400 pt-2">
                {data?.organizationName} · {data?.businessType} · Trial 3 days
              </p>
            </div>

            {isPending && (
              <div className="bg-amber-50 border border-amber-200 text-amber-900 text-sm px-4 py-3 rounded-xl">
                {isAm
                  ? "ክፍያዎ ተልኳል። Semay ካረጋገጠ በኋላ ደንበኝነት ይነቃል።"
                  : "Your payment was submitted. Semay will activate after verifying the transfer."}
              </div>
            )}

            {msg && (
              <div className="bg-semay-900 text-white text-sm px-4 py-3 rounded-xl">{msg}</div>
            )}

            {pending.length > 0 && (
              <div className="bg-white border border-amber-200 rounded-2xl p-5 space-y-3 shadow-sm">
                <h2 className="font-semibold text-semay-900">
                  {isAm ? "የሚጠብቁ ክፍያዎች" : "Pending approvals"}
                </h2>
                {pending.map((p) => (
                  <div
                    key={p.organizationId}
                    className="border border-semay-100 rounded-xl p-3 text-sm space-y-1"
                  >
                    <div className="font-medium">{p.organizationName || p.organizationId}</div>
                    <div className="text-semay-500">
                      {p.plan} · {Number(p.amount).toLocaleString()} ETB · {p.paymentMethod}
                    </div>
                    <div className="font-mono text-xs">Ref: {p.paymentRef}</div>
                    <div className="flex gap-2 pt-2">
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => approve(p.organizationId)}
                        className="bg-semay-900 text-white text-xs px-3 py-1.5 rounded-full"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => reject(p.organizationId)}
                        className="border text-xs px-3 py-1.5 rounded-full"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div>
              <h2 className="font-semibold text-semay-900 mb-3">
                {isAm ? "1. እቅድ ይምረጡ" : "1. Choose a plan"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {plans.map((p: any) => (
                  <button
                    key={p.plan}
                    type="button"
                    disabled={busy}
                    onClick={() => choose(p.plan, p.amount)}
                    className={cn(
                      "text-left bg-white border rounded-2xl p-5 transition shadow-sm",
                      selected === p.plan
                        ? "border-semay-900 ring-2 ring-semay-900/20"
                        : "border-semay-200"
                    )}
                  >
                    <div className="font-semibold text-semay-900">
                      {isAm ? p.labelAm : p.label}
                    </div>
                    {p.savePercent > 0 && (
                      <span className="text-xs text-green-600">Save {p.savePercent}%</span>
                    )}
                    <div className="text-2xl font-semibold mt-1">
                      {Number(p.amount).toLocaleString()}{" "}
                      <span className="text-sm font-normal text-semay-500">ETB</span>
                    </div>
                    <div className="text-xs text-semay-400">{p.days} days</div>
                  </button>
                ))}
              </div>
            </div>

            {selected && pay && (
              <div className="bg-white border border-semay-200 rounded-2xl p-5 space-y-4 shadow-sm">
                <h2 className="font-semibold text-semay-900">
                  {isAm ? "2. ክፍያ ይፈጽሙ" : "2. Pay"} — {amount.toLocaleString()} ETB
                </h2>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setMethod("telebirr")}
                    className={cn(
                      "flex-1 py-2 rounded-xl text-sm font-medium border",
                      method === "telebirr"
                        ? "bg-semay-900 text-white border-semay-900"
                        : "border-semay-200"
                    )}
                  >
                    Telebirr
                  </button>
                  <button
                    type="button"
                    onClick={() => setMethod("cbe")}
                    className={cn(
                      "flex-1 py-2 rounded-xl text-sm font-medium border",
                      method === "cbe"
                        ? "bg-semay-900 text-white border-semay-900"
                        : "border-semay-200"
                    )}
                  >
                    CBE
                  </button>
                </div>

                {method === "telebirr" ? (
                  <div className="text-sm space-y-2 bg-semay-50 rounded-xl p-4">
                    <p>
                      Send <strong>{amount.toLocaleString()} ETB</strong> via Telebirr to:
                    </p>
                    <div className="flex items-center gap-2">
                      <code className="font-mono text-base font-semibold">{pay.telebirrPhone}</code>
                      <button
                        type="button"
                        onClick={() => copy(pay.telebirrPhone)}
                        className="p-1.5 border rounded-lg"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-semay-500">Name: {pay.telebirrName}</p>
                  </div>
                ) : (
                  <div className="text-sm space-y-2 bg-semay-50 rounded-xl p-4">
                    <p>
                      Transfer <strong>{amount.toLocaleString()} ETB</strong> to CBE:
                    </p>
                    <div className="flex items-center gap-2">
                      <code className="font-mono text-base font-semibold">{pay.cbeAccount}</code>
                      <button
                        type="button"
                        onClick={() => copy(pay.cbeAccount)}
                        className="p-1.5 border rounded-lg"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-semay-500">
                      {pay.cbeName} · {pay.bankName}
                    </p>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium text-semay-700 block mb-1">
                    {isAm ? "3. የክፍያ ማጣቀሻ" : "3. Payment reference"}
                  </label>
                  <input
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    placeholder="e.g. TBxxxx or CBE ref"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-semay-700 block mb-1">
                    {isAm ? "የክፍያ ደረሰኝ ፎቶ (አማራጭ)" : "Receipt photo (optional)"}
                  </label>
                  <input type="file" accept="image/*" onChange={onReceipt} className="text-sm w-full" />
                  {receipt && (
                    <img
                      src={receipt}
                      alt="Receipt"
                      className="mt-2 h-24 rounded-lg border object-cover"
                    />
                  )}
                </div>

                <button
                  type="button"
                  disabled={busy || isPending}
                  onClick={markPaid}
                  className="w-full bg-semay-900 text-white py-3 rounded-xl font-medium disabled:opacity-50"
                >
                  {isAm ? "ከፈልኩ — ለፈቃድ ላክ" : "I paid — Submit for approval"}
                </button>
                <p className="text-xs text-semay-400">
                  {isAm
                    ? "ክፍያ አውቶማቲክ አይነቃም። Semay ካረጋገጠ በኋላ ይነቃል።"
                    : "Does not activate automatically. after /admin/approve to approve."}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
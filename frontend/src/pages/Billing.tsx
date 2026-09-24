import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, CreditCard, Copy } from "lucide-react"
import { billingApi } from "../lib/api"
import { cn } from "../lib/utils"
import { useAuth } from "../lib/auth"

function printSemayReceipt(opts: {
  orgName: string
  plan: string
  amount: number
  ref: string
  method: string
  status: string
  endDate?: string
}) {
  const w = window.open("", "_blank", "width=360,height=520")
  if (!w) {
    alert("Allow pop-ups to print receipt")
    return
  }
  const when = new Date().toLocaleString()
  w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Semay Receipt</title>
<style>
  body{font-family:system-ui,sans-serif;padding:24px;color:#111;max-width:320px;margin:0 auto}
  h1{font-size:16px;margin:0 0 4px}
  .sub{color:#666;font-size:12px;margin-bottom:16px}
  .row{display:flex;justify-content:space-between;font-size:13px;padding:6px 0;border-bottom:1px solid #eee}
  .foot{margin-top:20px;font-size:11px;color:#666;text-align:center}
  @media print{button{display:none}}
</style></head><body>
  <h1>Semay · ሰማይ</h1>
  <div class="sub">Subscription receipt</div>
  <div class="row"><span>Business</span><strong>${opts.orgName}</strong></div>
  <div class="row"><span>Plan</span><strong>${opts.plan}</strong></div>
  <div class="row"><span>Amount</span><strong>${opts.amount.toLocaleString()} ETB</strong></div>
  <div class="row"><span>Method</span><strong>${opts.method}</strong></div>
  <div class="row"><span>Reference</span><strong>${opts.ref}</strong></div>
  <div class="row"><span>Status</span><strong>${opts.status}</strong></div>
  ${opts.endDate ? `<div class="row"><span>Valid until</span><strong>${new Date(opts.endDate).toLocaleDateString()}</strong></div>` : ""}
  <div class="row"><span>Printed</span><span>${when}</span></div>
  <p class="foot">Not a bank slip. Semay activates after verification.<br/>Thank you.</p>
  <script>window.onload=()=>{window.print()}</script>
</body></html>`)
  w.document.close()
}

export default function Billing() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<string | null>(null)
  const [amount, setAmount] = useState(0)
  const [reference, setReference] = useState("")
  const [method, setMethod] = useState<"telebirr" | "cbe">("telebirr")
  const [receipt, setReceipt] = useState("")
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState("")

  const { organization } = useAuth() as any
  const backTo =
    String(organization?.type || "").toUpperCase() === "GARMENT"
      ? "/garment/settings"
      : "/dashboard"

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
        <Link to={backTo} className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
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
                      {Number(data?.branchCount) > 1 && (
                                        <p className="text-xs text-semay-500 pt-1">
                                          {isAm
                                            ? `ዋጋው ${data.branchCount} ቅርንጫፎችን ያካትታል። ተጨማሪ ቅርንጫፍ ወርሃዊ ክፍያን ይጨምራል።`
                                            : `Price includes ${data.branchCount} branches. Extra branches increase the monthly fee.`}
                                          </p>
                                        )} 
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
                  {(sub.paymentRef || isPending || sub.isActive) && (
  <button
    type="button"
    className="mt-3 w-full text-sm border border-semay-200 py-2 rounded-xl"
    onClick={() =>
      printSemayReceipt({
        orgName: data?.organizationName || "Business",
        plan: String(sub.plan || selected || ""),
        amount: Number(sub.amount || amount || 0),
        ref: String(sub.paymentRef || reference || "—"),
        method: String(sub.paymentMethod || method || "—"),
        status: String(sub.status || ""),
        endDate: sub.endDate,
      })
    }
  >
    {isAm ? "ደረሰኝ አትም" : "Print Semay receipt"}
  </button>
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
                    : "Does not activate automatically. Semay activates after verification."}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}         
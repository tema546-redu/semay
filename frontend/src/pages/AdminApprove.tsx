import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const API = import.meta.env.VITE_API_URL || "http://localhost:3001"

export default function AdminApprove() {
  const [key, setKey] = useState(() => localStorage.getItem("semay_admin_key") || "")
  const [tab, setTab] = useState<"pending" | "orgs">("pending")
  const [pending, setPending] = useState<any[]>([])
  const [orgs, setOrgs] = useState<any[]>([])
  const [msg, setMsg] = useState("")
  const [busy, setBusy] = useState(false)

  const headers = () => ({
    "Content-Type": "application/json",
    "x-admin-key": key,
  })

  const load = async () => {
    if (!key.trim()) {
      setMsg("Enter admin key")
      return
    }
    localStorage.setItem("semay_admin_key", key)
    setMsg("")
    try {
      const [pRes, oRes] = await Promise.all([
        fetch(`${API}/api/admin/billing/pending`, { headers: headers() }),
        fetch(`${API}/api/admin/billing/orgs`, { headers: headers() }),
      ])
      const pData = await pRes.json()
      const oData = await oRes.json()
      if (!pRes.ok) throw new Error(pData.error || "Pending failed")
      if (!oRes.ok) throw new Error(oData.error || "Orgs failed")
      setPending(pData)
      setOrgs(oData)
    } catch (e: any) {
      setMsg(e.message)
      setPending([])
      setOrgs([])
    }
  }

  useEffect(() => {
    if (key) load()
  }, [])

  const approve = async (organizationId: string) => {
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/admin/billing/approve`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ organizationId }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed")
      setMsg("Approved ✓")
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  const reject = async (organizationId: string) => {
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/admin/billing/reject`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ organizationId }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed")
      setMsg("Rejected")
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-svh bg-slate-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">Semay Admin</h1>
            <p className="text-xs text-slate-500">Approve payments · view all businesses</p>
          </div>
          <Link to="/" className="text-sm text-slate-500">
            Home
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 items-center bg-white border rounded-2xl p-3">
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Admin key (SEMAY_ADMIN_KEY)"
            className="flex-1 min-w-[160px] px-3 py-2 rounded-xl border text-sm"
          />
          <button
            type="button"
            onClick={load}
            className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm"
          >
            Load
          </button>
        </div>

        {msg && (
          <div className="text-sm bg-slate-900 text-white px-3 py-2 rounded-xl">{msg}</div>
        )}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setTab("pending")}
            className={`text-sm px-3 py-1.5 rounded-full ${
              tab === "pending" ? "bg-slate-900 text-white" : "border"
            }`}
          >
            Pending ({pending.length})
          </button>
          <button
            type="button"
            onClick={() => setTab("orgs")}
            className={`text-sm px-3 py-1.5 rounded-full ${
              tab === "orgs" ? "bg-slate-900 text-white" : "border"
            }`}
          >
            All businesses ({orgs.length})
          </button>
        </div>

        {tab === "pending" && (
          <div className="space-y-3">
            {pending.length === 0 ? (
              <p className="text-sm text-slate-400">No pending payments</p>
            ) : (
              pending.map((p) => (
                <div key={p.organizationId} className="bg-white border rounded-2xl p-4 text-sm space-y-1">
                  <div className="font-semibold text-slate-900">{p.organizationName}</div>
                  <div className="text-slate-500">
                    {p.businessType} · {p.plan} · {Number(p.amount).toLocaleString()} ETB
                  </div>
                  <div className="text-slate-600">
                    Owner: {p.ownerName || "—"} · {p.ownerEmail || "—"}
                    {p.ownerPhone ? ` · ${p.ownerPhone}` : ""}
                  </div>
                  <div className="font-mono text-xs">Ref: {p.paymentRef || "—"}</div>
                  <div className="text-xs text-slate-500">
                    Method: {p.paymentMethod || "—"} · Trial days left: {p.daysLeftTrial}
                  </div>
                  {p.paymentReceipt && (
                    <a href={p.paymentReceipt} target="_blank" rel="noreferrer" className="text-xs text-blue-600 underline">
                      View receipt image
                    </a>
                  )}
                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => approve(p.organizationId)}
                      className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-full"
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
              ))
            )}
          </div>
        )}

        {tab === "orgs" && (
          <div className="space-y-2">
            {orgs.map((o) => (
              <div key={o.organizationId} className="bg-white border rounded-xl p-3 text-sm flex flex-wrap justify-between gap-2">
                <div>
                  <div className="font-medium">{o.name}</div>
                  <div className="text-xs text-slate-500">
                    {o.type} · {o.ownerName} · {o.ownerEmail}
                  </div>
                </div>
                <div className="text-right text-xs">
                  <div className="font-semibold">{o.status}</div>
                  <div className="text-slate-500">
                    {o.daysLeft} days left
                    {o.endDate ? ` · until ${new Date(o.endDate).toLocaleDateString()}` : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
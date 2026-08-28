import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const API = import.meta.env.VITE_API_URL || "http://localhost:3001"

export default function AdminApprove() {
  const [key, setKey] = useState(() => localStorage.getItem("semay_admin_key") || "")
  const [tab, setTab] = useState<"pending" | "orgs" | "feedback">("pending")
  const [pending, setPending] = useState<any[]>([])
  const [orgs, setOrgs] = useState<any[]>([])
  const [feedbackList, setFeedbackList] = useState<any[]>([])
  const [replyText, setReplyText] = useState<Record<string, string>>({})
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
      const [pRes, oRes, fRes] = await Promise.all([
        fetch(`${API}/api/admin/billing/pending`, { headers: headers() }),
        fetch(`${API}/api/admin/billing/orgs`, { headers: headers() }),
        fetch(`${API}/api/feedback/admin`, { headers: headers() }),
      ])

      const pData = await pRes.json()
      const oData = await oRes.json()
      const fData = await fRes.json().catch(() => [])

      if (!pRes.ok) throw new Error(pData.error || "Pending failed")
      if (!oRes.ok) throw new Error(oData.error || "Orgs failed")

      setPending(Array.isArray(pData) ? pData : [])
      setOrgs(Array.isArray(oData) ? oData : [])
      setFeedbackList(fRes.ok && Array.isArray(fData) ? fData : [])

      if (!fRes.ok) {
        setMsg(
          (fData && fData.error) ||
            "Feedback API not ready (deploy /api/feedback/admin)"
        )
      }
    } catch (e: any) {
      setMsg(e.message || "Load failed")
      setPending([])
      setOrgs([])
      setFeedbackList([])
    }
  }

  useEffect(() => {
    if (key) load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const sendReply = async (id: string) => {
    const reply = (replyText[id] || "").trim()
    if (!reply) {
      setMsg("Write a reply first")
      return
    }
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/feedback/admin/${id}/reply`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ reply }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed")
      setMsg("Reply sent")
      setReplyText((s) => ({ ...s, [id]: "" }))
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
            <p className="text-xs text-slate-500">
              Approve payments · businesses · feedback
            </p>
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

        <div className="flex flex-wrap gap-2">
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
          <button
            type="button"
            onClick={() => setTab("feedback")}
            className={`text-sm px-3 py-1.5 rounded-full ${
              tab === "feedback" ? "bg-slate-900 text-white" : "border"
            }`}
          >
            Feedback ({feedbackList.length})
          </button>
        </div>

        {tab === "pending" && (
          <div className="space-y-3">
            {pending.length === 0 ? (
              <p className="text-sm text-slate-400">No pending payments</p>
            ) : (
              pending.map((p) => (
                <div
                  key={p.organizationId}
                  className="bg-white border rounded-2xl p-4 text-sm space-y-1"
                >
                  <div className="font-semibold text-slate-900">
                    {p.organizationName}
                  </div>
                  <div className="text-slate-500">
                    {p.businessType} · {p.plan} ·{" "}
                    {Number(p.amount).toLocaleString()} ETB
                  </div>
                  <div className="text-slate-600">
                    Owner: {p.ownerName || "—"} · {p.ownerEmail || "—"}
                    {p.ownerPhone ? ` · ${p.ownerPhone}` : ""}
                  </div>
                  <div className="font-mono text-xs">Ref: {p.paymentRef || "—"}</div>
                  <div className="text-xs text-slate-500">
                    Method: {p.paymentMethod || "—"} · Trial days left:{" "}
                    {p.daysLeftTrial}
                  </div>
                  {p.paymentReceipt && (
                    <a
                      href={p.paymentReceipt}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-blue-600 underline"
                    >
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
            {orgs.length === 0 ? (
              <p className="text-sm text-slate-400">No businesses</p>
            ) : (
              orgs.map((o) => (
                <div
                  key={o.organizationId}
                  className="bg-white border rounded-xl p-3 text-sm flex flex-wrap justify-between gap-2"
                >
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
                      {o.endDate
                        ? ` · until ${new Date(o.endDate).toLocaleDateString()}`
                        : ""}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "feedback" && (
          <div className="space-y-3">
            {feedbackList.length === 0 ? (
              <p className="text-sm text-slate-400">
                No feedback yet (or feedback API not deployed)
              </p>
            ) : (
              feedbackList.map((f) => (
                <div
                  key={f.id}
                  className="bg-white border rounded-2xl p-4 text-sm space-y-2"
                >
                  <p className="text-slate-800 whitespace-pre-wrap">{f.message}</p>
                  <p className="text-xs text-slate-400">
                    {f.createdAt ? new Date(f.createdAt).toLocaleString() : ""}
                    {f.email ? ` · ${f.email}` : ""}
                    {f.organizationId
                      ? ` · org ${String(f.organizationId).slice(0, 8)}…`
                      : ""}
                  </p>
                  {f.reply && (
                    <div className="bg-emerald-50 rounded-lg p-2 text-emerald-900 text-sm">
                      Reply: {f.reply}
                    </div>
                  )}
                  <textarea
                    value={replyText[f.id] || ""}
                    onChange={(e) =>
                      setReplyText((s) => ({ ...s, [f.id]: e.target.value }))
                    }
                    placeholder="Write reply to business owner..."
                    className="w-full border rounded-xl px-3 py-2 text-sm"
                    rows={2}
                  />
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => sendReply(f.id)}
                    className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-full"
                  >
                    Send reply
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}
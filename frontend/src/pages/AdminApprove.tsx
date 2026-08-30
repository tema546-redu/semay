import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const API = import.meta.env.VITE_API_URL || "http://localhost:3001"

type Tab = "pending" | "orgs" | "feedback" | "usage"

export default function AdminApprove() {
  const [key, setKey] = useState(() => localStorage.getItem("semay_admin_key") || "")
  const [tab, setTab] = useState<Tab>("pending")
  const [pending, setPending] = useState<any[]>([])
  const [orgs, setOrgs] = useState<any[]>([])
  const [feedbackList, setFeedbackList] = useState<any[]>([])
  const [usage, setUsage] = useState<any>(null)
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
      const [pRes, oRes, fRes, uRes] = await Promise.all([
        fetch(`${API}/api/admin/billing/pending`, { headers: headers() }),
        fetch(`${API}/api/admin/billing/orgs`, { headers: headers() }),
        fetch(`${API}/api/feedback/admin`, { headers: headers() }).catch(() => null),
        fetch(`${API}/api/admin/billing/usage`, { headers: headers() }).catch(() => null),
      ])

      const pData = await pRes.json()
      const oData = await oRes.json()

      if (!pRes.ok) throw new Error(pData.error || "Pending failed")
      if (!oRes.ok) throw new Error(oData.error || "Orgs failed")

      setPending(Array.isArray(pData) ? pData : [])
      setOrgs(Array.isArray(oData) ? oData : [])

      if (fRes && fRes.ok) {
        const fData = await fRes.json()
        setFeedbackList(Array.isArray(fData) ? fData : [])
      } else {
        setFeedbackList([])
      }

      if (uRes && uRes.ok) {
        setUsage(await uRes.json())
      } else {
        setUsage(null)
      }
    } catch (e: any) {
      setMsg(e.message || "Load failed")
      setPending([])
      setOrgs([])
      setFeedbackList([])
      setUsage(null)
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

  const maxHour = Math.max(1, ...(usage?.byHour?.map((h: any) => h.count) || [1]))

  const tabBtn = (id: Tab, label: string) => (
    <button
      type="button"
      onClick={() => setTab(id)}
      className={`text-sm px-3 py-1.5 rounded-full ${
        tab === id ? "bg-slate-900 text-white" : "border border-slate-200"
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="min-h-svh bg-slate-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">Semay Admin</h1>
            <p className="text-xs text-slate-500">Payments · businesses · feedback · usage</p>
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
            placeholder="Admin key"
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
          {tabBtn("pending", `Pending (${pending.length})`)}
          {tabBtn("orgs", `Businesses (${orgs.length})`)}
          {tabBtn("feedback", `Feedback (${feedbackList.length})`)}
          {tabBtn("usage", "Usage")}
        </div>

        {/* PENDING */}
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
                  <div className="font-semibold">{p.organizationName}</div>
                  <div className="text-slate-500">
                    {p.businessType} · {p.plan} · {Number(p.amount).toLocaleString()} ETB
                  </div>
                  <div className="text-slate-600">
                    {p.ownerName} · {p.ownerEmail}
                    {p.ownerPhone ? ` · ${p.ownerPhone}` : ""}
                  </div>
                  <div className="font-mono text-xs">Ref: {p.paymentRef || "—"}</div>
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

        {/* ORGS */}
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
                    <div className="text-slate-500">{o.daysLeft} days left</div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* FEEDBACK — clean cards */}
        {tab === "feedback" && (
          <div className="space-y-3">
            {feedbackList.length === 0 ? (
              <p className="text-sm text-slate-400">No feedback yet</p>
            ) : (
              feedbackList.map((f) => (
                <article
                  key={f.id}
                  className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] uppercase tracking-wide text-slate-400 font-medium">
                      Message
                    </span>
                    <time className="text-[11px] text-slate-400 shrink-0">
                      {f.createdAt ? new Date(f.createdAt).toLocaleString() : ""}
                    </time>
                  </div>
                  <p className="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
                    {f.message}
                  </p>
                  <div className="text-xs text-slate-500 border-t border-slate-100 pt-2">
                    {f.email && <span>{f.email}</span>}
                    {f.organizationId && (
                      <span className="ml-2 font-mono">
                        org {String(f.organizationId).slice(0, 8)}…
                      </span>
                    )}
                  </div>
                  {f.reply ? (
                    <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-3">
                      <div className="text-[10px] uppercase text-emerald-700 font-medium mb-1">
                        Your reply
                      </div>
                      <p className="text-sm text-emerald-900 whitespace-pre-wrap">{f.reply}</p>
                    </div>
                  ) : (
                    <div className="space-y-2 pt-1">
                      <textarea
                        value={replyText[f.id] || ""}
                        onChange={(e) =>
                          setReplyText((s) => ({ ...s, [f.id]: e.target.value }))
                        }
                        placeholder="Reply to this business..."
                        className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
                        rows={2}
                      />
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => sendReply(f.id)}
                        className="bg-slate-900 text-white text-xs px-4 py-2 rounded-full"
                      >
                        Send reply
                      </button>
                    </div>
                  )}
                </article>
              ))
            )}
          </div>
        )}

        {/* USAGE */}
        {tab === "usage" && (
          <div className="bg-white border rounded-2xl p-4 space-y-4">
            {!usage ? (
              <p className="text-sm text-slate-400">
                No usage data (deploy GET /api/admin/billing/usage)
              </p>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-lg font-semibold">{usage.orderCount7d}</div>
                    <div className="text-[10px] text-slate-500">Orders 7d</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-lg font-semibold">{usage.userCount}</div>
                    <div className="text-[10px] text-slate-500">Users</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-lg font-semibold">{usage.orgCount}</div>
                    <div className="text-[10px] text-slate-500">Businesses</div>
                  </div>
                </div>
                <p className="text-xs font-medium text-slate-600">Orders by hour (0–23)</p>
                <div className="flex items-end gap-0.5 h-28">
                  {(usage.byHour || []).map((h: any) => (
                    <div
                      key={h.hour}
                      title={`${h.hour}:00 → ${h.count} orders`}
                      className="flex-1 bg-slate-800 rounded-t min-h-[2px]"
                      style={{ height: `${Math.max(3, (h.count / maxHour) * 100)}%` }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
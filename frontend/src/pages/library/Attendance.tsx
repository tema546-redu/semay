import { useEffect, useMemo, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { libraryApi } from "../../lib/api"
import { useAuth } from "../../lib/auth"

type Visit = {
  id: string
  visitorName?: string
  name?: string
  createdAt: string
}

export default function LibraryAttendance() {
  const { organization, user, logout, loading: authLoading } = useAuth()
  const [name, setName] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [visits, setVisits] = useState<Visit[]>([])
  const [msg, setMsg] = useState("")
  const [msgKind, setMsgKind] = useState<"ok" | "err" | "">("")
  const [busy, setBusy] = useState(false)
  const [loadingList, setLoadingList] = useState(true)

  const loadToday = async () => {
    setLoadingList(true)
    try {
      const data = await libraryApi.visitsToday()
      setVisits(data.visits || [])
    } catch {
      setVisits([])
    } finally {
      setLoadingList(false)
    }
  }

  useEffect(() => {
    if (authLoading) return
    loadToday()
  }, [authLoading])

  useEffect(() => {
    const q = name.trim()
    if (q.length < 1) {
      setSuggestions([])
      return
    }
    const t = window.setTimeout(() => {
      libraryApi
        .suggestNames(q)
        .then((list) => setSuggestions(Array.isArray(list) ? list : []))
        .catch(() => setSuggestions([]))
    }, 180)
    return () => window.clearTimeout(t)
  }, [name])

  const markPresent = async (raw: string) => {
    const n = raw.trim().replace(/\s+/g, " ")
    if (n.length < 2) return
    setBusy(true)
    setMsg("")
    setMsgKind("")
    try {
      await libraryApi.markPresent(n)
      setMsg(`${n} — present. Next visitor.`)
      setMsgKind("ok")
      setName("")
      setSuggestions([])
      await loadToday()
    } catch (e: any) {
      const text = e?.message || "Failed"
      setMsg(text)
      setMsgKind("err")
      // still clear so next person can type without refresh
      if (/already/i.test(text)) {
        setName("")
        setSuggestions([])
        await loadToday()
      }
    } finally {
      setBusy(false)
    }
  }

  const ordered = useMemo(
    () =>
      [...visits].sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      ),
    [visits]
  )

  if (authLoading) {
    return (
      <div className="min-h-svh flex items-center justify-center text-sm text-stone-500">
        Loading…
      </div>
    )
  }

  if (organization?.type && organization.type !== "LIBRARY") {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="min-h-svh bg-[#f4f0e6] text-stone-900">
      <header className="border-b-2 border-stone-800 px-4 py-3 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
            Daily attendance
          </div>
          <div className="font-serif text-lg font-semibold">
            {organization?.name || "Library"}
          </div>
        </div>
        <div className="text-right text-xs text-stone-600">
          <div>{new Date().toLocaleDateString()}</div>
          <div className="text-stone-500">{user?.name}</div>
          <button type="button" onClick={logout} className="underline mt-1">
            Sign out
          </button>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        <section className="border-2 border-stone-800 bg-[#faf8f2] p-4 shadow-[4px_4px_0_0_#292524]">
          <label className="block font-serif text-sm mb-2">Visitor name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                markPresent(name)
              }
            }}
            placeholder="Write the name…"
            className="w-full border-0 border-b-2 border-stone-800 bg-transparent px-0 py-2 font-serif text-lg focus:outline-none"
            autoFocus
            disabled={busy}
          />

          {suggestions.length > 0 && (
            <ul className="mt-3 border border-stone-300 divide-y bg-white">
              {suggestions.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => markPresent(s)}
                    className="w-full text-left px-3 py-2.5 font-serif text-sm hover:bg-stone-100 flex justify-between"
                  >
                    <span>{s}</span>
                    <span className="text-[10px] uppercase tracking-wide text-stone-500">
                      Present
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          <button
            type="button"
            disabled={busy || name.trim().length < 2}
            onClick={() => markPresent(name)}
            className="mt-4 w-full border-2 border-stone-800 bg-stone-900 text-white py-2.5 font-serif text-sm disabled:opacity-40"
          >
            {busy ? "Saving…" : "Mark present"}
          </button>

          {msg && (
            <p
              className={`mt-3 text-center font-serif text-sm border-t border-dashed border-stone-400 pt-3 ${
                msgKind === "err" ? "text-rose-800" : "text-stone-700"
              }`}
            >
              {msg}
            </p>
          )}
        </section>

        <section className="border-2 border-stone-800 bg-[#faf8f2]">
          <div className="flex justify-between border-b-2 border-stone-800 px-3 py-2">
            <span className="font-serif text-sm">Today’s register</span>
            <span className="text-xs tabular-nums text-stone-600">
              {loadingList ? "…" : `${ordered.length} present`}
            </span>
          </div>

          {loadingList ? (
            <p className="px-3 py-6 text-center text-sm text-stone-500">Loading…</p>
          ) : ordered.length === 0 ? (
            <p className="px-3 py-8 text-center font-serif text-sm text-stone-500 italic">
              No names yet today.
            </p>
          ) : (
            <ol className="divide-y divide-stone-300">
              {ordered.map((v, i) => (
                <li
                  key={v.id || i}
                  className="flex items-baseline gap-3 px-3 py-2.5 font-serif text-sm"
                >
                  <span className="w-6 text-right text-stone-400 text-xs tabular-nums">
                    {i + 1}.
                  </span>
                  <span className="flex-1 border-b border-dotted border-stone-400 pb-0.5">
                    {v.visitorName || v.name}
                  </span>
                  <span className="text-[10px] text-stone-500 tabular-nums">
                    {v.createdAt
                      ? new Date(v.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : ""}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </section>

        {(user?.role === "OWNER" || user?.role === "MANAGER") && (
          <p className="text-center text-xs text-stone-500">
            <Link to="/library" className="underline">
              Back to library desk
            </Link>
          </p>
        )}
      </div>
    </div>
  )
}
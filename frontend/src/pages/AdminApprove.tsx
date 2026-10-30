import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"

const API = import.meta.env.VITE_API_URL || "http://localhost:3001"

type Tab = "pending" | "orgs" | "messages" | "usage" | "delala" | "contacts"

type DelalaRow = {
  id: string
  name: string
  nameAm?: string | null
  phone: string
  phone2?: string | null
  phone3?: string | null
  phone4?: string | null
  city: string
  subCity?: string | null
  area?: string | null
  categories: string[]
  photoUrl?: string | null
  address?: string | null
  mapsUrl?: string | null
  verified: boolean
}

type ContactRow = {
  id: string
  nameEn: string
  nameAm?: string | null
  phone: string
  phone2?: string | null
  phone3?: string | null
  phone4?: string | null
  category: string
  noteEn?: string | null
  noteAm?: string | null
  photoUrl?: string | null
  address?: string | null
  mapsUrl?: string | null
  website?: string | null
  verified: boolean
}

type CatRow = {
  id: string
  key: string
  labelEn: string
  labelAm?: string | null
  sortOrder: number
}

type CityRow = {
  id: string
  name: string
  country: string
  sortOrder: number
}

const BUSINESS_TYPES = [
  "RESTAURANT",
  "CAFE",
  "BAKERY",
  "HOTEL",
  "SUPERMARKET",
  "GYM",
  "SCHOOL",
  "UNIVERSITY",
  "PHARMACY",
  "SALON",
  "LIBRARY",
  "GARMENT",
  "STORE",
  "OTHER",
] as const

const EMPTY_DELALA = {
  name: "",
  nameAm: "",
  phone: "",
  phone2: "",
  phone3: "",
  phone4: "",
  city: "Addis Ababa",
  subCity: "Bole",
  area: "",
  categories: "house",
  photoUrl: "",
  address: "",
  mapsUrl: "",
}

const EMPTY_CONTACT = {
  nameEn: "",
  nameAm: "",
  phone: "",
  phone2: "",
  phone3: "",
  phone4: "",
  category: "hospital",
  noteEn: "",
  noteAm: "",
  photoUrl: "",
  address: "",
  mapsUrl: "",
  website: "",
}

const EMPTY_CAT = { key: "", labelEn: "", labelAm: "" }

function mapsSearchUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.trim())}`
}

export default function AdminApprove() {
  const [key, setKey] = useState(() => localStorage.getItem("semay_admin_key") || "")
  const [tab, setTab] = useState<Tab>("pending")
  const [pending, setPending] = useState<any[]>([])
  const [orgs, setOrgs] = useState<any[]>([])
  const [threads, setThreads] = useState<any[]>([])
  const [activeThread, setActiveThread] = useState<string | null>(null)
  const [chat, setChat] = useState<any[]>([])
  const [chatInput, setChatInput] = useState("")
  const [typeDraft, setTypeDraft] = useState<Record<string, string>>({})
  const [usage, setUsage] = useState<any>(null)
  const [analytics, setAnalytics] = useState<any>(null)
  const [delalas, setDelalas] = useState<DelalaRow[]>([])
  const [dForm, setDForm] = useState(EMPTY_DELALA)
  const [contacts, setContacts] = useState<ContactRow[]>([])
  const [cForm, setCForm] = useState(EMPTY_CONTACT)
  const [categories, setCategories] = useState<CatRow[]>([])
  const [catForm, setCatForm] = useState(EMPTY_CAT)
  const [cities, setCities] = useState<CityRow[]>([])
  const [cityForm, setCityForm] = useState({ name: "", country: "Ethiopia" })
  const [editingDelalaId, setEditingDelalaId] = useState<string | null>(null)
  const [editingContactId, setEditingContactId] = useState<string | null>(null)
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null)
  const [msg, setMsg] = useState("")
  const [busy, setBusy] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const headers = () => ({
    "Content-Type": "application/json",
    "x-admin-key": key,
  })

  const onPhotoFile = (file: File | null, apply: (url: string) => void) => {
    if (!file) return
    if (!file.type.startsWith("image/")) {
      setMsg("Choose an image file")
      return
    }
    if (file.size > 1_500_000) {
      setMsg("Image too large (max ~1.5MB)")
      return
    }
    const reader = new FileReader()
    reader.onload = () => apply(String(reader.result || ""))
    reader.readAsDataURL(file)
  }

  const load = async () => {
    if (!key.trim()) {
      setMsg("Enter admin key")
      return
    }
    localStorage.setItem("semay_admin_key", key)
    setMsg("")
    try {
      const [pRes, oRes, tRes, uRes, dRes, aRes, cRes, catRes, cityRes] =
        await Promise.all([
          fetch(`${API}/api/admin/billing/pending`, { headers: headers() }),
          fetch(`${API}/api/admin/billing/orgs`, { headers: headers() }),
          fetch(`${API}/api/feedback/chat/threads`, { headers: headers() }).catch(
            () => null
          ),
          fetch(`${API}/api/admin/billing/usage`, { headers: headers() }).catch(
            () => null
          ),
          fetch(`${API}/api/admin/delalas`, { headers: headers() }).catch(() => null),
          fetch(`${API}/api/admin/analytics/summary?days=7`, {
            headers: headers(),
          }).catch(() => null),
          fetch(`${API}/api/admin/contacts`, { headers: headers() }).catch(() => null),
          fetch(`${API}/api/admin/contacts/categories/list`, {
            headers: headers(),
          }).catch(() => null),
          fetch(`${API}/api/admin/delalas/cities`, { headers: headers() }).catch(
            () => null
          ),
        ])

      const pData = await pRes.json()
      const oData = await oRes.json()
      if (!pRes.ok) throw new Error(pData.error || "Pending failed")
      if (!oRes.ok) throw new Error(oData.error || "Orgs failed")

      setPending(Array.isArray(pData) ? pData : [])
      setOrgs(Array.isArray(oData) ? oData : [])

      const drafts: Record<string, string> = {}
      for (const o of Array.isArray(oData) ? oData : []) {
        drafts[o.organizationId] = o.type
      }
      setTypeDraft(drafts)

      if (tRes && tRes.ok) {
        const tData = await tRes.json()
        setThreads(Array.isArray(tData) ? tData : [])
      } else setThreads([])

      if (uRes && uRes.ok) setUsage(await uRes.json())
      else setUsage(null)

      if (dRes && dRes.ok) {
        const dData = await dRes.json()
        setDelalas(Array.isArray(dData) ? dData : [])
      } else setDelalas([])

      if (aRes && aRes.ok) setAnalytics(await aRes.json())
      else setAnalytics(null)

      if (cRes && cRes.ok) {
        const cData = await cRes.json()
        setContacts(Array.isArray(cData) ? cData : [])
      } else setContacts([])

      if (catRes && catRes.ok) {
        const catData = await catRes.json()
        setCategories(Array.isArray(catData) ? catData : [])
      } else setCategories([])

      if (cityRes && cityRes.ok) {
        const cityData = await cityRes.json()
        setCities(Array.isArray(cityData) ? cityData : [])
      } else setCities([])
    } catch (e: any) {
      setMsg(e.message || "Load failed")
      setPending([])
      setOrgs([])
      setThreads([])
      setUsage(null)
      setDelalas([])
      setAnalytics(null)
      setContacts([])
      setCategories([])
      setCities([])
    }
  }

  useEffect(() => {
    if (key) load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chat])

  const openThread = async (organizationId: string) => {
    setActiveThread(organizationId)
    setChat([])
    try {
      const res = await fetch(`${API}/api/feedback/chat/thread/${organizationId}`, {
        headers: headers(),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Chat failed")
      setChat(Array.isArray(data) ? data : [])
    } catch (e: any) {
      setMsg(e.message)
    }
  }

  const sendChat = async () => {
    if (!activeThread || !chatInput.trim()) return
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/feedback/chat/reply`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ organizationId: activeThread, body: chatInput.trim() }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Send failed")
      setChatInput("")
      await openThread(activeThread)
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

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

  const changeType = async (organizationId: string) => {
    const businessType = typeDraft[organizationId]
    if (!businessType) return
    if (!confirm(`Change type to ${businessType}?`)) return
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/admin/billing/change-type`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ organizationId, businessType, updatePricing: true }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed")
      setMsg(`Type → ${data.type}`)
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  const createCity = async () => {
    if (!cityForm.name.trim()) {
      setMsg("City name required")
      return
    }
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/admin/delalas/cities`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({
          name: cityForm.name.trim(),
          country: cityForm.country.trim() || "Ethiopia",
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed")
      setMsg("City added")
      setCityForm({ name: "", country: "Ethiopia" })
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  const deleteCity = async (id: string) => {
    if (!confirm("Delete this city?")) return
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/admin/delalas/cities/${id}`, {
        method: "DELETE",
        headers: headers(),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Failed")
      setMsg("City deleted")
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  const startEditDelala = (d: DelalaRow) => {
    setEditingDelalaId(d.id)
    setDForm({
      name: d.name || "",
      nameAm: d.nameAm || "",
      phone: d.phone || "",
      phone2: d.phone2 || "",
      phone3: d.phone3 || "",
      phone4: d.phone4 || "",
      city: d.city || "Addis Ababa",
      subCity: d.subCity || "",
      area: d.area || "",
      categories: (d.categories || []).join(", "),
      photoUrl: d.photoUrl || "",
      address: d.address || "",
      mapsUrl: d.mapsUrl || "",
    })
    setMenuOpenId(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const saveDelala = async () => {
    if (!dForm.name.trim() || !dForm.phone.trim()) {
      setMsg("Name and phone required")
      return
    }
    setBusy(true)
    try {
      const body = {
        name: dForm.name.trim(),
        nameAm: dForm.nameAm.trim() || null,
        phone: dForm.phone.trim(),
        phone2: dForm.phone2.trim() || null,
        phone3: dForm.phone3.trim() || null,
        phone4: dForm.phone4.trim() || null,
        city: dForm.city.trim(),
        subCity: dForm.subCity.trim() || null,
        area: dForm.area.trim() || null,
        categories: dForm.categories
          .split(",")
          .map((s) => s.trim().toLowerCase())
          .filter(Boolean),
        photoUrl: dForm.photoUrl.trim() || null,
        address: dForm.address.trim() || null,
        mapsUrl:
          dForm.mapsUrl.trim() ||
          (dForm.address.trim() ? mapsSearchUrl(dForm.address) : null),
      }
      const res = editingDelalaId
        ? await fetch(`${API}/api/admin/delalas/${editingDelalaId}`, {
            method: "PATCH",
            headers: headers(),
            body: JSON.stringify(body),
          })
        : await fetch(`${API}/api/admin/delalas`, {
            method: "POST",
            headers: headers(),
            body: JSON.stringify({ ...body, verified: false }),
          })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Save failed")
      setMsg(editingDelalaId ? "Delala updated ✓" : "Delala added (pending)")
      setEditingDelalaId(null)
      setDForm(EMPTY_DELALA)
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  const setDelalaVerified = async (id: string, verified: boolean) => {
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/admin/delalas/${id}`, {
        method: "PATCH",
        headers: headers(),
        body: JSON.stringify({ verified }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed")
      setMsg(verified ? "Delala verified ✓" : "Unverified")
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  const deleteDelala = async (id: string) => {
    if (!confirm("Delete this delala?")) return
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/admin/delalas/${id}`, {
        method: "DELETE",
        headers: headers(),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Delete failed")
      setMsg("Deleted")
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  const startEditContact = (c: ContactRow) => {
    setEditingContactId(c.id)
    setCForm({
      nameEn: c.nameEn || "",
      nameAm: c.nameAm || "",
      phone: c.phone || "",
      phone2: c.phone2 || "",
      phone3: c.phone3 || "",
      phone4: c.phone4 || "",
      category: c.category || "hospital",
      noteEn: c.noteEn || "",
      noteAm: c.noteAm || "",
      photoUrl: c.photoUrl || "",
      address: c.address || "",
      mapsUrl: c.mapsUrl || "",
      website: c.website || "",
    })
    setMenuOpenId(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const saveContact = async () => {
    if (!cForm.nameEn.trim() || !cForm.phone.trim()) {
      setMsg("Name and phone required")
      return
    }
    setBusy(true)
    try {
      const body = {
        nameEn: cForm.nameEn.trim(),
        nameAm: cForm.nameAm.trim() || null,
        phone: cForm.phone.trim(),
        phone2: cForm.phone2.trim() || null,
        phone3: cForm.phone3.trim() || null,
        phone4: cForm.phone4.trim() || null,
        category: cForm.category,
        noteEn: cForm.noteEn.trim() || null,
        noteAm: cForm.noteAm.trim() || null,
        photoUrl: cForm.photoUrl.trim() || null,
        address: cForm.address.trim() || null,
        website: cForm.website.trim() || null,
        mapsUrl:
          cForm.mapsUrl.trim() ||
          (cForm.address.trim() ? mapsSearchUrl(cForm.address) : null),
      }
      const res = editingContactId
        ? await fetch(`${API}/api/admin/contacts/${editingContactId}`, {
            method: "PATCH",
            headers: headers(),
            body: JSON.stringify(body),
          })
        : await fetch(`${API}/api/admin/contacts`, {
            method: "POST",
            headers: headers(),
            body: JSON.stringify({ ...body, verified: false }),
          })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Save failed")
      setMsg(editingContactId ? "Contact updated ✓" : "Contact saved (pending)")
      setEditingContactId(null)
      setCForm(EMPTY_CONTACT)
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  const setContactVerified = async (id: string, verified: boolean) => {
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/admin/contacts/${id}`, {
        method: "PATCH",
        headers: headers(),
        body: JSON.stringify({ verified }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed")
      setMsg(verified ? "Contact verified ✓" : "Unverified")
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  const deleteContact = async (id: string) => {
    if (!confirm("Delete this contact?")) return
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/admin/contacts/${id}`, {
        method: "DELETE",
        headers: headers(),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Delete failed")
      setMsg("Deleted")
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  const createCategory = async () => {
    if (!catForm.key.trim() || !catForm.labelEn.trim()) {
      setMsg("Category key and English label required")
      return
    }
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/admin/contacts/categories`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({
          key: catForm.key.trim(),
          labelEn: catForm.labelEn.trim(),
          labelAm: catForm.labelAm.trim() || null,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Category failed")
      setMsg("Category added")
      setCatForm(EMPTY_CAT)
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  const deleteCategory = async (id: string) => {
    if (!confirm("Delete this category?")) return
    setBusy(true)
    try {
      const res = await fetch(`${API}/api/admin/contacts/categories/${id}`, {
        method: "DELETE",
        headers: headers(),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || "Delete failed")
      setMsg("Category deleted")
      await load()
    } catch (e: any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  const phonesLine = (...ps: (string | null | undefined)[]) =>
    ps.filter(Boolean).join(" · ")

  const tabBtn = (id: Tab, label: string) => (
    <button
      type="button"
      onClick={() => setTab(id)}
      className={`text-sm px-3 py-1.5 rounded-full ${
        tab === id ? "bg-slate-900 text-white" : "border border-slate-200 bg-white"
      }`}
    >
      {label}
    </button>
  )

  const DEFAULT_CATS = [
    { id: "def-emergency", key: "emergency", labelEn: "Emergency" },
    { id: "def-hospital", key: "hospital", labelEn: "Hospital" },
    { id: "def-police", key: "police", labelEn: "Police" },
    { id: "def-fire", key: "fire", labelEn: "Fire" },
    { id: "def-hotel", key: "hotel", labelEn: "Hotel" },
    { id: "def-gym", key: "gym", labelEn: "Gym" },
  ]

  const categoryOptions = (() => {
    const byKey = new Map<string, { id: string; key: string; labelEn: string }>()
    for (const c of DEFAULT_CATS) byKey.set(c.key, c)
    for (const c of categories) {
      byKey.set(c.key, {
        id: c.id,
        key: c.key,
        labelEn: c.labelEn || c.key,
      })
    }
    return Array.from(byKey.values())
  })()

  return (
    <div className="min-h-svh bg-slate-100 p-4 sm:p-6" onClick={() => setMenuOpenId(null)}>
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
              Semay Admin
            </h1>
            <p className="text-xs text-slate-500">
              Payments · businesses · messages · delala · contacts · usage
            </p>
          </div>
          <Link to="/" className="text-sm text-slate-500 hover:text-slate-800">
            Home
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 items-center bg-white border border-slate-200 rounded-2xl p-3 shadow-sm">
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Admin key"
            className="flex-1 min-w-[160px] px-3 py-2 rounded-xl border border-slate-200 text-sm"
          />
          <button
            type="button"
            onClick={load}
            className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium"
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
          {tabBtn("messages", `Messages (${threads.length})`)}
          {tabBtn("delala", `Delala (${delalas.length})`)}
          {tabBtn("contacts", `Contacts (${contacts.length})`)}
          {tabBtn("usage", "Usage")}
        </div>

        {tab === "pending" && (
          <div className="space-y-3">
            {pending.length === 0 ? (
              <p className="text-sm text-slate-400">No pending payments</p>
            ) : (
              pending.map((p) => (
                <div
                  key={p.organizationId}
                  className="bg-white border border-slate-200 rounded-2xl p-4 text-sm space-y-1 shadow-sm"
                >
                  <div className="font-semibold">{p.organizationName}</div>
                  <div className="text-slate-500">
                    {p.businessType} · {p.plan} · {Number(p.amount).toLocaleString()} ETB
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => approve(p.organizationId)}
                      className="bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-full"
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
              <div
                key={o.organizationId}
                className="bg-white border rounded-2xl p-4 text-sm shadow-sm space-y-2"
              >
                <div className="font-semibold">{o.name}</div>
                <div className="flex flex-wrap gap-2 items-center">
                  <select
                    value={typeDraft[o.organizationId] || o.type}
                    onChange={(e) =>
                      setTypeDraft((s) => ({ ...s, [o.organizationId]: e.target.value }))
                    }
                    className="text-xs border rounded-lg px-2 py-1.5"
                  >
                    {BUSINESS_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => changeType(o.organizationId)}
                    className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-full"
                  >
                    Save type
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTab("messages")
                      openThread(o.organizationId)
                    }}
                    className="text-xs border px-3 py-1.5 rounded-full"
                  >
                    Open chat
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "messages" && (
          <div className="bg-white border rounded-2xl overflow-hidden h-[min(70vh,560px)] flex flex-col sm:flex-row">
            <div className="sm:w-64 border-r overflow-y-auto">
              {threads.map((t) => (
                <button
                  key={t.threadKey}
                  type="button"
                  onClick={() => t.organizationId && openThread(t.organizationId)}
                  className={`w-full text-left px-3 py-3 border-b text-sm ${
                    activeThread === t.organizationId ? "bg-slate-100" : ""
                  }`}
                >
                  {t.orgName}
                </button>
              ))}
            </div>
            <div className="flex-1 flex flex-col bg-[#e8eef5]">
              <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {chat.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${
                      String(m.sender).toUpperCase() === "ADMIN"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div className="max-w-[85%] rounded-2xl px-3 py-2 text-sm bg-white border">
                      {m.body}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
              <div className="p-3 bg-white border-t flex gap-2">
                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 border rounded-full px-4 py-2 text-sm"
                  placeholder="Reply…"
                />
                <button
                  type="button"
                  disabled={busy}
                  onClick={sendChat}
                  className="w-11 h-11 rounded-full bg-slate-900 text-white text-sm"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ——— DELALA ——— */}
        {tab === "delala" && (
          <div className="space-y-4">
            {/* Manage cities — FIRST block on Delala tab */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-2">
              <p className="text-sm font-semibold text-slate-900">Manage cities</p>
              <p className="text-xs text-slate-500">
                These appear on public /delala city list.
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                <input
                  className="border border-slate-200 rounded-xl px-3 py-2 text-sm"
                  placeholder="City name"
                  value={cityForm.name}
                  onChange={(e) => setCityForm((s) => ({ ...s, name: e.target.value }))}
                />
                <input
                  className="border border-slate-200 rounded-xl px-3 py-2 text-sm"
                  placeholder="Country"
                  value={cityForm.country}
                  onChange={(e) =>
                    setCityForm((s) => ({ ...s, country: e.target.value }))
                  }
                />
              </div>
              <button
                type="button"
                disabled={busy}
                onClick={createCity}
                className="text-sm border border-slate-200 px-3 py-1.5 rounded-xl"
              >
                Add city
              </button>
              {cities.length > 0 && (
                <ul className="flex flex-wrap gap-2 pt-1">
                  {cities.map((c) => (
                    <li
                      key={c.id}
                      className="text-xs border border-slate-200 rounded-full px-2.5 py-1 flex items-center gap-2"
                    >
                      <span>
                        {c.name}
                        {c.country ? ` · ${c.country}` : ""}
                      </span>
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => deleteCity(c.id)}
                        className="text-red-600"
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-white border rounded-2xl p-4 shadow-sm space-y-2">
              <p className="text-sm font-semibold">
                {editingDelalaId ? "Edit delala" : "Add delala"}
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {(
                  [
                    ["name", "Name"],
                    ["nameAm", "Name (Amharic)"],
                    ["phone", "Phone (main)"],
                    ["phone2", "Phone 2"],
                    ["phone3", "Phone 3"],
                    ["phone4", "Phone 4"],
                    ["subCity", "Sub-city"],
                    ["area", "Area"],
                    ["address", "Address"],
                    ["mapsUrl", "Google Maps URL (optional)"],
                  ] as const
                ).map(([k, ph]) => (
                  <input
                    key={k}
                    className="border rounded-xl px-3 py-2 text-sm"
                    placeholder={ph}
                    value={(dForm as any)[k]}
                    onChange={(e) => setDForm((s) => ({ ...s, [k]: e.target.value }))}
                  />
                ))}
                {cities.length > 0 ? (
                  <select
                    className="border rounded-xl px-3 py-2 text-sm bg-white"
                    value={dForm.city}
                    onChange={(e) => setDForm((s) => ({ ...s, city: e.target.value }))}
                  >
                    {cities.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    className="border rounded-xl px-3 py-2 text-sm"
                    placeholder="City"
                    value={dForm.city}
                    onChange={(e) => setDForm((s) => ({ ...s, city: e.target.value }))}
                  />
                )}
                <input
                  className="border rounded-xl px-3 py-2 text-sm sm:col-span-2"
                  placeholder="Categories: car, house, land"
                  value={dForm.categories}
                  onChange={(e) => setDForm((s) => ({ ...s, categories: e.target.value }))}
                />
                <input
                  className="border rounded-xl px-3 py-2 text-sm"
                  placeholder="Or paste photo URL"
                  value={dForm.photoUrl.startsWith("data:") ? "" : dForm.photoUrl}
                  onChange={(e) => setDForm((s) => ({ ...s, photoUrl: e.target.value }))}
                />
                <label className="border border-dashed rounded-xl px-3 py-2 text-sm text-slate-600 cursor-pointer">
                  Pick photo from gallery
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      onPhotoFile(e.target.files?.[0] || null, (url) =>
                        setDForm((s) => ({ ...s, photoUrl: url }))
                      )
                    }
                  />
                </label>
                {dForm.photoUrl ? (
                  <img
                    src={dForm.photoUrl}
                    alt=""
                    className="w-14 h-14 rounded-full object-cover"
                  />
                ) : null}
                {dForm.address.trim() ? (
                  <a
                    href={dForm.mapsUrl.trim() || mapsSearchUrl(dForm.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sky-600 underline sm:col-span-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Open map for this address
                  </a>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={busy}
                  onClick={saveDelala}
                  className="bg-slate-900 text-white text-sm px-4 py-2 rounded-xl"
                >
                  {editingDelalaId ? "Update delala" : "Save (pending)"}
                </button>
                {editingDelalaId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingDelalaId(null)
                      setDForm(EMPTY_DELALA)
                    }}
                    className="border text-sm px-4 py-2 rounded-xl"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>

            {delalas.map((d) => (
              <div
                key={d.id}
                className="bg-white border rounded-2xl p-4 text-sm shadow-sm flex justify-between gap-3"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex gap-3 min-w-0">
                  {d.photoUrl ? (
                    <img
                      src={d.photoUrl}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-slate-100 shrink-0" />
                  )}
                  <div>
                    <div className="font-semibold">
                      {d.name}
                      {d.nameAm ? ` · ${d.nameAm}` : ""}
                    </div>
                    <div className="text-xs tabular-nums text-slate-600">
                      {phonesLine(d.phone, d.phone2, d.phone3, d.phone4)}
                    </div>
                    <div className="text-xs text-slate-500">
                      {[d.city, d.subCity, d.area, d.address].filter(Boolean).join(" · ")}
                    </div>
                    {(d.mapsUrl || d.address) && (
                      <a
                        href={d.mapsUrl || mapsSearchUrl(d.address || "")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-sky-600 underline"
                      >
                        Map
                      </a>
                    )}
                    <div className="text-xs text-slate-400">
                      {(d.categories || []).join(", ")} ·{" "}
                      {d.verified ? (
                        <span className="text-emerald-600">Verified</span>
                      ) : (
                        <span className="text-amber-600">Pending</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0">
                  <button
                    type="button"
                    className="w-9 h-9 rounded-full border text-lg leading-none"
                    onClick={(e) => {
                      e.stopPropagation()
                      setMenuOpenId((m) => (m === `d:${d.id}` ? null : `d:${d.id}`))
                    }}
                  >
                    ⋮
                  </button>
                  {menuOpenId === `d:${d.id}` && (
                    <div className="absolute right-0 top-10 z-20 bg-white border rounded-xl shadow-lg py-1 min-w-[140px]">
                      {!d.verified ? (
                        <button
                          type="button"
                          className="w-full text-left px-3 py-2 hover:bg-slate-50 text-emerald-700"
                          onClick={() => {
                            setDelalaVerified(d.id, true)
                            setMenuOpenId(null)
                          }}
                        >
                          Approve
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="w-full text-left px-3 py-2 hover:bg-slate-50"
                          onClick={() => {
                            setDelalaVerified(d.id, false)
                            setMenuOpenId(null)
                          }}
                        >
                          Unverify
                        </button>
                      )}
                      <button
                        type="button"
                        className="w-full text-left px-3 py-2 hover:bg-slate-50"
                        onClick={() => startEditDelala(d)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="w-full text-left px-3 py-2 hover:bg-slate-50 text-red-600"
                        onClick={() => {
                          deleteDelala(d.id)
                          setMenuOpenId(null)
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ——— CONTACTS ——— */}
        {tab === "contacts" && (
          <div className="space-y-4">
            <div className="bg-white border rounded-2xl p-4 shadow-sm space-y-2">
              <p className="text-sm font-semibold">Manage categories</p>
              <div className="grid sm:grid-cols-3 gap-2">
                <input
                  className="border rounded-xl px-3 py-2 text-sm"
                  placeholder="key (e.g. clinic)"
                  value={catForm.key}
                  onChange={(e) => setCatForm((s) => ({ ...s, key: e.target.value }))}
                />
                <input
                  className="border rounded-xl px-3 py-2 text-sm"
                  placeholder="Label EN"
                  value={catForm.labelEn}
                  onChange={(e) => setCatForm((s) => ({ ...s, labelEn: e.target.value }))}
                />
                <input
                  className="border rounded-xl px-3 py-2 text-sm"
                  placeholder="Label Am"
                  value={catForm.labelAm}
                  onChange={(e) => setCatForm((s) => ({ ...s, labelAm: e.target.value }))}
                />
              </div>
              <button
                type="button"
                disabled={busy}
                onClick={createCategory}
                className="text-sm border px-3 py-1.5 rounded-xl"
              >
                Add category
              </button>
              <ul className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <li
                    key={c.id}
                    className="text-xs border rounded-full px-2.5 py-1 flex gap-2 items-center"
                  >
                    {c.key} · {c.labelEn}
                    <button
                      type="button"
                      className="text-red-600"
                      onClick={() => deleteCategory(c.id)}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border rounded-2xl p-4 shadow-sm space-y-2">
              <p className="text-sm font-semibold">
                {editingContactId ? "Edit contact" : "Add contact"}
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                <input
                  className="border rounded-xl px-3 py-2 text-sm"
                  placeholder="Name (EN)"
                  value={cForm.nameEn}
                  onChange={(e) => setCForm((s) => ({ ...s, nameEn: e.target.value }))}
                />
                <input
                  className="border rounded-xl px-3 py-2 text-sm"
                  placeholder="Name (Amharic)"
                  value={cForm.nameAm}
                  onChange={(e) => setCForm((s) => ({ ...s, nameAm: e.target.value }))}
                />
                <input
                  className="border rounded-xl px-3 py-2 text-sm"
                  placeholder="Phone (main)"
                  value={cForm.phone}
                  onChange={(e) => setCForm((s) => ({ ...s, phone: e.target.value }))}
                />
                <select
                  className="border rounded-xl px-3 py-2 text-sm bg-white"
                  value={cForm.category}
                  onChange={(e) => setCForm((s) => ({ ...s, category: e.target.value }))}
                >
                  {categoryOptions.map((c) => (
                    <option key={c.key} value={c.key}>
                      {c.labelEn}
                    </option>
                  ))}
                </select>
                <input
                  className="border rounded-xl px-3 py-2 text-sm"
                  placeholder="Phone 2"
                  value={cForm.phone2}
                  onChange={(e) => setCForm((s) => ({ ...s, phone2: e.target.value }))}
                />
                <input
                  className="border rounded-xl px-3 py-2 text-sm"
                  placeholder="Phone 3"
                  value={cForm.phone3}
                  onChange={(e) => setCForm((s) => ({ ...s, phone3: e.target.value }))}
                />
                <input
                  className="border rounded-xl px-3 py-2 text-sm"
                  placeholder="Phone 4"
                  value={cForm.phone4}
                  onChange={(e) => setCForm((s) => ({ ...s, phone4: e.target.value }))}
                />
                <input
                  className="border rounded-xl px-3 py-2 text-sm"
                  placeholder="Or paste photo URL"
                  value={cForm.photoUrl.startsWith("data:") ? "" : cForm.photoUrl}
                  onChange={(e) => setCForm((s) => ({ ...s, photoUrl: e.target.value }))}
                />
                <label className="border border-dashed rounded-xl px-3 py-2 text-sm text-slate-600 cursor-pointer sm:col-span-2">
                  Pick photo from gallery
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      onPhotoFile(e.target.files?.[0] || null, (url) =>
                        setCForm((s) => ({ ...s, photoUrl: url }))
                      )
                    }
                  />
                </label>
                {cForm.photoUrl ? (
                  <img
                    src={cForm.photoUrl}
                    alt=""
                    className="w-14 h-14 rounded-full object-cover"
                  />
                ) : null}
                <input
                  className="border rounded-xl px-3 py-2 text-sm sm:col-span-2"
                  placeholder="Address"
                  value={cForm.address}
                  onChange={(e) => setCForm((s) => ({ ...s, address: e.target.value }))}
                />
                <input
                  className="border rounded-xl px-3 py-2 text-sm sm:col-span-2"
                  placeholder="Google Maps URL (optional)"
                  value={cForm.mapsUrl}
                  onChange={(e) => setCForm((s) => ({ ...s, mapsUrl: e.target.value }))}
                />
                {cForm.address.trim() ? (
                  <a
                    href={cForm.mapsUrl.trim() || mapsSearchUrl(cForm.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sky-600 underline sm:col-span-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Open map for this address
                  </a>
                ) : null}

                 <input
                  className="border rounded-xl px-3 py-2 text-sm sm:col-span-2"
                  placeholder="Website (optional) e.g. https://example.com"
                  value={cForm.website}
                  onChange={(e) => setCForm((s) => ({ ...s, website: e.target.value }))}
                />
                    
                <input
                  className="border rounded-xl px-3 py-2 text-sm sm:col-span-2"
                  placeholder="Note (EN)"
                  value={cForm.noteEn}
                  onChange={(e) => setCForm((s) => ({ ...s, noteEn: e.target.value }))}
                />
                <input
                  className="border rounded-xl px-3 py-2 text-sm sm:col-span-2"
                  placeholder="Note (Amharic)"
                  value={cForm.noteAm}
                  onChange={(e) => setCForm((s) => ({ ...s, noteAm: e.target.value }))}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={busy}
                  onClick={saveContact}
                  className="bg-slate-900 text-white text-sm px-4 py-2 rounded-xl"
                >
                  {editingContactId ? "Update contact" : "Save (pending)"}
                </button>
                {editingContactId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingContactId(null)
                      setCForm(EMPTY_CONTACT)
                    }}
                    className="border text-sm px-4 py-2 rounded-xl"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>

            {contacts.map((c) => (
              <div
                key={c.id}
                className="bg-white border rounded-2xl p-4 text-sm shadow-sm flex justify-between gap-3"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex gap-3 min-w-0">
                  {c.photoUrl ? (
                    <img
                      src={c.photoUrl}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-slate-100 shrink-0" />
                  )}
                  <div>
                    <div className="font-semibold">
                      {c.nameEn}
                      {c.nameAm ? ` · ${c.nameAm}` : ""}
                    </div>
                    <div className="text-xs tabular-nums text-slate-600">
                      {phonesLine(c.phone, c.phone2, c.phone3, c.phone4)}
                    </div>
                    <div className="text-xs text-slate-500">
                      {c.category}
                      {c.address ? ` · ${c.address}` : ""}
                    </div>
                    {(c.mapsUrl || c.address) && (
                      <a
                        href={c.mapsUrl || mapsSearchUrl(c.address || "")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-sky-600 underline"
                      >
                        Map
                      </a>
                    )}
                    <div className="text-xs mt-0.5">
                      {c.verified ? (
                        <span className="text-emerald-600">Verified</span>
                      ) : (
                        <span className="text-amber-600">Pending</span>
                      )}
                                          {(c.mapsUrl || c.address) && (
                      <a
                        href={c.mapsUrl || mapsSearchUrl(c.address || "")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-sky-600 underline"
                      >
                        Map
                      </a>
                    )}
                    {c.website && (
                      <a
                        href={
                          c.website.startsWith("http")
                            ? c.website
                            : `https://${c.website}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-sky-600 underline ml-2"
                      >
                        Website
                      </a>
                    )}
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0">
                  <button
                    type="button"
                    className="w-9 h-9 rounded-full border text-lg leading-none"
                    onClick={(e) => {
                      e.stopPropagation()
                      setMenuOpenId((m) => (m === `c:${c.id}` ? null : `c:${c.id}`))
                    }}
                  >
                    ⋮
                  </button>
                  {menuOpenId === `c:${c.id}` && (
                    <div className="absolute right-0 top-10 z-20 bg-white border rounded-xl shadow-lg py-1 min-w-[140px]">
                      {!c.verified ? (
                        <button
                          type="button"
                          className="w-full text-left px-3 py-2 hover:bg-slate-50 text-emerald-700"
                          onClick={() => {
                            setContactVerified(c.id, true)
                            setMenuOpenId(null)
                          }}
                        >
                          Approve
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="w-full text-left px-3 py-2 hover:bg-slate-50"
                          onClick={() => {
                            setContactVerified(c.id, false)
                            setMenuOpenId(null)
                          }}
                        >
                          Unverify
                        </button>
                      )}
                      <button
                        type="button"
                        className="w-full text-left px-3 py-2 hover:bg-slate-50"
                        onClick={() => startEditContact(c)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="w-full text-left px-3 py-2 hover:bg-slate-50 text-red-600"
                        onClick={() => {
                          deleteContact(c.id)
                          setMenuOpenId(null)
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "usage" && (
          <div className="bg-white border rounded-2xl p-5 text-sm text-slate-500">
            {usage || analytics ? (
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-slate-50 border p-4">
                  <div className="text-2xl font-semibold text-slate-900">
                    {usage?.orderCount7d ?? "—"}
                  </div>
                  <div className="text-[11px]">Orders</div>
                </div>
                <div className="rounded-2xl bg-slate-50 border p-4">
                  <div className="text-2xl font-semibold text-slate-900">
                    {analytics?.visitors7d ?? "—"}
                  </div>
                  <div className="text-[11px]">Visitors</div>
                </div>
                <div className="rounded-2xl bg-slate-50 border p-4">
                  <div className="text-2xl font-semibold text-slate-900">
                    {analytics?.delalaOpens7d ?? "—"}
                  </div>
                  <div className="text-[11px]">Delala</div>
                </div>
              </div>
            ) : (
              <p>No usage data</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
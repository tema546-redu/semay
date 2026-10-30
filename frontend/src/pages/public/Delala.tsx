import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
  ArrowLeft,
  BadgeCheck,
  Car,
  ChevronRight,
  Home,
  LandPlot,
  MapPin,
  MoreHorizontal,
  Phone,
  Users,
  Camera,
} from "lucide-react"
import { track } from "../../lib/analytics"

const API = import.meta.env.VITE_API_URL || "http://localhost:3001"

type Need = "car" | "house" | "land" | "other"

type DelalaContact = {
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

const NEEDS: {
  id: Need
  en: string
  am: string
  icon: typeof Car
  bg: string
  iconColor: string
}[] = [
  {
    id: "car",
    en: "Car",
    am: "መኪና",
    icon: Car,
    bg: "bg-sky-50 border-sky-200",
    iconColor: "text-sky-700",
  },
  {
    id: "house",
    en: "House",
    am: "ቤት",
    icon: Home,
    bg: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-800",
  },
  {
    id: "land",
    en: "Land",
    am: "መሬት",
    icon: LandPlot,
    bg: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-800",
  },
  {
    id: "other",
    en: "Other",
    am: "ሌላ",
    icon: MoreHorizontal,
    bg: "bg-stone-50 border-stone-200",
    iconColor: "text-stone-700",
  },
]

const FALLBACK_CITIES = [
  "Addis Ababa",
  "Adama",
  "Bahir Dar",
  "Dire Dawa",
  "Gondar",
  "Hawassa",
  "Jimma",
  "Mekelle",
]

type Step = "need" | "list" | "apply" | "apply-done"

function mapsHref(d: DelalaContact) {
  if (d.mapsUrl) return d.mapsUrl
  const q = [d.address, d.area, d.subCity, d.city].filter(Boolean).join(", ")
  if (!q) return null
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
}

function allPhones(d: DelalaContact) {
  return [d.phone, d.phone2, d.phone3, d.phone4].filter(Boolean) as string[]
}

function readImage(file: File | null): Promise<string | null> {
  return new Promise((resolve) => {
    if (!file || !file.type.startsWith("image/")) {
      resolve(null)
      return
    }
    if (file.size > 2_000_000) {
      resolve(null)
      return
    }
    const r = new FileReader()
    r.onload = () => resolve(String(r.result || null))
    r.onerror = () => resolve(null)
    r.readAsDataURL(file)
  })
}

const EMPTY_APPLY = {
  name: "",
  nameAm: "",
  phone: "",
  phone2: "",
  phone3: "",
  phone4: "",
  city: "Addis Ababa",
  subCity: "",
  area: "",
  address: "",
  categories: [] as string[],
  photoUrl: "",
  idFrontUrl: "",
  idBackUrl: "",
}

export default function Delala() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  const [step, setStep] = useState<Step>("need")
  const [need, setNeed] = useState<Need | null>(null)
  const [showAll, setShowAll] = useState(false)
  const [filterCity, setFilterCity] = useState<string>("")
  const [rows, setRows] = useState<DelalaContact[]>([])
  const [cities, setCities] = useState<string[]>(FALLBACK_CITIES)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [apply, setApply] = useState(EMPTY_APPLY)
  const [applyBusy, setApplyBusy] = useState(false)
  const [applyErr, setApplyErr] = useState("")

  useEffect(() => {
    track("delala_open", "/delala")
  }, [])

  useEffect(() => {
    fetch(`${API}/api/public/delala-cities`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCities(data.map((c: { name: string }) => c.name).filter(Boolean))
        }
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (step !== "list") return
    const params = new URLSearchParams()
    if (!showAll && need) params.set("category", need)
    if (filterCity) params.set("city", filterCity)
    track("delala_list", "/delala", { need, filterCity, showAll })
    let cancelled = false
    setLoading(true)
    setError("")
    fetch(`${API}/api/public/delalas?${params}`)
      .then(async (res) => {
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || "Failed to load")
        if (!cancelled) setRows(Array.isArray(data) ? data : [])
      })
      .catch((e) => {
        if (!cancelled) {
          setRows([])
          setError(e.message || "Failed")
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [step, need, filterCity, showAll])

  const goNeed = () => {
    setStep("need")
    setNeed(null)
    setShowAll(false)
    setFilterCity("")
    setRows([])
  }

  const headerBack = () => {
    if (step === "list") {
      goNeed()
      return
    }
    if (step === "apply" || step === "apply-done") {
      setStep("need")
      setApplyErr("")
      return
    }
  }

  const toggleCat = (id: string) => {
    setApply((s) => ({
      ...s,
      categories: s.categories.includes(id)
        ? s.categories.filter((c) => c !== id)
        : [...s.categories, id],
    }))
  }

  const submitApply = async () => {
    setApplyErr("")
    if (!apply.name.trim() || !apply.phone.trim() || !apply.city.trim()) {
      setApplyErr(isAm ? "ስም፣ ስልክ እና ከተማ ያስፈልጋሉ" : "Name, phone and city required")
      return
    }
    if (apply.categories.length === 0) {
      setApplyErr(isAm ? "ምን እንደሚሸጡ ይምረጡ" : "Select what you sell")
      return
    }
    if (!apply.idFrontUrl || !apply.idBackUrl) {
      setApplyErr(
        isAm ? "የመታወቂያ ፊትና ጀርባ ፎቶ ያስፈልጋሉ" : "ID front and back photos required"
      )
      return
    }
    setApplyBusy(true)
    try {
      const res = await fetch(`${API}/api/public/delala-apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: apply.name.trim(),
          nameAm: apply.nameAm.trim() || null,
          phone: apply.phone.trim(),
          phone2: apply.phone2.trim() || null,
          phone3: apply.phone3.trim() || null,
          phone4: apply.phone4.trim() || null,
          city: apply.city.trim(),
          subCity: apply.subCity.trim() || null,
          area: apply.area.trim() || null,
          address: apply.address.trim() || null,
          categories: apply.categories,
          photoUrl: apply.photoUrl || null,
          idFrontUrl: apply.idFrontUrl,
          idBackUrl: apply.idBackUrl,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Apply failed")
      track("delala_apply", "/delala")
      setApply(EMPTY_APPLY)
      setStep("apply-done")
    } catch (e: any) {
      setApplyErr(typeof e.message === "string" ? e.message : "Failed")
    } finally {
      setApplyBusy(false)
    }
  }

  const title =
    step === "need"
      ? isAm
        ? "ምን ይፈልጋሉ?"
        : "What do you need?"
      : step === "list"
        ? isAm
          ? "የተረጋገጡ ደላሎች"
          : "Verified delalas"
        : step === "apply"
          ? isAm
            ? "ደላላ ለመሆን ያመልክቱ"
            : "Apply as delala"
          : isAm
            ? "ተሳክቷል"
            : "Success"

  return (
    <div className="min-h-svh flex flex-col bg-[#f3f1ec] text-stone-800">
      <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-[#f3f1ec]/95 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            {step === "need" ? (
              <Link
                to="/more"
                className="p-1.5 -ml-1.5 rounded-md text-stone-500 hover:text-stone-900"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={headerBack}
                className="p-1.5 -ml-1.5 rounded-md text-stone-500 hover:text-stone-900"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="min-w-0">
              <p className="font-semibold text-stone-900 leading-none">ደላላ</p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                {isAm ? "በሰማይ የተረጋገጠ" : "Semaiy verified"}
              </p>
            </div>
          </div>
          {step === "need" && (
            <button
              type="button"
              onClick={() => {
                setApplyErr("")
                setStep("apply")
              }}
              className="shrink-0 text-xs sm:text-sm font-medium text-stone-800 px-3 py-1.5 rounded-full border border-stone-900/10 bg-white/80 hover:bg-white"
            >
              {isAm ? "ደላላ ነኝ · አመልክት" : "I am delala · Apply"}
            </button>
          )}
          {step === "list" && (
            <button
              type="button"
              onClick={goNeed}
              className="text-sm text-stone-600 hover:text-stone-900"
            >
              {isAm ? "እንደገና" : "Start over"}
            </button>
          )}
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-5 pt-8 pb-16">
        <h1 className="text-xl sm:text-2xl font-semibold text-stone-900 tracking-tight mb-2">
          {title}
        </h1>
        {step === "need" && (
          <p className="text-sm text-stone-500 mb-8 leading-relaxed">
            {isAm
              ? "የተረጋገጡ ደላሎች — ስልክ፣ ፎቶ፣ ከተማ እና አድራሻ።"
              : "Verified delalas — phone, photo, city and location."}
          </p>
        )}
        {step === "list" && (
          <p className="text-sm text-stone-500 mb-4 leading-relaxed">
            {isAm
              ? "ከተማ እና ክፍለ ከተማ በእያንዳንዱ መገለጫ ላይ ይታያል።"
              : "City and area show on each profile."}
          </p>
        )}

        {/* ——— NEED ——— */}
        {step === "need" && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {NEEDS.map((n) => {
                const Icon = n.icon
                return (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => {
                      setNeed(n.id)
                      setShowAll(false)
                      setFilterCity("")
                      setStep("list")
                    }}
                    className={`rounded-2xl border p-5 text-left shadow-sm hover:shadow transition ${n.bg}`}
                  >
                    <div
                      className={`w-11 h-11 rounded-full bg-white/80 flex items-center justify-center mb-3 ${n.iconColor}`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <span className="block text-sm font-semibold text-stone-900">
                      {isAm ? n.am : n.en}
                    </span>
                  </button>
                )
              })}
            </div>
            <button
              type="button"
              onClick={() => {
                setShowAll(true)
                setNeed(null)
                setFilterCity("")
                setStep("list")
              }}
              className="w-full mt-4 rounded-2xl border border-dashed border-stone-300 bg-white/70 px-4 py-4 flex items-center justify-between"
            >
              <span className="flex items-center gap-3">
                <Users className="w-5 h-5 text-stone-600" />
                <span>
                  <span className="block text-sm font-medium text-stone-900">
                    {isAm ? "ሁሉም የተረጋገጡ ደላሎች" : "All verified delalas"}
                  </span>
                  <span className="text-xs text-stone-500">
                    {isAm ? "ያለ ምድብ ማጣሪያ" : "No category filter"}
                  </span>
                </span>
              </span>
              <ChevronRight className="w-5 h-5 text-stone-400" />
            </button>
          </div>
        )}

        {/* ——— LIST ——— */}
        {step === "list" && (
          <div>
            <div className="flex flex-wrap gap-2 items-center mb-4">
              <p className="text-xs text-stone-500">
                {[
                  need && (isAm ? NEEDS.find((n) => n.id === need)?.am : need),
                  showAll && (isAm ? "ሁሉም" : "All"),
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
              <select
                className="ml-auto text-sm border border-stone-200 rounded-xl px-3 py-1.5 bg-white"
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
              >
                <option value="">{isAm ? "ሁሉም ከተሞች" : "All cities"}</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {loading && (
              <p className="text-sm text-stone-400 py-8 text-center">
                {isAm ? "በመጫን ላይ…" : "Loading…"}
              </p>
            )}
            {!loading && error && (
              <p className="text-sm text-stone-500 text-center py-8">{error}</p>
            )}
            {!loading && !error && rows.length === 0 && (
              <p className="text-sm text-stone-500 text-center py-8 border border-dashed border-stone-200 rounded-xl bg-white/50">
                {isAm
                  ? "በዚህ ምድብ የተረጋገጠ ደላላ የለም።"
                  : "No verified delala in this category yet."}
              </p>
            )}

            {!loading && !error && rows.length > 0 && (
              <ul className="space-y-2">
                {rows.map((d) => {
                  const phones = allPhones(d)
                  const map = mapsHref(d)
                  return (
                    <li
                      key={d.id}
                      className="rounded-xl border border-stone-200 bg-white px-4 py-3 flex items-center gap-3 shadow-sm"
                    >
                      {d.photoUrl ? (
                        <img
                          src={d.photoUrl}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover shrink-0 bg-stone-100"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-stone-100 shrink-0" />
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <p className="text-sm font-medium text-stone-900">
                            {isAm && d.nameAm ? d.nameAm : d.name}
                          </p>
                          <span className="inline-flex items-center gap-0.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                            <BadgeCheck className="w-3 h-3" />
                            {isAm ? "ተረጋግጧል" : "Verified"}
                          </span>
                        </div>
                        <p className="text-xs text-stone-500 mt-0.5">
                          {[d.city, d.subCity, d.area, d.address]
                            .filter(Boolean)
                            .join(" · ")}
                        </p>
                        <p className="text-xs text-stone-400">
                          {(d.categories || [])
                            .map(
                              (c) =>
                                (isAm
                                  ? NEEDS.find((n) => n.id === c)?.am
                                  : NEEDS.find((n) => n.id === c)?.en) || c
                            )
                            .join(", ")}
                        </p>
                        <p className="text-sm text-stone-600 mt-1 tabular-nums">
                          {phones.join(" · ")}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5 shrink-0">
                        {phones.map((p) => (
                          <a
                            key={p}
                            href={`tel:${p.replace(/\s/g, "")}`}
                            onClick={() =>
                              track("delala_call", "/delala", { phone: p, id: d.id })
                            }
                            className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        ))}
                        {map && (
                          <a
                            href={map}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-stone-200 bg-white text-stone-700 flex items-center justify-center"
                          >
                            <MapPin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        )}

        {/* ——— APPLY DONE ——— */}
        {step === "apply-done" && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
            <p className="text-emerald-800 font-semibold mb-2">
              {isAm ? "በተሳካ ሁኔታ አመልክተዋል" : "You applied successfully"}
            </p>
            <p className="text-sm text-emerald-900/80 mb-6">
              {isAm
                ? "ሰማይ በ24 ሰዓት ውስጥ ይመረምራል እና ያጸድቃል።"
                : "Semaiy will review and approve within 24 hours."}
            </p>
            <button
              type="button"
              onClick={goNeed}
              className="w-full py-2.5 rounded-xl bg-emerald-700 text-white text-sm font-medium"
            >
              {isAm ? "ወደ ደላላ ተመለስ" : "Back to Delala"}
            </button>
          </div>
        )}

        {/* ——— APPLY FORM ——— */}
        {step === "apply" && (
          <div className="space-y-3">
            <p className="text-sm text-stone-500 mb-2">
              {isAm
                ? "መገለጫ፣ ስልክ፣ ከተማ እና የመታወቂያ ፎቶ። መታወቂያ ለአስተዳዳሪ ብቻ ነው።"
                : "Profile, phones, city and ID photos. ID is for Semaiy admin only."}
            </p>
            {applyErr && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                {applyErr}
              </p>
            )}
            <input
              className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm bg-white"
              placeholder={isAm ? "ሙሉ ስም *" : "Full name *"}
              value={apply.name}
              onChange={(e) => setApply((s) => ({ ...s, name: e.target.value }))}
            />
            <input
              className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm bg-white"
              placeholder={isAm ? "ስም (አማርኛ)" : "Name (Amharic)"}
              value={apply.nameAm}
              onChange={(e) => setApply((s) => ({ ...s, nameAm: e.target.value }))}
            />
            <input
              className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm bg-white"
              placeholder={isAm ? "ስልክ *" : "Phone *"}
              value={apply.phone}
              onChange={(e) => setApply((s) => ({ ...s, phone: e.target.value }))}
            />
            <div className="grid grid-cols-3 gap-2">
              {(["phone2", "phone3", "phone4"] as const).map((k, i) => (
                <input
                  key={k}
                  className="border border-stone-200 rounded-xl px-3 py-2.5 text-sm bg-white"
                  placeholder={`Phone ${i + 2}`}
                  value={apply[k]}
                  onChange={(e) => setApply((s) => ({ ...s, [k]: e.target.value }))}
                />
              ))}
            </div>
            <select
              className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm bg-white"
              value={apply.city}
              onChange={(e) => setApply((s) => ({ ...s, city: e.target.value }))}
            >
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <input
              className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm bg-white"
              placeholder={isAm ? "ክፍለ ከተማ / ክልል" : "Sub-city / region"}
              value={apply.subCity}
              onChange={(e) => setApply((s) => ({ ...s, subCity: e.target.value }))}
            />
            <input
              className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm bg-white"
              placeholder={isAm ? "አካባቢ" : "Area"}
              value={apply.area}
              onChange={(e) => setApply((s) => ({ ...s, area: e.target.value }))}
            />
            <input
              className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm bg-white"
              placeholder={isAm ? "አድራሻ" : "Address"}
              value={apply.address}
              onChange={(e) => setApply((s) => ({ ...s, address: e.target.value }))}
            />

            <p className="text-xs font-medium text-stone-600 pt-1">
              {isAm ? "ምን ይሸጣሉ? *" : "What do you sell? *"}
            </p>
            <div className="flex flex-wrap gap-2">
              {NEEDS.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => toggleCat(n.id)}
                  className={`text-sm px-3 py-1.5 rounded-full border ${
                    apply.categories.includes(n.id)
                      ? "bg-stone-900 text-white border-stone-900"
                      : "bg-white border-stone-200"
                  }`}
                >
                  {isAm ? n.am : n.en}
                </button>
              ))}
            </div>

            <p className="text-xs font-medium text-stone-600 pt-2">
              {isAm ? "የመገለጫ ፎቶ" : "Profile photo"}
            </p>
            <label className="flex items-center gap-2 border border-dashed border-stone-300 rounded-xl px-3 py-3 text-sm text-stone-600 cursor-pointer bg-white">
              <Camera className="w-4 h-4" />
              {isAm ? "ከጋለሪ ወይም ካሜራ" : "Gallery or camera"}
              <input
                type="file"
                accept="image/*"
                capture="user"
                className="hidden"
                onChange={async (e) => {
                  const url = await readImage(e.target.files?.[0] || null)
                  if (url) setApply((s) => ({ ...s, photoUrl: url }))
                  else setApplyErr(isAm ? "ፎቶ አልተሳካም (max 2MB)" : "Photo failed (max 2MB)")
                }}
              />
            </label>
            {apply.photoUrl ? (
              <img src={apply.photoUrl} alt="" className="w-16 h-16 rounded-full object-cover" />
            ) : null}

            <p className="text-xs font-medium text-stone-600 pt-2">
              {isAm ? "ብሔራዊ መታወቂያ ፊት *" : "National ID front *"}
            </p>
            <label className="flex items-center gap-2 border border-dashed border-stone-300 rounded-xl px-3 py-3 text-sm text-stone-600 cursor-pointer bg-white">
              <Camera className="w-4 h-4" />
              {isAm ? "ፊት ይምረጡ" : "Front side"}
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={async (e) => {
                  const url = await readImage(e.target.files?.[0] || null)
                  if (url) setApply((s) => ({ ...s, idFrontUrl: url }))
                  else setApplyErr("ID front failed (max 2MB)")
                }}
              />
            </label>
            {apply.idFrontUrl ? (
              <img src={apply.idFrontUrl} alt="" className="h-20 rounded-lg object-cover" />
            ) : null}

            <p className="text-xs font-medium text-stone-600 pt-2">
              {isAm ? "ብሔራዊ መታወቂያ ጀርባ *" : "National ID back *"}
            </p>
            <label className="flex items-center gap-2 border border-dashed border-stone-300 rounded-xl px-3 py-3 text-sm text-stone-600 cursor-pointer bg-white">
              <Camera className="w-4 h-4" />
              {isAm ? "ጀርባ ይምረጡ" : "Back side"}
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={async (e) => {
                  const url = await readImage(e.target.files?.[0] || null)
                  if (url) setApply((s) => ({ ...s, idBackUrl: url }))
                  else setApplyErr("ID back failed (max 2MB)")
                }}
              />
            </label>
            {apply.idBackUrl ? (
              <img src={apply.idBackUrl} alt="" className="h-20 rounded-lg object-cover" />
            ) : null}

            <button
              type="button"
              disabled={applyBusy}
              onClick={submitApply}
              className="w-full mt-4 py-3 rounded-xl bg-stone-900 text-white text-sm font-medium disabled:opacity-60"
            >
              {applyBusy
                ? isAm
                  ? "በመላክ ላይ…"
                  : "Submitting…"
                : isAm
                  ? "አመልክት"
                  : "Apply"}
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
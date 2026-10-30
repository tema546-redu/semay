import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
  ArrowLeft,
  Building2,
  ChevronDown,
  ChevronRight,
  Copy,
  CreditCard,
  Languages,
  MessageCircle,
  Package,
  Phone,
  QrCode,
  Settings as SettingsIcon,
  Table2,
  Users,
  CalendarDays,
  BookOpen,
} from "lucide-react"
import { restaurantApi, billingApi } from "../../lib/api"
import { useAuth } from "../../lib/auth"

const SUPPORT_PHONE = "0953352271"

type SectionId = "business" | "hours" | "tools" | "billing" | "language" | "account"

function Section({
  id,
  openId,
  setOpenId,
  icon: Icon,
  title,
  subtitle,
  children,
}: {
  id: SectionId
  openId: SectionId | null
  setOpenId: (id: SectionId | null) => void
  icon: any
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  const open = openId === id
  return (
    <section className="bg-white border border-semay-200 rounded-2xl shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpenId(open ? null : id)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-semay-50/80 transition-colors"
      >
        <div className="w-9 h-9 rounded-xl bg-semay-100 text-semay-800 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-semay-900 text-sm">{title}</div>
          {subtitle && (
            <div className="text-xs text-semay-500 mt-0.5 truncate">{subtitle}</div>
          )}
        </div>
        {open ? (
          <ChevronDown className="w-5 h-5 text-semay-400 shrink-0" />
        ) : (
          <ChevronRight className="w-5 h-5 text-semay-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-semay-100">
          <div className="pt-4">{children}</div>
        </div>
      )}
    </section>
  )
}

export default function RestaurantSettings() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const { organization, user } = useAuth()

  const [openId, setOpenId] = useState<SectionId | null>("business")
  const [openTime, setOpenTime] = useState("08:00")
  const [closeTime, setCloseTime] = useState("22:00")
  const [name, setName] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [tin, setTin] = useState("")
  const [msg, setMsg] = useState("")
  const [saving, setSaving] = useState(false)

  const [accountType, setAccountType] = useState("CAFE")
  const [typeSwitchedAt, setTypeSwitchedAt] = useState<string | null>(null)
  const [switchBusy, setSwitchBusy] = useState(false)
  const [switchMsg, setSwitchMsg] = useState("")

  const [sub, setSub] = useState<any>(null)

  const orgId = organization?.id || ""
  const customerUrl =
    typeof window !== "undefined" && orgId
      ? `${window.location.origin}/order/${orgId}`
      : ""

  useEffect(() => {
    restaurantApi
      .settings()
      .then((s: any) => {
        setOpenTime(s.openTime || "08:00")
        setCloseTime(s.closeTime || "22:00")
        setName(s.name || "")
        setPhotoUrl(s.photoUrl || "")
        setPhone(s.phone || "")
        setAddress(s.address || "")
        setCity(s.city || "")
        setTin(s.tin || "")
        setAccountType(s.type || (organization as any)?.type || "CAFE")
        setTypeSwitchedAt(s.typeSwitchedAt || null)
      })
      .catch(console.error)

    billingApi
      .current()
      .then((d) => setSub(d?.subscription || null))
      .catch(() => setSub(null))
  }, [])

  const onLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 1_500_000) {
      setMsg("Max 1.5MB")
      return
    }
    const reader = new FileReader()
    reader.onload = () => setPhotoUrl(String(reader.result || ""))
    reader.readAsDataURL(file)
  }

  const saveBusiness = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMsg("")
    try {
      await restaurantApi.updateSettings({
        openTime,
        closeTime,
        name: name.trim() || undefined,
        photoUrl: photoUrl || null,
        phone: phone.trim() || null,
        address: address.trim() || null,
        city: city.trim() || null,
        tin: tin.trim() || null,
      })
      setMsg(isAm ? "ተቀምጧል" : "Saved — shown on receipts")
    } catch (err: any) {
      setMsg(err.message || "Failed")
    } finally {
      setSaving(false)
    }
  }

  const copyUrl = async () => {
    if (!customerUrl) return
    try {
      await navigator.clipboard.writeText(customerUrl)
      setMsg(isAm ? "ሊንክ ተቀድቷል" : "Customer link copied")
    } catch {
      setMsg(customerUrl)
    }
  }

  const toolLinks = [
    {
      to: "/stock",
      icon: Package,
      en: "Stock / Store",
      am: "ክምችት",
      descEn: "Ingredients and low-stock alerts",
      descAm: "ጥሬ እቃ እና ዝቅተኛ ክምችት",
    },
    {
      to: "/tables",
      icon: Table2,
      en: "Tables",
      am: "ጠረጴዛ",
      descEn: "Floor plan and table status",
      descAm: "የአዳራሽ ጠረጴዛዎች",
    },
    {
      to: "/staff",
      icon: Users,
      en: "Staff & invites",
      am: "ሰራተኞች",
      descEn: "Invite waiters and kitchen",
      descAm: "ሰራተኛ ግብዣ",
    },
    {
      to: "/reservations",
      icon: CalendarDays,
      en: "Reservations",
      am: "ቦታ ማስያዝ",
      descEn: "Guest bookings",
      descAm: "የእንግዳ ቦታ ማስያዝ",
    },
    {
      to: "/menu",
      icon: BookOpen,
      en: "Menu",
      am: "Menu",
      descEn: "Items, prices, stations",
      descAm: "ምግብ፣ ዋጋ፣ ጣቢያ",
    },
  ]

  const daysLeft = sub?.daysLeft
  const isTrial = !!sub?.isTrial
  const trialWarning = isTrial && typeof daysLeft === "number" && daysLeft <= 3

  return (
    <div className="min-h-svh bg-semay-50 pb-24">
      <header className="bg-white border-b border-semay-200 h-14 px-4 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5 text-semay-700" />
        </Link>
        <div>
          <h1 className="font-semibold text-sm text-semay-900">
            {isAm ? "ቅንብሮች" : "Settings"}
          </h1>
          <p className="text-[11px] text-semay-500">
            {isAm ? "ንግድ · መሳሪያዎች · ክፍያ · ድጋፍ" : "Business · tools · billing · support"}
          </p>
        </div>
      </header>

      <div className="max-w-xl mx-auto p-4 space-y-4">
        {/* Message Semay — same pattern as garment */}
        <section className="bg-white border border-semay-200 rounded-2xl shadow-sm overflow-hidden">
          <Link
            to="/restaurant/support"
            className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-semay-50/80 transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-semay-900 text-sm">
                {isAm ? "ለሰማይ መልእክት" : "Message Semay"}
              </div>
              <div className="text-xs text-semay-500 mt-0.5">
                {isAm ? "ክፍያ፣ ችግር ወይም ጥያቄ — ውይይት" : "Billing, help, or questions — chat"}
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-semay-400 shrink-0" />
          </Link>
        </section>

        <Section
          id="business"
          openId={openId}
          setOpenId={setOpenId}
          icon={Building2}
          title={isAm ? "የንግድ መረጃ" : "Business on receipts"}
          subtitle={name || organization?.name || "—"}
        >
          <form onSubmit={saveBusiness} className="space-y-3">
            <div>
              <label className="text-xs text-semay-500">
                {isAm ? "ስም" : "Business name"}
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm"
                placeholder="Restaurant or café name"
              />
            </div>
            <div>
              <label className="text-xs text-semay-500">Logo</label>
              <input type="file" accept="image/*" onChange={onLogo} className="mt-1 text-sm w-full" />
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt=""
                  className="mt-2 h-16 w-16 object-cover rounded-xl border border-semay-100"
                />
              ) : null}
            </div>
            <div>
              <label className="text-xs text-semay-500 flex items-center gap-1">
                <Phone className="w-3 h-3" /> Phone
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm"
                placeholder="09xxxxxxxx"
              />
            </div>
            <div>
              <label className="text-xs text-semay-500">Address</label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-semay-500">City</label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-semay-500">TIN</label>
              <input
                value={tin}
                onChange={(e) => setTin(e.target.value)}
                className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm font-mono"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-semay-500">Open</label>
                <input
                  type="time"
                  value={openTime}
                  onChange={(e) => setOpenTime(e.target.value)}
                  className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-semay-500">Close</label>
                <input
                  type="time"
                  value={closeTime}
                  onChange={(e) => setCloseTime(e.target.value)}
                  className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm"
                />
              </div>
            </div>
            {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}
            <button
              type="submit"
              disabled={saving}
              className="w-full bg-semay-900 text-white py-2.5 rounded-xl text-sm font-medium disabled:opacity-50"
            >
              {saving ? "..." : isAm ? "አስቀምጥ" : "Save business details"}
            </button>
          </form>
        </Section>

        <Section
          id="tools"
          openId={openId}
          setOpenId={setOpenId}
          icon={SettingsIcon}
          title={isAm ? "መሳሪያዎች" : "Operations tools"}
          subtitle={isAm ? "ክምችት · ጠረጴዛ · ሰራተኛ · ቦታ ማስያዝ" : "Stock · tables · staff · reservations"}
        >
          {/* Customer QR */}
          <div className="mb-4 p-3 rounded-xl border border-semay-100 bg-semay-50/50 space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-semay-900">
              <QrCode className="w-4 h-4" />
              {isAm ? "የደንበኛ QR" : "Customer order QR"}
            </div>
            {customerUrl ? (
              <>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(customerUrl)}`}
                  alt="QR"
                  width={140}
                  height={140}
                  className="mx-auto rounded-lg border border-semay-100 bg-white"
                />
                <button
                  type="button"
                  onClick={copyUrl}
                  className="w-full flex items-center justify-center gap-2 border border-semay-200 py-2 rounded-xl text-xs font-medium"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {isAm ? "ሊንክ ቅዳ" : "Copy link"}
                </button>
              </>
            ) : (
              <p className="text-xs text-semay-400">Sign in as owner for QR link.</p>
            )}
          </div>

          <div className="space-y-2">
            {toolLinks.map((t) => {
              const Icon = t.icon
              return (
                <Link
                  key={t.to}
                  to={t.to}
                  className="flex items-center gap-3 p-3 rounded-xl border border-semay-100 hover:border-semay-200 hover:bg-semay-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-semay-900 text-white flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-semay-900">
                      {isAm ? t.am : t.en}
                    </div>
                    <div className="text-xs text-semay-500 mt-0.5">
                      {isAm ? t.descAm : t.descEn}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-semay-400 shrink-0" />
                </Link>
              )
            })}
          </div>
        </Section>

        <Section
          id="billing"
          openId={openId}
          setOpenId={setOpenId}
          icon={CreditCard}
          title={isAm ? "ደንበኝነት እና ክፍያ" : "Subscription & billing"}
          subtitle={
            trialWarning
              ? isAm
                ? "ሙከራ በቅርቡ ያበቃል"
                : "Trial ending soon"
              : isAm
                ? "እቅድ እና ክፍያ"
                : "Plan and payment"
          }
        >
          <div className="space-y-3 text-sm">
            {sub ? (
              <>
                <div className="flex justify-between">
                  <span className="text-semay-500">{isAm ? "ሁኔታ" : "Status"}</span>
                  <span className="font-semibold">
                    {String(sub.status || "—")}
                    {isTrial ? (isAm ? " (ሙከራ)" : " (trial)") : ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-semay-500">{isAm ? "የቀሩ ቀናት" : "Days left"}</span>
                  <span className={trialWarning ? "font-semibold text-amber-700" : "font-semibold"}>
                    {daysLeft ?? "—"}
                  </span>
                </div>
              </>
            ) : (
              <p className="text-semay-500">{isAm ? "በመጫን..." : "Loading..."}</p>
            )}
            <Link
              to="/billing"
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-semay-900 text-white text-sm font-medium"
            >
              <span className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                {isAm ? "ክፍያ / እቅድ" : "Open billing & plans"}
              </span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${SUPPORT_PHONE}`} className="flex items-center gap-2 text-xs text-semay-600">
              <Phone className="w-3.5 h-3.5" />
              {SUPPORT_PHONE}
            </a>
          </div>
        </Section>

        <Section
          id="language"
          openId={openId}
          setOpenId={setOpenId}
          icon={Languages}
          title={isAm ? "ቋንቋ" : "Language"}
          subtitle="English / አማርኛ"
        >
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => i18n.changeLanguage("en")}
              className={`flex-1 py-3 rounded-xl text-sm font-medium border ${
                !isAm ? "bg-semay-900 text-white border-semay-900" : "border-semay-200"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => i18n.changeLanguage("am")}
              className={`flex-1 py-3 rounded-xl text-sm font-medium border ${
                isAm ? "bg-semay-900 text-white border-semay-900" : "border-semay-200"
              }`}
            >
              አማርኛ
            </button>
          </div>
        </Section>

        <Section
          id="account"
          openId={openId}
          setOpenId={setOpenId}
          icon={Building2}
          title={isAm ? "የመለያ ዓይነት" : "Account type"}
          subtitle={accountType}
        >
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-semay-500">{isAm ? "ባለቤት" : "Owner"}</span>
              <span className="font-medium">{user?.name || "—"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-semay-500">Email</span>
              <span className="font-medium text-right truncate max-w-[60%]">
                {user?.email || "—"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-semay-500">{isAm ? "ዓይነት" : "Type"}</span>
              <span className="font-medium">{accountType}</span>
            </div>

            {(accountType === "CAFE" || accountType === "cafe") && !typeSwitchedAt ? (
              <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                <p className="text-xs text-amber-900">
                  {isAm
                    ? "ካፌ ወደ ሬስቶራንት ቀይር (አንድ ጊዜ)። Menu እና stock ይቀራሉ።"
                    : "Switch café → restaurant once. Menu and stock stay. Billing uses restaurant price."}
                </p>
                {switchMsg ? <p className="text-sm text-amber-950">{switchMsg}</p> : null}
                <button
                  type="button"
                  disabled={switchBusy}
                  onClick={async () => {
                    if (!confirm("Switch café to restaurant? This cannot be undone by you.")) return
                    setSwitchBusy(true)
                    setSwitchMsg("")
                    try {
                      const r = await restaurantApi.switchToRestaurant()
                      setSwitchMsg(r.message || "Switched")
                      setAccountType("RESTAURANT")
                      setTypeSwitchedAt(new Date().toISOString())
                    } catch (err: any) {
                      setSwitchMsg(err?.message || "Failed")
                    } finally {
                      setSwitchBusy(false)
                    }
                  }}
                  className="w-full bg-amber-900 text-white py-2 rounded-xl text-sm font-medium disabled:opacity-50"
                >
                  {switchBusy ? "..." : isAm ? "ወደ ሬስቶራንት ቀይር" : "Switch to restaurant"}
                </button>
              </div>
            ) : null}
          </div>
        </Section>
      </div>
    </div>
  )
}
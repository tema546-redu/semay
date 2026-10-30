import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import GarmentLayout from "../../components/GarmentLayout"
import { useAuth } from "../../lib/auth"
import { MessageCircle } from "lucide-react"
import { billingApi } from "../../lib/api"
import {
  CreditCard,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Package,
  AlertTriangle,
  Wallet,
  BarChart3,
  Languages,
  Building2,
} from "lucide-react"

type SectionId =
  | "billing"
  | "business"
  | "tools"
  | "language"
  | "guide"

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
            <div className="text-xs text-semay-500 mt-0.5 truncate">
              {subtitle}
            </div>
          )}
        </div>
        {open ? (
          <ChevronDown className="w-5 h-5 text-semay-400 shrink-0" />
        ) : (
          <ChevronRight className="w-5 h-5 text-semay-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0 border-t border-semay-100">
          <div className="pt-4">{children}</div>
        </div>
      )}
    </section>
  )
}

export default function GarmentSettings() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const { organization, user } = useAuth()
  const [sub, setSub] = useState<any>(null)
  const [openId, setOpenId] = useState<SectionId | null>("tools")

  useEffect(() => {
    billingApi
      .current()
      .then((d) => setSub(d?.subscription || null))
      .catch(() => setSub(null))
  }, [])

  const daysLeft = sub?.daysLeft
  const isTrial = !!sub?.isTrial
  const trialWarning =
    isTrial && typeof daysLeft === "number" && daysLeft <= 3

  const toolLinks = [
    {
      to: "/garment/inventory",
      icon: Package,
      en: "Inventory / Stock",
      am: "ክምችት",
      descEn: "Materials, min level, stock value",
      descAm: "ቁሳቁስ፣ ዝቅተኛ ደረጃ፣ ዋጋ",
    },
    {
      to: "/garment/quality",
      icon: AlertTriangle,
      en: "Quality / Defects",
      am: "ጥራት / ጉድለት",
      descEn: "Defect log and rework cost",
      descAm: "ጉድለት መመዝገብ እና ወጪ",
    },
    {
      to: "/garment/money-leaks",
      icon: Wallet,
      en: "Money leaks",
      am: "የገንዘብ ፍሳሽ",
      descEn: "Unused stock, delay risk, waste",
      descAm: "ያልተጠቀመ ክምችት፣ መዘግየት፣ ብክነት",
    },
    {
      to: "/garment/reports",
      icon: BarChart3,
      en: "Reports",
      am: "ሪፖርት",
      descEn: "Daily production and staff summary",
      descAm: "ዕለታዊ ምርት እና ሰራተኛ ማጠቃለያ",
    },
  ]

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-xl space-y-4 pb-24">
        <div>
          <h1 className="text-xl font-semibold text-semay-900">
            {isAm ? "ቅንብሮች" : "Settings"}
          </h1>
          <p className="text-sm text-semay-500 mt-1">
            {isAm
              ? "ክፍያ · መሳሪያዎች · ቋንቋ · መመሪያ"
              : "Billing · tools · language · guide"}
          </p>
        </div>

        {/* Tools first — what you asked to move here */}
        <Section
          id="tools"
          openId={openId}
          setOpenId={setOpenId}
          icon={Package}
          title={isAm ? "መሳሪያዎች" : "Workshop tools"}
          subtitle={
            isAm
              ? "ክምችት · ጥራት · ገንዘብ · ሪፖርት"
              : "Inventory · Quality · Money · Reports"
          }
        >
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
           
                  {/* Message Semay */}
        <section className="bg-white border border-semay-200 rounded-2xl shadow-sm overflow-hidden">
          <Link
            to="/garment/support"
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
                {isAm
                  ? "ክፍያ፣ ችግር ወይም ጥያቄ"
                  : "Billing, help, or questions — chat"}
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-semay-400 shrink-0" />
          </Link>
        </section>

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
                <div className="flex justify-between gap-2">
                  <span className="text-semay-500">
                    {isAm ? "ሁኔታ" : "Status"}
                  </span>
                  <span className="font-semibold text-right">
                    {String(sub.status || "—")}
                    {isTrial
                      ? isAm
                        ? " (ሙከራ 3 ቀን)"
                        : " (3-day trial)"
                      : ""}
                  </span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-semay-500">
                    {isAm ? "የቀሩ ቀናት" : "Days left"}
                  </span>
                  <span
                    className={`font-semibold ${
                      trialWarning ? "text-amber-700" : "text-semay-900"
                    }`}
                  >
                    {daysLeft ?? "—"}
                  </span>
                </div>
                {sub.endDate && (
                  <div className="flex justify-between gap-2">
                    <span className="text-semay-500">
                      {isAm ? "እስከ" : "Until"}
                    </span>
                    <span>
                      {new Date(sub.endDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
                {trialWarning && (
                  <p className="text-xs text-amber-900 bg-amber-50 border border-amber-100 rounded-xl p-3">
                    {isAm
                      ? "የ3 ቀን ሙከራ በቅርቡ ያበቃል። እቅድ ይምረጡ እና ይክፈሉ። ውሂብዎ አይጠፋም።"
                      : "Your 3-day trial ends soon. Choose a plan and pay. Your data stays safe."}
                  </p>
                )}
              </>
            ) : (
              <p className="text-semay-500">
                {isAm ? "ሁኔታ በመጫን..." : "Loading status..."}
              </p>
            )}

            <Link
              to="/billing"
              className="mt-1 flex items-center justify-between w-full px-4 py-3 rounded-xl bg-semay-900 text-white text-sm font-medium"
            >
              <span className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                {isAm ? "ክፍያ / እቅድ ክፈት" : "Open billing & plans"}
              </span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-semay-500">
              {isAm
                ? "ወር 3,500 ብር · 3 / 6 ወር · ዓመት 35,000 · 2 ዓመት 70,000"
                : "3,500 ETB/month · 3 / 6 months · year 35,000 · 2 years 70,000"}
            </p>
          </div>
        </Section>

        <Section
          id="business"
          openId={openId}
          setOpenId={setOpenId}
          icon={Building2}
          title={isAm ? "የንግድ መረጃ" : "Business details"}
          subtitle={organization?.name || "—"}
        >
          <div className="space-y-4 text-sm">
            <div>
              <div className="text-xs text-semay-500">
                {isAm ? "የንግድ ስም" : "Business name"}
              </div>
              <div className="font-medium text-semay-900 mt-1">
                {organization?.name || "—"}
              </div>
            </div>
            <div>
              <div className="text-xs text-semay-500">
                {isAm ? "ዓይነት" : "Type"}
              </div>
              <div className="font-medium text-semay-900 mt-1">
                {isAm ? "ልብስ ስፌት" : "Garment / Clothing"}
              </div>
            </div>
            <div>
              <div className="text-xs text-semay-500">
                {isAm ? "ባለቤት" : "Owner"}
              </div>
              <div className="font-medium text-semay-900 mt-1">
                {user?.name || "—"}
              </div>
            </div>
            <div>
              <div className="text-xs text-semay-500">Email</div>
              <div className="font-medium text-semay-900 mt-1">
                {user?.email || "—"}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="language"
          openId={openId}
          setOpenId={setOpenId}
          icon={Languages}
          title={isAm ? "ቋንቋ" : "Language"}
          subtitle={isAm ? "አማርኛ / English" : "English / አማርኛ"}
        >
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => i18n.changeLanguage("en")}
              className={`flex-1 py-3 rounded-xl text-sm font-medium border ${
                !isAm
                  ? "bg-semay-900 text-white border-semay-900"
                  : "border-semay-200"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => i18n.changeLanguage("am")}
              className={`flex-1 py-3 rounded-xl text-sm font-medium border ${
                isAm
                  ? "bg-semay-900 text-white border-semay-900"
                  : "border-semay-200"
              }`}
            >
              አማርኛ
            </button>
          </div>
        </Section>

        <Section
          id="guide"
          openId={openId}
          setOpenId={setOpenId}
          icon={BookOpen}
          title={isAm ? "አጭር መመሪያ" : "Quick guide"}
          subtitle={
            isAm
              ? "እንዴት እንደሚጠቀሙ"
              : "How to use Semaiy Garment"
          }
        >
          <p className="text-sm text-semay-500 mb-3">
            {isAm
              ? "መነሻ፣ ትዕዛዝ፣ ክምችት፣ ዕለታዊ እና ገንዘብ — በአጭር"
              : "Home, orders, stock, daily, and money — short guide"}
          </p>
          <Link
            to="/garment/guide"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-semay-900 text-white text-sm font-medium"
          >
            <BookOpen className="w-4 h-4" />
            {isAm ? "መመሪያ ክፈት" : "Open guide"}
          </Link>
        </Section>
      </div>
    </GarmentLayout>
  )
}
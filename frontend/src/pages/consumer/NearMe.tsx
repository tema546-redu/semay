import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, MapPin, Search } from "lucide-react"

const DEMO_PLACES = [
  { id: "1", name: "Lumina Café", nameAm: "ሉሚና ካፌ", type: "Café", distance: "0.3 km", rating: 4.6 },
  { id: "2", name: "Addis Bakery", nameAm: "አዲስ ቤከሪ", type: "Bakery", distance: "0.8 km", rating: 4.4 },
  { id: "3", name: "Bole Fitness", nameAm: "ቦሌ ፊትነስ", type: "Gym", distance: "1.2 km", rating: 4.7 },
  { id: "4", name: "Sky Hotel", nameAm: "ስካይ ሆቴል", type: "Hotel", distance: "1.5 km", rating: 4.5 },
]

export default function NearMe() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 px-4 h-14 flex items-center gap-3 sticky top-0 z-20">
        <Link to="/" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5 text-semay-600" />
        </Link>
        <div>
          <div className="text-sm font-semibold text-semay-900">{isAm ? "በአቅራቢያዬ" : "Near Me"}</div>
          <div className="text-xs text-semay-400">Semay Consumer</div>
        </div>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-semay-400" />
          <input
            placeholder={isAm ? "ሬስቶራንት፣ ካፌ፣ ጂም ፈልግ..." : "Search restaurant, cafe, gym..."}
            className="w-full pl-9 pr-4 py-3 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>

        <div className="flex items-center gap-2 text-sm text-semay-500">
          <MapPin className="w-4 h-4 text-accent" />
          {isAm ? "አቅራቢያ ያሉ ቦታዎች (ሙከራ)" : "Places near you (demo)"}
        </div>

        <div className="space-y-3">
          {DEMO_PLACES.map((p) => (
            <div key={p.id} className="bg-white border border-semay-200 rounded-2xl p-4 flex items-center justify-between hover:shadow-sm transition">
              <div>
                <div className="font-medium text-semay-900">{isAm ? p.nameAm : p.name}</div>
                <div className="text-xs text-semay-400 mt-0.5">{p.type} · {p.distance}</div>
              </div>
              <div className="text-sm font-medium text-amber-600">★ {p.rating}</div>
            </div>
          ))}
        </div>

        <p className="text-xs text-semay-400 text-center pt-4">
          {isAm
            ? "Phase 3 መሰረት — እውነተኛ አካባቢ እና ትዕዛዝ በቅርቡ ይመጣል።"
            : "Phase 3 foundation — real location & ordering coming soon."}
        </p>
      </div>
    </div>
  )
}

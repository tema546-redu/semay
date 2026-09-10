import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Home, Package, Scissors, Shirt, User } from "lucide-react"

export default function GarmentBottomNav() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const location = useLocation()

  const items = [
    { path: "/garment", icon: Home, label: isAm ? "መነሻ" : "Home" },
    { path: "/garment/orders", icon: Scissors, label: isAm ? "ምርት" : "Production" },
    { path: "/garment/inventory", icon: Package, label: isAm ? "ክምችት" : "Stock" },
    { path: "/garment/styles", icon: Shirt, label: isAm ? "ዓይነቶች" : "Styles" },
    { path: "/profile", icon: User, label: isAm ? "መገለጫ" : "Profile" },
  ]

  return (
    <div className="fixed bottom-#ifdef 0 left-0 right-0 bg-white border-t border-semay-200 safe-bottom z-50">
      <div className="flex justify-around items-center h-16">
        {items.map((item) => {
          const active = location.pathname === item.path
          const Icon = item.icon
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 text-xs ${
                active ? "text-semay-900" : "text-semay-400"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
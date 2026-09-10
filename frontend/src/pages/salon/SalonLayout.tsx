import { NavLink } from "react-router-dom"
import { Scissors, Home, CalendarPlus, CreditCard, Users, Settings, BarChart3, HelpCircle, UserCog } from "lucide-react"

const SIDEBAR_NAV = [
  { to: "/salon", label: "Dashboard", icon: Home, end: true },
  { to: "/salon/book", label: "Book", icon: CalendarPlus },
  { to: "/salon/pos", label: "Checkout", icon: CreditCard },
  { to: "/salon/reports", label: "Reports", icon: BarChart3 },
  { to: "/salon/stylists", label: "Team", icon: Users },
  { to: "/staff", label: "Staff & invites", icon: UserCog },
  { to: "/help", label: "Help", icon: HelpCircle },
  { to: "/salon/settings", label: "Settings", icon: Settings },
]

const MOBILE_NAV = [
  { to: "/salon", label: "Home", icon: Home, end: true },
  { to: "/salon/book", label: "Book", icon: CalendarPlus },
  { to: "/salon/pos", label: "Checkout", icon: CreditCard },
  { to: "/salon/reports", label: "Reports", icon: BarChart3 },
  { to: "/salon/settings", label: "Settings", icon: Settings },
]

export default function SalonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-[#FBF7F5] text-[#2B1B22] md:flex">
      <aside className="hidden md:flex md:w-60 md:flex-col md:fixed md:inset-y-0 border-r border-[#EEDEE0] bg-white">
        <div className="h-16 flex items-center gap-2 px-5 border-b border-[#EEDEE0]">
          <div className="w-8 h-8 rounded-full bg-[#B23A5B] flex items-center justify-center shrink-0">
            <Scissors className="w-4 h-4 text-white" />
          </div>
          <span className="font-serif text-lg">Salon</span>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {SIDEBAR_NAV.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end}
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${isActive ? "bg-[#B23A5B]/10 text-[#B23A5B] font-medium" : "text-[#6B5158] hover:bg-[#FBF7F5]"}`}>
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 md:ml-60 pb-20 md:pb-0">{children}</main>

      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-[#EEDEE0] flex justify-around py-2 z-10">
        {MOBILE_NAV.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end}
            className={({ isActive }) => `flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] ${isActive ? "text-[#B23A5B]" : "text-[#8A7377]"}`}>
            <Icon className="w-5 h-5" />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
/** Role helpers for Garment module */

export type GarmentRole = string | undefined | null

export function isGarmentOwner(role: GarmentRole) {
  return String(role || "").toUpperCase() === "OWNER"
}

export function isGarmentManager(role: GarmentRole) {
  return String(role || "").toUpperCase() === "MANAGER"
}

/** Owner or Manager — full garment control */
export function isGarmentAdmin(role: GarmentRole) {
  const r = String(role || "").toUpperCase()
  return r === "OWNER" || r === "MANAGER"
}

/** Invited floor staff — limited UI */
export function isGarmentStaffOnly(role: GarmentRole) {
  const r = String(role || "").toUpperCase()
  // treat unknown production roles as staff-limited
  return r === "STAFF" || r === "WAITER" || r === "KITCHEN" || r === "WORKER"
}

export type NavItem = {
  to: string
  en: string
  am: string
  icon: string // lucide name key resolved in layout
  adminOnly?: boolean
  staffOk?: boolean
}

/** Full admin menu (owner + manager) */
export const GARMENT_ADMIN_NAV: NavItem[] = [
  { to: "/garment/dashboard", en: "Home", am: "መነሻ", icon: "Home", staffOk: false },
  { to: "/garment/orders", en: "Production", am: "ምርት", icon: "Scissors", staffOk: true },
  { to: "/garment/inventory", en: "Inventory", am: "ክምችት", icon: "Package", staffOk: true },
  { to: "/garment/styles", en: "Styles", am: "ዓይነቶች", icon: "Shirt", adminOnly: true },
  { to: "/garment/staff", en: "Staff", am: "ሰራተኞች", icon: "Users", adminOnly: true },
  { to: "/garment/quality", en: "Quality", am: "ጥራት", icon: "AlertTriangle", staffOk: true },
  { to: "/garment/Daily", en: "Daily", am: "ዕለታዊ", icon: "ClipboardList", staffOk: true },
  { to: "/garment/money-leaks", en: "Money", am: "ገንዘብ", icon: "Wallet", adminOnly: true },
  { to: "/garment/reports", en: "Reports", am: "ሪፖርት", icon: "BarChart3", adminOnly: true },
]

/** Staff-only short menu */
export const GARMENT_STAFF_NAV: NavItem[] = [
  { to: "/garment/staff-home", en: "Home", am: "መነሻ", icon: "Home", staffOk: true },
  { to: "/garment/daily", en: "Daily work", am: "ዕለታዊ ስራ", icon: "ClipboardList", staffOk: true },
  { to: "/garment/orders", en: "Orders", am: "ትዕዛዞች", icon: "Scissors", staffOk: true },
  { to: "/garment/inventory", en: "Stock", am: "ክምችት", icon: "Package", staffOk: true },
  { to: "/garment/quality", en: "Quality", am: "ጥራት", icon: "AlertTriangle", staffOk: true },
]

export function navForRole(role: GarmentRole): NavItem[] {
  if (isGarmentStaffOnly(role)) return GARMENT_STAFF_NAV
  return GARMENT_ADMIN_NAV
}

export type PlanKey = "MONTHLY" | "THREE_MONTHS" | "SIX_MONTHS" | "YEARLY"

const BASE_MONTHLY: Record<string, number> = {
  CAFE: 2500,
  RESTAURANT: 4500,
  BAKERY: 3000,
  GYM: 3000,
  HOTEL: 8000,
  SUPERMARKET: 6000,
  PHARMACY: 3500,
  SALON: 3000,
  SCHOOL: 8000,
  UNIVERSITY: 12000,
  LIBRARY: 2500,
  OTHER: 3000,
}

/** Extra physical branch per month (on top of first location) */
const EXTRA_BRANCH_MONTHLY: Record<string, number> = {
  CAFE: 1500,
  RESTAURANT: 2700,
  BAKERY: 1800,
  HOTEL: 4000,
  LIBRARY: 1500,
  DEFAULT: 2000,
}

export function planDurationDays(plan: PlanKey): number {
  if (plan === "MONTHLY") return 30
  if (plan === "THREE_MONTHS") return 90
  if (plan === "SIX_MONTHS") return 180
  return 365
}

function monthlyFor(type: string, branches: number): number {
  const t = (type || "OTHER").toUpperCase()
  const base = BASE_MONTHLY[t] ?? BASE_MONTHLY.OTHER
  const extraUnit = EXTRA_BRANCH_MONTHLY[t] ?? EXTRA_BRANCH_MONTHLY.DEFAULT
  const n = Math.max(1, branches || 1)
  return base + Math.max(0, n - 1) * extraUnit
}

export function getPrice(type: string, plan: PlanKey, branchCount = 1): number {
  const t = (type || "OTHER").toUpperCase()
  const monthly = monthlyFor(t, branchCount)

  // Fixed annual for single restaurant (your number); multi-branch scales
  if (plan === "YEARLY" && t === "RESTAURANT" && branchCount <= 1) {
    return 40000
  }
  if (plan === "YEARLY") return Math.round(monthly * 9) // ~3 months free
  if (plan === "SIX_MONTHS") return Math.round(monthly * 5)
  if (plan === "THREE_MONTHS") return Math.round(monthly * 2.6)
  return monthly
}

export function listPlansForType(type: string, branchCount = 1) {
  const keys: PlanKey[] = ["MONTHLY", "THREE_MONTHS", "SIX_MONTHS", "YEARLY"]
  return keys.map((plan) => ({
    plan,
    amount: getPrice(type, plan, branchCount),
    days: planDurationDays(plan),
    branchCount: Math.max(1, branchCount || 1),
    currency: "ETB",
  }))
}
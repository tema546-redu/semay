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
  GARMENT: 3500,
  STORE: 500,
  OTHER: 3000,
}

const EXTRA_BRANCH_MONTHLY: Record<string, number> = {
  CAFE: 1500,
  RESTAURANT: 2500,
  BAKERY: 1800,
  HOTEL: 4000,
  LIBRARY: 1500,
  GARMENT: 2000,
  STORE: 300,
  DEFAULT: 2000,
}

/** Store flat packs — always 500 / 1500 / 3000 / 6000 */
const STORE_AMOUNTS: Record<PlanKey, number> = {
  MONTHLY: 500,
  THREE_MONTHS: 1500,
  SIX_MONTHS: 3000,
  YEARLY: 6000,
}

export function planDurationDays(plan: PlanKey): number {
  if (plan === "MONTHLY") return 30
  if (plan === "THREE_MONTHS") return 90
  if (plan === "SIX_MONTHS") return 180
  return 365
}

function monthlyFor(type: string, branches: number): number {
  const t = String(type || "OTHER").toUpperCase()
  const base = BASE_MONTHLY[t] ?? BASE_MONTHLY.OTHER
  const extraUnit = EXTRA_BRANCH_MONTHLY[t] ?? EXTRA_BRANCH_MONTHLY.DEFAULT
  const n = Math.max(1, branches || 1)
  return base + Math.max(0, n - 1) * extraUnit
}

export function getPrice(type: string, plan: PlanKey, branchCount = 1): number {
  const t = String(type || "OTHER").toUpperCase()
  const n = Math.max(1, branchCount || 1)

  // Store: fixed prices (do not use monthly formula)
  if (t === "STORE") {
    return STORE_AMOUNTS[plan] ?? STORE_AMOUNTS.MONTHLY
  }

  const monthly = monthlyFor(t, n)

  // Garment fixed prices (1 branch base; extra branches use monthly × months)
  if (t === "GARMENT") {
    if (n <= 1) {
      if (plan === "MONTHLY") return 3500
      if (plan === "THREE_MONTHS") return 10500 // 3 × 3500
      if (plan === "SIX_MONTHS") return 21000 // 6 × 3500
      if (plan === "YEARLY") return 35000 // one-time annual
    }
    // Multi-branch garment: scale from monthly
    if (plan === "MONTHLY") return monthly
    if (plan === "THREE_MONTHS") return monthly * 3
    if (plan === "SIX_MONTHS") return monthly * 6
    if (plan === "YEARLY") return Math.round(monthly * 10) // ~same discount idea as 35k vs 42k
  }

  if (plan === "YEARLY" && t === "RESTAURANT" && n <= 1) {
    return 40000
  }
  if (plan === "YEARLY") return Math.round(monthly * 9)
  if (plan === "SIX_MONTHS") return Math.round(monthly * 5)
  if (plan === "THREE_MONTHS") return Math.round(monthly * 2.6)
  return monthly
}

export function listPlansForType(type: string, branchCount = 1) {
  const keys: PlanKey[] = ["MONTHLY", "THREE_MONTHS", "SIX_MONTHS", "YEARLY"]
  const n = Math.max(1, branchCount || 1)
  const t = String(type || "OTHER").toUpperCase()

  const labels: Record<
    PlanKey,
    { en: string; am: string; savePercent: number }
  > = {
    MONTHLY: {
      en:
        t === "GARMENT"
          ? "Garment · 1 month"
          : t === "STORE"
            ? "Store · 1 month"
            : "1 month",
      am:
        t === "GARMENT"
          ? "ጋርመንት · 1 ወር"
          : t === "STORE"
            ? "ሱቅ · 1 ወር"
            : "1 ወር",
      savePercent: 0,
    },
    THREE_MONTHS: {
      en:
        t === "GARMENT"
          ? "Garment · 3 months"
          : t === "STORE"
            ? "Store · 3 months"
            : "3 months",
      am:
        t === "GARMENT"
          ? "ጋርመንት · 3 ወር"
          : t === "STORE"
            ? "ሱቅ · 3 ወር"
            : "3 ወር",
      savePercent: 0,
    },
    SIX_MONTHS: {
      en:
        t === "GARMENT"
          ? "Garment · 6 months"
          : t === "STORE"
            ? "Store · 6 months"
            : "6 months",
      am:
        t === "GARMENT"
          ? "ጋርመንት · 6 ወር"
          : t === "STORE"
            ? "ሱቅ · 6 ወር"
            : "6 ወር",
      savePercent: 0,
    },
    YEARLY: {
      en:
        t === "GARMENT"
          ? "Garment · 1 year"
          : t === "STORE"
            ? "Store · 1 year"
            : "1 year",
      am:
        t === "GARMENT"
          ? "ጋርመንት · 1 ዓመት"
          : t === "STORE"
            ? "ሱቅ · 1 ዓመት"
            : "1 ዓመት",
      savePercent: t === "GARMENT" ? 17 : 0,
    },
  }

  return keys.map((plan) => ({
    plan,
    amount: getPrice(type, plan, n),
    days: planDurationDays(plan),
    branchCount: n,
    currency: "ETB",
    label: labels[plan].en,
    labelAm: labels[plan].am,
    savePercent: labels[plan].savePercent,
  }))
}
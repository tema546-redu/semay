export type PlanKey = "MONTHLY" | "THREE_MONTHS" | "SIX_MONTHS" | "YEARLY"

export interface PriceRow {
  monthly: number
  threeMonths: number
  sixMonths: number
  yearly: number
}

export const PRICING: Record<string, PriceRow> = {
  CAFE: { monthly: 2500, threeMonths: 6500, sixMonths: 12000, yearly: 22000 },
  RESTAURANT: { monthly: 4500, threeMonths: 12000, sixMonths: 22000, yearly: 40000 },
  BAKERY: { monthly: 2500, threeMonths: 6500, sixMonths: 12000, yearly: 22000 },
  HOTEL: { monthly: 8000, threeMonths: 21000, sixMonths: 40000, yearly: 75000 },
  GYM: { monthly: 3000, threeMonths: 8000, sixMonths: 15000, yearly: 28000 },
  SCHOOL: { monthly: 8000, threeMonths: 21000, sixMonths: 40000, yearly: 75000 },
  OTHER: { monthly: 3000, threeMonths: 8000, sixMonths: 15000, yearly: 28000 },
}

export function getPrice(businessType: string, plan: PlanKey): number {
  const row = PRICING[businessType] || PRICING.OTHER
  switch (plan) {
    case "MONTHLY":
      return row.monthly
    case "THREE_MONTHS":
      return row.threeMonths
    case "SIX_MONTHS":
      return row.sixMonths
    case "YEARLY":
      return row.yearly
    default:
      return row.monthly
  }
}

export function planDurationDays(plan: PlanKey): number {
  switch (plan) {
    case "MONTHLY":
      return 30
    case "THREE_MONTHS":
      return 90
    case "SIX_MONTHS":
      return 180
    case "YEARLY":
      return 365
    default:
      return 30
  }
}

export function listPlansForType(businessType: string) {
  const row = PRICING[businessType] || PRICING.OTHER
  return [
    { plan: "MONTHLY" as PlanKey, label: "Monthly", labelAm: "ወርሃዊ", amount: row.monthly, days: 30, savePercent: 0 },
    {
      plan: "THREE_MONTHS" as PlanKey,
      label: "3 Months",
      labelAm: "3 ወር",
      amount: row.threeMonths,
      days: 90,
      savePercent: Math.round((1 - row.threeMonths / (row.monthly * 3)) * 100),
    },
    {
      plan: "SIX_MONTHS" as PlanKey,
      label: "6 Months",
      labelAm: "6 ወር",
      amount: row.sixMonths,
      days: 180,
      savePercent: Math.round((1 - row.sixMonths / (row.monthly * 6)) * 100),
    },
    {
      plan: "YEARLY" as PlanKey,
      label: "Annual",
      labelAm: "ዓመታዊ",
      amount: row.yearly,
      days: 365,
      savePercent: Math.round((1 - row.yearly / (row.monthly * 12)) * 100),
    },
  ]
}
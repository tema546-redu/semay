import "dotenv/config"
import { PrismaClient, Role, BusinessType } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  console.log("Seeding Semay...")

  const passwordHash = await bcrypt.hash("demo1234", 10)

  const org = await prisma.organization.upsert({
    where: { id: "demo-cafe" },
    update: {},
    create: {
      id: "demo-cafe",
      name: "Lumina Café",
      type: BusinessType.CAFE,
      currency: "ETB",
    },
  })

  await prisma.subscription.upsert({
    where: { organizationId: org.id },
    update: {},
    create: {
      organizationId: org.id,
      plan: "MONTHLY",
      status: "TRIAL",
      amount: 0,
      endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    },
  })

  await prisma.user.upsert({
    where: { email: "tema@semay.app" },
    update: {},
    create: {
      email: "tema@semay.app",
      name: "Tema",
      passwordHash,
      role: Role.OWNER,
      preferredLang: "en",
      organizationId: org.id,
    },
  })

  const existingMenu = await prisma.menuItem.count({ where: { organizationId: org.id } })
  if (existingMenu === 0) {
    const menu = [
      { name: "Espresso", nameAm: "ኤስፕሬሶ", category: "Coffee", price: 80 },
      { name: "Cappuccino", nameAm: "ካፑቺኖ", category: "Coffee", price: 120 },
      { name: "Flat White", nameAm: "ፍላት ዋይት", category: "Coffee", price: 130 },
      { name: "Iced Latte", nameAm: "አይስድ ላቴ", category: "Coffee", price: 140 },
      { name: "Avocado Toast", nameAm: "አቮካዶ ቶስት", category: "Food", price: 250 },
      { name: "Chicken Sandwich", nameAm: "የዶሮ ሳንድዊች", category: "Food", price: 280 },
      { name: "Croissant", nameAm: "ክሮሳንት", category: "Pastry", price: 90 },
      { name: "Blueberry Muffin", nameAm: "ብሉቤሪ ማፊን", category: "Pastry", price: 100 },
    ]
    for (const item of menu) {
      await prisma.menuItem.create({ data: { ...item, organizationId: org.id } })
    }
  }

  console.log("Cafe seed done - tema@semay.app / demo1234")

  const gymOrg = await prisma.organization.upsert({
    where: { id: "demo-gym" },
    update: {},
    create: {
      id: "demo-gym",
      name: "Semay Fitness",
      type: BusinessType.GYM,
      currency: "ETB",
    },
  })

  await prisma.subscription.upsert({
    where: { organizationId: gymOrg.id },
    update: {},
    create: {
      organizationId: gymOrg.id,
      plan: "MONTHLY",
      status: "TRIAL",
      amount: 0,
      endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    },
  })

  await prisma.user.upsert({
    where: { email: "gym@semay.app" },
    update: {},
    create: {
      email: "gym@semay.app",
      name: "Gym Owner",
      passwordHash,
      role: Role.OWNER,
      preferredLang: "en",
      organizationId: gymOrg.id,
    },
  })

  const planCount = await prisma.membershipPlan.count({ where: { organizationId: gymOrg.id } })
  if (planCount === 0) {
    const gymPlans = [
      { name: "Monthly Unlimited", nameAm: "ወርሃዊ ያልተገደበ", type: "monthly", price: 2500, durationDays: 30 },
      { name: "Annual", nameAm: "ዓመታዊ", type: "annual", price: 25000, durationDays: 365 },
      { name: "10 Class Pack", nameAm: "10 ክፍል ፓክ", type: "class_pack", price: 1500, classCredits: 10 },
      { name: "Drop-in", nameAm: "አንድ ጊዜ", type: "drop_in", price: 200 },
    ]
    for (const p of gymPlans) {
      await prisma.membershipPlan.create({ data: { ...p, organizationId: gymOrg.id } })
    }
  }

  console.log("Gym seed done - gym@semay.app / demo1234")
  console.log("Seeding complete.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
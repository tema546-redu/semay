import { Router } from "express"
import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { authenticate, requireOrganization, requireRole } from "../middleware/auth.js"
import { Role } from "@prisma/client"

const router = Router()
router.use(authenticate, requireOrganization)

router.get("/", async (req, res) => {
  const organizationId = req.user!.organizationId!
  const list = await prisma.branch.findMany({
    where: { organizationId },
    orderBy: { createdAt: "asc" },
  })
  res.json(list)
})

router.post("/", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const data = z
      .object({
        name: z.string().min(1),
        address: z.string().optional(),
        phone: z.string().optional(),
      })
      .parse(req.body)

    const organizationId = req.user!.organizationId!

    const branch = await prisma.branch.create({
      data: {
        name: data.name,
        address: data.address,
        phone: data.phone,
        organizationId,
      },
    })
    res.status(201).json(branch)
  } catch (e: any) {
    if (e.name === "ZodError") return res.status(400).json({ error: e.errors })
    res.status(500).json({ error: e.message || "Failed" })
  }
})

router.patch("/:id", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  try {
    const id = String(req.params.id)
    const data = z
      .object({
        name: z.string().min(1).optional(),
        address: z.string().optional(),
        phone: z.string().optional(),
      })
      .parse(req.body)

    const updated = await prisma.branch.updateMany({
      where: { id, organizationId: req.user!.organizationId! },
      data,
    })
    if (!updated.count) return res.status(404).json({ error: "Not found" })
    const row = await prisma.branch.findUnique({ where: { id } })
    res.json(row)
  } catch (e: any) {
    res.status(400).json({ error: e.message || "Failed" })
  }
})

/** Ensure at least one "Main" branch; attach orphan rows */
router.post("/ensure-main", requireRole(Role.OWNER, Role.MANAGER), async (req, res) => {
  const organizationId = req.user!.organizationId!
  let main = await prisma.branch.findFirst({
    where: { organizationId },
    orderBy: { createdAt: "asc" },
  })
  if (!main) {
    main = await prisma.branch.create({
      data: { name: "Main", organizationId },
    })
  }
  await prisma.menuItem.updateMany({
    where: { organizationId, branchId: null },
    data: { branchId: main.id },
  })
  await prisma.order.updateMany({
    where: { organizationId, branchId: null },
    data: { branchId: main.id },
  })
  await prisma.user.updateMany({
    where: { organizationId, branchId: null, role: { not: Role.OWNER } },
    data: { branchId: main.id },
  })
  res.json(main)
})

export default router
import jwt from "jsonwebtoken"
import { Role } from "@prisma/client"

const JWT_SECRET = process.env.JWT_SECRET || "semay-dev-secret-change-me-in-production"

export interface JwtPayload {
  userId: string
  email: string
  role: Role
  organizationId: string | null
}

export function signToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" })
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET) as JwtPayload
}

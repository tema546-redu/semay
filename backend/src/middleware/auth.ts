import { Request, Response, NextFunction } from "express"
import { verifyToken, JwtPayload } from "../lib/jwt.js"
import { Role } from "@prisma/client"

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload
    }
  }
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  try {
    const token = header.slice(7)
    req.user = verifyToken(token)
    next()
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" })
  }
}

export function requireRole(...roles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" })
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden" })
    }
    next()
  }
}

export function requireOrganization(req: Request, res: Response, next: NextFunction) {
  if (!req.user?.organizationId) {
    return res.status(400).json({ error: "No organization associated" })
  }
  next()
}

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { authApi, setToken, clearToken } from "./api"
import i18n from "../i18n"

interface AuthContextType {
  user: any | null
  organization: any | null
  loading: boolean
  login: (email: string, password: string) => Promise<{ user: any; organization: any }>
  register: (data: any) => Promise<{ user: any; organization: any }>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [organization, setOrganization] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("semay_token")
    if (!token) {
      setLoading(false)
      return
    }

    authApi
      .me()
      .then((data) => {
        const u = data.user ?? data
        const org = data.organization ?? null
        setUser(u)
        setOrganization(org)
        if (u?.preferredLang) i18n.changeLanguage(u.preferredLang)
      })
      .catch(() => {
        clearToken()
        setUser(null)
        setOrganization(null)
      })
      .finally(() => setLoading(false))
  }, [])

  const login = async (email: string, password: string) => {
    const data = await authApi.login(email.trim().toLowerCase(), password)
    if (!data?.token) throw new Error("No token returned")
    setToken(data.token)
    setUser(data.user)
    setOrganization(data.organization)
    if (data.user?.preferredLang) i18n.changeLanguage(data.user.preferredLang)
    return { user: data.user, organization: data.organization }
  }

  const register = async (formData: any) => {
    const payload = {
      ...formData,
      email: String(formData.email || "").trim().toLowerCase(),
    }
    const data = await authApi.register(payload)
    if (!data?.token) throw new Error("No token returned")
    setToken(data.token)
    setUser(data.user)
    setOrganization(data.organization)
    if (data.user?.preferredLang) i18n.changeLanguage(data.user.preferredLang)
    return { user: data.user, organization: data.organization }
  }

  const logout = () => {
    clearToken()
    setUser(null)
    setOrganization(null)
    window.location.href = "/login"
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        organization,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
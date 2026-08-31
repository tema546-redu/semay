const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001"

export function getToken() {
  return localStorage.getItem("semay_token")
}
export function setToken(token: string) {
  localStorage.setItem("semay_token", token)
}
export function clearToken() {
  localStorage.removeItem("semay_token")
}

export async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken()
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as any),
  }
  if (token) headers["Authorization"] = `Bearer ${token}`

  const res = await fetch(`${API_URL}${path}`, { ...options, headers })
  if (res.status === 401) {
    clearToken()
    window.location.href = "/login"
    throw new Error("Unauthorized")
  }
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || "Request failed")
  return data as T
}

export const authApi = {
  login: (email: string, password: string) =>
    request<{ token: string; user: any; organization: any }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  register: (data: any) =>
    request<{ token: string; user: any; organization: any }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  me: () => request<any>("/api/auth/me"),
  updateMe: (data: any) =>
    request<any>("/api/auth/me", {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
    deleteAccount: () =>
    request<any>("/api/auth/me", { method: "DELETE" }),
}

export const ordersApi = {
  create: (payload: any) =>
    request<any>("/api/orders", { method: "POST", body: JSON.stringify(payload) }),
  active: () => request<any[]>("/api/orders/active"),
  updateStatus: (id: string, status: string) =>
    request<any>(`/api/orders/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }),
}

export const menuApi = {
  list: (availableOnly?: boolean) =>
    request<any[]>(
      `/api/menu${availableOnly ? "?available=true" : ""}`
    ),
  create: (data: any) =>
    request<any>("/api/menu", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: any) =>
    request<any>(`/api/menu/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  remove: (id: string) =>
    request<any>(`/api/menu/${id}`, { method: "DELETE" }),
  toggleAvailability: (id: string, available: boolean) =>
    request<any>(`/api/menu/${id}/availability`, {
      method: "PATCH",
      body: JSON.stringify({ available }),
    }),
}

export const schoolApi = {
  students: () => request<any[]>("/api/school/students"),
  createStudent: (data: any) =>
    request<any>("/api/school/students", { method: "POST", body: JSON.stringify(data) }),
  attendance: (date?: string) =>
    request<any[]>(`/api/school/attendance${date ? `?date=${date}` : ""}`),
  markAttendance: (data: { studentId: string; status: string; note?: string }) =>
    request<any>("/api/school/attendance", { method: "POST", body: JSON.stringify(data) }),
  grades: () => request<any[]>("/api/school/grades"),
  createGrade: (data: any) =>
    request<any>("/api/school/grades", { method: "POST", body: JSON.stringify(data) }),
}

export const dashboardApi = {
  stats: () => request<any>("/api/dashboard/stats"),
}

export const gymApi = {
  members: () => request<any[]>("/api/gym/members"),
  createMember: (data: any) =>
    request<any>("/api/gym/members", { method: "POST", body: JSON.stringify(data) }),
  plans: () => request<any[]>("/api/gym/plans"),
  createPlan: (data: any) =>
    request<any>("/api/gym/plans", { method: "POST", body: JSON.stringify(data) }),
  checkIn: (memberId: string, method = "manual") =>
    request<any>("/api/gym/check-in", { method: "POST", body: JSON.stringify({ memberId, method }) }),
  todayCheckIns: () => request<any[]>("/api/gym/check-ins/today"),
  stats: () => request<any>("/api/gym/stats"),
  setMemberStatus: (id: string, status: string) =>
    request<any>(`/api/gym/members/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }),
  expiring: () => request<any[]>("/api/gym/expiring"),
}

export const hotelApi = {
  rooms: () => request<any[]>("/api/hotel/rooms"),
  createRoom: (data: any) =>
    request<any>("/api/hotel/rooms", { method: "POST", body: JSON.stringify(data) }),
  updateStatus: (id: string, status: string) =>
    request<any>(`/api/hotel/rooms/${id}/status`, {
      method: "PATCH", body: JSON.stringify({ status }),
    }),
  stats: () => request<any>("/api/hotel/stats"),
}

export const aiApi = {
  chat: (message: string, context?: string) =>
    request<{ reply: string }>("/api/ai/chat", {
      method: "POST", body: JSON.stringify({ message, context }),
    }),
}

// extended school
export const schoolApiExt = {
  grades: () => request<any[]>("/api/school/grades"),
  createGrade: (data: any) =>
    request<any>("/api/school/grades", { method: "POST", body: JSON.stringify(data) }),
}

// gym classes
export const gymClassApi = {
  list: () => request<any[]>("/api/gym/classes"),
  create: (data: any) =>
    request<any>("/api/gym/classes", { method: "POST", body: JSON.stringify(data) }),
}

export const restaurantApi = {
  analytics: () => request<any>("/api/restaurant/analytics"),
  settings: () => request<any>("/api/restaurant/settings"),
  updateSettings: (data: { openTime?: string; closeTime?: string }) =>
    request<any>("/api/restaurant/settings", {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  closingReport: () => request<any>("/api/restaurant/closing-report"),
}

export const expensesApi = {
  list: () => request<any[]>("/api/restaurant/expenses"),
  create: (data: { name: string; amount: number; note?: string }) =>
    request<any>("/api/restaurant/expenses", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  remove: (id: string) =>
    request<any>(`/api/restaurant/expenses/${id}`, { method: "DELETE" }),
}

export const billingApi = {
  current: () => request<any>("/api/billing/current"),
  plans: () => request<any>("/api/billing/plans"),
  selectPlan: (plan: string) =>
    request<any>("/api/billing/select-plan", {
      method: "POST",
      body: JSON.stringify({ plan }),
    }),
  markPaid: (plan: string, reference: string, method: string, receipt?: string) =>
  request<any>("/api/billing/mark-paid", {
    method: "POST",
    body: JSON.stringify({ plan, reference, method, receipt }),
  }),
  pending: () => request<any[]>("/api/billing/pending"),
  approve: (organizationId: string) =>
    request<any>("/api/billing/approve", {
      method: "POST",
      body: JSON.stringify({ organizationId }),
    }),
  reject: (organizationId: string) =>
    request<any>("/api/billing/reject", {
      method: "POST",
      body: JSON.stringify({ organizationId }),
    }),
}

export const staffApi = {
  list: () => request<any>("/api/staff"),
  createInvite: (role: string) =>
    request<any>("/api/staff/invite", {
      method: "POST",
      body: JSON.stringify({ role }),
    }),
  getInvite: (code: string) => request<any>(`/api/staff/invite/${code}`),
  join: (data: { code: string; name: string; email: string; password: string }) =>
    request<any>("/api/staff/join", {
      method: "POST",
      body: JSON.stringify(data),
    }),
    attendance: (year: number, month: number) =>
    request<any>(`/api/staff/attendance?year=${year}&month=${month}`),
  markAttendance: (data: {
    userId: string
    date: string
    status: string
    note?: string
  }) =>
    request<any>("/api/staff/attendance", {
      method: "POST",
      body: JSON.stringify(data),
    }),
}

export const reservationsApi = {
  list: (date?: string) =>
    request<any[]>(`/api/reservations${date ? `?date=${date}` : ""}`),
  create: (data: any) =>
    request<any>("/api/reservations", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateStatus: (id: string, status: string) =>
    request<any>(`/api/reservations/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
  remove: (id: string) =>
    request<any>(`/api/reservations/${id}`, { method: "DELETE" }),
}

export const bakeryApi = {
  products: () => request<any[]>("/api/bakery/products"),
  createProduct: (data: any) =>
    request("/api/bakery/products", { method: "POST", body: JSON.stringify(data) }),
  produce: (data: { productId: string; quantity: number; note?: string }) =>
    request("/api/bakery/produce", { method: "POST", body: JSON.stringify(data) }),
  waste: (data: { productId: string; quantity: number; reason?: string }) =>
    request("/api/bakery/waste", { method: "POST", body: JSON.stringify(data) }),
  sell: (data: any) =>
    request("/api/bakery/sell", { method: "POST", body: JSON.stringify(data) }),
  dashboard: () => request<any>("/api/bakery/dashboard"),
}

export const feedbackApi = {
  send: (message: string, email?: string) =>
    request<any>("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ message, ...(email ? { email } : {}) }),
    }),
  mine: () => request<any[]>("/api/feedback/mine"),
}

export const pharmacyApi = {
  dashboard: () => request<any>("/api/pharmacy/dashboard"),
  products: (q?: string) =>
    request<any[]>(`/api/pharmacy/products${q ? `?q=${encodeURIComponent(q)}` : ""}`),
  createProduct: (data: any) =>
    request<any>("/api/pharmacy/products", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateProduct: (id: string, data: any) =>
    request<any>(`/api/pharmacy/products/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  sell: (data: any) =>
    request<any>("/api/pharmacy/sell", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  sales: () => request<any[]>("/api/pharmacy/sales"),
}

export const stockApi = {
  list: () => request<any[]>("/api/stock"),
  create: (data: {
    name: string
    unit: string
    quantity: number
    lowAt?: number | null
    note?: string
  }) =>
    request<any>("/api/stock", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  addQty: (id: string, amount: number) =>
    request<any>(`/api/stock/${id}/add`, {
      method: "POST",
      body: JSON.stringify({ amount }),
    }),
  update: (id: string, data: any) =>
    request<any>(`/api/stock/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  remove: (id: string) =>
    request<any>(`/api/stock/${id}`, { method: "DELETE" }),
  setRecipe: (data: { menuItemId: string; stockItemId: string; qtyPerSale: number }) =>
    request<any>("/api/stock/recipe", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  getRecipe: (menuItemId: string) =>
    request<any[]>(`/api/stock/recipe/${menuItemId}`),
}
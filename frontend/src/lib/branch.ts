const KEY = "semaiy_branch_id"

export function getBranchId(): string | null {
  return localStorage.getItem(KEY)
}

export function setBranchId(id: string | null) {
  if (id) localStorage.setItem(KEY, id)
  else localStorage.removeItem(KEY)
}
export type StudentOverview = {
  name: string
  registration: string
  program: string
  semester: number
  status: string
}

export type Course = {
  name: string
  code: string
  credits: number
  status: string
}

export type LedgerEntry = {
  date: string
  description: string
  amount: number
  balance: number
}

export type DashboardData = {
  student: StudentOverview
  courses: Course[]
  ledger: LedgerEntry[]
}

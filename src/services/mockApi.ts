import { dashboardData, attendanceRecords, userProfile } from '../data/mockData'
import type { DashboardData, CourseAttendanceRecord, UserProfile } from '../data/types'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getDashboardData(): Promise<DashboardData> {
  await delay(250)
  return dashboardData
}

export async function getAttendanceRecords(): Promise<CourseAttendanceRecord[]> {
  await delay(250)
  return attendanceRecords
}

export async function getUserProfile(): Promise<UserProfile> {
  await delay(250)
  return userProfile
}
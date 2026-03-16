import { dashboardData, attendanceRecords, userProfile, teacherDashboardData, teacherBatches, studentAttendanceList } from '../data/mockData'
import type { DashboardData, CourseAttendanceRecord, UserProfile, TeacherDashboardData, TeacherBatch, StudentAttendanceForm } from '../data/types'

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

export async function getTeacherDashboardData(): Promise<TeacherDashboardData> {
  await delay(250)
  return teacherDashboardData
}

export async function getTeacherBatches(): Promise<TeacherBatch[]> {
  await delay(250)
  return teacherBatches
}

export async function getStudentAttendanceList(): Promise<StudentAttendanceForm[]> {
  await delay(250)
  return studentAttendanceList
}
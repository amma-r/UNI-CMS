export type CourseAttendanceRecord = {
  id: string
  courseName: string
  courseCode: string
  sectionCode: string
  scheduled: number
  conducted: number
  attended: number
  percentage: number
  finalAttendance: string
}

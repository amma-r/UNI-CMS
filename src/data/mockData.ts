import type { DashboardData } from '../pages/dashboard/types'
import type { CourseAttendanceRecord } from '../pages/attendance/types'

export const dashboardData: DashboardData = {
  student: {
    name: 'Jane Doe',
    registration: '2026-0001',
    program: 'B.Sc. Computer Science',
    semester: 3,
    status: 'Active',
  },
  courses: [
    { name: 'Intro to Programming', code: 'CS101', credits: 3, status: 'Enrolled' },
    { name: 'Data Structures', code: 'CS201', credits: 4, status: 'Enrolled' },
    { name: 'Database Systems', code: 'CS301', credits: 3, status: 'Planned' },
  ],
  ledger: [
    { date: '2026-03-01', description: 'Semester tuition', amount: 1200, balance: 1200 },
    { date: '2026-03-05', description: 'Scholarship credit', amount: -500, balance: 700 },
    { date: '2026-03-12', description: 'Library fine', amount: 25, balance: 725 },
  ],
}

export const attendanceRecords: CourseAttendanceRecord[] = [
  {
    id: 'cs325t',
    courseName: 'Artificial Intelligence',
    courseCode: 'CS325T',
    sectionCode: 'Spring 2026–2023F–BS–CS–CS325T–E–22306',
    scheduled: 48,
    conducted: 0,
    attended: 0,
    percentage: 0,
    finalAttendance: '0%',
  },
  {
    id: 'cs323t',
    courseName: 'Computer Graphics & Multimedia Theory',
    courseCode: 'CS323T',
    sectionCode: 'Spring 2026–2023F–BS–CS–CS323T–E–22296',
    scheduled: 48,
    conducted: 0,
    attended: 0,
    percentage: 0,
    finalAttendance: '0%',
  },
  {
    id: 'cs327',
    courseName: 'Design & Analysis of Algorithms',
    courseCode: 'CS327',
    sectionCode: 'Spring 2026–2023F–BS–CS–CS327–E–22359',
    scheduled: 48,
    conducted: 0,
    attended: 0,
    percentage: 0,
    finalAttendance: '0%',
  },
  {
    id: 'cs326',
    courseName: 'Information Security',
    courseCode: 'CS326',
    sectionCode: 'Spring 2026–2023F–BS–CS–CS326–E–22336',
    scheduled: 48,
    conducted: 0,
    attended: 0,
    percentage: 0,
    finalAttendance: '0%',
  },
  {
    id: 'hs101',
    courseName: 'Islamic Studies',
    courseCode: 'HS101',
    sectionCode: 'Spring 2026–2023F–BS–CS–HS101–A–B–C–D–E–F–22251',
    scheduled: 32,
    conducted: 0,
    attended: 0,
    percentage: 0,
    finalAttendance: '0%',
  },
  {
    id: 'ms203',
    courseName: 'Numerical Analysis',
    courseCode: 'MS203',
    sectionCode: 'Spring 2026–2023F–BS–CS–MS203–E–22347',
    scheduled: 48,
    conducted: 0,
    attended: 0,
    percentage: 0,
    finalAttendance: '0%',
  },
  {
    id: 'cs325l',
    courseName: 'Artificial Intelligence Lab',
    courseCode: 'CS325L',
    sectionCode: 'Spring 2026–2023F–BS–CS–CS325L–E–22285',
    scheduled: 16,
    conducted: 0,
    attended: 0,
    percentage: 0,
    finalAttendance: '0%',
  },
]

export type UserProfile = {
  id: string
  name: string
  role: 'Student' | 'Faculty'
  email: string
  phone?: string
  department?: string
  program?: string
  semester?: string
  status?: string
  campus?: string
  address?: string
  avatarUrl?: string
}

export const userProfile: UserProfile = {
  id: '2026-0001',
  name: 'Jane Doe',
  role: 'Student',
  email: 'jane.doe@email.com',
  phone: '+1 (555) 123-4567',
  department: 'Computer Science',
  program: 'B.Sc. Computer Science',
  semester: '3',
  status: 'Active',
  campus: 'Main Campus',
  address: '123 University Ave, City, Country',
  avatarUrl: 'https://ui-avatars.com/api/?name=Jane+Doe&background=1e88e5&color=fff',
}

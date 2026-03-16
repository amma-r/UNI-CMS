import type { DashboardData, CourseAttendanceRecord, UserProfile, TeacherDashboardData, TeacherBatch, StudentAttendanceForm } from './types'

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

export const dashboardData: DashboardData = {
  student: {
    name: userProfile.name,
    registration: userProfile.id,
    program: userProfile.program!,
    semester: Number(userProfile.semester),
    status: userProfile.status!,
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

export const teacherDashboardData: TeacherDashboardData = {
  teacher: {
    name: 'Prof. John Smith',
    id: 'T-1001',
    department: 'Computer Science',
  },
  todayClasses: [
    { time: '09:00 AM - 10:30 AM', courseName: 'Data Structures', batch: 'BSCS-2A', room: 'Room 301' },
    { time: '11:00 AM - 12:30 PM', courseName: 'Algorithms', batch: 'BSCS-3B', room: 'Lab 2' },
  ],
}

export const teacherBatches: TeacherBatch[] = [
  { id: 'b1', courseName: 'Data Structures', courseCode: 'CS201', batchName: 'BSCS-2A' },
  { id: 'b2', courseName: 'Algorithms', courseCode: 'CS301', batchName: 'BSCS-3B' },
  { id: 'b3', courseName: 'Database Systems', courseCode: 'CS401', batchName: 'BSCS-4A' },
]

export const studentAttendanceList: StudentAttendanceForm[] = [
  { id: 's1', name: 'Alice Johnson', registration: '2026-0010', isPresent: true },
  { id: 's2', name: 'Bob Smith', registration: '2026-0011', isPresent: true },
  { id: 's3', name: 'Charlie Brown', registration: '2026-0012', isPresent: false },
  { id: 's4', name: 'Diana Prince', registration: '2026-0013', isPresent: true },
  { id: 's5', name: 'Evan Wright', registration: '2026-0014', isPresent: true },
]

export type StudentOverview = {
  name: string;
  registration: string;
  program: string;
  semester: number;
  status: string;
};

export type Course = {
  name: string;
  code: string;
  credits: number;
  status: string;
};

export type LedgerEntry = {
  date: string;
  description: string;
  amount: number;
  balance: number;
};

export type DashboardData = {
  student: StudentOverview;
  courses: Course[];
  ledger: LedgerEntry[];
};

export type TeacherDashboardData = {
  teacher: {
    name: string;
    id: string;
    department: string;
  };
  todayClasses: {
    time: string;
    courseName: string;
    batch: string;
    room: string;
  }[];
};

export type CourseAttendanceRecord = {
  id: string;
  courseName: string;
  courseCode: string;
  sectionCode: string;
  scheduled: number;
  conducted: number;
  attended: number;
  percentage: number;
  finalAttendance: string;
};

export type UserProfile = {
  id: string;
  name: string;
  role: "Student" | "Faculty" | "admin" | "teacher";
  email: string;
  phone?: string;
  department?: string;
  program?: string;
  semester?: string;
  status?: string;
  campus?: string;
  address?: string;
  avatarUrl?: string;
};

export type TeacherBatch = {
  id: string;
  courseName: string;
  courseCode: string;
  batchName: string;
};

export type StudentAttendanceForm = {
  id: string;
  name: string;
  registration: string;
  isPresent: boolean;
};

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SectionCard from "../components/SectionCard";
import AttendanceTable from "./attendance/AttendanceTable";
import type { CourseAttendanceRecord } from "../data/types";
import { getAttendanceRecords } from "../services/mockApi";
import PageHeader from "../components/PageHeader";
import Loader from "../components/Loader";
import { useAuth } from "../context/AuthContext";
import TeacherAttendance from "./attendance/TeacherAttendance";

export default function Attendance() {
  const { user } = useAuth();
  const [records, setRecords] = useState<CourseAttendanceRecord[]>([]);

  useEffect(() => {
    if (user?.role !== "teacher") {
      getAttendanceRecords().then(setRecords);
    }
  }, [user]);

  if (user?.role === "teacher") {
    return <TeacherAttendance />;
  }

  if (records.length === 0) {
    return (
      <Box sx={{ display: "grid", gap: 2, p: 2 }}>
        <Loader />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <PageHeader title="Attendance" />

      <SectionCard title="">
        <AttendanceTable records={records} />
      </SectionCard>
    </Box>
  );
}

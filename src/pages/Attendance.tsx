import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SectionCard from "../components/SectionCard";
import AttendanceTable from "./attendance/AttendanceTable";
import type { CourseAttendanceRecord } from "../data/types";
import { getAttendanceRecords } from "../services/mockApi";
import PageHeader from "../components/PageHeader";
import Loader from "../components/Loader";

export default function Attendance() {
  const [records, setRecords] = useState<CourseAttendanceRecord[]>([]);

  useEffect(() => {
    getAttendanceRecords().then(setRecords);
  }, []);

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

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import type { DashboardData } from "./dashboard/types";
import CoursesTable from "./dashboard/CoursesTable";
import LedgerTable from "./dashboard/LedgerTable";
import SectionCard from "../components/SectionCard";
import StudentOverview from "./dashboard/StudentOverview";
import PageHeader from "../components/PageHeader";
import { getDashboardData } from "../services/mockApi";
import Loader from "../components/Loader";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

  if (!data) {
    return <Loader />;
  }

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <PageHeader title="Dashboard" />
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "1fr 1fr" }}>
        <SectionCard title="Student Overview">
          <StudentOverview student={data.student} />
        </SectionCard>

        <SectionCard title="Courses">
          <CoursesTable courses={data.courses} />
        </SectionCard>
      </Box>

      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "2fr 1fr" }}>
        <SectionCard title="Financial Ledger">
          <LedgerTable ledger={data.ledger} />
        </SectionCard>

        <SectionCard title="Course Credits">
          <BarChart
            xAxis={[
              {
                id: "courses",
                data: data.courses.map((c) => c.code), // course codes as categories
                scaleType: "band", // 👈 important for bar charts
                label: "Course Code",
              },
            ]}
            series={[
              {
                data: data.courses.map((c) => c.credits), // credits as values
                label: "Credits",
                color: "#1565C0", // primary blue
              },
            ]}
            height={300}
          />
        </SectionCard>
      </Box>
    </Box>
  );
}

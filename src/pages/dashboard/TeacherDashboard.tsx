import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import type { TeacherDashboardData } from "../../data/types";
import { getTeacherDashboardData } from "../../services/mockApi";
import Loader from "../../components/Loader";
import PageHeader from "../../components/PageHeader";
import SectionCard from "../../components/SectionCard";

export default function TeacherDashboard() {
  const [data, setData] = useState<TeacherDashboardData | null>(null);

  useEffect(() => {
    getTeacherDashboardData().then(setData);
  }, []);

  if (!data) {
    return <Loader />;
  }

  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <PageHeader title="Teacher Dashboard" />

      <SectionCard title="Welcome">
        <Typography variant="h5" gutterBottom>
          Welcome, {data.teacher.name}
        </Typography>
        <Typography variant="body1">
          Department: {data.teacher.department} | ID: {data.teacher.id}
        </Typography>
      </SectionCard>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Today's Classes
      </Typography>

      {data.todayClasses.length === 0 ? (
        <Typography color="text.secondary">No classes scheduled for today.</Typography>
      ) : (
        <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
          {data.todayClasses.map((cls, idx) => (
            <Card key={idx} sx={{ borderLeft: 4, borderColor: "primary.main" }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {cls.courseName}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {cls.time}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                  <Typography variant="body2">
                    <strong>Batch:</strong> {cls.batch}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Room:</strong> {cls.room}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}

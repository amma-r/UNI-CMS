import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import PageHeader from "../../components/PageHeader";
import Loader from "../../components/Loader";
import SectionCard from "../../components/SectionCard";
import { getTeacherBatches, getStudentAttendanceList } from "../../services/mockApi";
import type { TeacherBatch, StudentAttendanceForm } from "../../data/types";

export default function TeacherAttendance() {
  const [batches, setBatches] = useState<TeacherBatch[]>([]);
  const [selectedBatch, setSelectedBatch] = useState<string>("");
  const [classDate, setClassDate] = useState<string>(new Date().toISOString().split("T")[0]);
  
  const [students, setStudents] = useState<StudentAttendanceForm[]>([]);
  const [loadingBatches, setLoadingBatches] = useState<boolean>(true);
  const [loadingStudents, setLoadingStudents] = useState<boolean>(false);
  
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    getTeacherBatches().then((res) => {
      setBatches(res);
      setLoadingBatches(false);
    });
  }, []);

  useEffect(() => {
    if (selectedBatch) {
      setLoadingStudents(true);
      getStudentAttendanceList().then((res) => {
        // Deep copy so we can edit
        setStudents(JSON.parse(JSON.stringify(res)));
        setLoadingStudents(false);
      });
    } else {
      setStudents([]);
    }
  }, [selectedBatch]);

  const handleToggleAttendance = (id: string) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isPresent: !s.isPresent } : s))
    );
  };

  const handleSubmit = () => {
    // In a real app, send `students`, `selectedBatch`, and `classDate` to API
    setSnackbarOpen(true);
  };

  if (loadingBatches) {
    return <Loader />;
  }

  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <PageHeader title="Mark Attendance" />

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
            <FormControl sx={{ minWidth: 200, flex: 1 }}>
              <InputLabel id="batch-select-label">Select Batch</InputLabel>
              <Select
                labelId="batch-select-label"
                value={selectedBatch}
                label="Select Batch"
                onChange={(e) => setSelectedBatch(e.target.value)}
              >
                {batches.map((b) => (
                  <MenuItem key={b.id} value={b.id}>
                    {b.courseName} ({b.batchName})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Date"
              type="date"
              sx={{ minWidth: 200 }}
              value={classDate}
              onChange={(e) => setClassDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </CardContent>
      </Card>

      {selectedBatch && (
        <SectionCard title="Student List">
          {loadingStudents ? (
            <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
              <Loader />
            </Box>
          ) : (
            <TableContainer>
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell width="20%">Reg No.</TableCell>
                    <TableCell width="40%">Name</TableCell>
                    <TableCell width="40%" align="right">Present / Absent</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.registration}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell align="right">
                        <Typography
                          component="span"
                          color={student.isPresent ? "primary" : "text.secondary"}
                          variant="body2"
                          sx={{ mr: 1 }}
                        >
                          {student.isPresent ? "Present" : "Absent"}
                        </Typography>
                        <Switch
                          checked={student.isPresent}
                          onChange={() => handleToggleAttendance(student.id)}
                          color="primary"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", px: 2, pb: 2 }}>
            <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loadingStudents || students.length === 0}>
              Save Attendance
            </Button>
          </Box>
        </SectionCard>
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%" }}>
          Attendance saved successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

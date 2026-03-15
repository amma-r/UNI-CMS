import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import VisibilityIcon from '@mui/icons-material/Visibility'
import type { CourseAttendanceRecord } from './types'

type Props = {
  records: CourseAttendanceRecord[]
  onView?: (record: CourseAttendanceRecord) => void
}

export default function AttendanceTable({ records, onView }: Props) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Course (code)</TableCell>
            <TableCell>Section code</TableCell>
            <TableCell>Scheduled</TableCell>
            <TableCell>Conducted</TableCell>
            <TableCell>Attended</TableCell>
            <TableCell>Percentage</TableCell>
            <TableCell>Final attendance</TableCell>
            <TableCell align="center">View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.id} hover>
              <TableCell>
                <strong>{record.courseName}</strong> <br />
                <small>({record.courseCode})</small>
              </TableCell>
              <TableCell>
                <Typography variant="body2" component="div">
                  {record.sectionCode}
                </Typography>
              </TableCell>
              <TableCell>{record.scheduled}</TableCell>
              <TableCell>{record.conducted}</TableCell>
              <TableCell>{record.attended}</TableCell>
              <TableCell>{record.percentage}%</TableCell>
              <TableCell>{record.finalAttendance}</TableCell>
              <TableCell align="center">
                <IconButton size="small" onClick={() => onView?.(record)}>
                  <VisibilityIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

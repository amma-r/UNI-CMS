import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
  total: number
  counts: Record<string, number>
}

export default function AttendanceSummary({ total, counts }: Props) {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Total days
        </Typography>
        <Typography variant="h6">{total}</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Present
        </Typography>
        <Typography variant="h6" color="success.main">
          {counts.Present}
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Absent
        </Typography>
        <Typography variant="h6" color="error.main">
          {counts.Absent}
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Excused
        </Typography>
        <Typography variant="h6" color="warning.main">
          {counts.Excused}
        </Typography>
      </Box>
    </Box>
  )
}

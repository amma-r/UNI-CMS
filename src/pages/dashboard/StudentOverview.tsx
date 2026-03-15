import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { StudentOverview } from './types'

type Props = {
  student: StudentOverview
}

export default function StudentOverview({ student }: Props) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Name
        </Typography>
        <Typography variant="body1">{student.name}</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Registration No.
        </Typography>
        <Typography variant="body1">{student.registration}</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Program
        </Typography>
        <Typography variant="body1">{student.program}</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Semester
        </Typography>
        <Typography variant="body1">{student.semester}</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Status
        </Typography>
        <Typography variant="body1">{student.status}</Typography>
      </Box>
    </Box>
  )
}

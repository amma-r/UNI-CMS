import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import PageHeader from '../components/PageHeader'

export default function Settings() {
  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <PageHeader title="Settings" />

      <Paper sx={{ p: 2 }}>
        <Typography variant="body1">
          Configure your CMS settings and preferences here.
        </Typography>
      </Paper>
    </Box>
  )
}

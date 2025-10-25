import { Box, Typography, Button, Stack, Paper } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import InsightsIcon from '@mui/icons-material/Insights';
import CodeIcon from '@mui/icons-material/Code';

const LandingPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #23272F 0%, #181A20 100%)',
        color: 'white',
        gap: 6,
      }}
    >
      <Stack spacing={2} alignItems="center">
        <RocketLaunchIcon sx={{ fontSize: 64, color: 'primary.main' }} />
        <Typography variant="h2" fontWeight={700} textAlign="center">
          DevPulse
        </Typography>
        <Typography variant="h5" fontWeight={400} textAlign="center" color="grey.400">
          "Empowering Developers. Unleashing Productivity."
        </Typography>
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} mt={6}>
        <Paper elevation={6} sx={{ p: 4, minWidth: 260, background: '#23272F', color: 'white' }}>
          <InsightsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Actionable Analytics
          </Typography>
          <Typography variant="body1" color="grey.400">
            Track your commits, deployments, builds, and PRs across GitHub, Vercel, and Firebase. All in one place.
          </Typography>
        </Paper>
        <Paper elevation={6} sx={{ p: 4, minWidth: 260, background: '#23272F', color: 'white' }}>
          <CodeIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Developer-Centric Design
          </Typography>
          <Typography variant="body1" color="grey.400">
            Built for devs, by devs. Dark mode, blazing fast, and fully customizable for your workflow.
          </Typography>
        </Paper>
      </Stack>
      <Button
        variant="contained"
        size="large"
        sx={{ mt: 6, px: 6, py: 2, fontWeight: 700, fontSize: 20, borderRadius: 3 }}
      >
        Get Started
      </Button>
      <Typography variant="caption" color="grey.600" sx={{ mt: 8 }}>
        © {new Date().getFullYear()} DevPulse. All rights reserved. | "Code. Measure. Evolve."
      </Typography>
    </Box>
  );
}

export default LandingPage
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Box sx={{ display: "grid", gap: 2, maxWidth: 600 }}>
        <PageHeader title="404 - Page Not Found" />

        <Typography variant="body1">
          The page you are looking for does not exist. Use the navigation menu
          to find your way.
        </Typography>

        <Button variant="contained" component={RouterLink} to="/dashboard">
          Go to dashboard
        </Button>
      </Box>
    </Box>
  );
}

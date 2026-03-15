// import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import SectionCard from "../../components/SectionCard";
import TextField from "@mui/material/TextField";
// import { useNavigate } from "react-router-dom";

export default function Login() {

  const handleReset = () => {
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {/* Left side */}
      <Box
        sx={{
          height: "100vh",
          width: "50%",
          backgroundColor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" color="white">
          XYZ University CMS
        </Typography>
      </Box>

      {/* Right side */}
      <Box
        sx={{
          height: "100vh",
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SectionCard title="Forgot Password" width="70%">

          <Typography variant="h6" fontSize="15px" color="text.secondary" mb={2}>
            Enter your email address below and we'll send you a link to reset
            your password. if their is an account associated with the email, you
            will receive a reset link shortly.
          </Typography>

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleReset}
          >
            Send Reset Link
          </Button>
        </SectionCard>
      </Box>
    </Box>
  );
}

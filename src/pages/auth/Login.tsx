import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import SectionCard from "../../components/SectionCard";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      //   alert("Please enter both username and password.");
      return;
    }
    // Replace with your actual login logic (API call, auth service, etc.)
    console.log("Logging in with:", { username, password });
    navigate("/dashboard"); // Redirect to dashboard after successful login
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
        <SectionCard title="Login">
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </SectionCard>
      </Box>
    </Box>
  );
}

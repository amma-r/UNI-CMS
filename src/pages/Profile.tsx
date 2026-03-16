import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getUserProfile } from "../services/mockApi";
import type { UserProfile } from "../data/types";
import PageHeader from "../components/PageHeader";
import Loader from "../components/Loader";
import SectionCard from "../components/SectionCard";

export default function Profile() {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    getUserProfile().then(setUser);
  }, []);

  if (!user) {
    return <Loader />;
  }

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <PageHeader title="Profile" />{" "}
      <SectionCard title="Profile">
        <Grid container spacing={3} alignItems="center">
          <Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Avatar
                src={user.avatarUrl}
                alt={user.name}
                sx={{ width: 120, height: 120, fontSize: 40 }}
              >
                {user.name.charAt(0)}
              </Avatar>

              <Typography variant="h6" sx={{ mt: 1 }}>
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.role}
              </Typography>
            </Box>
          </Grid>

          <Grid>
            <Typography variant="subtitle1" gutterBottom>
              Profile details
            </Typography>

            <List dense disablePadding>
              <ListItem>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="ID" secondary={user.id} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <EmailIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Email" secondary={user.email} />
              </ListItem>

              {user.phone && (
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Phone" secondary={user.phone} />
                </ListItem>
              )}

              {user.department && (
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Department"
                    secondary={user.department}
                  />
                </ListItem>
              )}

              {user.program && (
                <ListItem>
                  <ListItemIcon>
                    <BadgeIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Program" secondary={user.program} />
                </ListItem>
              )}

              {user.semester && (
                <ListItem>
                  <ListItemIcon>
                    <BadgeIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Semester" secondary={user.semester} />
                </ListItem>
              )}

              {user.status && (
                <ListItem>
                  <ListItemIcon>
                    <BadgeIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Status" secondary={user.status} />
                </ListItem>
              )}

              {user.campus && (
                <ListItem>
                  <ListItemIcon>
                    <BadgeIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Campus" secondary={user.campus} />
                </ListItem>
              )}

              {user.address && (
                <ListItem>
                  <ListItemIcon>
                    <BadgeIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Address" secondary={user.address} />
                </ListItem>
              )}
            </List>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body2" color="text.secondary">
              This profile view can be wired to an API endpoint to fetch
              student/faculty data.
            </Typography>
          </Grid>
        </Grid>
      </SectionCard>
    </Box>
  );
}

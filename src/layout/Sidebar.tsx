import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../services/mockApi";
import { useEffect, useState } from "react";

import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 260;

const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon fontSize="small" />,
  },
  {
    label: "Attendance",
    path: "/attendance",
    icon: <CalendarMonthIcon fontSize="small" />,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: <Person fontSize="small" />,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <SettingsIcon fontSize="small" />,
  },
];

type SidebarProps = {
  mobileOpen: boolean;
  onMobileClose: () => void;
  currentPath: string;
};

export default function Sidebar({
  mobileOpen,
  onMobileClose,
  currentPath,
}: SidebarProps) {
  const [userProfile, setUserProfile] = useState<{
    name: string;
    role: string;
  } | null>(null);

  useEffect(() => {
    getUserProfile().then((profile) => {
      setUserProfile(profile);
    });
  }, []);

  const navigate = useNavigate();
  const drawer = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Toolbar sx={{ minHeight: (theme) => theme.mixins.toolbar.minHeight }} />

      <Box
        sx={{
          px: 2,
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40 }}>
            A
          </Avatar>
          <Box>
            <Typography variant="subtitle1" noWrap>
              {/* {userProfile?.name} */}
              {userProfile?.name || "User Name"}
            </Typography>
            <Typography variant="caption" color="text.secondary" noWrap>
              {/* {role} */}
              {/* Admin / Student / Teacher */}
              {userProfile?.role || "Role"}
            </Typography>
          </Box>
        </Box>


      </Box>

      <Divider />

      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => {
          const selected = currentPath === item.path;
          return (
            <ListItemButton
              component={Link}
              to={item.path}
              key={item.path}
              selected={selected}
              onClick={onMobileClose}
              sx={{ px: 2 }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          );
        })}
      </List>

      <Divider />

      <Box sx={{ p: 2 }}>
        <IconButton
          color="inherit"
          onClick={() => {
            // TODO: plug in real logout flow
            console.log("logout");
            navigate("/auth/login");
          }}
          sx={{ width: "100%", justifyContent: "flex-start" }}
        >
          <LogoutIcon sx={{ mr: 1 }} />
          <Typography variant="body2">Logout</Typography>
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="main navigation"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export { drawerWidth };

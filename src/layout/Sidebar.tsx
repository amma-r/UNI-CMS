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
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../services/mockApi";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

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
  desktopOpen: boolean;
  currentPath: string;
};

export default function Sidebar({
  mobileOpen,
  onMobileClose,
  desktopOpen,
  currentPath,
}: SidebarProps) {
  const [userProfile, setUserProfile] = useState<{
    name: string;
    role: string;
    avatarUrl?: string;
  } | null>(null);

  useEffect(() => {
    getUserProfile().then((profile) => {
      setUserProfile(profile);
    });
  }, []);

  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const drawer = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Toolbar sx={{ minHeight: (theme) => theme.mixins.toolbar.minHeight }} />

      <Box
        sx={{
          px: desktopOpen ? 2 : 1.5,
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: desktopOpen ? "space-between" : "center",
          flexDirection: desktopOpen ? "row" : "column",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40 }}>
            {userProfile?.avatarUrl ? (
              <img
                src={userProfile.avatarUrl}
                alt={userProfile.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              (userProfile?.name || user?.username || "U").charAt(0).toUpperCase()
            )}
          </Avatar>
          {desktopOpen && (
            <Box>
              <Typography variant="subtitle1" noWrap>
                {userProfile?.name || user?.username || "User"}
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap>
                {userProfile?.role || "Role"}
              </Typography>
            </Box>
          )}
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
              sx={{
                px: desktopOpen ? 2 : "auto",
                justifyContent: desktopOpen ? "initial" : "center",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: desktopOpen ? 40 : 0,
                  mr: desktopOpen ? 0 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {desktopOpen && <ListItemText primary={item.label} />}
            </ListItemButton>
          );
        })}
      </List>

      <Divider />

      <Box sx={{ p: desktopOpen ? 2 : 1 }}>
        <IconButton
          color="inherit"
          onClick={() => {
            logout();
            navigate("/auth/login", { replace: true });
          }}
          sx={{ width: "100%", justifyContent: desktopOpen ? "flex-start" : "center" }}
        >
          <LogoutIcon sx={{ mr: desktopOpen ? 1 : 0 }} />
          {desktopOpen && <Typography variant="body2">Logout</Typography>}
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: desktopOpen ? drawerWidth : 65 },
        flexShrink: { sm: 0 },
        transition: "width 0.2s",
      }}
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
        open={desktopOpen}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: desktopOpen ? drawerWidth : 65,
            transition: "width 0.2s",
            overflowX: "hidden",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export { drawerWidth };

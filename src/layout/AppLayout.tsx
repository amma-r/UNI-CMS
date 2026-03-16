import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./Header";
import Sidebar, { drawerWidth } from "./Sidebar";

export default function AppLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
    setDesktopOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <Header onMenuClick={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
        desktopOpen={desktopOpen}
        currentPath={location.pathname}
      />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${desktopOpen ? drawerWidth : 65}px)` },
          transition: "width 0.2s",
          overflow: "auto",
        }}
      >
        <Box sx={{ height: (theme) => theme.mixins.toolbar.minHeight }} />
        <Outlet />
      </Box>
    </Box>
  );
}

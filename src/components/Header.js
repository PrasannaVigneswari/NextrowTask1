import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import {
  Menu as MenuIcon,
  Person as PersonIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

const Header = ({ name, toggleSidebar }) => {
  const handleMenuClick = () => {
    toggleSidebar(); // Call the toggleSidebar
  };
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h5" style={{ flexGrow: 1, marginLeft: "40px" }}>
          Todo App
        </Typography>
        <Typography variant="h6" sx={{ marginRight: "1rem" }}>
          Hi, {name}
        </Typography>
        <IconButton color="inherit" sx={{ marginRight: ".5rem" }}>
          <Badge badgeContent={5} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit" sx={{ marginRight: ".5rem" }}>
          <PersonIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

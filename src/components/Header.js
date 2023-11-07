import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import {Menu as MenuIcon , Person as PersonIcon} from '@mui/icons-material';


  const Header = ({ name, toggleSidebar }) => {
    const handleMenuClick = () => {
      toggleSidebar(); // Call the toggleSidebar 

    };
  return (
    <AppBar position="static">
      <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        
        <Typography variant="h5" style={{ flexGrow: 1 ,marginLeft:"40px"}}>
          TodoApp
        </Typography>
        <Typography variant="h6" sx={{marginRight:"1rem"}}>
          Hi, {name}
        </Typography>
        <IconButton color="inherit" sx={{marginRight:"2.5rem"}}>
          <PersonIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};


export default Header;


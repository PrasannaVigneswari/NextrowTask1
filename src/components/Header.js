import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

  const Header = ({ name, toggleSidebar }) => {
    const handleMenuClick = () => {
      toggleSidebar(); // Call the toggleSidebar function to open/close the sidebar
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

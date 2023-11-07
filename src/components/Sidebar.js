import React from "react";
import { Drawer, ListItem, List, ListItemText } from "@mui/material";
import {
  Person as PersonIcon,
  Assignment as SignupFormIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,ListAlt as ListAltIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List>
      
      <ListItem
  button
  key="Profile"
  onClick={() => {
    onClose();
    navigate("/profile");
  }}
>
  <PersonIcon />
  <ListItemText primary="Profile" />
</ListItem>
<ListItem
  button
  key="Todo"
  onClick={() => {
    onClose();
    navigate("/Todo-list"); // Corrected path
  }}
>
  <ListAltIcon />
  <ListItemText primary="Todo" />
</ListItem>

<ListItem
  button
  key="SignupForm"
  onClick={() => {
    onClose();
    navigate("/"); // Changed path to the root
  }}
>
  <SignupFormIcon />
  <ListItemText primary="SignupForm" />
</ListItem>

<ListItem
  button
  key="Setting"
  onClick={() => {
    onClose();
    navigate("/Setting");
  }}
>
  <SettingsIcon />
  <ListItemText primary="Setting" />
</ListItem>

<ListItem
  button
  key="Logout"
  onClick={() => {
    onClose();
    navigate("/Logout");
  }}
>
  <LogoutIcon />
  <ListItemText primary="Logout" />
</ListItem>

       
      </List>
    </Drawer>
  );
};

export default Sidebar;








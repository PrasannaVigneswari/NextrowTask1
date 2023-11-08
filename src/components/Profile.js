import React, { useState, useEffect } from "react";
import { Button, TextField, Card } from "@mui/material";
import ConfirmationDialog from "../utils/ConfirmationDialog";
import { validateEmail } from "../utils/validation";
import useLocalStorage from "../utils/useLocalStorage";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Profile = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [open, setOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [storedUser, setStoredUser] = useLocalStorage("user", user);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleOpen = () => {
    setEditedUser({ ...user });
    setOpen(true);
  };

  
  const handleInputChange = (e) => {
    const fieldName = e.target.name; // Get the field name from the input element
    const value = e.target.value;
  
    setEditedUser({
      ...editedUser,
      [fieldName]: value,
    });
  };
  
    const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (!editedUser.firstName.trim()) {
      setFirstNameError("First name is required");
      return;
    }

    if (!editedUser.lastName.trim()) {
      setLastNameError("Last name is required");
      return;
    }

    if (!editedUser.email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(editedUser.email)) {
      setEmailError("Invalid email format");
      return;
    }

    setFirstNameError("");
    setLastNameError("");
    setEmailError("");

    setUser({ ...editedUser });
    setStoredUser(editedUser);
    handleClose();
  };

  useEffect(() => {
    if (storedUser) {
      setUser(storedUser);
    }
  }, [storedUser]);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Header name={user.firstName} toggleSidebar={toggleSidebar} />
     
      <div className="h-screen flex flex-col items-center justify-start p-28">
        <Card
          className="w-96 p-4 rounded flex flex-col items-center justify-start "
          sx={{ background: "linear-gradient(#CBC0E0, #91bfff)" }}
        >
          <img
            src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
            alt="user icon"
            className="h-20 mt-11 border-white-500"
          />
          <p className="text-3xl font-serif mt-3 ">User Details</p>
          <p className="mt-4 text-1xl font-serif">
            First Name: {user.firstName}
          </p>
          <p className="my-2  font-serif">Last Name: {user.lastName}</p>
          <p className="mb-4 font-serif">Email: {user.email}</p>
          <Button variant="contained" onClick={handleOpen} className="mt-3">
            Edit Profile
          </Button>
        </Card>

        <ConfirmationDialog
          title="Edit Profile"
          open={open}
          onClose={handleClose}
          onConfirm={handleSave}
        >
          <div>
            <form>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              name="firstName"
              value={editedUser.firstName}
              onChange={handleInputChange}
              error={!!firstNameError}
              helperText={firstNameError}
              sx={{ padding: "6px", margin: "6px" }}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              name="lastName"
              fullWidth
              value={editedUser.lastName}
              onChange={handleInputChange
              }
              error={!!lastNameError}
              helperText={lastNameError}
              sx={{ padding: "6px", margin: "6px" }}
            />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              fullWidth
              value={editedUser.email}
              onChange={handleInputChange}
              error={!!emailError}
              helperText={emailError}
              sx={{ padding: "6px", margin: "6px" }}
            />
            </form>
          </div>
        </ConfirmationDialog>
      </div>
    </>
  );
};

export default Profile;

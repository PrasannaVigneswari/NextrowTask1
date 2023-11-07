import React, { useState, useEffect } from 'react';
import { Button, TextField,Card} from '@mui/material';
import ConfirmationDialog from '../utils/ConfirmationDialog';
import { validateEmail } from '../utils/validation';
import useLocalStorage from '../utils/useLocalStorage';

const Profile = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [open, setOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [storedUser, setStoredUser] = useLocalStorage('user', user);
  

  const handleOpen = () => {
    setEditedUser({ ...user });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (!editedUser.firstName.trim()) {
      setFirstNameError('First name is required');
      return;
    }

    if (!editedUser.lastName.trim()) {
      setLastNameError('Last name is required');
      return;
    }

    if (!editedUser.email.trim()) {
      setEmailError('Email is required');
      return;
    }

    if (!validateEmail(editedUser.email)) {
      setEmailError('Invalid email format');
      return;
    }

    setFirstNameError('');
    setLastNameError('');
    setEmailError('');

    setUser({ ...editedUser });
    setStoredUser(editedUser);
    handleClose();
  };

  useEffect(() => {
    if (storedUser) {
      setUser(storedUser);
    }
  }, [storedUser]);

  return (
    <>
    
      <h1 className="text-5xl font-serif text-center mt-5">Profile Page</h1> 
      <div className="h-screen flex flex-col items-center justify-start m-11">
      <Card className="w-96 p-4 rounded flex flex-col items-center justify-start " sx={{ background: 'linear-gradient(#CBC0E0, #91bfff)' }}>
  <img
    src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
    alt="user icon" className="h-20 mt-11 border-white-500"
  />
  <p className='text-3xl font-serif mt-3 '>User Details</p>
  <p className="mt-4 text-1xl font-serif">First Name: {user.firstName}</p>
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
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={editedUser.firstName}
            onChange={(e) => setEditedUser({ ...editedUser, firstName: e.target.value })}
            error={!!firstNameError}
            helperText={firstNameError}
            sx={{ padding: '6px', margin: '6px' }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={editedUser.lastName}
            onChange={(e) => setEditedUser({ ...editedUser, lastName: e.target.value })}
            error={!!lastNameError}
            helperText={lastNameError}
            sx={{ padding: '6px', margin: '6px' }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={editedUser.email}
            onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
            error={!!emailError}
            helperText={emailError}
            sx={{ padding: '6px', margin: '6px' }}
          />
        </div>
      </ConfirmationDialog>
    </div>
    </>
  );
};

export default Profile;

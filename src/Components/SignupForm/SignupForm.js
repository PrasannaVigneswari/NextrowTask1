import React, { useState } from 'react';
import { Button, Avatar, Typography, Grid, TextField } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [validationMessages, setValidationMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Check if the password is at least 8 characters long
    if (password.length < 6) {
      return false; 
    }
  
    // Check if the password contains at least one special character
    const specialCharacters = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;

    if (!specialCharacters.test(password)) {
      return false; // Password doesn't contain a special character
    }
  
    return true; // Password is valid
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setValidationMessages({});

    if (!validateEmail(formData.email)) {
      setValidationMessages({ email: 'Invalid email address' });
    } else if (!validatePassword(formData.password)) {
      setValidationMessages({ password: 'Invalid password' });
    } else {
      history(`/Todo-list?name=${formData.firstName}`);
    }
  };

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Avatar sx={{ height: '40px', bgcolor: 'secondary.main', width: '40px', marginTop: '67px' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" marginTop="20px"> Sign in</Typography>
      </Grid>

      <div className="mt-5 mx-auto max-w max-w-sm">
        <form onSubmit={handleSubmit} action="#" method="POST">
          <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between', margin: '0px' }}>
            <TextField variant="outlined" label="First Name" name="firstName" required sx={{ m: 1, width: '35ch' }}
              value={formData.firstName} onChange={handleChange} />
            <TextField variant="outlined" label="Last Name" name="lastName" required sx={{ m: 1, width: '35ch' }}
              value={formData.lastName} onChange={handleChange} />
          </Typography>

          <TextField variant="outlined" label="Email" name="email" required sx={{ m: 1, width: '43ch' }} value={formData.email}
            onChange={handleChange} error={validationMessages.email && isSubmitted} helperText={validationMessages.email} />
          <TextField variant="outlined" label="Password" name="password" required type="password" sx={{ m: 1, width: '43ch' }}
            value={formData.password} onChange={handleChange} error={validationMessages.password && isSubmitted} helperText={validationMessages.password} />
          
          <Button type="submit" variant="contained" color="primary" className="text-center" sx={{ mt: 3, width: '48ch' }}>Login</Button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;

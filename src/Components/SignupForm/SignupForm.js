import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
   // Router navigation
  const history = useNavigate();
  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; //emailRegex is a regular expression that matches common email address patterns.
  
    return emailRegex.test(email);
  }; // If the email matches the pattern, test returns true Otherwise, it returns false.
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setValidationMessages({});

    if (!validateEmail(formData.email)) //check Email adress is valid or not
     {
      setValidationMessages({ email: 'Invalid email address' });// Set an error message for the email field.
    } 
    else {
      history(`/Todo-list?name=${formData.firstName}`);

     // If the email address is valid, navigate to the Todo-list page with the user's first name.
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
            value={formData.password} onChange={handleChange}/>
          
          <Button type="submit" variant="contained" color="primary" className="text-center" sx={{ mt: 3, width: '48ch' }}>Login</Button>
        </form>
      </div>
    </>
  );
};
export default SignupForm;


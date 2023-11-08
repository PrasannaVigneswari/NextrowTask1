import React, { useState } from "react";
import { Button, Avatar, Typography, Grid, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/validation";
import { useUser } from "../utils/UserContext";
import useLocalStorage from "../utils/useLocalStorage";

const SignupForm = () => {
  const { setUser } = useUser();
  const [storedUser, setStoredUser] = useLocalStorage("user", null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setValidationMessages({});

    if (!validateEmail(formData.email)) {
      //check Email adress is valid or not
      setValidationMessages({ email: "Invalid email address" }); // Set an error message for the email field.
    } else if (!validatePassword(formData.password)) {
      setValidationMessages({
        password:
          "Password should have at least 1 capital letter, 1 numeric, and 1 special character",
      });
    } else {
      setUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });
      setStoredUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });

      history(`/Todo-list?name=${formData.firstName}`);
    }
  };

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Avatar
          sx={{
            height: "40px",
            bgcolor: "secondary.main",
            width: "40px",
            marginTop: "67px",
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" marginTop="20px">
          Sign in
        </Typography>
      </Grid>

      <div className="mt-5 mx-auto max-w max-w-sm">
        <form onSubmit={handleSubmit} action="#" method="POST">
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0px",
            }}
          >
            <TextField
              variant="outlined"
              label="First Name"
              name="firstName"
              required
              sx={{ m: 1, width: "35ch" }}
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              label="Last Name"
              name="lastName"
              required
              sx={{ m: 1, width: "35ch" }}
              value={formData.lastName}
              onChange={handleChange}
            />
          </Typography>

          <TextField
            variant="outlined"
            label="Email"
            name="email"
            required
            sx={{ m: 1, width: "43ch" }}
            value={formData.email}
            onChange={handleChange}
            error={validationMessages.email && isSubmitted}
            helperText={validationMessages.email}
          />
          <TextField
            variant="outlined"
            label="Password"
            name="password"
            required
            type="password"
            sx={{ m: 1, width: "43ch" }}
            value={formData.password}
            onChange={handleChange}
            error={validationMessages.password && isSubmitted}
            helperText={validationMessages.password}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="text-center"
            sx={{ mt: 3, width: "48ch" }}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
};
export default SignupForm;

// LoginPage.js

import React, { useRef, useState } from 'react';
import { useNavigate, redirect, Navigate } from "react-router-dom";


// MATERIAL
import { Container, Typography, TextField, Button, FormControl, InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';


const LoginPage = () => {
  const userDetail = useRef({
    username: "",
    password: "",
    role: ''
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    // TODO: Implement the login logic here
    // You can use the entered username, password, and role to make API calls for authentication
    // For simplicity, let's just print the login details for now
    e.preventDefault();
    const username = userDetail.current.username.value;
    const password = userDetail.current.password.value;
    const role = userDetail.current.role;
    console.log(username, password, role)

    // user-logged in
    const redirectPath = `/${role}`
    console.log("redirect path => " + redirectPath)
    // return <Navigate to={redirectPath} replace />
    navigate(redirectPath);
    
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form  onSubmit={handleLogin}>
        <TextField
          label="Username"
          fullWidth
          variant="outlined"
          margin="normal"
          inputRef={(ref) => (userDetail.current.username = ref)}
        />
        <TextField
          label="Password"
          fullWidth
          variant="outlined"
          margin="normal"
          type="password"
          inputRef={(ref) => (userDetail.current.password = ref)}
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="role-select-label">Role</InputLabel>
          <Select
            labelId="role-select-label"
            id="role-select"
            value={userDetail.current.role.value}
            onChange={(event) => (userDetail.current.role = event.target.value)}
            label="Role"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="teacher">Teacher</MenuItem>
            <MenuItem value="student">Student</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;

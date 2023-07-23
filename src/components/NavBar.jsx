import * as React from 'react';
import { Link } from 'react-router-dom';
 

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar({user}) {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={`/${user.role}s`}>
            {user.role.toUpperCase()}
            </Link>
          </Typography>
          
          {
            (user.role === "admin") && 
            (
              <Button color="inherit">
                <Link to="/admins/teachers">teachers</Link>
              </Button>
            )
          }

{
            (user.role === "teacher") && 
            (
              <Button color="inherit">
                <Link to="/teachers/students">students</Link>
              </Button>
            )
          }
          
          <Button color="inherit">
            <Link to="/login">
            logout
            </Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
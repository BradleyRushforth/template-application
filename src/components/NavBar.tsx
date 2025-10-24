import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@tanstack/react-router';
import React from 'react';

const NavBar: React.FC = React.memo(() => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Dev Productivity Analytics
      </Typography>
      <Button color="inherit" component={Link} to="/">Landing</Button>
      <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
      <Button color="inherit" component={Link} to="/admin">Admin Area</Button>
    </Toolbar>
  </AppBar>
));

export default NavBar;

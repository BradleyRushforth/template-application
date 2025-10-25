import React from 'react';
import { Link } from '@tanstack/react-router';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar: React.FC = React.memo(() => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
        Dev Productivity Analytics
      </Typography>
      <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
      <Button color="inherit" component={Link} to="/admin">Admin Area</Button>
    </Toolbar>
  </AppBar>
));

export default NavBar;

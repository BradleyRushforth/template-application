// src/App.tsx


import { Outlet } from '@tanstack/react-router';
import Box from '@mui/material/Box';
import NavBar from './shared/components/NavBar';

export default function App() {
  return (
    <>
      <NavBar />
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </>
  );
}

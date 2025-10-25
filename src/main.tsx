import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#181A20',
      paper: '#23272F',
    },
    primary: {
      main: '#00BFAE',
    },
    secondary: {
      main: '#FF4081',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

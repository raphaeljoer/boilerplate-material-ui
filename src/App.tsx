//material-ui
import { CssBaseline, ThemeProvider } from '@mui/material';
//core-components
import { Routes } from './routes/Routes';
//resources
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

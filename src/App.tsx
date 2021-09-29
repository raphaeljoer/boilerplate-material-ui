//material-ui
import { CssBaseline, ThemeProvider } from '@mui/material';
//core-components
import { Routes } from './Routes';
//resources
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './Theme';
import { Layout } from './Components/Layout';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

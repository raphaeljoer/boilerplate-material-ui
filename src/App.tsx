//material-ui
import { CssBaseline, ThemeProvider } from '@mui/material';
//core-components
import { Routes } from './routes/Routes';
//resources
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { store } from 'store';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Routes />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

//material-ui
import { CssBaseline, ThemeProvider } from '@mui/material';
//resources
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../theme';
import { Provider } from 'react-redux';
import { store } from 'store';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export function Providers({ children }: Props) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {children}
          <CssBaseline />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

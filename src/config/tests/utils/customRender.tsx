//material-ui
import { ThemeProvider } from '@mui/material';
//
import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../../../theme';
import { Provider } from 'react-redux';
import { store } from 'store';

type Props = {
  children: JSX.Element | JSX.Element[];
};

function Providers({ children }: Props) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };

/*
 *  Custom Render Documentation
 *  https://testing-library.com/docs/react-testing-library/setup#custom-render
 */

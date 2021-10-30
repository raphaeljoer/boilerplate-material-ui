import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Providers } from 'providers';

type Props = {
  children: JSX.Element | JSX.Element[];
};

function WrapperProvider({ children }: Props) {
  return <Providers>{children}</Providers>;
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: WrapperProvider, ...options });

export * from '@testing-library/react';
export { customRender as renderWithProviders };

/*
 *  Custom Render Documentation
 *  https://testing-library.com/docs/react-testing-library/setup#custom-render
 */

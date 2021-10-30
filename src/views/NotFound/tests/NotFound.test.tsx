import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from 'config/tests/utils';
import { NotFound } from '../index';

describe('<NotFound />', () => {
  it('should render the NotFound view', () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByText('404 - Not Found')).toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react';
import React from 'react';
import { render } from 'config/tests/utils';
import { NotFound } from '../index';

describe('<NotFound />', () => {
  it('should render the NotFound view', () => {
    render(<NotFound />);
    expect(screen.getByText('404 - Not Found')).toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from '../../../config/tests/utils';
import { Wizard } from '../index';

describe('<Wizard />', () => {
  it('Should render the Wizard view', () => {
    const { container } = renderWithProviders(<Wizard />);
    expect(screen.getByText('Position')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

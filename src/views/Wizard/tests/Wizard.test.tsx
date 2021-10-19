import { screen } from '@testing-library/react';
import React from 'react';
import { render } from '../../../config/tests/utils';
import { Wizard } from '../index';

describe('<Wizard />', () => {
  it('should render the Wizard view', () => {
    const { container } = render(<Wizard />);
    expect(screen.getByText('Wizard')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

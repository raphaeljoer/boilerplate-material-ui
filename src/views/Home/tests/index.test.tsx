import { screen } from '@testing-library/react';
import React from 'react';
import { render } from '../../../config/tests/utils';
import { Home } from '../index';

describe('<Home />', () => {
  it('should render the Home view', () => {
    const { container } = render(<Home />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import Countdown from '../components/Countdown';

describe('Countdown component', () => {
  test('renders countdown elements', () => {
    const { getByText } = render(<Countdown />);
    expect(getByText('Starts')).toBeInTheDocument();
    expect(getByText('d')).toBeInTheDocument();
    expect(getByText('h')).toBeInTheDocument();
    expect(getByText('m')).toBeInTheDocument();
    expect(getByText('s')).toBeInTheDocument();
  });
});

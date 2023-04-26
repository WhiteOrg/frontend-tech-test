import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
  test('renders share text', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Share this Tournament')).toBeInTheDocument();
  });

  test('renders twitter and facebook icons', () => {
    const { getByAltText } = render(<Footer />);
    expect(getByAltText('twitter')).toBeInTheDocument();
    expect(getByAltText('facebook')).toBeInTheDocument();
  });
});
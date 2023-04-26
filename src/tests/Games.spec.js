import React from 'react';
import { render } from '@testing-library/react';
import Games from '../components/Games';

describe('Games component', () => {
  const mockGames = [
    { title: 'Game 1', src: 'game1.png' },
    { title: 'Game 2', src: 'game2.png' },
  ];

  test('renders section header', () => {
    const { getByText } = render(<Games games={mockGames} />);
    expect(getByText('Include Games')).toBeInTheDocument();
  });

  test('renders game images', () => {
    const { getAllByAltText } = render(<Games games={mockGames} />);
    const gameImages = getAllByAltText(/game/i);
    expect(gameImages).toHaveLength(2);
  });

  test('renders no game images when games prop is empty', () => {
    const { queryAllByAltText } = render(<Games />);
    const gameImages = queryAllByAltText(/game/i);
    expect(gameImages).toHaveLength(0);
  });

});

import React from 'react'
import styled from 'styled-components'
import { IGamesListProps } from "../types"
import { v4 as uuidv4 } from 'uuid';

const StyledGamesList = styled.div`
  position: relative;
  /* width: 200px; */
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 3fr 3fr 3fr;
  justify-items: stretch;
  column-gap: 14px;
  row-gap: 14px;
  padding-top: 5px;

  .game-pic {
    /* justify-self: stretch; */
    max-width: 100%;
  }
`;

export const GamesList = ({ games }: IGamesListProps) => {
  const renderGames = () => {
    return games?.map(game => <img className="game-pic" src={game.src} alt={game.title} key={uuidv4()} />)
  }

  return (
    <StyledGamesList>
      {renderGames()}
    </StyledGamesList>
  )
}

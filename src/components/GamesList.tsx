import React from 'react'
import styled from 'styled-components'
import { IGamesListProps } from "../types"
import { v4 as uuidv4 } from 'uuid'

const StyledGamesList = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 3fr 3fr 3fr;
  justify-items: stretch;
  column-gap: 14px;
  row-gap: 14px;
  padding-top: 5px;

  .game-pic {
    max-width: 100%;
  }

  @media screen and (min-width: 740px) {
    grid-template-columns: 3fr 3fr 3fr;
    grid-template-rows: 2fr 2fr;
    padding-top: 10px;
  }
`

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

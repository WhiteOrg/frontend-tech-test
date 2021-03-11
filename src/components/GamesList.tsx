import React from 'react'
import {IGamesListProps} from "../types"

export const GamesList = ({games}: IGamesListProps) => {
  const renderGames = () => {
    return games?.map(game => <img src={game.src} alt={game.title}/>)
  }

  return (
    <div>
      {renderGames()}
    </div>
  )
}

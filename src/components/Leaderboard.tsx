import React from 'react'
import {ILeaderboardProps} from "../types"

export const Leaderboard = ({prizeList}: ILeaderboardProps) => {

  const renderPrizeList = () => {
    // loop through the prizeList array and render a list item for each index

    return prizeList!.map((prize, i) => {
      return (
        <div className="prize-container">
          <div>{ i }</div>
          <div>{ prize.title }</div>
          <div>{ prize.total }</div>
        </div>
      )
    })
  }
  return (
    <div className="leaderboard-container">
      <div className="leaderboard-heading">
        <input type="button" className="refresh-button"/>
        <h2>Prize List</h2>
      </div>

      <div className="divider" />

      <div>
        <ol>
          {prizeList ? renderPrizeList() : "Oops, leaderboard data unavailable"}
        </ol>
      </div>

      <div className="divider" />
    </div>
  )
}

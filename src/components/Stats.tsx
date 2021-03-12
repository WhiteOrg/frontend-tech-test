import React from 'react'
import styled from 'styled-components'
import {IStatsProps} from '../types'

const StyledStats = styled.div`
  margin-top: 76px;
  /* border: 3px solid blue; */
  font-size: 14px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 103px auto;
  grid-template-rows: 46px;
  grid-template-areas:
  'prize player';
  column-gap: 32px;

  h3 {
    margin: 0;
  }
  .stats-text {
    font-size:26px;
    font-weight: 600;
    margin: 0;
  }

  .stats-item {

    /* border: 3px solid #00ffaa; */
  }

  .prize {
    grid-area: prize;
  }

  .player {
    grid-area: player;

    .players-stats-container{
      display: flex;

      img {
        width: 18px;
        height: 18px;
        margin: 8px 4px 0 0;
      }
    }
  }
`

export const Stats = ({ prizePool, players }: IStatsProps) => {
  return (
    <StyledStats>
      <div className="stats-item prize">
        <h3>PRIZE POOL</h3>
        <div className="stats-text">{prizePool}</div>
      </div>

      <div className="stats-item player">
        <h3>PLAYER</h3>
        <div className="players-stats-container">
          <img src={require("../images/user.svg")} alt="user-icon"/>
          <div className="stats-text">{players}</div>
        </div>
      </div>
    </StyledStats>
  )
}

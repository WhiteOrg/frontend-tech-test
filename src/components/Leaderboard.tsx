import React from 'react'
import { ILeaderboardProps } from "../types"
import { v4 as uuidv4 } from 'uuid'
import fetchData from '../ApiService'
import styled from 'styled-components'

const StyledLeaderboard = styled.div`

  .divider {
    position: relative;
    background-color:  #f5f4fe;
    width: 100%;
    height: 4px;
    margin: 16px 0;
  }

  .prize-list-container {
    height: 198px;
    overflow-y: scroll;
    /* border: 1px solid red; */
    padding: 0;
    margin-bottom: 21px;

    ::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f5f4fe;
      border-radius:2px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #f9cb11;
      border-radius:2px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #dbb108;
    }
  }

  ol {
    padding: 0 20px 0 0;
    margin:0;

  }

  li {
    /* border: 1px solid green; */
    /* max-width: 314px; */
    height: 32px;
    display: flex;
    border-bottom: 1px solid #f5f4fe;
    display: grid;
    grid-template-columns: 15px 56px auto;
    justify-items: flex-end;
    align-items: center;

    font-size: 16px;
    font-weight: 600;

    font-family: "Barlow Condensed", sans-serif;
  }
`;

export const Leaderboard = ({ prizeList }: ILeaderboardProps) => {

  const renderPrizeList = () => {
    // loop through the prizeList array and render a list item for each index

    return prizeList!.map((prize, i) => {
      return (
        <li className="prize-container" key={uuidv4()}>
          <div>{i + 1}</div>
          <div>{prize.title}</div>
          <div>{prize.total}</div>
        </li>
      )
    })
  }
  return (
    <StyledLeaderboard className="leaderboard-container">


      <div className="divider" />

      <div className="prize-list-container">
        <ol>
          {prizeList ? renderPrizeList() : "Oops, leaderboard data unavailable"}
        </ol>
      </div>

      <div className="divider" />
    </StyledLeaderboard>
  )
}

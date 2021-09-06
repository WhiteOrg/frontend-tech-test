import React from 'react'
import styled from 'styled-components/macro'
import { useQueryClient } from 'react-query'
import { COLORS, WEIGHTS } from '../../constants'
import { TournamentData } from '../../services/tournamentApi'

const IncludedGames: React.FC = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<TournamentData>('tournamentData')

  if (!data) return null

  return (
    <Wrapper>
      <GamesTitle>Include Games</GamesTitle>
      <GamesWrapper>
        {data.games.map((game) => (
          <GameImage key={game.title} src={game.src} />
        ))}
      </GamesWrapper>
    </Wrapper>
  )
}

const GamesWrapper = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 30.2px;

  @media (min-width: 600px) {
    margin-bottom: 40px;
  }
`

const GamesTitle = styled.h2`
  font-size: 24px;
  font-weight: ${WEIGHTS.medium};
  font-stretch: condensed;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  color: ${COLORS.sectionTitle};
  margin-bottom: 17px;

  @media (min-width: 600px) {
    font-size: 28px;
  }
`

const GameImage = styled.img`
  flex: 1px;
  width: 190px;

  @media (min-width: 600px) {
    width: 160px;
  }
`

const Wrapper = styled.section`
  margin: 0 21px 0 20px;

  @media (min-width: 600px) {
    margin: 0 72px 0 68px;
  }
`

export default IncludedGames

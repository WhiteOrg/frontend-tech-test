import React from 'react'
import styled from 'styled-components/macro'
import { useQuery } from 'react-query'
import { Registration } from '../Registration'
import { PrizeList } from '../PrizeList'
import { Description } from '../Description'
import { IncludedGames } from '../IncludedGames'
import { TermsAndConditions } from '../TermsAndConditions'
import { Share } from '../Share'
import fetchTournamentData from '../../services/tournamentApi'
import { COLORS } from '../../constants'

const App: React.FC = () => {
  const { isLoading, error } = useQuery('tournamentData', fetchTournamentData)

  if (isLoading || error) return null

  return (
    <Wrapper>
      <Registration />
      <PrizeList />
      <Description />
      <IncludedGames />
      <TermsAndConditions />
      <Share />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  min-height: 100%;
  background: ${COLORS.white};

  @media (min-width: 740px) {
    max-width: 740px;
  }
`

export default App

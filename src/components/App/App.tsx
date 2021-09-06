import React from 'react'
import { Container } from '../Container'
import { Registration } from '../Registration'
import { PrizeList } from '../PrizeList'
import { Description } from '../Description'
import { IncludedGames } from '../IncludedGames'
import { TermsAndConditions } from '../TermsAndConditions'
import { Share } from '../Share'

const App: React.FC = () => (
  <Container>
    <Registration />
    <PrizeList />
    <Description />
    <IncludedGames />
    <TermsAndConditions />
    <Share />
  </Container>
)

export default App

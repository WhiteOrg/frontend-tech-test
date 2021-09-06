import React from 'react'
import styled from 'styled-components/macro'
import { useQueryClient } from 'react-query'
import { COLORS, WEIGHTS } from '../../constants'
import { TournamentData } from '../../services/tournamentApi'

const Description: React.FC = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<TournamentData>('tournamentData')

  if (!data) return null

  return (
    <Wrapper>
      <DescriptionText>{data.description}</DescriptionText>
    </Wrapper>
  )
}

const DescriptionText = styled.p`
  margin: 30px 21px 30px 20px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: ${COLORS.black};
  font-weight: ${WEIGHTS.normal};

  @media (min-width: 600px) {
    margin: 45px 72px 40px 68px;
  }
`

const Wrapper = styled.section``

export default Description

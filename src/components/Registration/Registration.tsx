import React from 'react'
import styled from 'styled-components/macro'
import Ripple from 'material-ripple-effects'
import { useQueryClient } from 'react-query'
import { COLORS, WEIGHTS } from '../../constants'
import user from '../../images/user.svg'
import calendar from '../../images/calendar.svg'
import close from '../../images/close.svg'
import { CounterBox } from '../CounterBox'
import useDeadline from '../../hooks/useDeadline'
import { TournamentData } from '../../services/tournamentApi'

const Registration: React.FC = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<TournamentData>('tournamentData')
  const { days, hours, minutes } = useDeadline(604800)
  const ripple = new Ripple()

  if (!data) return null

  return (
    <>
      <BackgroundWrapper data={data}>
        <TitleWrapper>
          <Title>{data.title}</Title>
          <CloseButton tabIndex={0} src={close} alt="close" />
        </TitleWrapper>
        <CountdownWrapper>
          <CountdownText>
            Starts at <CounterBox>{days}</CounterBox> d{' '}
            <CounterBox>{hours}</CounterBox> h<CounterBox>{minutes}</CounterBox>{' '}
            m
          </CountdownText>
        </CountdownWrapper>
        <InformationWrapper>
          <PrizeWrapper>
            <PrizeTitle>Prize Pool</PrizeTitle>
            <PrizeAmount> {data.prizePool}</PrizeAmount>
          </PrizeWrapper>
          <PlayerWrapper>
            <PlayerTitle>Player</PlayerTitle>
            <PlayerAmount>
              <UserImage src={user} />
              {data.players}
            </PlayerAmount>
          </PlayerWrapper>
        </InformationWrapper>
        <StartDateWrapper>
          <CalendarImage src={calendar} alt="calendar" />
          <StartDateText>
            Starts on {new Date(data.startDate).toUTCString()}
          </StartDateText>
        </StartDateWrapper>
        <Button onMouseUp={(e) => ripple.create(e, 'light')}>Join</Button>
      </BackgroundWrapper>
    </>
  )
}

const CloseButton = styled.img`
  &:hover {
    cursor: pointer;
  }
`

const Button = styled.button`
  border: none;
  width: 100%;
  max-width: 334px;
  margin-bottom: 10px;
  padding: 12px 0;
  border-radius: 1px;
  background: ${COLORS.secondary.main};
  font-size: 15px;
  font-weight: ${WEIGHTS.semiBold};
  font-stretch: condensed;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.88px;
  color: ${COLORS.buttonText};
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background: ${COLORS.secondary.dark};
  }
`

const StartDateText = styled.p`
  margin: 2px 0 1px 12px;
  font-size: 14px;
  font-stretch: condensed;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.semiBold};
`

const UserImage = styled.img`
  margin-right: 4px;
`

const CalendarImage = styled.img``

const StartDateWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`

const PrizeWrapper = styled.div`
  margin-right: 32px;
`

const PlayerWrapper = styled.div``

const PrizeAmount = styled.p`
  margin: 3px 0 0;
  font-size: 26px;
  font-stretch: condensed;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.semiBold};
`

const PrizeTitle = styled.p`
  margin: 0 47px 3px 0;
  font-size: 14px;
  font-stretch: condensed;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${COLORS.primary.main};
  font-weight: ${WEIGHTS.semiBold};
`

const PlayerTitle = styled(PrizeTitle)``

const PlayerAmount = styled(PrizeAmount)``

const InformationWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const CountdownText = styled.p`
  display: flex;
  margin: 1px 10px 3px 0;
  font-size: 22px;
  font-stretch: condensed;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.medium};
`

const CountdownWrapper = styled.div`
  margin-bottom: 79px;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Title = styled.h1`
  margin: 0 52px 26px 0;
  font-size: 34px;
  font-stretch: condensed;
  font-style: normal;
  line-height: 1.03;
  letter-spacing: -0.77px;
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.medium};

  @media (min-width: 600px) {
    font-size: 48px;
    font-weight: ${WEIGHTS.semiBold};
  }
`

const Wrapper = styled.section`
  padding: 20px;
  background: ${(props: { data: TournamentData }) =>
    `url(${props.data.backgroundImage})`};
  height: fit-content;
  background-size: cover;

  @media (min-width: 600px) {
    padding: 26px 25px 30px 68px;
  }
`

interface BackgroundWrapperProps {
  data: TournamentData
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = (props) => (
  <Wrapper {...props} />
)

export default Registration

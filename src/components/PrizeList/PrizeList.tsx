import React from 'react'
import styled from 'styled-components/macro'
import data from '../../data.json'
import { COLORS, WEIGHTS } from '../../constants'
import refresh from '../../images/refresh.svg'

const PrizeList: React.FC = () => (
  <Wrapper>
    <TitleWrapper>
      <PrizeListTitle>Prize List</PrizeListTitle>
      <RefreshButton tabIndex={0} src={refresh} alt="refresh" />
    </TitleWrapper>
    <Divider />
    <ListWrapper>
      {data.prizeList.map((prize, index) => (
        <ListItem key={prize.title}>
          <ListItemIndex>{index}</ListItemIndex>
          <ListItemTitle>{prize.title}</ListItemTitle>
          <ListItemText>{prize.total}</ListItemText>
        </ListItem>
      ))}
    </ListWrapper>
    <Divider />
  </Wrapper>
)

const ListItemText = styled.p`
  font-size: 16px;
  font-weight: 600;
  font-stretch: condensed;
  font-style: normal;
  line-height: 2.06;
  letter-spacing: normal;
  color: ${COLORS.black};
`

const ListItemTitle = styled(ListItemText)`
  flex: 1;
`

const ListItemIndex = styled(ListItemText)`
  margin-right: 34px;
`

const ListItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${COLORS.divider};
`

const ListWrapper = styled.ul`
  padding: 0px 16px 0 9px;
  margin: 20px 0;
  height: 198px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 2px;
    background: ${COLORS.divider};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${COLORS.secondary.main};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${COLORS.secondary.light};
  }
`

const Divider = styled.div`
  background: ${COLORS.divider};
  height: 4px;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
`

const RefreshButton = styled.img`
  &:hover {
    cursor: pointer;
  }
`

const PrizeListTitle = styled.h2`
  font-size: 24px;
  font-stretch: condensed;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  color: ${COLORS.sectionTitle};
  font-weight: ${WEIGHTS.medium};
`

const Wrapper = styled.section`
  margin: 30px 21px 30px 20px;

  @media (min-width: 600px) {
    margin: 38px 72px 45px 68px;
  }
`

export default PrizeList

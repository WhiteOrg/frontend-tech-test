import React from 'react'
import styled from 'styled-components/macro'
import useMediaQuery from 'react-use-media-query-hook'
import data from '../../data.json'
import { COLORS, WEIGHTS } from '../../constants'

const TermsAndConditions: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 600px)')

  return (
    <Wrapper>
      <TermsAndConditionsTitle>Terms & Conditions</TermsAndConditionsTitle>
      <ListWrapper>
        {data.terms.map((term) => (
          <React.Fragment key={term}>
            {isDesktop ? (
              <ListItem>• {term}</ListItem>
            ) : (
              <ListItemWrapper>
                <ListDotWrapper>
                  <ListItem as="p">•</ListItem>
                </ListDotWrapper>
                <ListItem as="p">{term}</ListItem>
              </ListItemWrapper>
            )}
          </React.Fragment>
        ))}
      </ListWrapper>
    </Wrapper>
  )
}

const ListDotWrapper = styled.div`
  min-width: 16px;
  margin-right: 7px;
`

const ListItemWrapper = styled.li`
  display: flex;
`

const ListItem = styled.li`
  font-family: Roboto;
  font-size: 16px;
  font-weight: ${WEIGHTS.normal};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: ${COLORS.black};
`

const ListWrapper = styled.ul``

const TermsAndConditionsTitle = styled.h2`
  margin-bottom: 22px;
  font-size: 24px;
  font-weight: ${WEIGHTS.medium};
  font-stretch: condensed;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: normal;
  color: ${COLORS.sectionTitle};

  @media (min-width: 600px) {
    font-size: 28px;
  }
`

const Wrapper = styled.div`
  margin: 0 21px 40px 20px;

  @media (min-width: 600px) {
    margin: 0 72px 60px 68px;
  }
`

export default TermsAndConditions

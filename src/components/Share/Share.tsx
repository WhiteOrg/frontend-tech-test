import React from 'react'
import styled from 'styled-components/macro'
import { COLORS, WEIGHTS } from '../../constants'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'

const Share: React.FC = () => (
  <Wrapper>
    <ShareWrapper>
      <ShareTitle>Share this Tournament</ShareTitle>
      <ButtonWrapper>
        <TwitterButton tabIndex={0} src={twitter} alt="twitter" />
        <FacebookButton tabIndex={0} src={facebook} alt="facebook" />
      </ButtonWrapper>
    </ShareWrapper>
  </Wrapper>
)

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ShareWrapper = styled.div``

const TwitterButton = styled.img`
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`

const FacebookButton = styled.img`
  &:hover {
    cursor: pointer;
  }
`

const ShareTitle = styled.h2`
  margin: 0 0 15px;
  font-size: 16px;
  font-weight: ${WEIGHTS.semiBold};
  font-stretch: condensed;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${COLORS.secondary.main};
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to top, #158dd4, #56169b);
  padding: 30px 0 40px 0;

  @media (min-width: 600px) {
    padding: 30px 0 40px 0;
  }
`

export default Share

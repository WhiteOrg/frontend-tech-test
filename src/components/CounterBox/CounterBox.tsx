import React from 'react'
import styled from 'styled-components/macro'
import { COLORS, WEIGHTS } from '../../constants'

const CounterBox: React.FC = ({ children }) => (
  <Wrapper>
    <Rectangle />
    {children}
  </Wrapper>
)

const Rectangle = styled.span`
  position: absolute;
  border-radius: 1.5px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 22px;
  height: 3px;
`

const Wrapper = styled.span`
  padding: 1px 4px 3px;
  border-radius: 6px;
  border: solid 2px #fff;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  font-size: 18px;
  font-weight: ${WEIGHTS.semiBold};
  color: ${COLORS.white};
`

export default CounterBox

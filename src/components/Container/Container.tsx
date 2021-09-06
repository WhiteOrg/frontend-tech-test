import styled from 'styled-components'
import { COLORS } from '../../constants'

const Container = styled.div`
  margin: 0 auto;
  min-height: 100%;
  background: ${COLORS.white};

  @media (min-width: 740px) {
    max-width: 740px;
  }
`

export default Container

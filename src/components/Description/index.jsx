import React from 'react'
import styled from 'styled-components'
import { device } from '../../device'
import { componentPadding } from '../../globalStyles'

const Container = styled.div`
    ${componentPadding}
    padding-top: 1em;
    padding-bottom: 1em;
    width: 100%;
    font-weight: 500;
    text-shadow: 0px 0px 0px #000;
    margin: 1em 0;
    @media ${device.laptop} {
        font-size: 1.1rem;
    }
    @media ${device.laptopLarge} {
        font-size: 2rem;
    }
`

export default function Description({ description }) {

    return(
        <Container>
            {description}
        </Container>
    )
}
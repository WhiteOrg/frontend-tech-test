import React from 'react'
import TwitterIcon from '../../svgComponents/TwitterIcon'
import FacebookIcon from '../../svgComponents/FacebookIcon'
import styled from 'styled-components'
import { componentPadding } from '../../globalStyles'

const Container = styled.footer`
    width: 100%;
    ${componentPadding}
    padding-top: 2em;
    padding-bottom: 2em;
    text-align: center;
    color: yellow;
    background: #4579fc;
    background: linear-gradient(15deg,
        #5839ad 0%,
        #024f7c 45%,
        #0377ad 100%
    );
`

const FooterTypo = styled.p`
    text-shadow: 0 0 0px yellow;
    margin: 1em;
`

const IconsWrapper = styled.div`
    width: 110px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
`

// JSX
export default function Footer(){
    return(
        <Container>
            <FooterTypo>Share this tournament</FooterTypo>
            <IconsWrapper>
                <TwitterIcon />
                <FacebookIcon />
            </IconsWrapper>
        </Container>
    )
}
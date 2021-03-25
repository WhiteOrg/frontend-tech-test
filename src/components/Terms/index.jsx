import React from 'react'
import styled from 'styled-components'
import { device } from '../../device'
import { fontAccent ,componentPadding } from '../../globalStyles'

const Container = styled.div`
    ${componentPadding}
    padding-top: 3em;
    padding-bottom: 3em;
    width: 100%;
`
const Header = styled.header`
    padding: 1em 0;
    width: 100%;
`
const HeaderTypo = styled.h3`
    ${fontAccent}
    font-size: 2em;
`

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`

const TermItem = styled.p`
    width: 100%;
    line-height: 25px;
    text-shadow: 0px 0px 0 #000;
    display: flex;
    font-weight: 500;

    @media ${device.laptop} {
        line-height: auto;
    }
    @media ${device.desktop} {
        line-height: 50px;
    }
`

const Dot = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    display: block;
    background-color: #000;
    margin-top: 10px;
    margin-right: 1.5em;
`


// JSX
export default function Terms({termsList}) {
    return(
        <Container>
            <Header>
                <HeaderTypo>Terms &amp; Conditions</HeaderTypo>
            </Header>
            {
                termsList.map( item => (
                    <Wrapper key={item.id}>
                        <Dot></Dot>
                        <TermItem>
                            { item.content }
                        </TermItem>
                    </Wrapper>
                ))
            }
        </Container>
    )
}
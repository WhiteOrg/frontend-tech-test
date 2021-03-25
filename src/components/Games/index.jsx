import React from 'react'
import styled from 'styled-components'
import { fontAccent, componentPadding } from '../../globalStyles'
import { device } from '../../device'


const Container = styled.div`
    ${componentPadding}
    width: 100%;
`
const Header = styled.div`
    padding: 1em 0;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
`

const Title = styled.h3`
    ${fontAccent}
    font-size: 2em;
`
const GamesContainer = styled.div`
    width: 100%;
    min-height: 250px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;

    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const GameItem = styled.div`
    min-width: 130px;
    min-height: 130px;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    @media ${device.tablet} {
        width: 100%;
    }
    @media ${device.laptop} {
        min-height: 200px;
    }

    @media ${device.desktop} {
        min-height: 350px;
    }

`

export default function Games({ games }) {

    return(
        <Container>
            <Header>
                <Title>Include Games</Title>
            </Header>
            <GamesContainer>
                {
                    games.map( (game, index) => (
                        <GameItem key={index} image={game.src}/>
                    ))
                }
            </GamesContainer>
        </Container>
    )
}
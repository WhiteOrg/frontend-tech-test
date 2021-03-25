import React from 'react'
// 
import UserIcon from '../../svgComponents/UserIcon'
import styled from 'styled-components'



const Wrapper = styled.div`
display: flex;
width: 100%;
`
const Container = styled.div`
width: auto;
display: block;
margin-top: 5em;
margin-right: 2em;
`

const Title = styled.p`
color: #0fd4ee;
text-transform: uppercase;
font-weight: 500;
font-size: 1em;
`

const Content = styled.h3`
color: #fff;
font-size: 1.5em;
`

const FlexContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export default function HeaderSection({ prizePool, players }) {

    // JSX
    return(
        <Wrapper>
            <Container>
                <Title>Prize Pool</Title>
                <Content>{ prizePool }</Content>
            </Container>
            <Container>
                <Title>Player</Title>
                    <Content>
                        <FlexContainer>
                            <UserIcon />
                            <p style={{ marginLeft: "0.2em"}}>{ players }</p>
                        </FlexContainer>
                    </Content>
            </Container>
        </Wrapper>
    )
}

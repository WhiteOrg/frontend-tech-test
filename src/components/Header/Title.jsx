import React from 'react'
import styled from 'styled-components'
import ExitIcon from '../../svgComponents/ExitIcon'



const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-bottom: 2em;
`

const TitleTag = styled.h1`
    margin-right: 1em;
    font-size: 3em;
    flex: 1;
    font-weight: 450;
    color : #fff;
`

const ExitIconContainer = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    background-color: transparent;
    & > svg {
        cursor: pointer;
        &:hover {
            animation-name: pulse;
            animation-duration: .5s;
            animation-timing-function: cubic-bezier(1,0,0,1 );
            animation-iteration-count: infinite;
            animation-direction: alternate;
            > path:nth-child(2) {
                transition: all .3s ease;   
                fill: #f9cb11;
            }
            > path:nth-child(1) {
                stroke-width: 0;
            }
        }
    }
`




export default function Title({ title }) {
    return(
        <Container>
            <TitleTag>{title}</TitleTag>
            <ExitIconContainer>
                <ExitIcon />
            </ExitIconContainer>
        </Container>
    )
}
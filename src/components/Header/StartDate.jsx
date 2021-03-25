import React from 'react'
// 
import CalendarIcon from '../../svgComponents/CalendarIcon'
import styled from 'styled-components'



const Container = styled.div`
    display: flex;
    margin: 2em 0;
    align-items: center;
`

const DateText = styled.p`
    font-size: 0.8em;
    color: #fff;
    margin-left: 1em;
`

// JSX
export default function StartDate({ date }) {
    return(
        <Container>
            <CalendarIcon />
            <DateText>Starts on {date} </DateText>
        </Container>
    )
}
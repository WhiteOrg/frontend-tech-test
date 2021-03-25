import React, { useState } from 'react'
import styled from 'styled-components'



const Counter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
`

const CounterTypo = styled.h3`
    color: #fff;
    min-width: 80px;
    font-weight: 500;
    font-size: 1.5em;
    margin-right: 0.3em;

`
const CounterItems = styled.div`
    display: flex;
    flex: 1;
`

const CounterDigit = styled.p`
    width: 1.8em;
    height: 1.8em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.2em;
    font-weight: 500;
    border: 2px solid #fff;
    border-radius: 8px;
    position: relative;
    z-index: 3;

    ::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 90%;
        height: 3px;
        background-color: rgba(255, 255, 255, 0.3);
        border: none;
        border-radius: 2px;
        z-index: 1;
    }
`

const CounterLetter = styled(CounterDigit)`
    border: none;
    border-radius: 0;
    ::before {
        display: none;
    }
`


// JSX
export default function Countdown() {

// SETTING UP STATE VARIABLES FOR THE TIMER
const [timerDays, setTimerDays] = useState('00')
const [timerHours, setTimerHours] = useState('00')
const [timerMinutes, setTimerMinutes] = useState('00')
const TIMER_CYCLE_TIME = 1000



let interval = React.useRef()

// SO FOR THIS EXAMPLE I DID 7 DAYS SINCE DATE.NOW()
// NORMALLY I WOULD FETCH END-DATE FROM API AND COMPARE TO CURRENT DATE
// LIKE SO
// 
// GetDataFromAPI().then( data => setEndDate( new Date(data.endDate) ))
// 
// UNFORTUNATELY THERE WAS AN INVALID DATE FORMAT FOR ENDDATE IN API OBJECT
// 2020-15-06T10:06:29.578Z -> INVALID DATE AS THERE IS NO 15TH MONTH IN THE YEAR
// 2020-06-15T10:06:29.578Z -> I THINK THIS WAS A GOAL? 


// CREATED FUNCTION INSIDE THE EFFECT HOOK AS I DONT USE IT ANYWHERE ELSE SO ITS FINE IN THIS SCENARIO
// AND ALSO AVOIDED SOME WARNIGS INSIDE CONSOLE ABOUT MISSING DEPENDANCIES

React.useEffect( () => {
    // SETUP START DAY 
    const startDate = new Date()
    startDate.setDate(startDate.getDate() + 7 )

    const startTime = () => {

        interval.current = setInterval(() => {
            const now = new Date().getTime()
            const distance = startDate - now
    
            const days = Math.floor( distance / ( 1000 * 60 * 60 * 24 ) )
            const hours = Math.floor( distance % ( 1000 * 60 * 60 * 24) / ( 1000 * 60 * 60 ) )
            const minutes = Math.floor( distance % ( 1000 * 60 * 60 ) / ( 1000 * 60 ) )
    
            // IF DISTANCE IS LESS THAN 0 -> TIME IS UP
            if (distance < 0) {
                // STOP THE TIMER
                clearInterval( interval.current)
            } else {
                // UPDATE THE TIMER
                setTimerDays( days )
                setTimerHours( hours )
                setTimerMinutes( minutes )
            }
        }, TIMER_CYCLE_TIME)
        
    }    // SET IT TO VARIABLE SO IT UPDATES WHEN INTERVAL HAS CHANGED
    let toClean = interval.current

    startTime()

    // CLEAN UP FUNCTION 
    return () => clearInterval( toClean )

},[])

    return(
        <Counter>
            <CounterTypo>Starts at</CounterTypo>
            <CounterItems>
                <CounterDigit>{ timerDays }</CounterDigit>
                <CounterLetter>d</CounterLetter>
                <CounterDigit>{ timerHours }</CounterDigit>
                <CounterLetter>h</CounterLetter>
                <CounterDigit>{ timerMinutes }</CounterDigit>
                <CounterLetter>m</CounterLetter>
            </CounterItems>
    </Counter>
    )
}
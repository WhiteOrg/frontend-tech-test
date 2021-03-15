import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'


const StyledCountdown = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 22px;
  font-family: "Barlow Condensed", sans-serif;

  >* {
    margin-right: 10px;
  }

  .countdown-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border: 2px solid white;
    border-radius: 6px;
    font-size: 18px;


    transition-property: height width color border-color;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;

    &.closed{
      height: 0;
      width: 22px;
      color: transparent;
      border-color: rgba(255,255,255,0.3);
    }

    &:hover{
      height: 0;
      width: 22px;
      color: transparent;
      border-color: rgba(255,255,255,0.3);
    }
  }

  @media screen and (min-width: 740px) {
    margin-top: 30px;
	}

	@media screen and (max-width: 739px) {
    margin-top: 26px;
  }
`

export const Countdown = () => {
  const endDate = new Date(2021, 2, 16, 17).getTime()

  const timeUnits = {
    minute: 60000,
    hour: 3600000,
    day: 86400000,
  }

  const [remaining, setRemaining] = useState(() => getRemainingTime())
  const intervalRef = useRef<ReturnType<typeof window.setTimeout>>()


  useEffect(() => {
    const updateRemaining = () => {
      console.log("UPDATING TIME")
      setRemaining(getRemainingTime())
    }

    intervalRef.current = setInterval(updateRemaining, 60000)
  }, [])


  function getRemainingTime () {
    const time = endDate - Date.now()
    return {
      days: Math.floor(time / timeUnits.day),
      hours: Math.floor((time % timeUnits.day) / timeUnits.hour),
      minutes: Math.floor((time % timeUnits.hour) / timeUnits.minute),
    }
  }

  console.log("TIME REMAINING:::", remaining.days, remaining.hours, remaining.minutes)

  return (
    <StyledCountdown>
      <span className="countdown-text">Starts at</span>

      <div className="countdown-box closed">
        <span className="countdown-text">{remaining.days}</span>
      </div>
      <span className="countdown-text">d</span>

      <div className="countdown-box">
        <span className="countdown-text">{remaining.hours}</span>
      </div>
      <span className="countdown-text">h</span>

      <div className="countdown-box">
        <span className="countdown-text">{remaining.minutes}</span>
      </div>
      <span className="countdown-text">m</span>

    </StyledCountdown>
  )
}
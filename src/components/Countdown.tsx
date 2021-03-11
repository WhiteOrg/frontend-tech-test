import React, { useState } from 'react'

export const Countdown = () => {
  const endDate = new Date(2021, 2, 12, 17).getTime();

  const timeUnits = {
    minute: 60000,
    hour: 3600000,
    day: 86400000,
  };

  const [remaining, setRemaining] = useState(() => getRemainingTime());

  function getRemainingTime () {
    const time = endDate - Date.now();
    return {
      days: Math.floor(time / timeUnits.day),
      hours: Math.floor((time % timeUnits.day) / timeUnits.hour),
      minutes: Math.floor((time % timeUnits.hour) / timeUnits.minute),
    };
  };

  console.log("TIME REMAINING:::", remaining.days, remaining.hours, remaining.minutes);

  return (
    <div className="countdown-container">
      <span className="countdown-text">Starts at</span>

      <div className="countdown-box">
        <span className="countdown-text">{remaining.days}</span>
      </div>
      <span className="countdown-text">d</span>

      <div className="countdown-box">
        <span className="countdown-text">{remaining.hours }</span>
      </div>
      <span className="countdown-text">h</span>

      <div className="countdown-box">
        <span className="countdown-text">{remaining.minutes }</span>
      </div>
      <span className="countdown-text">m</span>

    </div>
  )
};
import React from 'react'

export const Countdown = () => {
  return (
    <div className="countdown-container">
      <span className="countdown-text">Starts at</span>

      <div className="countdown-box">
        <span className="countdown-text">6</span>
      </div>
      <span className="countdown-text">d</span>

      <div className="countdown-box">
        <span className="countdown-text">6</span>
      </div>
      <span className="countdown-text">h</span>

      <div className="countdown-box">
        <span className="countdown-text">6</span>
      </div>
      <span className="countdown-text">m</span>

    </div>
  )
};
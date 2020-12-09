import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { CountdownDateTime, FormatDateTime } from "../../../helpers/index";

const Countdown = () => {
  const [countDownState, setCountDownState] = useState({
    year: 0,
    month: 0,
    week: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 7);

  useEffect(() => {
    const interval = setInterval(() => {
      let countdownDateTime = CountdownDateTime(startDate);
      setCountDownState(countdownDateTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  },[]);

  const { day, hour, minute } = { ...countDownState };
  return (
    <div className="w-1/2 flex justify-start font-barlow">
      <p className="text-white font-bold px-2 text-2xl">
        <span className="rounded-md ring ring-white ring-opacity-100 p-2 mr-4">
          {FormatDateTime(day)}
        </span>
        d
      </p>
      <p className="text-white font-bold px-2 text-2xl">
        <span className="rounded-md ring ring-white ring-opacity-100 p-2 mr-4">
          {FormatDateTime(hour)}
        </span>
        h
      </p>
      <p className="text-white font-bold px-2 text-2xl">
        <span className="rounded-md ring ring-white ring-opacity-100 p-2 mr-4">
          {FormatDateTime(minute)}
        </span>
        m
      </p>
    </div>
  );
};

Countdown.propTypes = {
  countdownState: PropTypes.shape({
    year: PropTypes.string,
    month: PropTypes.string,
    week: PropTypes.string,
    day: PropTypes.string,
    hour: PropTypes.string,
    minute: PropTypes.string,
    second: PropTypes.string,
  })
};


export default Countdown;

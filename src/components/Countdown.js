import React, { useState, useEffect, useCallback } from "react";
import { Rectangle, CountdownContainer } from "../styles/header";
import { countdownDate, msInADay } from "../constants/constants";

const Countdown = () => {
  const [timeleft, setTimeLeft] = useState({});
  const { days, hours, minutes, seconds } = timeleft;

  const calculateTimeLeft = useCallback(() => {
    let diff = countdownDate - new Date().getTime();
    if (diff > 0) {
      const timeLeftFormatted = {
        days: Math.floor(diff / msInADay),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
      return timeLeftFormatted;
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  return (
    <CountdownContainer>
      <p>Starts</p>
      <Rectangle>{days}</Rectangle>
      <span>d</span>
      <Rectangle>{hours}</Rectangle>
      <span>h</span>
      <Rectangle>{minutes}</Rectangle>
      <span>m</span>
      <Rectangle>{seconds}</Rectangle>
      <span>s</span>
    </CountdownContainer>
  );
};

export default Countdown;

import React, { useState, useEffect } from "react";
import { Container, Span, Elements } from "./Countdown.styles";

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7);

const Countdown = () => {
  const calculateTimeLeft = () => {
    let getCurrentTime = new Date();
    let difference = targetDate - getCurrentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60 * 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval, index) => {
    timerComponents.push(
      <Elements key={index}>
        <Span>{timeLeft[interval]}</Span> <Span>{interval} </Span>
      </Elements>
    );
  });

  return <Container>Starts at {timerComponents}</Container>;
};

export default Countdown;

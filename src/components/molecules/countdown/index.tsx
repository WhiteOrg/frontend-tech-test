import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Timer from "../../atoms/timer";

type Props = {
  endDate: string;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  align-items: center;
`;

const Text = styled.p`
  font-size: 22px;
  line-height: 26px;
  color: white;
`;

const CountDown: React.FunctionComponent<Props> = (props) => {
  const calculateTimeLeft = () => {
    let startDate = new Date();
    let endDate = new Date(props.endDate);

    const difference = +endDate - +startDate;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    let id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(id);
  });

  return (
    <Container>
      <Text>Start at</Text>
      <Timer>{timeLeft.days}</Timer>
      <Text>d</Text>
      <Timer>{timeLeft.hours}</Timer>
      <Text>h</Text>
      <Timer>{timeLeft.minutes}</Timer>
      <Text>m</Text>
      <Timer>{timeLeft.seconds}</Timer>
      <Text>s</Text>
    </Container>
  );
};

export default CountDown;

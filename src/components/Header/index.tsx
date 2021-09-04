import React, { FC, useEffect, useState } from "react";
import { Flex } from "reflexbox";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

import { Text } from "../Text";
import { THeader } from "./types";
import { Button } from "../Button";
import { StyledHeaderWrapper as HeaderWrapper, StyledTime as Time } from "./styles";
import { ReactComponent as User } from "../../images/user.svg";
import { ReactComponent as CloseButton } from "../../images/close.svg";
import { ReactComponent as Calendar } from "../../images/calendar.svg";

const Header: FC<THeader> = ({ title, prizePool, players, startDate, backgroundImage }) => {
  const [days, setDays] = useState(7);
  const [hours, setHours] = useState(24);
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);
  const [startDateParsed, setStartDateParsed] = useState<string>();

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerInterval);
          if (hours === 0) {
            if (days === 0) {
              clearInterval(timerInterval);
            } else {
              setDays(days - 1);
              setHours(23);
            }
          } else {
            setHours(hours - 1);
            setMinutes(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  });

  useEffect(() => {
    dayjs.extend(advancedFormat);
    dayjs.extend(timezone);
    dayjs.extend(utc);

    setStartDateParsed(dayjs(startDate).format("ddd, DD MMM YYYY, HH:mm:ss z"));
  }, [startDate]);

  return (
    <HeaderWrapper backgroundImage={backgroundImage}>
      <Flex mb="26px">
        <Flex justifyContent="space-between" flex={1} alignItems="center">
          <Text
            color="white"
            fontSize={34}
            desktopSize={48}
            fontWeight={500}
            fontFamily='"Barlow Condensed", sans serif'
          >
            {title && title}
          </Text>
          <CloseButton style={{ cursor: "pointer" }} />
        </Flex>
      </Flex>
      <Flex mb={80} alignItems="center">
        <Text color="white">Starts at</Text>
        <Time>{days}</Time>
        <Text color="white">d</Text>
        <Time>{hours}</Time>
        <Text color="white">h</Text> <Time>{minutes}</Time>
        <Text color="white">m</Text>
      </Flex>
      <Flex mb="20px">
        <Flex flexDirection="column" mr="32px">
          <Text mb="3px" color="lightBlue" fontSize={14} fontWeight="500">
            PRIZE POOL
          </Text>
          <Text color="white" fontSize={26} fontWeight="500">
            {prizePool && prizePool}
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Text mb="3px" color="lightBlue" fontSize={14} fontWeight="500">
            PLAYER
          </Text>
          <Flex alignItems="center">
            <User />
            <Text color="white" fontSize={26} fontWeight="500" ml="5px">
              {players && players}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex mb="30px">
        <Calendar />
        <Text color="white" ml="10px" fontSize={14}>
          Starts on {startDateParsed}
        </Text>
      </Flex>
      <Button>Join</Button>
    </HeaderWrapper>
  );
};

export { Header };

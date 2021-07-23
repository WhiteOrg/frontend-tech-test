import React from "react";
import userImg from "../../images/user.svg";
import calendarImg from "../../images/calendar.svg";

import { Container, StatsContainer, Button } from "./Hero.styles";
import Title from "./Title/Title";
import Countdown from "./Countdown/Countdown";
import Stats from "./Stats/Stats";
import StartDate from "./StartDate/StartDate";

const Hero = ({ data }) => {
  return (
    <Container backgroundImg={data.backgroundImage}>
      <Title title={data.title} />
      <Countdown />
      <StatsContainer>
        <Stats title="prize pool" value={data.prizePool} />
        <Stats title="player" value={data.players} userImg={userImg} />
      </StatsContainer>
      <StartDate
        calendarImg={calendarImg}
        startDate={new Date(data.startDate).toUTCString()}
      />
      <Button>JOIN</Button>
    </Container>
  );
};

export default Hero;

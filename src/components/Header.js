import React from "react";
import { shape, string, number } from "prop-types";
import CloseButton from "../assets/images/close.svg";
import UserIcon from "../assets/images/user.svg";
import CalendarIcon from "../assets/images/calendar.svg";
import { competitionStartDate } from "../constants/constants";
import { HeaderWrapper, InnerWrapper } from "../styles/header";
import { Countdown } from ".";

const Header = ({ data }) => {
  const { backgroundImage, players, prizePool, title } = data;
  return (
    <HeaderWrapper backgroundImage={backgroundImage}>
      <InnerWrapper>
        <h1>{title}</h1>
        <img src={CloseButton} alt="close-button-1" />
      </InnerWrapper>
      <Countdown />
      <section>
        <InnerWrapper secondary>
          <p>PRIZE POOL</p>
          <h1>{prizePool}</h1>
        </InnerWrapper>
        <InnerWrapper secondary player>
          <p>PLAYER</p>
          <div>
            <img src={UserIcon} alt="user-icon" />
            <h1>{players}</h1>
          </div>
        </InnerWrapper>
      </section>
      <InnerWrapper tertiary>
        <img src={CalendarIcon} alt="close-button-2" role="button" />
        <p>Starts on {competitionStartDate}</p>
      </InnerWrapper>
      <button>JOIN</button>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  data: shape({
    backgroundImage: string,
    players: number,
    prizePool: string,
    title: string,
  }),
};

Header.defaultProps = {
  data: {},
};

export default Header;

import React from "react";
import Players from "../Players";
import Prize from "../PrizePool";
import Clock from "../Clock";
import calendar from "../../images/calendar.svg";
import close from "../../images/close.svg";
import { IData } from "../../utils/dataTypes";
import "./header.scss";

const Header = (props: { data: IData }) => {
  const { backgroundImage, title, startDate, players, prizePool } = props?.data;

  const dateStr = new Date(startDate).toUTCString();

  const sectionStyle = {
    backgroundSize: "cover",
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="header" style={sectionStyle}>
      <h1>{title}</h1>
      <button className="header__close">
        <img src={close} alt="close button" />
      </button>
      <div className="header__countdown">
        Starts at <Clock />
      </div>
      <div className="header__prizeAndPlayers">
        <Prize prizePool={prizePool} />
        <Players playerCount={players} />
      </div>
      <div className="header__start">
        <img src={calendar} alt="calandar icon" /> Starts on {dateStr}
      </div>
      <div className="header__join">
        <button>JOIN</button>
      </div>
    </div>
  );
};

export default Header;

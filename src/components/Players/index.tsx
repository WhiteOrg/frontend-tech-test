import React from "react";
import person from "../../images/user.svg";
import "./players.scss";

const Players = (props: { playerCount: number }) => {
  const { playerCount } = props;
  const icon = <img src={person} alt="person icon"></img>;
  return (
    <div className="players">
      <p className="players__heading">Player</p>
      <p className="players__count">
        {icon} {playerCount}
      </p>
    </div>
  );
};

export default Players;

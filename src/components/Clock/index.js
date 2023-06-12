import React from "react";
import { Countdown } from "./Countdown";
import "./clock.scss";

const Clock = () => {
  let date = new Date();
  const midnight = date.setHours(0, 0, 0);
  const nextWeek = new Date(midnight).setDate(new Date(midnight).getDate() + 7);

  const [days, hours, minutes] = Countdown(nextWeek);

  return (
    <div className="clock">
      <div className="clock__digit">{days}</div> d
      <div className="clock__digit">{hours}</div> h
      <div className="clock__digit">{minutes}</div> m
    </div>
  );
};

export default Clock;

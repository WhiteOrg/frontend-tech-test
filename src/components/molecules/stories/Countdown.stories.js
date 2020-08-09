import React from "react";
import Countdown from "../countdown";

export default {
  title: "Molecules",
};

let startDate = "2020-08-08T10:06:29.578Z";
const now = new Date();
const start = new Date(startDate);
const diff = +start - +now;
if (diff <= 0) {
  start.setDate(start.getDate() + 7);
  startDate = start.toDateString();
}

export const countdown = () => (
  <div>
    <Countdown startDate={startDate} />
  </div>
);

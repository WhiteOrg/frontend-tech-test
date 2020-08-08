import React from "react";
import Countdown from "../countdown";

export default {
  title: "Molecules",
};

let endDate = "2020-08-15T10:06:29.578Z";
const now = new Date();
const end = new Date(endDate);
const diff = +end - +now;
if (diff <= 0) {
  end.setDate(end.getDate() + 7);
  endDate = end.toDateString();
}

export const countdown = () => (
  <div>
    <Countdown endDate={endDate} />
  </div>
);

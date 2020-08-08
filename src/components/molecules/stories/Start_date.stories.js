import React from "react";
import StartDate from "../start_date";
import calendar from "../../../images/calendar.svg";

export default {
  title: "Molecules",
};

export const start_date = () => (
  <div>
    <StartDate icon={calendar} startDate="2020-08-06T10:06:29.578Z" />
  </div>
);

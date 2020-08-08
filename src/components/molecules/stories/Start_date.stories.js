import React from "react";
import StartDate from "../start_date";
import calendar from "../../../images/calendar.svg";

export default {
  title: "Molecules",
};

export const start_date = () => (
  <div>
    <StartDate
      icon={calendar}
      info="Starts on Thu, 20 Feb 2020, 23:00:00 GMT"
    />
  </div>
);

import React from "react";
import { Container, Span } from "./StartDate.styles";

const StartDate = ({ startDate, calendarImg }) => {
  return (
    <Container>
      <span>
        {calendarImg ? <img src={calendarImg} alt="calendar" /> : null}{" "}
      </span>

      <Span>Starts on {startDate}</Span>
    </Container>
  );
};

export default StartDate;

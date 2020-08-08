import React from "react";
import styled from "styled-components";
import Paragraph from "../../atoms/paragraph";

type Props = {
  readonly icon: string;
  readonly startDate: string;
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 295px;
  & > p {
    align-self: center;
  }
`;

const Icon = styled.img``;

const StartDate: React.FunctionComponent<Props> = ({ icon, startDate }) => (
  <Container>
    <Icon src={icon} />
    <Paragraph size="small" textColor="white">
      Starts On {new Date(startDate).toDateString()},{" "}
      {new Date(startDate).toLocaleTimeString()}
    </Paragraph>
  </Container>
);

export default StartDate;

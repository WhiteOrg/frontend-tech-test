import React from "react";
import styled from "styled-components";
import Paragraph from "../../atoms/paragraph";

type Props = {
  readonly info: string;
  readonly icon: string;
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

const StartDate: React.FunctionComponent<Props> = ({ info, icon }) => (
  <Container>
    <Icon src={icon} />
    <Paragraph size="small" textColor="white">
      {info}
    </Paragraph>
  </Container>
);

export default StartDate;

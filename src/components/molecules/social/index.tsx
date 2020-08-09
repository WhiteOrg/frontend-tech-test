import React from "react";
import styled from "styled-components";
import Paragraph from "../../atoms/paragraph";
import Icon from "../../atoms/icon";
import Twitter from "../../../images/twitter.svg";
import Facebook from "../../../images/facebook.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  align-items: center;
`;
const IconRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;

const Social: React.FunctionComponent = (props) => (
  <Container>
    <Paragraph size="medium" color="#f9cb11">
      {props.children}
    </Paragraph>
    <IconRow>
      <Icon src={Twitter} />
      <Icon src={Facebook} />
    </IconRow>
  </Container>
);

export default Social;

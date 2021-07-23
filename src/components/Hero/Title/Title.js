import React from "react";
import { Container, TitleH1, Close } from "./Title.styles";
import closeImg from "../../../images/close.svg";

const Title = ({ title }) => {
  return (
    <Container>
      <TitleH1>{title}</TitleH1>
      <Close>
        <img src={closeImg} alt="close" />
      </Close>
    </Container>
  );
};

export default Title;

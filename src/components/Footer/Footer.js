import React from "react";
import { Container, Title, IconsWrapper } from "./Footer.styles";
import facebookIcon from "../../images/facebook.svg";
import twitterIcon from "../../images/twitter.svg";
const Footer = () => {
  return (
    <Container>
      <Title>Share this tournament</Title>
      <IconsWrapper>
        <a href="#">
          <img src={facebookIcon} alt="facebook-icon" />
        </a>
        <a href="#">
          <img src={twitterIcon} alt="twitter-icon" />
        </a>
      </IconsWrapper>
    </Container>
  );
};

export default Footer;

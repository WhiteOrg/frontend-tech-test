import React from "react";
import FacebookIcon from "../assets/images/facebook.svg";
import TwitterIcon from "../assets/images/twitter.svg";
import { FooterWrapper } from "../styles/footer";

const Footer = () => (
  <FooterWrapper>
    <p>Share this Tournament</p>
    <div>
      <img src={TwitterIcon} alt="twitter" />
      <img src={FacebookIcon} alt="facebook" />
    </div>
  </FooterWrapper>
);

export default Footer;

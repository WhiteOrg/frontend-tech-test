import React from "react";
import styled from "styled-components";
import Social from "../../molecules/social";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to top, #158dd4, #56169b);
  padding-top: 20px;
  height: 150px;
`;

const Footer: React.FunctionComponent = (props) => (
  <Container>
    <Social>{props.children}</Social>
  </Container>
);

export default Footer;

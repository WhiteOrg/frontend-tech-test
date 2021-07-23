import React from "react";
import { Container, Header, Wrapper, TermItem } from "./Terms.styles";
import SectionTitle from "../SectionTitle/SectionTitle";

const Terms = ({ terms }) => {
  return (
    <Container>
      <Header>
        <SectionTitle title="Terms &amp; Conditions" />
      </Header>
      <Wrapper>
        {terms &&
          terms.map((item, index) => <TermItem key={index}>{item}</TermItem>)}
      </Wrapper>
    </Container>
  );
};

export default Terms;

import React from "react";
import styled from "styled-components";
import { TitleH2 } from "../../atoms/title";
import Bullet from "../../atoms/bullet";

export interface PropsTermsCondition {
  readonly titleTermsCondition: string;
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const TermsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  & > li {
    padding-bottom: 5px;
  }
`;

const TermsCondition: React.FunctionComponent<PropsTermsCondition> = (
  props
) => (
  <Container>
    <TitleH2 textColor="#091870">{props.titleTermsCondition}</TitleH2>
    <TermsList>
      <Bullet>
        Advertising is key factor in your web site promotion. Let people talk
        about you, your products, and your services.
      </Bullet>
      <Bullet>
        You see, people are always on the look out for good content right? Your
        site should have really good contents. Don’t write
      </Bullet>
      <Bullet>
        “Welcome to my website” or “Ours is a World’s first company…blah blah”
        unless and until you really have dominating product.{" "}
      </Bullet>
      <Bullet>
        You sell your products or services as like others, but you think you
        must be noticed.{" "}
      </Bullet>
      <Bullet>
        Your offer should be different to attract visitor. Your presentation
        should be mind catching.{" "}
      </Bullet>
      <Bullet>
        Get aware of advertisers online. There are few major players around.{" "}
      </Bullet>
    </TermsList>
  </Container>
);

export default TermsCondition;

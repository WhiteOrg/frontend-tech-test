import React from "react";
import styled from "styled-components";
import List from "../../molecules/list";
import { TitleH2 } from "../../atoms/title";
import Paragraph from "../../atoms/paragraph";
import Hr from "../../atoms/hr";
import Icon from "../../atoms/icon";
import { Prize } from "../../types";

type Props = {
  readonly title: string;
  readonly prizeList: Prize[];
  readonly refresh: string;
  readonly detail: string;
  readonly rotate: boolean;
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PrizeList: React.FunctionComponent<Props> = (props) => (
  <Container>
    <TitleRow>
      <TitleH2 textColor="#091870">{props.title}</TitleH2>
      <Icon src={props.refresh} rotate={props.rotate} />
    </TitleRow>
    <Hr />
    <List prizeList={props.prizeList} />
    <Hr />
    <Paragraph size="medium" textColor="black">
      {props.detail}
    </Paragraph>
  </Container>
);

export default PrizeList;

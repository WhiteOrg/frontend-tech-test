import React from "react";
import styled from "styled-components";
import List from "../../molecules/list";
import { TitleH2 } from "../../atoms/title";
import Paragraph from "../../atoms/paragraph";
import Hr from "../../atoms/hr";
import Icon from "../../atoms/icon";
import { Prize } from "../../types";
import refresh from "../../../images/refresh.svg";

export interface PropsPrizeList {
  readonly titlePrizeList: string;
  readonly prizeList: Prize[];
  readonly refresh?: string;
  readonly description: string;
  readonly rotate: number;
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  & > img {
    width: 30px;
  }
`;

const PrizeList: React.FunctionComponent<PropsPrizeList> = (props) => (
  <Container>
    <TitleRow>
      <TitleH2 color="#091870">{props.titlePrizeList}</TitleH2>
      <Icon src={props.refresh || refresh} rotate={props.rotate} />
    </TitleRow>
    <Hr />
    <List prizeList={props.prizeList} />
    <Hr />
    <Paragraph size="medium" color="black">
      {props.description}
    </Paragraph>
  </Container>
);

export default PrizeList;

import React from "react";
import styled from "styled-components";
import Info, { PropsInfo } from "../../organisms/info";
import PrizeList, { PropsPrizeList } from "../../organisms/prize_list";
import GameList, { PropsGamesList } from "../../organisms/games_list";
import TermsCondition, {
  PropsTermsCondition,
} from "../../organisms/terms_condition";
import Footer from "../../organisms/footer";
import refresh from "../../../images/refresh.svg";

interface Props
  extends PropsInfo,
    PropsPrizeList,
    PropsGamesList,
    PropsTermsCondition {}

const Container = styled.div``;

const TextContainer = styled.div`
  padding: 0px 75px 0px 75px;
`;

const Tournament: React.FunctionComponent<Props> = (props) => {
  const infoProps = {
    title: props.title,
    prizePool: props.prizePool,
    players: props.players,
    startDate: props.startDate,
    endDate: props.endDate,
    backgroundImage: props.backgroundImage,
  };
  const prizeListProps = {
    titlePrizeList: props.titlePrizeList,
    prizeList: props.prizeList,
    refresh,
    detail: props.detail,
    rotate: props.rotate,
  };
  return (
    <Container>
      <Info {...infoProps} />
      <TextContainer>
        <PrizeList {...prizeListProps} />
        <GameList titleGamesList={props.titleGamesList} games={props.games} />
        <TermsCondition titleTermsCondition={props.titleTermsCondition} />
      </TextContainer>
      <Footer>Share this Tournament</Footer>
    </Container>
  );
};

export default Tournament;

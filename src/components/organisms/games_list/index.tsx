import React from "react";
import styled from "styled-components";
import { TitleH2 } from "../../atoms/title";
import { Game } from "../../types";

type Props = {
  readonly title: string;
  readonly games: Game[];
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const GameList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 100%;
`;

const GameImage = styled.img`
  width: 48%;
  padding-bottom: 10px;
  @media (min-width: 1200px) {
    width: 32%;
    padding-bottom: 30px;
  }
`;

const GamesList: React.FunctionComponent<Props> = (props) => (
  <Container>
    <TitleH2 textColor="#091870">{props.title}</TitleH2>
    <GameList>
      {props.games.map(({ title, src }) => (
        <GameImage src={src} alt={title} />
      ))}
    </GameList>
  </Container>
);

export default GamesList;

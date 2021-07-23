import React from "react";
import { Container, GamesContainer, Image } from "./Games.styles";

import SectionTitle from "../SectionTitle/SectionTitle";

const Games = ({ games }) => {
  return (
    <Container>
      <SectionTitle title="Include Games" />
      <GamesContainer>
        {games &&
          games.map((game, index) => (
            <Image key={index} src={game.src} alt={index} />
          ))}
      </GamesContainer>
    </Container>
  );
};

export default Games;

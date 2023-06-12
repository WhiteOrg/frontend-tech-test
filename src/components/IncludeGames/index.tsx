import React from "react";
import { TGames } from "../../utils/dataTypes";
import "./includeGames.scss";

const IncludeGames = (props: { games: TGames }) => {
  const { games } = props;
  return (
    <div className="includeGames">
      <h2 data-testid="include-games-heading">Include Games</h2>
      <div className="includeGames__list" data-testid="include-games-list">
        {games.map((game, index) => (
          <img
            data-testid="include-games-image"
            key={index}
            src={game.src}
            alt={game.title}
          />
        ))}
      </div>
    </div>
  );
};

export default IncludeGames;

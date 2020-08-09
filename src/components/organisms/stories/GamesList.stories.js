import React from "react";
import GamesList from "../games_list";

export default {
  title: "Organisms",
};

const data = {
  titleGamesList: "Include Games",
  games: [
    {
      title: "First Game",
      src: "https://i.imgur.com/gmXp0zM.jpg",
    },
    {
      title: "Second Game",
      src: "https://i.imgur.com/ecK4twD.jpg",
    },
    {
      title: "Third Game",
      src: "https://i.imgur.com/kn70JZB.jpg",
    },
    {
      title: "Fourth Game",
      src: "https://i.imgur.com/F6XZ6v5.jpg",
    },
    {
      title: "Fifth Game",
      src: "https://i.imgur.com/4RKCXxe.jpg",
    },
    {
      title: "Sixth Game",
      src: "https://i.imgur.com/lVq9s16.jpg",
    },
  ],
};

export const game_list = () => <GamesList {...data} />;

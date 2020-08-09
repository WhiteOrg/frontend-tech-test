import React from "react";
import renderer from "react-test-renderer";
import GamesList from "../games_list";

describe("ORGANISMS: Render testing", () => {
  test("Should render GameList", () => {
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
    const component = renderer.create(<GamesList {...data} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

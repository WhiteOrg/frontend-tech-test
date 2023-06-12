import React from "react";
import { render, screen } from "@testing-library/react";
import IncludeGames from ".";
import { data } from "../../utils/testData";

describe("IncludeGames", () => {
  it("renders a list of games", () => {
    render(<IncludeGames games={data.games} />);

    const heading = screen.getByTestId("include-games-heading");
    const images = screen.getAllByTestId("include-games-image");

    expect(heading).toHaveTextContent("Include Games");
    expect(images).toHaveLength(6);
  });
});

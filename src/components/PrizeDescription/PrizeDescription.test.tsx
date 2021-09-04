import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import { PrizeDescription } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

const description = "The search for gold starts in the Sahara Desert!";

describe("PrizeDescription", () => {
  it("renders successfully", () => {
    render(
      <ThemeProvider theme={theme}>
        <PrizeDescription description={description} />
      </ThemeProvider>
    );

    screen.getByText("The search for gold starts in the Sahara Desert!");
  });
});

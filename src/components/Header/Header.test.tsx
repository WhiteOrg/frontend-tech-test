import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { Header } from ".";

describe("Header", () => {
  it("renders successfully", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header title="Title" />
      </ThemeProvider>
    );

    screen.getByText("Title");
  });
});

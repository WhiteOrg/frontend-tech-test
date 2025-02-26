import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders Frontend Challenge title", () => {
  render(<App />);
  const textElement = screen.getByText(/frontend challenge/i);
  expect(textElement).toBeInTheDocument();
});

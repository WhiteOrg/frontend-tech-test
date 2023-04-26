import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header";

describe("Header component", () => {
  const mockData = {
    backgroundImage: "https://example.com/image.jpg",
    players: 50,
    prizePool: "$10,000",
    title: "Tournament Title",
  };

  it("renders with provided data", () => {
    const { getByText, getByAltText } = render(<Header data={mockData} />);

    expect(getByText(mockData.title)).toBeInTheDocument();
    expect(getByText(mockData.prizePool)).toBeInTheDocument();
    expect(getByText(`${mockData.players}`)).toBeInTheDocument();
    expect(getByAltText("close-button-1")).toBeInTheDocument();
    expect(getByAltText("user-icon")).toBeInTheDocument();
    expect(getByText("JOIN")).toBeInTheDocument();
  });

  it("renders with default data if none provided", () => {
    const { getByText } = render(<Header />);

    expect(getByText("PRIZE POOL")).toBeInTheDocument();
    expect(getByText("PLAYER")).toBeInTheDocument();
  });
});
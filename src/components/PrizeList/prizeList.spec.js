import React from "react";
import { render, fireEvent, screen, within } from "@testing-library/react";
import PrizeList from ".";
import { data } from "../../utils/testData";

describe("PrizeList", () => {
  it("renders a table of prizes", () => {
    render(<PrizeList list={data.prizeList} />);

    const headingDiv = screen.getByTestId("prize-heading");
    const refreshButton = screen.getByTestId("refresh-button");
    const table = screen.getByTestId("table-elem");
    const tableRow = screen.getAllByTestId("table-row");
    
    expect(headingDiv).toHaveTextContent("Prize List");
    expect(refreshButton).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    expect(tableRow).toHaveLength(10);
  });

  it("triggers data fetch when refresh button is pressed", () => {
    render(<PrizeList list={data.prizeList} />);

    const refreshButton = screen.getByTestId("refresh-button");
    const tableRow = screen.getAllByTestId("table-row");
    const { getByText } = within(tableRow[0]);

    expect(getByText("Old data")).toBeInTheDocument();
    fireEvent.click(refreshButton);
    jest.setTimeout(2000);
    setTimeout(() => {
      expect(getByText("£2,500.00")).toBeInTheDocument();
    }, 1500);
  });
});

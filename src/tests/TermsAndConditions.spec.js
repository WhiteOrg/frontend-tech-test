import React from "react";
import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../components/TermsAndConditions";

describe("TermsAndConditions", () => {
  it("renders the section header and a list of terms and conditions", () => {
    render(<TermsAndConditions />);

    expect(screen.getByRole("heading")).toHaveTextContent("Terms & Conditions");

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(5);
  });
});

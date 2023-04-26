import React from "react";
import { render } from "@testing-library/react";
import { PrizeList } from "../components";
import { apiResponse } from "../mock/apiResponse";

describe("header", () => {
  test("renders the component's refresh button", () => {
    const { getByAltText } = render(
      <PrizeList
        prizeList={apiResponse.prizeList}
        description="description"
        handleRefreshClick={(r) => r}
      />
    );
    const refreshButton = getByAltText("refresh button");
    expect(refreshButton).toBeInTheDocument();
  });
});

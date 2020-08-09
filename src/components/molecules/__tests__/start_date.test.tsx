import React from "react";
import renderer from "react-test-renderer";
import StartDate from "../start_date";
import calendar from "../../../images/calendar.svg";

describe("MOLECULES: Render testing", () => {
  test("Should render StartDate", () => {
    const component = renderer.create(
      <div>
        <StartDate icon={calendar} startDate="2020-08-06T10:06:29.578Z" />
      </div>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

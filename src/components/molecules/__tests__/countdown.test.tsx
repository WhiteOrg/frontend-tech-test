import React from "react";
import renderer from "react-test-renderer";
import Countdown from "../countdown";

describe("MOLECULES: Render testing", () => {
  test("Should render Countdown", () => {
    let startDate = "2020-08-08T10:06:29.578Z";
    const component = renderer.create(
      <div>
        <Countdown startDate={startDate} />
      </div>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

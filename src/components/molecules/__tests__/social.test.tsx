import React from "react";
import renderer from "react-test-renderer";
import Social from "../social";

describe("MOLECULES: Render testing", () => {
  test("Should render Social", () => {
    const component = renderer.create(
      <div>
        <Social>Share this Tournament</Social>
      </div>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

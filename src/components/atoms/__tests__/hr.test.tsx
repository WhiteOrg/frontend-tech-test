import React from "react";
import renderer from "react-test-renderer";
import Hr from "../hr";

describe("ATOMS: Render testing", () => {
  test("Should render Hr", () => {
    const component = renderer.create(
      <div>
        <Hr />
      </div>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

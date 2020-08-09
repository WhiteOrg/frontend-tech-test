import React from "react";
import renderer from "react-test-renderer";
import Timer from "../timer";

describe("ATOMS: Render testing", () => {
  test("Should render Timer", () => {
    const component = renderer.create(
      <div>
        <Timer>7</Timer>
      </div>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import Button from "../button";

describe("ATOMS: Render testing", () => {
  test("Should render Button", () => {
    const component = renderer.create(
      <div>
        <Button>Join</Button>
      </div>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import Footer from "../footer";

describe("ORGANISMS: Render testing", () => {
  test("Should render Footer", () => {
    const component = renderer.create(<Footer>Share this Tournament</Footer>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

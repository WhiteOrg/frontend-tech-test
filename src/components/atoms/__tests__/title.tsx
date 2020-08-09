import React from "react";
import renderer from "react-test-renderer";
import { TitleH1, TitleH2 } from "../title";

describe("ATOMS: Render testing", () => {
  test("Should render Hr", () => {
    const component = renderer.create(
      <div>
        <TitleH1>H1</TitleH1>
        <TitleH2 color="#091870">H2</TitleH2>
      </div>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import Paragraph from "../paragraph";

describe("ATOMS: Render testing", () => {
  test("Should render paragraph", () => {
    const component = renderer.create(
      <div>
        <Paragraph size="small" color="#17dfe7">
          PRIZE POOL
        </Paragraph>
        <Paragraph size="medium" bold>
          P.C
        </Paragraph>
        <Paragraph size="large" color="white">
          £25,000.00
        </Paragraph>
        <Paragraph>
          {" "}
          The search for gold starts in the Sahara Desert! There’s potential for
          big cash prizes of up to 1,000 your stake with the Free Spins feature
          so you’ll want to stock up on those Story Book Free Spin Symbols to
          get your chance.{" "}
        </Paragraph>
      </div>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

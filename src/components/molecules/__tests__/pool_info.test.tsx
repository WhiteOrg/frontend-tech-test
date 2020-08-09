import React from "react";
import renderer from "react-test-renderer";
import PoolInfo from "../pool_info";
import user from "../../../images/user.svg";

describe("MOLECULES: Render testing", () => {
  test("Should render PoolInfo", () => {
    const component = renderer.create(
      <div>
        <PoolInfo title="prize pool" info="£25,000.00" />
        <br />
        <PoolInfo title="player" info="359" icon={user} />
      </div>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

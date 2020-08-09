import React from "react";
import renderer from "react-test-renderer";
import Icon from "../icon";
import fbLogo from "../../../images/facebook.svg";
import refreshIcon from "../../../images/refresh.svg";

describe("ATOMS: Render testing", () => {
  test("Should render Icon", () => {
    const component = renderer.create(
      <div>
        <div>
          <Icon src={fbLogo} />
        </div>
        <br />
        <div>
          <Icon src={refreshIcon} rotate={1} />
        </div>
      </div>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

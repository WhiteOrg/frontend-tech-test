import React from "react";
import renderer from "react-test-renderer";
import Info from "../info";

describe("ORGANISMS: Render testing", () => {
  test("Should render Info", () => {
    const data = {
      title: "Play'n GO Tournament",
      endDate: "2020-08-15T10:06:29.578Z",
      startDate: "2020-08-13T10:06:29.578Z",
      prizePool: "£25,000.00",
      backgroundImage: "https://i.imgur.com/W4WBNV2.jpg",
      players: 250,
    };
    const component = renderer.create(<Info {...data} test />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

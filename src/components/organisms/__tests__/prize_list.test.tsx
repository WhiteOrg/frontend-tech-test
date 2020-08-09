import React from "react";
import renderer from "react-test-renderer";
import PrizeList from "../prize_list";
import refresh from "../../../images/refresh.svg";

describe("ORGANISMS: Render testing", () => {
  test("Should render PrizeList", () => {
    const data = {
      titlePrizeList: "Prize List",
      prizeList: [
        {
          title: "P.C",
          total: "£2,500.00",
        },
        {
          title: "J.S",
          total: "£1,250.00",
        },
        {
          title: "H.J",
          total: "£700.00",
        },
        {
          title: "J.V",
          total: "£300.00",
        },
        {
          title: "L.K",
          total: "£100.00",
        },
        {
          title: "H.D",
          total: "£50.00",
        },
        {
          title: "V.G",
          total: "£35.00",
        },
        {
          title: "D.C",
          total: "£20.00",
        },
        {
          title: "P.D",
          total: "£10.00",
        },
        {
          title: "L.M",
          total: "£5.00",
        },
      ],
      refresh,
      description:
        "The search for gold starts in the Sahara Desert! There’s potential for big cash prizes of up to 1,000 your stake with the Free Spins feature so you’ll want to stock up on those Story Book Free Spin Symbols to get your chance. ",
    };
    const component = renderer.create(
      <PrizeList {...data} rotate={0} onClick={() => {}} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

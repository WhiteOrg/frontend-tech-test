import React from "react";
import { shallow } from "enzyme";
import { Wrapper } from "../components";
import { PrizeList, Games, TermsAndConditions } from "../components";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("Wrapper component", () => {
  const data = {
    description: "Some description",
    prizeList: [
      { title: "First prize", total: "$100" },
      { title: "Second prize", total: "$50" },
    ],
    games: [
      { title: "Game 1", src: "/game1.jpg" },
      { title: "Game 2", src: "/game2.jpg" },
    ],
  };

  it("should render PrizeList, Games, and TermsAndConditions components", () => {
    const wrapper = shallow(<Wrapper data={data} />);
    expect(wrapper.find(PrizeList)).toHaveLength(1);
    expect(wrapper.find(Games)).toHaveLength(1);
    expect(wrapper.find(TermsAndConditions)).toHaveLength(1);
  });

  it("should pass correct props to PrizeList component", () => {
    const handleRefreshClick = jest.fn();
    const wrapper = shallow(
      <Wrapper data={data} handleRefreshClick={handleRefreshClick} />
    );
    expect(wrapper.find(PrizeList).props()).toEqual({
      prizeList: data.prizeList,
      description: data.description,
      handleRefreshClick: handleRefreshClick,
    });
  });

  it("should pass correct props to Games component", () => {
    const wrapper = shallow(<Wrapper data={data} />);
    expect(wrapper.find(Games).props()).toEqual({ games: data.games });
  });

  it("should pass default props if not provided", () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.find(PrizeList).props()).toEqual({
      prizeList: [],
      description: "",
      handleRefreshClick: expect.any(Function),
    });
    expect(wrapper.find(Games).props()).toEqual({ games: [] });
    expect(wrapper.find(TermsAndConditions).props()).toEqual({});
  });
});

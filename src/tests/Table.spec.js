import React from "react";
import { shallow } from "enzyme";
import Table from "../components/Table";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Table", () => {
  const mockPrizeList = [
    { title: "First Prize", total: "$500" },
    { title: "Second Prize", total: "$300" },
    { title: "Third Prize", total: "$200" },
  ];

  const mockHandleRefreshClick = jest.fn();

  it("renders without crashing", () => {
    shallow(<Table prizeList={[]} handleRefreshClick={mockHandleRefreshClick} />);
  });

  it("renders the prize list table with the correct data", () => {
    const wrapper = shallow(<Table prizeList={mockPrizeList} handleRefreshClick={mockHandleRefreshClick} />);
    const rows = wrapper.find("tbody tr");

    expect(rows).toHaveLength(mockPrizeList.length);
  });

  it("calls the handleRefreshClick function when the refresh button is clicked", () => {
    const wrapper = shallow(<Table prizeList={mockPrizeList} handleRefreshClick={mockHandleRefreshClick} />);
    const refreshButton = wrapper.find("img[alt='refresh button']");

    refreshButton.simulate("click");

    expect(mockHandleRefreshClick).toHaveBeenCalled();
  });
});

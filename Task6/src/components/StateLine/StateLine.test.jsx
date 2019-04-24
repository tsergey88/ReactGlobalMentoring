import React from "react";
import { StateLine } from "./StateLine";
import { shallow } from "enzyme";

const props = {
  left: "Left",
  right: "Right"
};

describe("StateLine  component", () => {
  const component = shallow(<StateLine {...props} />);

  it("should be render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should contain correct div", () => {
    expect(component.find("div")).toHaveLength(3);
  });
});

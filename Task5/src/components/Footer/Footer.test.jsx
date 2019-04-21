import React from "react";
import { Footer } from "./Footer";
import { shallow } from "enzyme";

describe("Footer component", () => {
  const component = shallow(<Footer />);

  it("should be render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should contain footer", () => {
    expect(component.find("footer")).toHaveLength(1);
  });

  it("should contain correct div", () => {
    expect(component.find("div")).toHaveLength(1);
  });
});

import React from "react";
import { Header } from "./Header";
import { shallow } from "enzyme";

describe("Header component", () => {
  const component = shallow(<Header />);

  it("should be render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should contain header", () => {
    expect(component.find("header")).toHaveLength(1);
  });

  it("should contain correct div", () => {
    expect(component.find("div")).toHaveLength(1);
  });
});

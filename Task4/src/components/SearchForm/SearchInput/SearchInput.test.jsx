import React from "react";
import { SearchInput } from "./SearchInput";
import { shallow } from "enzyme";

describe("SearchInput component", () => {
  const component = shallow(<SearchInput />);
  it("should be render", () => {
    expect(component).toMatchSnapshot();
  });

  it("should be contain input", () => {
    expect(component.find("input")).toHaveLength(1);
  });

  it("should be contain div", () => {
    expect(component.find("div")).toHaveLength(3);
  });
});
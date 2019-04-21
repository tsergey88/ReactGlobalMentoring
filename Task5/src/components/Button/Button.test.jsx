import React from "react";
import { Button } from "./Button";
import { shallow } from "enzyme";

describe("Button component", () => {
  const title = "Title of button";
  const component = shallow(<Button title={title} />);

  it("should be render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should contain correct tag", () => {
    expect(component.find("button")).toHaveLength(1);
  });

  it("should contain correct title", () => {
    expect(component.text()).toEqual(title);
  });
});

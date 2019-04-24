import React from "react";
import { SearchRadioButton } from "./SearchRadioButton";
import { shallow } from "enzyme";

describe("SearchRadioButton component", () => {
  const props = {
    defaultChecked: true,
    name: "searchBy",
    title: "TITLE",
    onChange: jest.fn()
  };
  const component = shallow(<SearchRadioButton {...props} />);
  it("should be render", () => {
    expect(component).toMatchSnapshot();
  });

  it("should be contain input", () => {
    expect(component.find("input")).toHaveLength(1);
  });

  it("should be contain correct label", () => {
    expect(component.text()).toEqual(props.title);
  });

  it("should be checked", () => {
    component.find("input").simulate("change", { target: { checked: true } });
    expect(props.onChange).toHaveBeenCalled();
  });
});

import React from "react";
import { SearchForm } from "./SearchForm";
import { shallow } from "enzyme";

describe("SearchForm component", () => {
  const component = shallow(<SearchForm />);
  it("should be render", () => {
    expect(component).toMatchSnapshot();
  });

  it("should be contain SearchInput", () => {
    expect(component.find("SearchInput")).toHaveLength(1);
  });

  it("should be contain SearchRadioButton", () => {
    expect(component.find("SearchRadioButton")).toHaveLength(2);
  });

  it("should be contain Button", () => {
    expect(component.find("Button")).toHaveLength(1);
  });
});

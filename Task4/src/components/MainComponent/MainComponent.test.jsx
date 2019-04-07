import React from "react";
import { MainComponent } from "./MainComponent";
import { shallow } from "enzyme";

describe("MainComponent component", () => {
  const component = shallow(<MainComponent />);
  it("should be render", () => {
    expect(component).toMatchSnapshot();
  });
});

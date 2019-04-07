import React from "react";
import { FilmsList } from "./FilmsList";
import { shallow, mount } from "enzyme";
import DATA from "./__mocks__/data.json";

describe("FilmsList component", () => {
  describe("FilmsList initial", () => {
    const component = shallow(<FilmsList />);
    it("render only one div", () => {
      expect(component.find("div")).toHaveLength(1);
    });
    it("not render FilmPreview", () => {
      expect(component.find("FilmPreview")).toHaveLength(0);
    });
  });

  describe("FilmsList call componentDidMount", () => {
    const component = mount(<FilmsList />);
    component.setState({ data: DATA.data });
    expect(component.find(".item-preview")).toHaveLength(18);
  });
});

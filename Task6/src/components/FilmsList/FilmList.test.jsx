import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import { FilmsList } from "./FilmsList";
import DATA from "./__mocks__/data.json";

const initialState = {
  request: DATA,
  isLoading: false,
  sortBy: "vote_average",
  searchBy: "title",
  searchValue: "",
  limit: 18
};
const props = {
  fetchFilms: jest.fn(),
  changeSortBy: jest.fn()
};
const mockStore = configureStore();
let component;
let store;

describe("FilmsList component", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    component = mount(
      <Provider store={store}>
        <FilmsList {...initialState} {...props} />
      </Provider>
    );
  });

  it("check Prop matches with initialState", () => {
    expect(component.find(FilmsList).prop("request")).toEqual(
      initialState.request
    );
  });

  it("FilmsList call componentDidMount", () => {
    expect(component.find(".item-preview")).toHaveLength(18);
  });

  it("FilmsList loading", () => {
    const component = mount(<FilmsList isLoading={true} {...props} />);
    expect(component.find(".content")).toHaveLength(1);
    expect(component.contains(<div className="content">Loading...</div>)).toBe(
      true
    );
  });

  it("FilmsList no films", () => {
    const component = mount(
      <FilmsList isLoading={false} request={{ data: [] }} {...props} />
    );
    expect(component.find(".content")).toHaveLength(1);
    expect(
      component.contains(
        <div className="content">
          <h2>No Films Found</h2>
        </div>
      )
    ).toBe(true);
  });
});

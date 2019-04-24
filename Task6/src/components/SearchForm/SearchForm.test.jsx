import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import SearchForm from "./SearchForm";

const initialState = {
  sortBy: "vote_average",
  searchBy: "title",
  searchValue: "",
  limit: 18
};

const props = {
  fetchFilms: jest.fn(),
  changeSearchBy: jest.fn()
};

const mockStore = configureStore();
let component;
let store;

describe("SearchForm component", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    component = mount(
      <Provider store={store}>
        <SearchForm {...initialState} {...props} />
      </Provider>
    );
  });
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

import fetchMock from "fetch-mock";
import * as actions from "./FilmsAction";
import * as types from "./actionTypes";

describe("FilmsAction", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("request films", () => {
    const expectedAction = {
      type: types.FILMS_REQUEST
    };
    expect(actions.requestFilms()).toEqual(expectedAction);
  });
  it("change sort by field", () => {
    const payload = "release_date";
    const expectedAction = {
      type: types.FILMS_CHANGE_SORTBY,
      payload
    };
    expect(actions.changeSortBy(payload)).toEqual(expectedAction);
  });
  it("change search by field", () => {
    const payload = "genres";
    const expectedAction = {
      type: types.FILMS_CHANGE_SEARCHBY,
      payload
    };
    expect(actions.changeSearchBy(payload)).toEqual(expectedAction);
  });
  it("change search input value", () => {
    const payload = "men";
    const expectedAction = {
      type: types.FILMS_CHANGE_SEARCH_INPUT_VALUE,
      payload
    };
    expect(actions.changeSearchInputValue(payload)).toEqual(expectedAction);
  });
});

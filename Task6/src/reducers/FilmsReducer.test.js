import reducer from "./FilmsReducer";
import DATA from "../components/FilmsList/__mocks__/data.json";
import {
  FILMS_RECEIVE,
  FILMS_REQUEST,
  FILMS_CHANGE_SORTBY,
  FILMS_CHANGE_SEARCHBY,
  FILMS_CHANGE_SEARCH_INPUT_VALUE
} from "../actions/actionTypes";

const initialState = {
  request: {},
  isLoading: true,
  sortBy: "vote_average",
  searchBy: "title",
  searchValue: "",
  limit: 18
};

describe("films reducer", () => {
  it("should set initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should set FILMS_REQUEST state", () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: FILMS_REQUEST
        }
      )
    ).toEqual({
      ...initialState,
      isLoading: true
    });
  });
  it("should set FILMS_RECEIVE state", () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: FILMS_RECEIVE,
          payload: DATA
        }
      )
    ).toEqual({
      ...initialState,
      isLoading: false,
      request: DATA
    });
  });
  it("should set FILMS_CHANGE_SORTBY state", () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: FILMS_CHANGE_SORTBY,
          payload: "release_date"
        }
      )
    ).toEqual({
      ...initialState,
      sortBy: "release_date"
    });
  });

  it("should set FILMS_CHANGE_SEARCHBY state", () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: FILMS_CHANGE_SEARCHBY,
          payload: "genres"
        }
      )
    ).toEqual({
      ...initialState,
      searchBy: "genres"
    });
  });

  it("should set FILMS_CHANGE_SEARCH_INPUT_VALUE state", () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: FILMS_CHANGE_SEARCH_INPUT_VALUE,
          payload: "men"
        }
      )
    ).toEqual({
      ...initialState,
      searchValue: "men"
    });
  });
});

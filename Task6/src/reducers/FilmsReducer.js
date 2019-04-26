import {
  FILMS_RECEIVE,
  FILMS_REQUEST,
  FILMS_CHANGE_SORTBY,
  FILMS_CHANGE_SEARCHBY,
  FILMS_CHANGE_SEARCH_INPUT_VALUE,
  FILMS_CHANGE_GENRES
} from "../actions/actionTypes";

const initialState = {
  request: {},
  isLoading: true,
  sortBy: "vote_average",
  searchBy: "title",
  searchValue: "",
  limit: 18,
  genres: ""
};

const FilmsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILMS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FILMS_RECEIVE:
      return {
        ...state,
        isLoading: false,
        request: payload
      };
    case FILMS_CHANGE_SORTBY:
      return {
        ...state,
        sortBy: payload
      };
    case FILMS_CHANGE_SEARCHBY:
      return {
        ...state,
        searchBy: payload
      };
    case FILMS_CHANGE_SEARCH_INPUT_VALUE:
      return {
        ...state,
        searchValue: payload
      };
    case FILMS_CHANGE_GENRES:
      return {
        ...state,
        genres: payload
      };
    default:
      return state;
  }
};

export default FilmsReducer;

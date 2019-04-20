import {
  FILMS_RECEIVE,
  FILMS_REQUEST,
  FILMS_CHANGE_SORTBY
} from "../actions/actionTypes";

const initialState = {
  request: {},
  isLoading: true,
  sortBy: "vote_average",
  limit: 18
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
    default:
      return state;
  }
};

export default FilmsReducer;

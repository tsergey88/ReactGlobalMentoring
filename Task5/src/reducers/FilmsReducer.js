import { FILMS_RECEIVE, FILMS_REQUEST } from "../actions/actionTypes";

const initialState = {
  data: [],
  isLoading: true
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
        data: payload.data
      };
    default:
      return state;
  }
};

export default FilmsReducer;

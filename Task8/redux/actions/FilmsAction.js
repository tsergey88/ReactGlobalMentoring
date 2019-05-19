import axios from "axios";
import {
  FILMS_REQUEST,
  FILMS_RECEIVE,
  FILMS_CHANGE_SORTBY,
  FILMS_CHANGE_SEARCHBY,
  FILMS_CHANGE_SEARCH_INPUT_VALUE,
  FILMS_CHANGE_GENRES,
  FILMS_REQUEST_BY_ID,
  FILMS_RECEIVE_BY_ID
} from "./actionTypes";

export const requestFilms = () => ({
  type: FILMS_REQUEST
});
export const receivedFilms = payload => ({
  type: FILMS_RECEIVE,
  payload
});
export const changeSortBy = payload => ({
  type: FILMS_CHANGE_SORTBY,
  payload
});
export const changeSearchBy = payload => ({
  type: FILMS_CHANGE_SEARCHBY,
  payload
});
export const changeSearchInputValue = payload => ({
  type: FILMS_CHANGE_SEARCH_INPUT_VALUE,
  payload
});
export const changeGenres = payload => ({
  type: FILMS_CHANGE_GENRES,
  payload
});

export const requestFilmById = () => ({
  type: FILMS_REQUEST_BY_ID
});
export const receivedFilmById = payload => ({
  type: FILMS_RECEIVE_BY_ID,
  payload
});

export const fetchFilms = ({
  searchValue = "",
  searchBy = "",
  sortBy = "",
  limit = 24,
  filter = ""
}) => dispatch => {
  const searchParam = searchValue && `search=${searchValue}`;
  const searchByParam = searchBy && `searchBy=${searchBy}`;
  const sortByParam = sortBy && `sortBy=${sortBy}`;
  const limitParam = limit && `limit=${limit}`;
  const filterParam = filter && `filter=${filter}`;

  dispatch(requestFilmById());
  return axios
    .get(
      `https://reactjs-cdp.herokuapp.com/movies?${searchParam}&${searchByParam}&${sortByParam}&${limitParam}&${filterParam}`
    )
    .then(response => {
      dispatch(receivedFilms(response.data));
    })
    .catch(error => {
      console.log("An error occurred.", error);
    });
};

export const fetchFilmById = id => dispatch => {
  dispatch(requestFilms());
  return axios
    .get(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
    .then(response => {
      dispatch(receivedFilmById(response.data));
    })
    .catch(error => {
      console.log("An error occurred.", error);
    });
};

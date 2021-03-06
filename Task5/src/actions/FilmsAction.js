import {
  FILMS_REQUEST,
  FILMS_RECEIVE,
  FILMS_CHANGE_SORTBY,
  FILMS_CHANGE_SEARCHBY,
  FILMS_CHANGE_SEARCH_INPUT_VALUE
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

export const fetchFilms = (
  search = "",
  searchBy = "",
  sortBy = "",
  limit = 18
) => dispatch => {
  const searchParam = search && `search=${search}`;
  const searchByParam = searchBy && `searchBy=${searchBy}`;
  const sortByParam = sortBy && `sortBy=${sortBy}`;
  const limitParam = limit && `limit=${limit}`;

  dispatch(requestFilms());
  return fetch(
    `https://reactjs-cdp.herokuapp.com/movies?${searchParam}&${searchByParam}&${sortByParam}&${limitParam}`
  )
    .then(response => response.json())
    .then(data => {
      dispatch(receivedFilms(data));
    })
    .catch(error => {
      console.log("An error occurred.", error);
    });
};

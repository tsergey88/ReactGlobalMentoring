import {
  FILMS_REQUEST,
  FILMS_RECEIVE,
  FILMS_CHANGE_SORTBY,
  FILMS_CHANGE_SEARCHBY,
  FILMS_CHANGE_SEARCH_INPUT_VALUE,
  FILMS_CHANGE_GENRES
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

export const fetchFilms = ({
  searchValue = "",
  searchBy = "",
  sortBy = "",
  limit = 18,
  filter = ""
}) => dispatch => {
  const searchParam = searchValue && `search=${searchValue}`;
  const searchByParam = searchBy && `searchBy=${searchBy}`;
  const sortByParam = sortBy && `sortBy=${sortBy}`;
  const limitParam = limit && `limit=${limit}`;
  const filterParam = filter && `filter=${filter}`;

  dispatch(requestFilms());
  return fetch(
    `https://reactjs-cdp.herokuapp.com/movies?${searchParam}&${searchByParam}&${sortByParam}&${limitParam}&${filterParam}`
  )
    .then(response => response.json())
    .then(data => {
      dispatch(receivedFilms(data));
    })
    .catch(error => {
      console.log("An error occurred.", error);
    });
};

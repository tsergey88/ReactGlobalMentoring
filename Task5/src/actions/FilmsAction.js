import { FILMS_REQUEST, FILMS_RECEIVE } from "./actionTypes";

export const requestFilms = () => ({
  type: FILMS_REQUEST
});
export const receivedFilms = payload => ({
  type: FILMS_RECEIVE,
  payload
});

export const fetchFilms = count => dispatch => {
  dispatch(requestFilms());
  return fetch(
    `https://reactjs-cdp.herokuapp.com/movies?searchBy=title&limit=${count}`
  )
    .then(response => response.json())
    .then(data => {
      dispatch(receivedFilms(data));
    })
    .catch(error => {
      console.log("An error occurred.", error);
    });
};

import React from "react";
import { connect } from "react-redux";

import { Header } from "../components/Header";
import FilmDetails from "../components/FilmDetails/FilmDetails";
import FilmsList from "../components/FilmsList/FilmsList";
import { Footer } from "../components/Footer";
import {
  fetchFilmById,
  fetchFilms,
  changeGenres
} from "../redux/actions/FilmsAction";

import styles from "../main.scss";

const FilmPage = ({ ...props }) => (
  <>
    <Header isFilmPage>
      <FilmDetails {...props} />
    </Header>
    <div className={styles.container}>
      <FilmsList isFilmPage {...props} />
    </div>
    <Footer />
  </>
);

FilmPage.getInitialProps = async ({ store, query }) => {
  await store.dispatch(fetchFilmById(query.id));
  const state = store.getState();
  const filter = state.FilmsReducer.filmData.genres.join(", ");
  store.dispatch(changeGenres(filter));
  await store.dispatch(fetchFilms({ filter }));
};

const mapStateToProps = state => ({ ...state.FilmsReducer });

const mapDispatchToProps = {
  fetchFilms,
  fetchFilmById,
  changeGenres
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmPage);

import React from "react";
import { connect } from "react-redux";

import { Header } from "../components/Header";
import SearchForm from "../components/SearchForm";
import FilmsList from "../components/FilmsList";
import { Footer } from "../components/Footer";
import {
  changeSearchBy,
  changeSearchInputValue,
  fetchFilms
} from "../redux/actions/FilmsAction";

import styles from "../main.scss";

const MainPage = ({ ...props }) => (
  <>
    <Header>
      <SearchForm {...props} />
    </Header>
    <div className={styles.container}>
      <FilmsList {...props} />
    </div>
    <Footer />
  </>
);

MainPage.getInitialProps = async ({ store, query }) => {
  store.dispatch(changeSearchInputValue(query.searchValue || ""));
  const state = store.getState();
  const { searchValue, searchBy, sortBy, limit } = state.FilmsReducer;
  await store.dispatch(
    fetchFilms({
      searchValue,
      searchBy,
      sortBy,
      limit
    })
  );
};

const mapStateToProps = state => ({ ...state.FilmsReducer });

const mapDispatchToProps = {
  fetchFilms,
  changeSearchBy,
  changeSearchInputValue
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

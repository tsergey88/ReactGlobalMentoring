// @flow
import React from "react";

import { Router } from "../../server/routes.js";
import { SearchRadioButton } from "./SearchRadioButton";
import { Button } from "../Button";
import SearchInput from "./SearchInput";

import styles from "./style.scss";

type Props = {
  fetchFilms: () => {},
  changeSearchBy: () => {},
  limit: number,
  sortBy: string,
  searchBy: string,
  searchValue: string,
  history: *
};

class SearchForm extends React.Component<Props> {
  handleSubmit = () => {
    const { searchValue } = this.props;
    Router.pushRoute(`/search/${searchValue}`);
  };

  handleChange = checkedValue => {
    this.props.changeSearchBy(checkedValue);
  };

  render() {
    const { searchBy } = this.props;
    return (
      <form
        className={styles.search_form_block}
        action="javascript:void(0)"
        onSubmit={this.handleSubmit}
      >
        <h3>FIND YOUR MOVIE</h3>
        <SearchInput />
        <div>
          <div className={styles.search_form_tags}>
            <div>
              <span>SEARCH BY</span>
            </div>
            <div>
              <SearchRadioButton
                title="TITLE"
                id="searchBy_1"
                name="searchBy"
                isChecked={searchBy === "title"}
                value="title"
                onChange={() => this.handleChange("title")}
              />
              <SearchRadioButton
                title="GENRE"
                id="searchBy_2"
                name="searchBy"
                isChecked={searchBy === "genres"}
                value="genres"
                onChange={() => this.handleChange("genres")}
              />
            </div>
          </div>
          <div className={styles.search_form_btn}>
            <Button title="SEARCH" type="submit" />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;

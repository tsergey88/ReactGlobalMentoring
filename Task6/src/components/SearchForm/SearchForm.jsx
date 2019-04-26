// @flow
import React from "react";
import { connect } from "react-redux";

import { fetchFilms, changeSearchBy } from "../../actions/FilmsAction";
import { SearchRadioButton } from "./SearchRadioButton";
import { Button } from "../Button";
import { SearchInput } from "./SearchInput";

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
    const {
      fetchFilms,
      sortBy,
      limit,
      searchBy,
      searchValue,
      history
    } = this.props;
    history.push(`/search/${searchValue}`)
    fetchFilms(searchValue, searchBy, sortBy, limit);
  };

  handleChange = checkedValue => {
    this.props.changeSearchBy(checkedValue);
  };

  render() {
    const { searchBy } = this.props;
    return (
      <form
        className="search-form-block"
        action="javascript:void(0)"
        onSubmit={this.handleSubmit}
      >
        <h3>FIND YOUR MOVIE</h3>
        <SearchInput />
        <div>
          <div className="search-form-tags">
            <div>
              <span>SEARCH BY</span>
            </div>
            <div>
              <SearchRadioButton
                title="TITLE"
                id="1"
                name="searchBy"
                isChecked={searchBy === "title"}
                value="title"
                onChange={() => this.handleChange("title")}
              />
              <SearchRadioButton
                title="GENRE"
                id="2"
                name="searchBy"
                isChecked={searchBy === "genres"}
                value="genres"
                onChange={() => this.handleChange("genres")}
              />
            </div>
          </div>
          <div className="search-form-btn">
            <Button title="SEARCH" type="submit" />
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({ ...state.FilmsReducer });

const mapDispatchToProps = { fetchFilms, changeSearchBy };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

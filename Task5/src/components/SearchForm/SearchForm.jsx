// @flow
import React from "react";
import { connect } from "react-redux";

import { fetchFilms } from "../../actions/FilmsAction";
import { SearchRadioButton } from "./SearchRadioButton";
import { Button } from "../Button";
import { SearchInput } from "./SearchInput";

type Props = {
  fetchFilms: () => {},
  limit: number,
  sortBy: string
};

class SearchForm extends React.Component<Props> {
  handleSubmit = e => {
    e.preventDefault();
    const data = {};
    [...e.currentTarget].forEach(field => {
      if (field.type === "text") {
        data[field.name] = field.value;
      }
      if (field.type === "radio" && field.checked) {
        data[field.name] = field.value;
      }
    });
    const { search, searchBy } = data;
    const { fetchFilms, sortBy, limit } = this.props;
    fetchFilms(search, searchBy, sortBy, limit);
  };

  render() {
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
                defaultChecked
                value="title"
              />
              <SearchRadioButton
                title="GENRE"
                id="2"
                name="searchBy"
                value="genres"
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

const mapDispatchToProps = { fetchFilms };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

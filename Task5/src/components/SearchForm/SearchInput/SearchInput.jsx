// @flow
import React from "react";
import { connect } from "react-redux";

import { changeSearchInputValue } from "../../../actions/FilmsAction";

import "./style.scss";

type Props = {
  searchValue?: string,
  changeSearchInputValue?: () => {}
};

export class SearchInput extends React.Component<Props> {
  state = {
    value: this.props.searchValue || ""
  };

  handleChange = e => {
    const value = e.currentTarget.value;
    this.setState({ value });
    this.props.changeSearchInputValue(value);
  };

  render() {
    return (
      <div className="search-form">
        <div className="input-group">
          <input
            className="search-input"
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="bottom-border" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.FilmsReducer });

const mapDispatchToProps = { changeSearchInputValue };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);

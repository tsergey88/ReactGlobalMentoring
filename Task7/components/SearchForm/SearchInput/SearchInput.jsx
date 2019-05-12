// @flow
import React from "react";
import { connect } from "react-redux";

import { changeSearchInputValue } from "../../../redux/actions/FilmsAction";

import styles from "./style.scss";

type Props = {
  searchValue?: string,
  changeSearchInputValue?: () => {}
};

class SearchInput extends React.Component<Props> {
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
      <div className={styles.search_form}>
        <div className={styles.input_group}>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className={styles.bottom_border} />
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

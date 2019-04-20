import React from "react";

import "./style.scss";

export class SearchInput extends React.Component {
  state = {
    value: ""
  };

  handleChange = e => {
    e.preventDefault();
    const value = e.currentTarget.value;
    this.setState({ value });
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

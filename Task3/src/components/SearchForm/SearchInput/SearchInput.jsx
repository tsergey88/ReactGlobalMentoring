import React from "react";

import "./style.scss";

export class SearchInput extends React.Component {
  render() {
    return (
      <div className="search-form">
        <div className="input-group">
          <input type="text" id="search" name="search" placeholder="Search" />
          <div className="bottom-border" />
        </div>
      </div>
    );
  }
}

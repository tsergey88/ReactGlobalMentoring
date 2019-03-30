import React from "react";
import { SearchRadioButton } from "./SearchRadioButton";
import { Button } from "../Button";
import { SearchInput } from "./SearchInput";

export class SearchForm extends React.Component {
  render() {
    return (
      <div className="search-form-block">
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
              />
              <SearchRadioButton title="GENRE" id="2" name="searchBy" />
            </div>
          </div>
          <div className="search-form-btn">
            <Button title="SEARCH" />
          </div>
        </div>
      </div>
    );
  }
}

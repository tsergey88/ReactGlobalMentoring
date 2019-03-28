import React from "react";
import {Button} from "../Button";
import {RadioButton} from "../RadioButton";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div>NETFLIX ROULETTE</div>
        <div className="search-block">
          <h3>FIND YOUR MOVIE</h3>
          <input />
          <div>
            <div className="search-tags">
              <div><span>SEARCH BY</span></div>
              <div>
                <RadioButton title="TITLE" id="1" name="searchBy" defaultChecked />
                <RadioButton title="GENRE" id="2" name="searchBy" />
              </div>
            </div>
            <div><Button title="SEARCH" /></div>
          </div>
        </div>
      </header>
    )
  }
}
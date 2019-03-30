import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">NETFLIX ROULETTE</div>
        {this.props.children}
      </header>
    );
  }
}

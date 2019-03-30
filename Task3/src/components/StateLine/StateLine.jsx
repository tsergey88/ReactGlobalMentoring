import React from "react";

export class StateLine extends React.Component {
  render() {
    return (
      <div className="state-line">
        <div className="state-line-left">7 movies found</div>
        <div className="state-line-right">
          <div>Sort by</div>
          <div>release date</div>
          <div className="active">rating</div>
        </div>
      </div>
    );
  }
}

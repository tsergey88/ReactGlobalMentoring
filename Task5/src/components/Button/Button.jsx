import React from "react";

export class Button extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <a href="javascript:void(0);" className="btn">
        {title}
      </a>
    );
  }
}

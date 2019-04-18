import React from "react";

import "./style.scss";

export class SearchRadioButton extends React.Component {
  render() {
    const {
      wrapperClassName,
      className,
      isChecked,
      onChange,
      name,
      title,
      ...rest
    } = this.props;
    return (
      <span className={wrapperClassName}>
        <label>
          <input
            type="radio"
            checked={isChecked}
            {...rest}
            name={name}
            onChange={e => onChange && onChange(e.target.checked)}
          />
          <div className="box">
            <span>{title}</span>
          </div>
        </label>
      </span>
    );
  }
}

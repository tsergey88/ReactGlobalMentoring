import React from "react";

export class RadioButton extends React.Component {
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
          {title}
        </label>
      </span>
    );
  }
}

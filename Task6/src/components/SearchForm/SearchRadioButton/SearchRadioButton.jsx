// @flow
import React from "react";

import "./style.scss";

type Props = {
  wrapperClassName?: string,
  isChecked?: boolean,
  onChange?: () => {},
  name: string,
  title: string
};

export const SearchRadioButton = ({
  wrapperClassName,
  isChecked,
  onChange,
  name,
  title,
  ...rest
}: Props) => (
  <span className={wrapperClassName}>
    <label>
      <input
        {...rest}
        type="radio"
        checked={isChecked}
        name={name}
        onChange={e => onChange && onChange(e.target.checked)}
      />
      <div className="box">
        <span>{title}</span>
      </div>
    </label>
  </span>
);

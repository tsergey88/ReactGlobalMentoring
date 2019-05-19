// @flow
import React from "react";

import styles from "./style.scss";

type Props = {
  wrapperClassName?: string,
  isChecked?: boolean,
  onChange?: () => {},
  name: string,
  title: string
};

export const SearchRadioButton = ({
  isChecked,
  onChange,
  name,
  title,
  ...rest
}: Props) => (
  <span>
    <label>
      <input
        {...rest}
        type="radio"
        checked={isChecked}
        name={name}
        onChange={e => onChange && onChange(e.target.checked)}
      />
      <div className={styles.box}>
        <span>{title}</span>
      </div>
    </label>
  </span>
);

export default SearchRadioButton;

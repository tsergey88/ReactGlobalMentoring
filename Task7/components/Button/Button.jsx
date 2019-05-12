// @flow
import React from "react";

import styles from "./style.scss";

type Props = {
  title: string
};

export const Button = ({ title, ...rest }: Props) => (
  <button className={styles.btn} {...rest}>
    {title}
  </button>
);

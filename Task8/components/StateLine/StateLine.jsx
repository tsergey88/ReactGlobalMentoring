// @flow
import React from "react";

import styles from "./style.scss";

type Props = {
  left: string,
  right: JSX.Element
};

export const StateLine = ({ left, right }: Props) => (
  <div className={styles.state_line}>
    <div>{left}</div>
    <div className={styles.state_line_right}>{right}</div>
  </div>
);

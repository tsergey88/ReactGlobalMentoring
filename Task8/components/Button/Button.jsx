// @flow
import React from "react";
import injectSheet from "react-jss";

// import styles from "./style.scss";

type Props = {
  children: *,
  classes: {}
};

const styles = {
  btn: {
    border: "none",
    background: "none",
    cursor: "pointer",
    display: "block",
    backgroundColor: "#d24979",
    padding: "5px 15px",
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",

    "&:hover": {
      color: "gray"
    }
  }
};

const Button1 = ({ children, classes, ...rest }: Props) => (
  <button className={classes.btn} {...rest}>
    {children}
  </button>
);

export const Button = injectSheet(styles)(Button1);

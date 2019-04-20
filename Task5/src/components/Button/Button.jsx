// @flow
import React from "react";

type Props = {
  title: string
};

export const Button = ({ title, ...rest }: Props) => (
  <button className="btn" {...rest}>
    {title}
  </button>
);

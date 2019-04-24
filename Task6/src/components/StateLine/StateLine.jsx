// @flow
import React from "react";

type Props = {
  left: string,
  right: JSX.Element
};

export const StateLine = ({ left, right }: Props) => (
  <div className="state-line">
    <div className="state-line-left">{left}</div>
    <div className="state-line-right">{right}</div>
  </div>
);

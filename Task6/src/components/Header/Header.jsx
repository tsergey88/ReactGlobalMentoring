// @flow
import React from "react";

type Props = {
  children?: JSX.Element
};

export const Header = ({ children }: Props) => (
  <header>
    <div className="logo">NETFLIX ROULETTE</div>
    {children}
  </header>
);

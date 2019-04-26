// @flow
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children?: JSX.Element
};

export const Header = ({ children }: Props) => (
  <header>
    <div className="logo">
      <Link to={"/index"}>NETFLIX ROULETTE</Link>
    </div>
    {children}
  </header>
);

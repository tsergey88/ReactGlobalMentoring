// @flow
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children?: JSX.Element,
  isFilmPage?: boolean
};

export const Header = ({ children, isFilmPage }: Props) => (
  <header>
    <div className="logo">
      <div>
        <Link to={"/"}>NETFLIX ROULETTE</Link>
      </div>
      <div>
        {isFilmPage && (
          <Link to={"/"} className="btn">
            SEARCH
          </Link>
        )}
      </div>
    </div>
    {children}
  </header>
);

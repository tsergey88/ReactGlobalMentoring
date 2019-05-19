// @flow
import React from "react";
import Link from "next/link";

import styles from "./style.scss";

type Props = {
  children?: JSX.Element,
  isFilmPage?: boolean
};

export const Header = ({ children, isFilmPage }: Props) => (
  <header>
    <div className={styles.logo}>
      <div>
        <Link href="/">
          <a>NETFLIX ROULETTE</a>
        </Link>
      </div>
      <div>
        {isFilmPage && (
          <Link href="/">
            <a className={styles.btn}>SEARCH</a>
          </Link>
        )}
      </div>
    </div>
    {children}
  </header>
);

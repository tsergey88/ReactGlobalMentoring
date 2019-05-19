// @flow
import React from "react";
import { Link } from "../../server/routes";

import { getYear } from "../../utils";

import styles from "./style.scss";

type Props = {
  title: string,
  release_date: string,
  poster_path: string,
  genres: string,
  id: string
};

export const FilmPreview = ({
  title,
  release_date,
  poster_path,
  genres,
  id
}: Props) => (
  <div className={styles.item_preview}>
    <div>
      <Link route={`/film/${id}`}>
        <img src={poster_path} alt={title} />
      </Link>
    </div>
    <div className={styles.item_preview_title}>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <span className={styles.item_preview_release_date}>
          {getYear(release_date)}
        </span>
      </div>
    </div>
    <div className={styles.item_preview_genres}>{genres.join(", ")}</div>
  </div>
);

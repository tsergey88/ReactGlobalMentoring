// @flow
import React from "react";
import { Link } from "react-router-dom";

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
  <div className="item-preview">
    <div>
      <Link to={`/film/${id}`}>
        <img src={poster_path} alt={title} />
      </Link>
    </div>
    <div className="item-preview-title">
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <span className="item-preview-release-date">
          {release_date.split("-")[0]}
        </span>
      </div>
    </div>
    <div className="item-preview-genres">{genres.join(", ")}</div>
  </div>
);

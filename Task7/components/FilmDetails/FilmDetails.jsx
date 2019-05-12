// @flow
import React from "react";

import { getYear } from "../../utils";

import styles from "./style.scss";

type Props = {
  filmData?: {
    id: number,
    title: string,
    poster_path: string,
    tagline: string,
    release_date: string,
    runtime: string,
    overview: string,
    vote_average: string,
    genres: []
  },
  filmId: number,
  fetchFilms?: () => {},
  changeGenres?: () => {},
  fetchFilmById?: () => {}
};

class FilmDetails extends React.Component<Props> {
  render() {
    const {
      title,
      poster_path,
      tagline,
      release_date,
      runtime,
      overview,
      vote_average
    } = this.props.filmData;
    if (!this.props.filmData.id) {
      return <div>FILM NOT FOUND</div>;
    }
    return (
      <div className={styles.film_details}>
        <div className={styles.film_details_image_preview}>
          <img src={poster_path} alt={title} />
        </div>
        <div className={styles.film_details_content}>
          <div className={styles.film_details_title}>
            <div>
              <h1>{title}</h1>
            </div>
            <div>
              <span className={styles.film_details_vote}>{vote_average}</span>
            </div>
          </div>
          <div>{tagline}</div>
          <div className={styles.film_details_year}>
            <span style={{ marginRight: 1 + "em" }}>
              {getYear(release_date)}
            </span>
            <span>{runtime}</span>
          </div>
          <div className={styles.film_details_overview}>{overview}</div>
        </div>
      </div>
    );
  }
}

export default FilmDetails;

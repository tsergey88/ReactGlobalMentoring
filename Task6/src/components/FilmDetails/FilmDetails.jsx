// @flow
import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { getYear } from "../../utils";
import {
  fetchFilms,
  changeGenres,
  fetchFilmById
} from "../../actions/FilmsAction";

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

export class FilmDetails extends React.Component<Props> {
  state = {
    data: {}
  };

  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filmId !== prevProps.filmId) {
      this.init();
    }
  }

  init = async () => {
    const { filmId, fetchFilms, changeGenres, fetchFilmById } = this.props;
    await fetchFilmById(filmId);
    const filter = this.props.filmData.genres.join(", ");
    changeGenres(filter);
    fetchFilms({ filter });
  };

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
      <div className="film-details">
        <div className="film-details-image-preview">
          <img src={poster_path} alt={title} />
        </div>
        <div className="film-details-content">
          <div className="film-details-title">
            <div>
              <h1>{title}</h1>
            </div>
            <div>
              <span className="film-details-vote">{vote_average}</span>
            </div>
          </div>
          <div>{tagline}</div>
          <div className="film-details-year">
            <span style={{ marginRight: 1 + "em" }}>
              {getYear(release_date)}
            </span>
            <span>{runtime}</span>
          </div>
          <div className="film-details-overview">{overview}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.FilmsReducer });

const mapDispatchToProps = { fetchFilms, changeGenres, fetchFilmById };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilmDetails)
);

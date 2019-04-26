// @flow
import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { getYear } from "../../utils";
import { fetchFilms, changeGenres } from "../../actions/FilmsAction";

type Props = {
  filmId: number,
  fetchFilms?: () => {},
  changeGenres?: () => {}
};

export class FilmDetails extends React.Component<Props> {
  state = {
    data: []
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
    const { filmId, fetchFilms, changeGenres } = this.props;
    const request = await fetch(
      `https://reactjs-cdp.herokuapp.com/movies/${filmId}`
    );
    const data = await request.json();
    this.setState({ data });
    const filter = data.genres.join(", ");
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
    } = this.state.data;
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

const mapDispatchToProps = { fetchFilms, changeGenres };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilmDetails)
);

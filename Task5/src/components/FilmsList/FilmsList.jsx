import React from "react";
import { connect } from "react-redux";

import { fetchFilms } from "../../actions/FilmsAction";
import { FilmPreview } from "../FilmPreview";

class FilmsList extends React.Component {
  componentDidMount() {
    this.props.fetchFilms(18);
  }

  render() {
    const { data, isLoading } = this.props;
    if (isLoading) {
      return <div className="container">Loading...</div>;
    }
    return (
      <div className="container">
        {data.map(item => (
          <FilmPreview key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.FilmsReducer });

const mapDispatchToProps = {
  fetchFilms
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsList);

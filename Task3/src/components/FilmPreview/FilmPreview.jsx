import React from "react";

export class FilmPreview extends React.Component {
  render() {
    const { title, release_date, poster_path, genres, id } = this.props;
    return(
      <div className="item-preview">
        <div><a href={id}><img src={poster_path} alt={title} /></a></div>
        <div className="item-preview-title">
          <div><h3>{title}</h3></div>
          <div><span className="item-preview-release-date">{release_date.split("-")[0]}</span></div>
        </div>
        <div className="item-preview-genres">{genres.join(", ")}</div>
      </div>
    );
  }
}
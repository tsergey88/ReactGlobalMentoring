// @flow
import React from "react";
import { connect } from "react-redux";

import { fetchFilms, changeSortBy } from "../../actions/FilmsAction";
import { FilmPreview } from "../FilmPreview";
import { StateLine } from "../StateLine";
import { SearchRadioButton } from "../SearchForm/SearchRadioButton";

type Props = {
  fetchFilms?: () => {},
  changeSortBy?: () => {},
  isLoading?: boolean,
  request?: {},
  limit?: number,
  sortBy?: string,
  searchBy?: string,
  searchValue?: string
};

export class FilmsList extends React.Component<Props> {
  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    const { fetchFilms, limit, sortBy, searchBy, searchValue } = this.props;
    fetchFilms(searchValue, searchBy, sortBy, limit);
  };

  handleChange = checkedValue => {
    this.props.changeSortBy(checkedValue);
  };

  renderPanelSortBy = () => (
    <>
      <div>Sort by</div>
      <div>
        <SearchRadioButton
          title="release date"
          id="1"
          name="sortBy"
          isChecked={this.props.sortBy === "release_date"}
          value="release_date"
          onChange={() => this.handleChange("release_date")}
        />
      </div>
      <div className="active">
        <SearchRadioButton
          title="rating"
          id="2"
          name="sortBy"
          isChecked={this.props.sortBy === "vote_average"}
          value="vote_average"
          onChange={() => this.handleChange("vote_average")}
        />
      </div>
    </>
  );

  render() {
    const { request, isLoading } = this.props;
    if (isLoading) {
      return <div className="content">Loading...</div>;
    }
    if (!isLoading && !request.data.length) {
      return (
        <div className="content">
          <h2>No Films Found</h2>
        </div>
      );
    }
    return (
      <>
        <StateLine
          left={`${request.total} movies found`}
          right={this.renderPanelSortBy()}
        />
        <div className="content">
          {request.data.map(item => (
            <FilmPreview key={item.id} {...item} />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({ ...state.FilmsReducer });

const mapDispatchToProps = { fetchFilms, changeSortBy };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsList);

// @flow
import React from "react";

import { Header } from "../Header";
import { FilmDetails } from "../FilmDetails";
import { FilmsList } from "../FilmsList";
import { Footer } from "../Footer";
import { ErrorBoundary } from "../ErrorBoundary";

export const ItemComponent = ({ ...props }) => (
  <ErrorBoundary>
    <Header>
      <FilmDetails filmId={props.match.params.id} />
    </Header>
    <div className="container">
      <FilmsList isFilmPage {...props} />
    </div>
    <Footer />
  </ErrorBoundary>
);

export default ItemComponent;

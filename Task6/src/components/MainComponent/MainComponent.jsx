import React from "react";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { FilmsList } from "../FilmsList";
import { ErrorBoundary } from "../ErrorBoundary";
import { SearchForm } from "../SearchForm";

export const MainComponent = ({ ...props }) => (
  <ErrorBoundary>
    <Header>
      <SearchForm {...props} />
    </Header>
    <div className="container">
      <FilmsList {...props} />
    </div>
    <Footer />
  </ErrorBoundary>
);

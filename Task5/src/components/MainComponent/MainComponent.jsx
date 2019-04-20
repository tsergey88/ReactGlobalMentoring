import React from "react";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { FilmsList } from "../FilmsList";
import { ErrorBoundary } from "../ErrorBoundary";
import { SearchForm } from "../SearchForm";

export const MainComponent = () => (
  <ErrorBoundary>
    <Header>
      <SearchForm />
    </Header>
    <div className="container">
      <FilmsList />
    </div>
    <Footer />
  </ErrorBoundary>
);

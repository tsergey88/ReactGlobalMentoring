import React from "react";
import { Header } from "../Header";
import { SearchForm } from "../SearchForm";
import { FilmsList } from "../FilmsList";
import { Footer } from "../Footer";
import { ErrorBoundary } from "../ErrorBoundary";

export const ItemComponent = ({ ...props }) => (
  <ErrorBoundary>
    <Header>
      <SearchForm />
    </Header>
    <div className="container">
      <FilmsList {...props} />
    </div>
    <Footer />
  </ErrorBoundary>
);

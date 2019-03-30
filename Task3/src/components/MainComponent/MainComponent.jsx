import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { FilmsList } from "../FilmsList";
import { ErrorBoundary } from "../ErrorBoundary";
import { SearchForm } from "../SearchForm";
import { StateLine } from "../StateLine";

export class MainComponent extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Header>
          <SearchForm />
        </Header>
        <div>
          <StateLine />
          <FilmsList />
        </div>
        <Footer />
      </ErrorBoundary>
    );
  }
}

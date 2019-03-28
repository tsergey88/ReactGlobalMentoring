import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import {FilmsList} from "../FilmsList";

export class MainComponent extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FilmsList />
        <Footer />
      </>
    );
  }
}

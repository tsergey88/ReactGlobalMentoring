import React from "react";
import { FilmPreview } from "../FilmPreview";

export class FilmsList extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.initData();
  }

  initData = async () => {
    let response = await fetch(
      "https://reactjs-cdp.herokuapp.com/movies?searchBy=title&limit=18"
    );
    response = await response.json();
    const data = response.data;
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        {data.map(item => (
          <FilmPreview key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

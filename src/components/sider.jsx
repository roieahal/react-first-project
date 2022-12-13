import React, { Component } from "react";

class Sider extends Component {
  state = {};

  style = {
    fontFamily: "Arial, Helvetica, sans-serif",
    position: "fixed",
    width: "17vw",
    top: "15vh",
    left: "2vw",
    backgroundColor: "black",
    height: "100vh",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  };

  styleBG = {
    marginTop: "9vh",
    width: "79%",
  };
  styleB = {
    width: "79%",
    height: "'8vh'",
    marginTop: "6vh",
  };

  render() {
    const { filterMovie, moviesList, genreCount, countAllGenres } = this.props;

    return (
      <div style={this.style}>
        <button onClick={() => filterMovie("allMovies")} style={this.styleBG} type="button" className="btn btn-light position-relative">
          All Movies
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <span className="visually-hidden">unread messages</span>
            {countAllGenres}
          </span>
        </button>
        <button onClick={() => filterMovie("Comedy")} style={this.styleB} type="button" className="btn btn-light position-relative">
          Comedy
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <span className="visually-hidden">unread messages</span>
            {genreCount["Comedy"]}
          </span>
        </button>
        <button onClick={() => filterMovie("Action")} style={this.styleB} type="button" className="btn btn-light position-relative">
          Action
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {genreCount["Action"]}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        <button onClick={() => filterMovie("Drama")} style={this.styleB} type="button" className="btn btn-light position-relative">
          Drama
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {genreCount["Drama"]}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        <button onClick={() => filterMovie("Fantasy")} style={this.styleB} type="button" className="btn btn-light position-relative">
          Fantasy
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {genreCount["Fantasy"]}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        <button onClick={() => filterMovie("Horror")} style={this.styleB} type="button" className="btn btn-light position-relative">
          Horror
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {genreCount["Horror"]}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    );
  }
}

export default Sider;

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Toper extends Component {
  style = {
    fontFamily: "Arial, Helvetica, sans-serif",
    position: "fixed",
    width: "100vw",
    backgroundColor: "orange",
    height: "13vh",
    display: "flex",
    justifyContent: "space-between",
  };

  styleM = {
    textDecoration: "none",
  };

  render() {
    return (
      <div style={this.style}>
        <Link style={this.styleM} to="/">
          <h1>Moviely 🎥</h1>
        </Link>

        <Link to={"/AddMovies"}>
          <div className="d-grid gap-8 col-200 mx-auto">
            <button class="btn btn-primary" type="button">
              Add movies
            </button>
          </div>
        </Link>
        <div>
          select number of movies in page
          <input type="number" onKeyPress={(ev) => this.props.divide(ev)} />
        </div>
      </div>
    );
  }
}

export default Toper;

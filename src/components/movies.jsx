import React, { Component } from "react";
import Movie from "./movie";

class Movies extends Component {
  style = {
    fontFamily: "Arial, Helvetica, sans-serif",
    position: "fixed",
    width: "70vw",
    top: "18vh",
    left: "24vw",
    height: "72vh",
    overflowY: "auto",
    scrollbarWidth: "thin",
    boxShadow: "0px 0px 15px 7px firebrick",
    backgroundColor: "rgb(30, 24, 24)",
    color: "white",
  };
  Tstyle = {
    color: "white",
  };

  render() {
    const { filteredList, dodelete, loving, pagevide, activepage } = this.props;

    let newArr = [...filteredList];

    const amountOfPage = pagevide;
    newArr = newArr.slice(amountOfPage * (activepage - 1), amountOfPage * activepage);

    return (
      <div style={this.style}>
        <table className="table" style={this.Tstyle}>
          <thead>
            <tr>
              <th>
                <h4>Id</h4>
              </th>
              <th>
                <h4>Name</h4>
              </th>
              <th>
                <h4>Rating</h4>
              </th>
              <th>
                <h4>Genre</h4>
              </th>
              <th>
                <h4>Delete</h4>
              </th>
              <th>
                <h4>Like</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {newArr.map((mv) => (
              <Movie filteredList={mv} key={mv.id} dodelete={() => dodelete(mv.id)} loving={() => loving(mv.id)}></Movie>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;

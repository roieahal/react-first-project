import React, { Component } from "react";
class Movie extends Component {
  render() {
    const { filteredList, dodelete, loving } = this.props;
    return (
      <tr>
        <th>{filteredList.id}</th>
        <th>{filteredList.name}</th>
        <th>{filteredList.rating}</th>
        <th>{filteredList.genre}</th>
        <th>
          <button className="btn btn-danger btn-sm" onClick={() => dodelete()}>
            Delete
          </button>
        </th>
        <th>
          <i className={filteredList.love} onClick={() => loving()}></i>
        </th>
      </tr>
    );
  }
}

export default Movie;

import React, { Component } from "react";
import Movies from "./movies";
import Sider from "./sider";
import Toper from "./toper";
// import MoviesList from "./moviesList";
import Pagination from "./footer";

class MoviesPage extends Component {
  render() {
    return (
      <div>
        <Sider countAllGenres={this.countAllGenres(this.props.moviesList)} genreCount={this.countGenres(this.props.moviesList)} filterMovie={this.props.filterMovie} movieList={this.props.MoviesList}></Sider>
        <Movies activepage={this.props.activepage} pagevide={this.props.pagevide} filteredList={this.props.filteredList} dodelete={this.props.handleDelete} loving={this.props.handleLove}></Movies>
      </div>
    );
  }

  countGenres = () => {
    const genreCount = [];
    for (const movie of this.props.MoviesList) {
      const genre = movie.genre;
      if (!genreCount[genre]) {
        genreCount[genre] = 0;
      }
      genreCount[genre]++;
    }
    return genreCount;
  };

  countAllGenres = () => {
    console.log(this.props);
    return this.props.MoviesList.length;
  };
}
export default MoviesPage;

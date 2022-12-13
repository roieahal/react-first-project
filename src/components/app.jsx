import React, { Component } from "react";
import AddMovies from "./addmovies";
import MoviesPage from "./moviesPage";
import Toper from "./toper";
import { Route, Routes } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import Footer from "./footer";

class App extends Component {
  state = {
    MoviesList: [
      { id: 1, name: "The Shawshank Redemption", rating: 9.2, genre: "Drama", love: "bi bi-heart" },
      { id: 2, name: "The Godfather", rating: 9.2, genre: "Drama", love: "bi bi-heart" },
      { id: 3, name: "The Godfather: Part II", rating: 9.0, genre: "Drama", love: "bi bi-heart" },
      { id: 4, name: "The Dark Knight", rating: 9.0, genre: "Action", love: "bi bi-heart" },
      { id: 5, name: "12 Angry Men", rating: 8.9, genre: "Drama", love: "bi bi-heart" },
      { id: 6, name: "Schindlers List", rating: 8.9, genre: "Comedy", love: "bi bi-heart" },
      { id: 7, name: "Pulp Fiction", rating: 8.9, genre: "Drama", love: "bi bi-heart" },
      { id: 8, name: "The Good, the Bad and the Ugly", rating: 8.8, genre: "Comedy", love: "bi bi-heart" },
      { id: 9, name: "The Return of the King", rating: 8.8, genre: "Comedy", love: "bi bi-heart" },
      { id: 10, name: "Fight Club", rating: 8.8, genre: "Drama", love: "bi bi-heart" },
      { id: 11, name: "The Empire Strikes Back", rating: 8.7, genre: "Fantasy", love: "bi bi-heart" },
      { id: 12, name: "One Flew Over the Cuckoos Nest", rating: 8.7, genre: "Drama", love: "bi bi-heart" },
      { id: 13, name: "The Fellowship of the Ring", rating: 8.7, genre: "Comedy", love: "bi bi-heart" },
      { id: 14, name: "Inception", rating: 8.7, genre: "Action", love: "bi bi-heart" },
      { id: 15, name: "Goodfellas", rating: 8.7, genre: "Drama", love: "bi bi-heart" },
      { id: 16, name: "The Matrix", rating: 8.6, genre: "Fantasy", love: "bi bi-heart" },
      { id: 17, name: "Seven Samurai", rating: 8.6, genre: "Comedy", love: "bi bi-heart" },
      { id: 18, name: "Star Wars: Episode IV - A New Hope", rating: 8.6, genre: "Fantasy", love: "bi bi-heart" },
      { id: 19, name: "Forrest Gump", rating: 8.6, genre: "Drama", love: "bi bi-heart" },
      { id: 20, name: "The Silence of the Lambs", rating: 8.6, genre: "Action", love: "bi bi-heart" },
      { id: 21, name: "Its a Wonderful Life", rating: 8.5, genre: "Drama", love: "bi bi-heart" },
      { id: 22, name: "Life Is Beautiful", rating: 8.5, genre: "Comedy", love: "bi bi-heart" },
      { id: 23, name: "The Usual Suspects", rating: 8.5, genre: "Drama", love: "bi bi-heart" },
      { id: 24, name: "Léon: The Professional", rating: 8.5, genre: "Drama", love: "bi bi-heart" },
      { id: 25, name: "Spirited Away", rating: 8.4, genre: "Comedy", love: "bi bi-heart" },
      { id: 26, name: "Saving Private Ryan", rating: 8.4, genre: "Drama", love: "bi bi-heart" },
      { id: 27, name: "The Green Mile", rating: 8.4, genre: "Drama", love: "bi bi-heart" },
      { id: 28, name: "Interstellar", rating: 8.4, genre: "Fantasy", love: "bi bi-heart" },
      { id: 29, name: "American Beauty", rating: 8.3, genre: "Drama", love: "bi bi-heart" },
      { id: 30, name: "Pulp Fiction", rating: 8.9, genre: "Drama", love: "bi bi-heart" },
      { id: 31, name: "The Godfather", rating: 9.2, genre: "Drama", love: "bi bi-heart" },
      { id: 32, name: "The Dark Knight", rating: 9.0, genre: "Action", love: "bi bi-heart" },
      { id: 33, name: "The Shawshank Redemption", rating: 9.2, genre: "Drama", love: "bi bi-heart" },
      { id: 34, name: "The Silence of the Lambs", rating: 8.6, genre: "Action", love: "bi bi-heart" },
      { id: 35, name: "Fight Club", rating: 8.8, genre: "Drama", love: "bi bi-heart" },
      { id: 36, name: "The Prestige", rating: 8.3, genre: "Drama", love: "bi bi-heart" },
      { id: 37, name: "Gladiator", rating: 8.3, genre: "Action", love: "bi bi-heart" },
      { id: 38, name: "The Green Mile", rating: 8.4, genre: "Drama", love: "bi bi-heart" },
      { id: 39, name: "The Departed", rating: 8.2, genre: "Drama", love: "bi bi-heart" },
      { id: 40, name: "The Lion King", rating: 8.3, genre: "Comedy", love: "bi bi-heart" },
      { id: 41, name: "Interstellar", rating: 8.4, genre: "Fantasy", love: "bi bi-heart" },
      { id: 42, name: "The Matrix", rating: 8.6, genre: "Fantasy", love: "bi bi-heart" },
      { id: 43, name: "Spirited Away", rating: 8.4, genre: "Comedy", love: "bi bi-heart" },
      { id: 44, name: "The Usual Suspects", rating: 8.5, genre: "Drama", love: "bi bi-heart" },
      { id: 45, name: "Inception", rating: 8.7, genre: "Action", love: "bi bi-heart" },
      { id: 46, name: "The Good, the Bad and the Ugly", rating: 8.8, genre: "Comedy", love: "bi bi-heart" },
      { id: 47, name: "The Great Dictator", rating: 8.2, genre: "Comedy", love: "bi bi-heart" },
      { id: 48, name: "Back to the Future", rating: 8.2, genre: "Fantasy", love: "bi bi-heart" },
      { id: 49, name: "Life Is Beautiful", rating: 8.5, genre: "Comedy", love: "bi bi-heart" },
      { id: 50, name: "Its a Wonderful Life", rating: 8.5, genre: "Drama", love: "bi bi-heart" },
      { id: 51, name: "Léon: The Professional", rating: 8.5, genre: "Drama", love: "bi bi-heart" },
      { id: 52, name: "Grave of the Fireflies", rating: 8.1, genre: "Comedy", love: "bi bi-heart" },
      { id: 53, name: "The Shining", rating: 8.5, genre: "Horror", love: "bi bi-heart" },
      { id: 54, name: "The Exorcist", rating: 8.0, genre: "Horror", love: "bi bi-heart" },
      { id: 55, name: "Halloween", rating: 7.8, genre: "Horror", love: "bi bi-heart" },
      { id: 56, name: "Psycho", rating: 8.5, genre: "Horror", love: "bi bi-heart" },
      { id: 57, name: "A Nightmare on Elm Street", rating: 7.5, genre: "Horror", love: "bi bi-heart" },
      { id: 58, name: "The Texas Chain Saw Massacre", rating: 7.5, genre: "Horror", love: "bi bi-heart" },
      { id: 59, name: "The Silence of the Lambs", rating: 8.6, genre: "Horror", love: "bi bi-heart" },
      { id: 60, name: "Friday the 13th", rating: 6.0, genre: "Horror", love: "bi bi-heart" },
      { id: 61, name: "The Ring", rating: 7.1, genre: "Horror", love: "bi bi-heart" },
      { id: 62, name: "The Conjuring", rating: 7.5, genre: "Horror", love: "bi bi-heart" },
      { id: 63, name: "The Blair Witch Project", rating: 6.4, genre: "Horror", love: "bi bi-heart" },
      { id: 64, name: "Poltergeist", rating: 7.0, genre: "Horror", love: "bi bi-heart" },
      { id: 65, name: "The Omen", rating: 7.5, genre: "Horror", love: "bi bi-heart" },
      { id: 66, name: "The Sixth Sense", rating: 7.6, genre: "Horror", love: "bi bi-heart" },
      { id: 67, name: "Saw", rating: 6.6, genre: "Horror", love: "bi bi-heart" },
      { id: 68, name: "The Grudge", rating: 5.9, genre: "Horror", love: "bi bi-heart" },
      { id: 69, name: "The Amityville Horror", rating: 5.9, genre: "Horror", love: "bi bi-heart" },
    ],
    filteredList: [],

    idmoviesadd: 70,

    newMovies: [],
    activepage: 1,
    pagevide: 10,
  };
  constructor() {
    super();
    this.state.filteredList = this.state.MoviesList;
  }

  render() {
    console.log(this.state.filteredList);
    return (
      <div>
        <Toper divide={this.divide} filteredList={this.state.filteredList}></Toper>
        <Routes>
          <Route path="/AddMovies" element={<AddMovies onsubmit={this.onsubmit} />} />
          <Route path="/" element={<MoviesPage activepage={this.state.activepage} pagevide={this.state.pagevide} countGenres={this.countGenres} handleLove={this.handleLove} handleDelete={this.handleDelete} filterMovie={this.filterMovie} filteredList={this.state.filteredList} MoviesList={this.state.MoviesList} deleteSurce={this.deleteSurce} />} />
        </Routes>
        <Footer activeChange={this.activeChange} filteredList={this.state.filteredList} activepage={this.state.activepage} pagevide={this.state.pagevide} />
      </div>
    );
  }

  divide = (ev) => {
    if (ev.key == "Enter" && ev.target.value > 0) this.setState({ pagevide: ev.target.value });
    console.log("errerer");
  };

  activeChange = (n) => {
    this.setState({ activepage: n });
  };

  onsubmit = (event, values) => {
    event.preventDefault();
    const MoviesList = this.state.MoviesList.push({ id: this.state.idmoviesadd, ...values, love: "bi bi-heart" });
    // console.log(this.state.MoviesList);
    alert("new movie has been added");
    this.state.idmoviesadd = this.state.idmoviesadd + 1;
    // this.setState({ MoviesList });
  };

  deleteSurce = (movieId) => {
    const MoviesList = this.state.MoviesList.filter((val) => val.id !== movieId);
    this.setState({ MoviesList: MoviesList });
  };

  filterMovie = (genre) => {
    switch (genre) {
      case "Comedy":
        const filteredList = this.state.MoviesList.filter((ob) => ob.genre == "Comedy");
        this.setState({ filteredList: filteredList });
        break;

      case "Action":
        const filteredList2 = this.state.MoviesList.filter((ob) => ob.genre == "Action");
        this.setState({ filteredList: filteredList2 });
        break;

      case "Drama":
        const filteredList3 = this.state.MoviesList.filter((ob) => ob.genre == "Drama");
        this.setState({ filteredList: filteredList3 });
        break;

      case "Fantasy":
        const filteredList4 = this.state.MoviesList.filter((ob) => ob.genre == "Fantasy");
        this.setState({ filteredList: filteredList4 });
        break;

      case "Horror":
        const filteredList5 = this.state.MoviesList.filter((ob) => ob.genre == "Horror");
        this.setState({ ffilteredList: filteredList5 });
        break;

      case "allMovies":
        const filteredList6 = this.state.MoviesList.filter((ob) => ob);
        this.setState({ filteredList: filteredList6 });
        break;
    }
  };

  handleDelete = (movieId) => {
    const MoviesList = this.state.MoviesList.filter((val) => val.id !== movieId);
    const filteredList = this.state.filteredList.filter((val) => val.id !== movieId);
    this.setState({ MoviesList, filteredList });
    console.log(this.state.MoviesList);
    console.log(this.state.filteredList);
  };

  handleLove = (movielove) => {
    let index = this.state.MoviesList.findIndex((element) => element.id == movielove);
    const MoviesList = this.state.MoviesList;
    MoviesList[index].love = MoviesList[index].love == "bi bi-heart" ? "bi bi-heart-fill" : "bi bi-heart";
    this.setState(MoviesList);
  };
}

export default App;

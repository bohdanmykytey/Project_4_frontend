import React, { Component } from "react";
import axios from "axios";
import "foundation-sites/dist/css/foundation.min.css";
import { Button, Colors } from "react-foundation";

class FavoriteMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      rated_r: "",
      budget: "",
      homepage: "",
      original_title: "",
      overwiev: "",
      popularity: "",
      query: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getInfo = async query => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=2f75b3be3b1abaafec8e67b4f6622bb3&query=${query}`
    );
    console.log(response.data.results);
    this.setState({
      movies: response.data.results
    });
  };

  handleInputChange = event => {
    event.preventDefault();
    this.getInfo(this.state.query);
  };

  handleQuery = () => {
    this.setState({
      query: this.search.value
    });
  };

  render() {
    return (
      <div>
        <div className="search">
          <form onSubmit={this.handleInputChange}>
            <input
              className="animated-search-form"
              type="text"
              label="Search Movies"
              placeholder="Search for movies..."
              ref={input => (this.search = input)}
              onChange={this.handleQuery}
            />
            <input type="submit" value="Search"></input>
          </form>
        </div>
        {this.state.movies.map(function(movies, i) {
          return (
            <div className="Favorites" key={i}>
              Title: {movies.original_title}
              <ul>Description: <p>{movies.overview}</p></ul>
              <ul>Release Date: {movies.release_date}</ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FavoriteMovies;

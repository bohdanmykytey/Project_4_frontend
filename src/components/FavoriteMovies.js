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
      query: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.postMovies = this.postMovies.bind(this)
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
    this.setState({
      isClicked: true
    })
    this.getInfo(this.state.query);
  };

  handleQuery = () => {
    this.setState({
      query: this.search.value
    });
  };

  handleClick(event) {
    event.preventDefault();
    // console.log(event.currentTarget.id);
    const index = event.currentTarget.id
    // console.log(this.state.movies)
    const moviesArray = this.state.movies
    const movie = moviesArray[index]
    // console.log(movie)
    this.postMovies(movie)
  }

  postMovies = async (movie) => {
    console.log(movie)
    let data = {
      rated_r: movie.rated_r,
      budget: movie.budget,
      homepage: movie.homepage,
      original_title: movie.original_title,
      overwiev: movie.overview,
      popularity: movie.popularity,
    }
    const response = await axios.post(
      'https://project4api.herokuapp.com/movies', data
    );
    console.log(response)
    console.log(data);
  }


  render() {
    return (
      <div className="callout sucsess">
        <div className="">
          <form onSubmit={this.handleInputChange}>
            <input
              className="search-input-animated"
              type="text"
              label="Search Movies"
              placeholder="Search for movies or shows..."
              ref={input => (this.search = input)}
              onChange={this.handleQuery}
            />
            <input type="submit" value="Search"></input>
          </form>
        </div>

          {this.state.movies.map((movies, i) => {
            return (
                <div onClick={this.handleClick} className="primary callout" id={i} key={i}>
                  <h1> Title: {movies.original_title} </h1>
                  <div>
                    Description: <p>{movies.overview}</p>
                  </div>
                  <div>Release Date: {movies.release_date}</div>
                </div>
            );
          })}
        </div>
    );
  }
}

export default FavoriteMovies;

import React, { Component } from "react";
import axios from "axios";
import "foundation-sites/dist/css/foundation.min.css";

class SavedMovies extends React.Component {
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

      users: [],
      f_name: "",
      l_name: "",
      id: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies = async query => {
    const response = await axios.get(`https://project4api.herokuapp.com/movies`);
    console.log(response.data);
    this.setState({
      movies: response.data
    });
  };

  componentDidMount() {
    this.getMovies()
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    console.log(this.state)
    return  (
      <>
      {this.state.movies.map((movies, i) => {
        return (
          <ul key={i}>
              <li> Title: {movies.original_title}  </li>
          </ul>    
          );
        })}
      </>
    )
  }
}

export default SavedMovies;

import React, { Component } from "react";
import axios from "axios";
import "foundation-sites/dist/css/foundation.min.css";
import { Button, Colors } from "react-foundation";

class Users extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            movies: [],
            rated_r: "",
            budget: "",
            homepage: "",
            original_title: "",
            overwiev: "",
            popularity: ""
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    getUsers = async query => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=2f75b3be3b1abaafec8e67b4f6622bb3&query=${query}`
        );
        console.log(response.data.results);
        this.setState({
          movies: response.data.results
        });
    };

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <ul>
            <li>
                movie 1
            </li>
            <li>
                movie 2
            </li>
            <li>
                etc
            </li>
        </ul>
      );
    }
  }

export default Users;

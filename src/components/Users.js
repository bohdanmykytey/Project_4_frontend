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
            popularity: "",
            
            users: [],
            f_name: '',
            l_name: '',
            id: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    getUsers = async query => {
        const response = await axios.get(
          `localhost:3000/users/1`
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
        <div>

        </div>
      );
    }
  }

export default Users;

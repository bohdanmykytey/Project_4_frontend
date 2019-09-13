import React, { Component } from 'react';
import axios from 'axios'
import 'foundation-sites/dist/css/foundation.min.css';
import { Button, Colors } from 'react-foundation';

class LandingPage extends Component {
	constructor(props){
		super(props)
		this.state = {
            movies: [],
            rated_r: '',
            budget: '',
            homepage: '',
            original_title: '',
            overwiev: '',
            popularity: ''

        }
      }
      
      componentDidMount = async () => {
         const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2f75b3be3b1abaafec8e67b4f6622bb3&language=en-US&page=1')
         console.log(response)
         console.log(response.data.results)
         this.setState({
           movies: response.data.results
         })
     }
      

  render () {
    return (
        <div>
          <h1> Welcome! </h1>
          <h4> Here are the Top 20 most popular movies out right now </h4> 
            {
              this.state.movies.map(function(movies, i) {
                return  (
                        <div key={i} className="media-object stack-for-small">
                          <div className="media-object-section">
                            {movies.original_title}
                            {movies.overwiev}
                          </div>
                        </div>
                )
              })
            }
        </div>
      
    )
  }
}

export default LandingPage;
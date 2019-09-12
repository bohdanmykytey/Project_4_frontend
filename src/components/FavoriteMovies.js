import React, { Component } from 'react';
import axios from 'axios'

class FavoriteMovies extends Component {
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
            {
              this.state.movies.map(function(movies, i) {
                return <div className='LandingPage' key={i}>{movies.original_title} </div>
              })
            }
        </div>
      
    )
  }
}

export default FavoriteMovies;
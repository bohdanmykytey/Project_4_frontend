import React, { Component } from 'react';
import axios from 'axios'
import 'foundation-sites/dist/css/foundation.min.css';
import { Button, Colors } from 'react-foundation';


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
         const response = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=2f75b3be3b1abaafec8e67b4f6622bb3&query=wanted')
         console.log(response)
         console.log(response.data.results)
         this.setState({
           movies: response.data.results
         })
     }
      

  render () {
    return (
        <div>
            <div className="search">
              <input class="animated-search-form" type="text" label="Search Movies" placeholder="Search..."></input>
              <input type="submit" value="Search"></input>
            </div>
            {
              this.state.movies.map(function(movies, i) {
                return (
                <div className='Favorites' key={i}>{movies.original_title} </div>
                )
              })
            }
        </div>
      
    )
  }
}

export default FavoriteMovies;
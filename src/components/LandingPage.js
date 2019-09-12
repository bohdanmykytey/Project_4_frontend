import React, { Component } from 'react';
import axios from 'axios'

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
        this.renderMovies = this.renderMovies.bind(this)
      }
      
      componentDidMount = async () => {
         const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2f75b3be3b1abaafec8e67b4f6622bb3&language=en-US&page=1')
         console.log(response)
         console.log(response.data)
         this.setState({
           movies: {
             rated_r: '',
             budget: '',
             homepage: '',
             original_title: '',
             overwiev: '',
             popularity: ''
           }
         })
     }
      
    renderMovies = ()  =>  {
        console.log('clicked')
        this.state.movies.map(function(movies, i) {
            return <div key={i}>{movies.original_title}</div>
        })
        return movies.original_title
    }

  render () {
    return (
        <div>
            {this.renderMovies()}
        </div>
      
    )
  }
}

export default LandingPage;
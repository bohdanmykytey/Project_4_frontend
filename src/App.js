import React from 'react'
import FavoriteMovies from "./components/FavoriteMovies.js"
import LandingPage from "./components/LandingPage.js"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import NavBar from './components/NavBar.js'
import 'foundation-sites/dist/css/foundation.min.css';
import Footer from './components/Footer.js'
import { Button, Colors } from 'react-foundation';
import Users from './components/Users.js'

class App extends React.Component {
 constructor(props){
   super(props)
   this.state = {
      users: []
   }
  }

 render() {
   return (
    <Router>  
      <div className="App">
        <div className='container'>
        <NavBar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/favorites" component={FavoriteMovies} />
        <Route path="/users/1" component={Users} />
        <Footer />
        </div>
      </div>
   </Router>
   )
 }
}
export default App
import React from 'react'
import FavoriteMovies from "./components/FavoriteMovies.js"
import LandingPage from "./components/LandingPage.js"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import NavBar from './components/NavBar.js'
import 'foundation-sites/dist/css/foundation.min.css';
import Footer from './components/Footer.js'
import { Button, Colors } from 'react-foundation';

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
        <Footer />
        </div>
      </div>
   </Router>
   )
 }
}
export default App
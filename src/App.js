import React from 'react'
import FavoriteMovies from "./components/FavoriteMovies.js"
import LandingPage from "./components/LandingPage.js"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

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
          <nav>
            <Link to="/"> LandingPage </Link>
            <Link to="/favorites"> FavoriteMovies </Link>
          </nav>
        <Route path="/" exact component={LandingPage} />
        <Route path="/favorites" component={FavoriteMovies} />
        </div>
      </div>
   </Router>
   )
 }
}
export default App
import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LandingPage from './components/LandingPage.js'

class App extends React.Component {
 constructor(props){
   super(props)
   this.state = {
      users: []
   }
  }

 render() {
   return (
     <div className="App">
       <div className='container'>
         <LandingPage />
       </div>
     </div>
   )
 }
}
export default App
import React from 'react'
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
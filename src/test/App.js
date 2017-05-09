import React from 'react'
import Header from './header'
import Nav from './nav'
import Footer from './footer'

class App extends React.Component{
  render(){
    return(
        <div className="container">
            <Header/>
            <Nav/>
            <Footer/>
        </div>
    )
  }
}
export default App ;

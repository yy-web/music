import React from 'react'
import Header from './header'
import Nav from './nav'
import PlayBar from './playBar'
import Footer from './footer'

class App extends React.Component{
  render(){
    return(
        <div className="container">
            <Header/>
            <Nav/>
            <PlayBar/>
            <Footer/>
        </div>
    )
  }
}
export default App ;

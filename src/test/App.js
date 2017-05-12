import React from 'react'
import Header from './header'
import Nav from './nav'
// import Main from './main'
// import PlayBar from './playBar'
import PlayBarFM from './playBarFM'
import PlayerModel from './playerModel'
import Footer from './footer'

class App extends React.Component {

    render() {
        console.log('App')
        return (
            <div className="container">
                <Header/>
                <Nav/>
                <PlayBarFM/>
                <Footer/>
            </div>
        )
    }
}
export default App;

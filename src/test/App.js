import React from 'react'

import '../css/base.css'
import '../css/font_codes.css'
import Header from './header'
import Nav from './nav'
// import Main from './main'
// import PlayBar from './playBar'

//import PlayerModel from './playerModel'
import Footer from './footer'
import '../css/base.css'
class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Header/>
                <Nav/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
export default App;

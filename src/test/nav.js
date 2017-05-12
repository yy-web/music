import React from 'react'
//import {NavLink, Link} from 'react-router-dom';
import '../css/nav.css'
class Nav extends React.Component{
  render(){
      console.log('Nav')
    return(
      <div className="nav_bg">
            <div className="w1000 nav">
                <a >首页</a>
                <a >排行榜</a>
            </div>
      </div>
    )
  }
}
export default Nav  ;

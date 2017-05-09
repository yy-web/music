import React from 'react'
import '../css/base.css'
import '../css/header.css'

class Header extends React.Component{
  render(){
    return(
        <div className="header_bg">
            <div className="w1200 header">
                <span className="logo">music</span>
                <div className="search_box">
                    <input placeholder="搜索" type="text" />
                </div>
                <div className="loginForm">
                    <input type="button" defaultValue="注册"/>
                    <input type="button" defaultValue="登录"/>
                </div>
            </div>
        </div>
    )
  }
}
export default Header ;

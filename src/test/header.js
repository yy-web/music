import React from 'react'
import '../css/base.css'
class Header extends React.Component{
  render(){
    return(
        <div className="header">
            <div className="w1200">
                <div className="icon">music</div>
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

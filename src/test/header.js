import React from 'react'
import '../css/base.css'
import '../css/font_codes.css'
import '../css/header.css'

class Header extends React.Component{
  render(){
      console.log('header')
    return(
        <div className="header_bg">
            <div className="w1000 header">
                <div className="wrap">
                    <span className="logo">music</span>
                    <div className="search_box">
                        <input placeholder="搜索" type="text" />
                        <span className="myFont icon_search"></span>
                    </div>
                </div>
                <div className="loginForm">
                    <div>
                        <input type="button" className='reg' defaultValue="注册"/>
                        <input type="button" className="login" defaultValue="登录"/>
                        <div className="more_arrow">
                            <span className="myFont icon_th_list"></span>
                        </div>
                    </div>
                    <div className="more_tab">
                        <ul>
                            <li><a>注册</a></li>
                            <li><a>登录</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
  }
}
export default Header ;

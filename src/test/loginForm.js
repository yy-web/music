import React from 'react'
import '../css/loginForm.css'
import Button from './button'
class LoginForm extends React.Component {
    render() {
        return (
            <div className="w1000 loginBox">
                <div>
                    <p className="loginTitle">欢迎登录</p>
                </div>
                <div>
                    <div className="input_group">
                        <label htmlFor="username">用户名：</label>
                        <input type="text" name="userName" id="username"/>
                    </div>
                    <div className="input_group">
                        <label htmlFor="password">密码：</label>
                        <input type="password" name="password" id="password"/>
                    </div>
                    <div className="input_group">
                        <label htmlFor="check_password">确认密码：</label>
                        <input type="password" name="CheckPassword" id="check_password"/>
                    </div>
                    <div className="input_group">
                        <Button value={['登录','注册']} />
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginForm;

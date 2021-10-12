import React from 'react';

// import SideBanner from '../../components/SideBanner/SideBanner'
// import LoginForm from '../../components/LoginForm'
import './Login.css';

const Login = () => {
    return (
      <div className = 'login'>
        <div className= "login-body">
          <div  className = "login-form-wrap">
          <span className="login-form-title">Login to Songbird</span>
            <form className = 'login-form'>

              <div className = "input-wrap m-b-20 rs1-wrap-input100" data-validate ="Type your email">
                <input id="first-name" className="input-100" type="text" name="email" placeholder="Email"/>
                
              </div>
              <div className = "input-wrap m-b-20 rs2-wrap-input100" data-validate ="Type password">
                <input className="input-100" type="password" name="pass" placeholder="Password"/>
              </div>
              <div className = 'button-wrap'>
                <button className ="login-form-button">Sign in</button>
              </div>
              <div className = 'forgot-pass-wrap'>
              <span className="txt1">Forgot  </span>
              <a href="#" className="txt2">password?</a>
              </div>
              <div className="sign-up-wrap">
              <a href="#" className="txt3">Sign Up</a>
              </div>
            </form>
          </div>
          <div className ="side-banner"></div>
        </div>
      </div>
        
    )
}

export default Login
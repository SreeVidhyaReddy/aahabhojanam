import React from 'react';
import logo from "../assets/images/logo.jpg" ;

class Login extends React.Component{
	render(){
		return(
            <React.Fragment>
           <div className="container" id="container">
            <div className="logo">
             
                <img src={ logo} alt="logo"/>
            </div>
            <div>
                    <div className="form-container sign-up-container">
                            <form action="#">
                                <input type="email" placeholder="Email" id="email" />
                                <span id="error-email"></span>
                                <input type="password" placeholder="Password" id="password"/>
                                <span id="error-password"></span>
                                <button id="register" onclick="store()">Sign Up</button>
                            </form>
                        </div>
                        <div className="form-container sign-in-container">
                            <form action="index.html">

                                <input type="email" placeholder="Email" id="login-email" />
                                <span id="login-error-email"></span>
                                <input type="password" placeholder="Password" id="login-password"/>
                                <span id="login-error-password"></span>
                                <button id="sign-in" onclick="check()">Sign in</button>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>To keep connected with us please login with your personal info</p>
                                    <button className="ghost" id="signIn" onclick="check()">Sign In</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Hello, Foodies!</h1>
                                    <p>Enjoy a taste of heaven!</p>
                                    <button className="ghost" id="signUp" >Sign Up</button>
                                </div>
                            </div>
                        </div>
            </div>
        </div>

            </React.Fragment>

			)
	}
}

export default Login;


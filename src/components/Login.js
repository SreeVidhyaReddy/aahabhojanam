import React from 'react';
import logo from "../assets/images/logo.jpg" ;
import { Link } from 'react-router-dom'



class Login extends React.Component{
	render(){
		return(
            <React.Fragment>
           <div className="container-logo" id="container-logo">
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
                                <Link to="/MainIndex" id="register" >Login</Link>

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


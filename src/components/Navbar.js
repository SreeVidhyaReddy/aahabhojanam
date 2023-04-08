import React from 'react';
import { Outlet, Link } from "react-router-dom";



class Navbar extends React.Component{

	render(){
		return(
           <React.Fragment>
             <nav className="navbar navbar-expand-lg body">
             {/* <Link to="/" className="navbar-brand text-uppercase primary-color">Aahaa Bhojanam</Link> */}
         <a href="#" className="navbar-brand text-uppercase primary-color">Aahaa Bhojanam</a> 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynavbar">
            <div className="toggler-btn">
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
            </div>
            
        </button>
        

        <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <a href="#special-items" className="nav-link text-capitalize">special items</a>
                </li>
                <li className="nav-item">
                    <a href="#menu" className="nav-link text-capitalize">menu</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link text-capitalize">about</a>
                </li>
                <li className="nav-item">
                    <a href="#reviews" className="nav-link text-capitalize">reviews</a>
                </li>
                
               
                
            </ul>
            <form className="form-inline d-none d-lg-block mr-5">
                <button id="nav-btn" className="btn nav-btn text-capitalize" type="button">order online</button>
                <button id="nav-btn" className="btn nav-btn text-capitalize" type="button">book tables</button>
                
            </form>
        </div>
    </nav>

           </React.Fragment>

			);
	}
}

export default Navbar;
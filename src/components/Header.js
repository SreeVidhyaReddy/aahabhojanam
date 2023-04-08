import React from 'react';

import Login from "../components/Login.js";
import MainIndex from "../components/MainIndex.js";
import { Link } from 'react-router-dom'

class  Header extends React.Component{
	render(){
		return(

             <React.Fragment>
                    
    <div className="container-fluid info p-3 body" id="top-icons">
        <div className="row">
            <div className="col d-flex justify-content-between align-items-baseline flex-wrap">
                <div className="info-icons p-2">

                    <a href="#" className="mr-2 primary-color"><i classNameName="fab fa-instagram fa-2x"/></a>
                    <a href="#" className="mr-2 primary-color"><i className="fab fa-instagram fa-2x"/></a>
                    <a href="#" className="mr-2 primary-color"><i className="fab fa-twitter fa-2x"/></a>
                    <a href="#" className="mr-2 primary-color"><i className="fab fa-yelp fa-2x"/></a>
                </div>
                <h2 className="primary-color p-2 text-capitalize">A perfect place for foodies </h2>
            </div>
        </div>
    </div>
    
    <header id="header">
        <div className="container body">
            <div className="row height-98 align-items-center justify-content-center">
                <div className="col">
                    <div className="banner text-center">
                        <h1 className="display-1 text-capitalize w-50 mx-auto">
                            <small>Aahaa</small><strong className="primary-color">Bhojanam</strong>
                        </h1>
                        <a href={<MainIndex/>}  id="main-btn"  className="btn main-btn sushi-btn my-4 text-capitalize">Login</a>
                        
                    </div>
                </div>
            </div>
        </div>

        <a href="#special-items" className="btn header-link primary-color"><i className="fas fa-arrow-down"></i></a>
    </header>
  
             </React.Fragment>
			)
	}
}
export default Header;
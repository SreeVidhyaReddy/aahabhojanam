import React from 'react';


import Navbar from '../components/Navbar.js';
import Menu from "../components/Menu.js";
import About from "../components/About.js";
import Header2 from "../components/Header2.js";
import Review from "../components/Review.js";

class Home extends React.Component{
	render(){
		return(
            <React.Fragment>
            <Header2/>
            <Navbar/>
            <Menu/>
            <About/>
            <Review/>
            </React.Fragment>
			)
	}
}

export default Home;
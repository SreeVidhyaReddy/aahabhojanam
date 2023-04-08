import React from 'react';


import japan from '../assets/images/japan.jpg';
import european from'../assets/images/european.jpg';
import polish from '../assets/images/polish.jpg';
import british from "../assets/images/british.webp";
import indian from "../assets/images/main2.jpg";



class About extends React.Component{

render(){

	return(
          <React.Fragment>
            <section id="about" className="py-5">
        <div className="container body">
            <div className="row">
                <div className="col-md-6 my-4">
                    <h1 className="text-uppercase display-3" >about us</h1>
                    <h2 >My weaknesses have always been food and sleep – in that order.</h2>
                    <a href={'/'}  id="main-btn" className="btn main-btn my-4 text-capitalize">learn more</a>
                </div>
                <div className="col-md-6 about-pictures my-4 d-none d-lg-block">
                    <img src={indian} alt="menu" className="image1 img-thumbnail about-image"/>
                    <img src={japan} alt="menu" className="image3 img-thumbnail about-image"/>
                    <img src={british}alt="menu" className="image2 img-thumbnail about-image"/>
                    <img src={european} alt="menu" className="image4 img-thumbnail about-image"/>
                    <img src={polish} alt="menu" className="image5 img-thumbnail about-image"/>
                </div>
            </div>
        </div>

    </section>
          </React.Fragment>

		)
}



}
export default About;
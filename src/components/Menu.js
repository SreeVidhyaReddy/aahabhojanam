import React from 'react';


import japan from '../assets/images/japan.jpg';
import european from'../assets/images/european.jpg';
import polish from '../assets/images/polish.jpg';
import british from "../assets/images/british.webp";
import indian from "../assets/images/main1.jpg";
import desert from "../assets/images/desert6.jpg";

class Menu extends React.Component{
		render(){
		return(
           <React.Fragment>
            <section className="py-5" id="special-items">
        <div className="container my-5 body">
            <div className="row parent-container">
               
                <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                    <div className="item-container">
                        <img src={indian} className="img-fluid img-thumbnail item-img" alt="menu item"/>
                        
                            <h1 className="text-uppercase text-center item-link px-3"onclick="clickFunction()">menu item</h1>
                        
                    </div> 
                </div>
           
                <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                        <div className="item-container">
                            <img src={british} className="img-fluid img-thumbnail item-img" alt="menu item" />
                            
                                <h1 className="text-uppercase text-center item-link px-3 "onclick="clickFunction()">menu item</h1>
                           
                        </div>
                    </div>
               
                <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                        <div className="item-container">
                            <img src={japan} className="img-fluid img-thumbnail item-img" alt="menu item" />
                            
                                <h1 className="text-uppercase text-center item-link px-3"onclick="clickFunction()">menu item</h1>
                           
                        </div>
                    </div>
                
                 <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                        <div className="item-container">
                            <img src={european} className="img-fluid img-thumbnail item-img" alt="menu item" />
                            
                                <h1 className="text-uppercase text-center item-link px-3"onclick="clickFunction()">menu item</h1>
                            
                        </div>
                    </div>
                
                <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                        <div className="item-container">
                            <img src={polish} className="img-fluid img-thumbnail item-img" alt="menu item" />
                            
                                <h1 className="text-uppercase text-center item-link px-3"onclick="clickFunction()">menu item</h1>
                           
                        </div>
                    </div>
               
                 <div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
                        <div className="item-container">
                            <img src={desert} className="img-fluid img-thumbnail item-img" alt="menu item" />
                            
                                <h1 className="text-uppercase text-center item-link px-3" onclick="clickFunction()">menu item</h1>
                          
                        </div>
                    </div>
            </div>
        </div>
    </section>
           </React.Fragment>

			);
	}
}
export default Menu;
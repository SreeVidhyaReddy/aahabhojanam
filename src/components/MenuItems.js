import React from 'react';
import logo from "../assets/images/logo.jpg";

class MenuItems extends React.Component{
constructor(props){
	super(props);
  this.state={
image:"../assets/images/logo.jpg",
name:"Paneer",
Price: "18"

  }
}

	render(){
		let {name,price,image}=this.props;
		return(
         <React.Fragment>
         <div id="body-content">
           <div className="recipe-menu " id="body">
              <div className="recipe">
                 <p className="name">{name}</p>
                  <img src={image}/>
                   <p className="price"><span>$ </span>{price}</p>
     
                </div>
             </div>
          </div>
         </React.Fragment>
			)
	}
}
export default MenuItems;
import React from 'react';
import logo from "../assets/images/logo.jpg";
import MenuItems from "../components/MenuItems.js";


class MenuList extends React.Component{
	constructor(props){
	super(props);
  this.state={
image:"../assets/images/logo.jpg",
name:"Paneer",
Price: "18"

  }
}
	render(){
		return(
          <React.Fragment>
          <nav className="navbar" id="navbar">
  
  <a href="#">
    <img src={logo} height='50' width='50' class="rounded-circle " / >
  </a>
  <a class="btnStyle popup-map" button id="submit" href="">Location</a>
  
  
</nav>
          
    <MenuItems name="Biryani" price="20" image={logo}  />
         <MenuItems name="PannerKabab" price="18" image={logo} />
    <MenuItems name="Macaroon" price="8" image={logo}  />
 <MenuItems name="Biryani" price="20" image={logo}  />
         <MenuItems name="PannerKabab" price="18" image={logo} />
    <MenuItems name="Macaroon" price="8" image={logo}  />
 <MenuItems name="Biryani" price="20" image={logo}  />
         <MenuItems name="PannerKabab" price="18" image={logo} />
    <MenuItems name="Macaroon" price="8" image={logo}  />


          </React.Fragment>
			)
	}
}
export default MenuList;
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
          
          <div className='container'>
            <div className='row'>
              <div className='col-3'>
              <MenuItems name="Biryani" price="20" image={logo}  />
              </div>
              <div className='col-3'>
              <MenuItems name="Biryani" price="20" image={logo}  />
              </div>
              <div className='col-3'>
              <MenuItems name="Biryani" price="20" image={logo}  />
              </div>
              <div className='col-3'>
              <MenuItems name="Biryani" price="20" image={logo}  />
              </div>
              <div className='col-3'>
              <MenuItems name="Biryani" price="20" image={logo}  />
              </div>
              <div className='col-3'>
              <MenuItems name="Biryani" price="20" image={logo}  />
              </div>
              <div className='col-3'>
              <MenuItems name="Biryani" price="20" image={logo}  />
              </div>
              <div className='col-3'>
              <MenuItems name="Biryani" price="20" image={logo}  />
              </div>
            </div>
          </div>
        


          </React.Fragment>
			)
	}
}
export default MenuList;
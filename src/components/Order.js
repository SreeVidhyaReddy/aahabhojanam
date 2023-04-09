import React from 'react';
import logo from "../assets/images/logo.jpg" ;


class Order extends React.Component{
    render(){
        return(
            <React.Fragment>
           <nav className="navbar">
        
        <a href="index.html">
          <img src={ logo} alt="logo" height='50' width='50' className="rounded-circle "/>
        </a>
        <div><a href='#cart'>
            <label for="cartToggle" className="toggleCart btnStyle btnStyle2"><i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <i className="fa fa-circle" aria-hidden="true"></i>
            <span className="num"></span>
        </label></a>
          </div>
        </nav>
  <div className=" py-5 items-container">
    <div className="container my-5">
      <div className="row items"></div>
    </div>
  </div>
  <div className="cart-overlay" id="cart">
    <div className="cart">
      <span className="close-cart"><i className="fas fa-window-close"></i></span>
      <h2>Your cart</h2>
      <div className="cart-content">hello</div>
      <div className="cart-footer">
        <h3>Your cart total:Rs. <span className="cart-total"></span></h3>
        <button className="btn btn-danger checkout-btn" type="button" className="btn btn-primary" data-toggle="modal"
          data-target="#orderconfirmModal">
          Checkout
        </button>
      </div>
    </div>
  </div>

  <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center" id="exampleModalCenterTitle"></h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
       <div className="mainTP"></div>
      </div>
    </div>
  </div>


  <div className="modal fade mymodal" id="orderconfirmModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <form className="savingorder">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              confirm order
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body d-flex">
            <div className="added-items">
              
            </div>
            <div className="details-form">
              <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp"
                  placeholder="Enter your name" required minlength="3"  maxlength="1000"/>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Address</label>
                <input type="text" className="form-control" id="address" name="address" placeholder="Enter your address" required minlength="6"  maxlength="1000" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">phone</label>
                <input type="text" className="form-control" id="phone" name="phone" pattern="[+][1][0-9]{10}" placeholder="Enter your phone no. (+16470000000)" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-success order-success"  onclick="order()">
              confirm order
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
            </React.Fragment>
        )
    }
}
export default Order;
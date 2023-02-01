import React from 'react'
import  "./Nav.css"
import { Outlet, Link } from "react-router-dom";
function Nav() {
  return (
    <div>
       <div className="main">
        <div className="heading"> <h3>ShoppingCart</h3></div>
        <div className="nav-title">
            <div className="home"><Link to="/" style={{color:"white" ,textDecoration:"none"}}>Home</Link></div>
            <div className="cart">  <Link to="/cart" style={{color:"white" ,textDecoration:"none"}}>Cart</Link></div>
        </div>
        </div> 
    </div>
  )
}

export default Nav;

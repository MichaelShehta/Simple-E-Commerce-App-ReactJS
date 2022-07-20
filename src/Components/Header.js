import React from "react";
import { Link , NavLink } from "react-router-dom";


const Header = () => {
  return (
    
    <div>
      
      <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor:"#b6fbff"}}>
        <div className="container-fluid">
          <Link className="navbar-brand text-black fw-bold" to="/">
            Souq.com
          </Link>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-black fw-bold" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black fw-bold" to="/cart">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-black fw-bold" to="/menu">
                 Menu
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-black fw-bold" to="/admin">
                 Admin
                </Link>
              </li>
              <li className="nav-item " style={{position:"absolute",right:"0",marginRight:"100px"}}>
                <Link className="nav-link text-black fw-bold " to="/login">
                Login 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
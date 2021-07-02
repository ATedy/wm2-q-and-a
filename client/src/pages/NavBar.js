import React from "react";
// import Css from './app.css'
// import './NavBar.css';
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="navBar">
      <div className="search">
        <p>Q U E S T</p>
        <div className="search-bar">
          <input type="text" placeholder="Search.." className="prompt" />
          <button type="submit">Enter</button>
          <i className="search icon"></i>
        </div>
      </div>

      <div className="login">
        <Link className="mr-3 navLinks" to="/SignUp">
          Sign Up
        </Link>
        <Link className="navLinks" to="/login">
          Login
        </Link>
      </div>
    </Navbar>
  );
};

export default NavBar;

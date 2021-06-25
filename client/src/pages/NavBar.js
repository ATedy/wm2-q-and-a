import React from "react";
// import Css from './app.css'
// import './NavBar.css';
import {Navbar, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <p>Q U E S T</p>
      <div>
        <input type="text" placeholder="Search.." className="prompt" />
        <button type="submit">Submit</button>
        <i className="search icon"></i>
      </div>
      <div>
        <Link className="mr-3 navLinks" to="/SignUp">
          Sign Up
        </Link>
        <Link className="navLinks" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

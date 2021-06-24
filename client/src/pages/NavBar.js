import React from 'react';
// import Css from './app.css'
// import './NavBar.css';
import {Navbar, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
  
   <nav className="navBar">
       {/* <img
      className="img-logo"
      src="https://images-platform.99static.com/O1gSHEEF4AvFdCYpaeSzFp7iYY0=/500x500/top/smart/99designs-contests-attachments/26/26007/attachment_26007734"
      alt="logo-image"
    /> */}
      <div>
        <div>
          <input
            type="text"
            placeholder="Search.."
            className="prompt"
          />
          <button type="submit">
          
            Submit
          </button>
          <i className="search icon"></i>
        </div>
      </div>
      <p>Q U E S T</p>
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
}

export default NavBar;

  
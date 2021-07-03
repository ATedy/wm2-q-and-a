import React from "react";
// import Css from './app.css'
// import './NavBar.css';
import {Navbar, Container} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import Auth from "../utility/Auth";


const NavBar = () => {
  let history = useHistory();
  return (
    <nav className="navBar">
      <p className="logoName">Q U E S T</p>
      <div>
        <input type="text" placeholder="Search.." className="prompt" />
        <button type="submit" >Search</button>
        <i className="search icon"></i>
      </div>
      <div>
       {!Auth.isAuthorized() ? <> <Link className="mr-3 navLinks" to="/SignUp">
          Sign Up
          
        </Link>
        <Link className="navLinks" to="/login">
        Login
      </Link>
      </>
        :
        <>
       <p>Welcome {localStorage.getItem("email")}</p>
       <button onClick={() =>{
         Auth.logout();
         history.push("/")
       }}>Log Out </button>
      
        </>
        }
       
      </div>
    </nav>
  );
};

export default NavBar;

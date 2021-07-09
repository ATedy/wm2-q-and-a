import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import Auth from '../utility/Auth';
import Search from './Search';

const NavBar = () => {
  let history = useHistory();
  let userName = localStorage.getItem('email').replace('@gmail.com', 'hi');
  console.log(userName);
  return (
    <nav className="navBar">
      <p className="logoName">Q U E S T</p>
      <div>
      <Search />
        {/* <input
          id="livesearch"
          type="text"
          placeholder="Search.."
          className="prompt"
        /> */}
        <button type="submit">Search</button>
        <i className="search icon"></i>
      </div>
      <div>
        {!Auth.isAuthorized() ? (
          <>
            {' '}
            <Link className="mr-3 navLinks" to="/SignUp">
              Sign Up
            </Link>
            <Link className="navLinks" to="/login">
              Login
            </Link>
          </>
        ) : (
          <>
            <p>
              Welcome {userName.charAt(0).toUpperCase() + userName.slice(1)}
            </p>
            <button
              onClick={() => {
                Auth.logout();
                history.push('/');
              }}
            >
              Log Out{' '}
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
export default NavBar;

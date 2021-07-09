import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import Auth from '../utility/Auth';
import Search from './Search';

const NavBar = () => {
  let history = useHistory();
  let userName = localStorage.getItem("email");
  // let trimmedName = userName.replace('@gmail.com', '');
  return (
    <nav className="navBar">
      <p className="logoName">Q U E S T</p>
      <div>
        <Search />
        <button type="submit" onClick={() => history.push('/SearchAnswers')}>
          Search
        </button>
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

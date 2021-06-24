import {Link, useHistory} from "react-router-dom";
import React, {useState} from 'react';
const Login = () => { 
  let history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleName = (event) => {
    const {value} = event.target;
    setName(value);
  };
 const handleEmail = (event) => {
   const {value} = event.target;
   setEmail(value);
 };
  const handlePassword = (event) => {
    const {value} = event.target;
    setPassword(value);
  };
    const handleSubmit = async (event) => {
      event.preventDefault();
      const newUser = {name, email, password};
      const res = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {'Content-Type': 'application/json'},
      });
      console.log(res);
      history.push('/');
    };
  return (
    <div className="signUpContainer">
      <form className="signUpForm">
        <h1>Sign Up</h1>
        <p>
          Join the community to Ask and Answer questions from fellow developers
        </p>
        <input type="text" placeholder="Name" onChange={handleName} />
        <input type="text" placeholder="Email" onChange={handleEmail} />
        <input
          type="Password"
          placeholder="password"
          onChange={handlePassword}
        />
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
  }
export default Login;
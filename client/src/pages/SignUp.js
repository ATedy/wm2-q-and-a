import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

const Login = (props) => { 
let history = useHistory();

const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onAddUser = async (newUser) => {
    console.log("hiiiii")
;    const addedUser = await fetch("/api/users", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(newUser),
    });

    console.log(addedUser);

  
  };
 
  const submitHandler = (e) => {
    e.preventDefault();
   console.log(e)
    onAddUser({name, email, password});
    console.log(`${name}, ${email}, ${password}`);

    setName("");
    setEmail("");
    setPassword("");
    
  };

  // onClick={(e) =>{
  //   e.preventDefault();
  //   history.push("/")}}
  
  return ( 
  <div className="signUpContainer">
    <form className="signUpForm" onSubmit={submitHandler} method="post" action="/OpenQuestions">
      <h1>Sign Up</h1>
      <p>
        Join the community to Ask and Answer questions from fellow developers
      </p>
      <input type="text" placeholder="Username"  onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Email"   onChange={(e) => setEmail(e.target.value)} />
      <input type="Password" placeholder="password"  onChange={(e) => setPassword(e.target.value)} />
      {/* <input type="submit" value="Sign Up"/> */}
      <button type="submit"  onClick={(e) =>{
        e.preventDefault();
        history.push("/OpenQuestions")}}>Sign Up</button>
    </form>
    <p>
      Already have an account? <Link to="/login">Login</Link>
    </p>
  </div>
);
  }

export default Login;

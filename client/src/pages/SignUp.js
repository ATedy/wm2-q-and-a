import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

const signUp = (props) => {
  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onAddUser = async (newUser) => {
    const addedUser = await fetch("/api/signUp", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(newUser),
    }).then((response) => console.log(response));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(!name || !email || !password){
      alert('Please enter fill all the required fields')
      history.push("/signUp");
    } else {
      if (name.length < 3) {
        history.push("/signUp");
        alert('Please username is too short');

        setEmail("");
      } else if (password.length < 6) {

        alert('Please password is too short');
        setEmail("");
        history.push("/signUp");
      } else {
        onAddUser({name, email, password});
        console.log(`${name}, ${email}, ${password}`);
        history.push("/OpenQuestions");
        setName("");
        setEmail("");
        setPassword("");
      }
    }
    
   
  };

  return (
    <div className="signUpContainer">
      <form
        className="signUpForm"
        onSubmit={submitHandler}
        method="post"
        action="/OpenQuestions"
      >
        <h1>Sign Up</h1>
        <p>
          Join the community to Ask and Answer questions from fellow developers
        </p>
        <input
         required
          type="text"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <input
        required
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
        required
          type="Password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {/* <input type="submit" value="Sign Up"/> */}
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>

    </div>
  );
};



export default signUp;

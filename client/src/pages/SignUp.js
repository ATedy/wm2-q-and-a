import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

const signUp = () => {
  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onAddUser = async (newUser) => {

    axios
      .post("/api/signUp", newUser)
      .then((response) => console.log(response));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please enter fill all the required fields");
      history.push("/signUp");
    } else {
      if (name.length < 3) {
        history.push("/signUp");
        alert("Please username is too short");

        setEmail("");
      } else if (password.length < 6) {
        alert("Please password is too short");
        setEmail("");
        history.push("/signUp");
      } else {
        onAddUser({name, email, password});
        console.log(`${name}, ${email}, ${password}`);
        history.push("/Login");
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
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>

      <p onClick={() => history.push('/')}>
        Cancel 
      </p>


    </div>
  );
};

export default signUp;

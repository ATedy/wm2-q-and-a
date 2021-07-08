import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import Auth from "../utility/Auth";

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (user) => {
    axios
      .post("/api/login", user)
      .then((response) => {
        Auth.setToken(response.data.token);
        localStorage.setItem("email", response.data.email);
        history.push("/");
      })
      .catch((error) => {
        setError("Login not Successful");
        console.log(error);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    login({email, password});
  };

  return (
    <div className="loginContainer">
      <form
        className="loginForm"
        onSubmit={submitHandler}
        method="post"
        action="/OpenQuestions"
      >
        <h1>Log in</h1>
        <p>Log in to Ask a Question</p>

        <input
          required
          autoComplete="off"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          autoComplete="off"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error ? <p>{error}</p> : null}

        <button type="submit">Log in</button>
      </form>

      <p>
        Don't have an account?<Link to="/SignUp">Sign Up</Link>
      </p>
      <p onClick={() => history.push('/')}>
        Cancel 
      </p>
    </div>
  );
};

export default Login;

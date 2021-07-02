import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const login = async (user) => {
    const searchedUser = await fetch("/api/login", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(user),
    }).then((response) => {
      console.log(response);
      if (!response.ok) {
        alert("wrong password/email");
        history.push("/Login");
        setEmail("");
        setPassword("");
      } else {
        setEmail("");
        setPassword("");

        history.push("/OpenQuestions");
      }
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
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log in</button>
      </form>
      {/* <p>Forgot your password?</p> */}
      <p>
        Don't have an account?<Link to="/SignUp">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;

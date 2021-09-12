import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

const signUp = () => {
  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [emptyFields, setEmptyFields] = useState(false);
  const [shortName, setShortName] = useState(false);
  const [shortPassword, setShortPassword] = useState(false);



  const onAddUser = async (newUser) => {

    axios
      .post("/api/signUp", newUser)
      .then((response) => console.log(response));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setEmptyFields(true);
      history.push("/signUp");
    } else {
      if (name.length < 3) {
        setShortName(true);
        history.push("/signUp");

        setEmail("");
      } else if (password.length < 6) {
        setShortPassword(true);
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
        <p className="errorMsg">{shortName ? "User name should be more 3 characters": null}</p>
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
        <p className="errorMsg">{shortPassword ? "Password should be more 6 characters": null}</p>
        <button className="submitBtn" type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>

      <p className="cancel" onClick={() => history.push('/')}>
        Cancel 
      </p>


    </div>
  );
};

export default signUp;

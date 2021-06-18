import {Link} from "react-router-dom";

const Login = () => (
  <div className="signUpContainer">
    <form className="signUpForm">
      <h1>Sign Up</h1>
      <p>
        Join the community to Ask and Answer questions from fellow developers
      </p>
      <input type="text" placeholder="Username"  />
      <input type="text" placeholder="Email"  />
      <input type="Password" placeholder="password"  />
      <input type="submit" value="Sign Up" />
    </form>
    <p>
      Already have an account? <Link to="/login">Login</Link>
    </p>
  </div>
);

export default Login;

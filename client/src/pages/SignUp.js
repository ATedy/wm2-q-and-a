import {Link} from "react-router-dom";

const Login = () => (
  <div>
    <form className="loginForm">
      <h1>Sign Up</h1>
      <p>
        Join the community to Ask and Answer questions from fellow developers
      </p>
      <input type="text" placeholder="Username" required />
      <input type="text" placeholder="Email" required />
      <input type="password" placeholder="password" required />
    </form>
    <p>Already have an account?Login</p>
  </div>
);

export default Login;

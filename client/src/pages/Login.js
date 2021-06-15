import {Link} from "react-router-dom";

const Login = () => (
  <div>
    <form className="loginForm">
      <h1>Log in</h1>
      <p>Log in to Ask a Question</p>

      <input type="text" placeholder="Email" required />
      <input type="password" placeholder="password" required />
      <input type="submit" value="Log in" />
    </form>
    <p>Forgot your password?</p>
		<p>Don't have an account?Sign up</p>
  </div>
);

export default Login;

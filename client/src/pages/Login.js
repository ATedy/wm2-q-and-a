import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

const Login = () => { 
 
    let history = useHistory();

  return (<div className="loginContainer">
    <form className="loginForm">
      <h1>Log in</h1>
      <p>Log in to Ask a Question</p>

      <input type="text" placeholder="Email"  />
      <input type="password" placeholder="password"  />
     
      <button type="submit" onClick={() =>history.push("/")}>Log in</button>
    </form>
    <p>Forgot your password?</p>
    <p>
      Don't have an account?<Link to="/SignUp">Sign Up</Link>
    </p>
  </div>
);
}

export default Login;

 {/* <input type="submit" value="Log in" onClick={alert("hhhhhhhh")}/> */}

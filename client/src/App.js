
import {Route, Switch, Link} from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";


const App = () => {
  return (
    <main>
      {/* <nav className="navBar">
        <p>Quest</p>
        <div>
          <Link className="mr-3 navLinks" to="/SignUp">
            Sign Up
          </Link>
          <Link className="navLinks" to="/login">
            Login
          </Link>
        </div>
      </nav> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
      </Switch>
    </main>
  );
};


export default App;

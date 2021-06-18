import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";


const App = () => { 

	return (
	<Switch>
		<Route path="/" exact><Home /></Route>
		<Route path="/login"><Login /></Route>
		<Route path="/SignUp"><SignUp />
		</Route>
	</Switch>
);
	}

export default App;

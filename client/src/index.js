import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Feature from './pages/particles';

import App from "./App";

ReactDOM.render((
	<BrowserRouter>
		<App />
		<Feature />
	</BrowserRouter>
), document.getElementById("root"));
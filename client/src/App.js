import { Route, Switch } from "react-router-dom";
 //import QuestionsForm from './QuestionsForm.js';


import About from "./pages/About";
import Home from "./pages/Home";

const App = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/about/this/site">
      <About />
    </Route>
    {/* <QuestionsForm /> */}
  </Switch>
);

export default App;

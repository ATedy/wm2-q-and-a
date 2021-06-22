
import {Route, Switch, Link} from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import QuestionsForm from "./pages/QuestionsForm";
import OpenQuestions from "./pages/OpenQuestions";
import AnswerForm from "./pages/AnswerForm";


const App = () => {
  // particlesJS.load('particles-js', 'assets/particles.json', function () {
  //   console.log('callback - particles.js config loaded');
  // });
  return (
    <main>
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
        <Route path="/QuestionsForm">
          <QuestionsForm />
        </Route>
        <Route path="/OpenQuestions">
          <OpenQuestions />
        </Route>
         <Route path="/AnswerForm">
          <OpenQuestions />
        </Route>
      </Switch>
    </main>
  );
};


export default App;

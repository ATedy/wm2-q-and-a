
import {Route, Switch, Link, withRouter} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import QuestionsForm from "./pages/QuestionsForm";
import OpenQuestions from "./pages/OpenQuestions";
import AnswerForm from './pages/AnswerForm';
import Answers from './pages/Answers';
import Thanks from './pages/Thanks';

const App = () => {
  return (
    <>
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
        <Route path="/AnswerForm/:questionId">
          <AnswerForm />
        </Route>
        <Route path="/Answers">
          <Answers />
        </Route>
        <Route path="/Thanks">
          <Thanks />
        </Route>
      </Switch>
    </>
  );
};


export default withRouter(App);

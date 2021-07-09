
import {Route, Switch, Link, withRouter} from "react-router-dom";
import {useEffect, useState, useContext} from 'react';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import QuestionsForm from "./pages/QuestionsForm";
import OpenQuestions from "./pages/OpenQuestions";
import AnswerForm from './pages/AnswerForm';
import Answers from './pages/Answers';
import Thanks from './pages/Thanks';
import {SearchResultContext} from "./context/SearchResultContext";
import axios from "axios";

const lowerCaseIncludes = (a, b) => a.toLowerCase().includes(b.toLowerCase())
const filter = (list, query) =>  list.filter(i => lowerCaseIncludes(i.title, query) || lowerCaseIncludes(i.body, query))

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [searchString, setSearchString] = useState("");

    useEffect( () => {
         axios.get('/api/questions').then(res => {setQuestions(filter(res.data, searchString))}).catch(error => console.log(error));
         axios.get('/api/answers').then(res => {setAnswers(filter(res.data, searchString))}).catch(error => console.log(error));
    }, [searchString]);
  
  return (
    <SearchResultContext.Provider value={{questions, answers, setQuestions, setAnswers, searchString, setSearchString}}>
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
    </SearchResultContext.Provider >
  );
};


export default withRouter(App);

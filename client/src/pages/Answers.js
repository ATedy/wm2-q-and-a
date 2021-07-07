import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import React from 'react';
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const OpenQuestions = () => {
      let history = useHistory();
  const [questions, setQuestions] = useState([]);
   const [answers, setAnswers] = useState([]);
  useEffect(async () => {
    try {
      const questions = await fetch('/api/questions');
      const answers = await fetch('/api/answers');
       const questionsunpacked = await questions.json()
       const answersunpacked = await answers.json();
      setQuestions(questionsunpacked);
      setAnswers(answersunpacked);

    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section>
      <header className="header">
        <div>
          <h1 className="openQTitle">All Questions</h1>
          <button
            className="homeBtn"
            type="submit"
            onClick={() => history.push('/')}
          >
            Home
          </button>
        </div>
      </header>
      <div className="things">
        <section className="sectionContainerAnswers">
          {questions.map((question, index) => {
            return (
              <li key={index}>
                <div className="what">
                  <span className="answerTitle">
                    Question: {question.title}{' '}
                  </span>
                  <br></br>
                  <span className="answerBody"> {question.body}</span>
                  <br></br>
                  <br></br>
                  <div>
                    {answers.map((answer, i) => {
                       if(question.id === answer.questions_id){
                      console.log(answer);
                      return (
                        <div key={i}>
                          <span className="answerBody">
                            {' '}
                            Answer: {answer.answer_title}
                          </span>
                          <br></br>
                          <span className="answerBody">
                            {' '}
                            
                            {parse(answer.answer_body)}
              
                          </span>
                        </div>
                      )}
                    })}
                  </div>
                  <Link to={`/AnswerForm/${question.id}`}>
                    <button className="btn" type="submit">
                      Answer!
                    </button>
                  </Link>
                </div>
              </li>
            );
          })}
        </section>
      </div>
    </section>
  );
};
export default OpenQuestions;


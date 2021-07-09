import {useEffect, useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import React from 'react';
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import {SearchResultContext} from "../context/SearchResultContext";

const SearchAnswers = () => {
  const {questions, answers, setQuestions, setAnswers} =
    useContext(SearchResultContext);
  let history = useHistory();
  return (
    <section>
      <header className="header">
        <div>
          <h1 className="openQTitle">Searched Questions</h1>
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
                  <span className="answerBody">{parse(question.body)}</span>
                  <br></br>
                  <br></br>
                  <div>
                    {answers.map((answer, i) => {
                      if (question.id === answer.questions_id) {
                        console.log(answer);
                        return (
                          <div key={i} className="abody">
                            <span className="answerBody">
                              {' '}
                              {answer.answer_title}
                            </span>
                            <br></br>
                            <span className="answerBody">
                              {' '}
                              {parse(answer.answer_body)}
                            </span>
                          </div>
                        );
                      }
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
export default SearchAnswers;


import {useHistory, Link} from 'react-router-dom';
import React, {useContext,useEffect, useState} from 'react';
import parse from "html-react-parser";
import Auth from "../utility/Auth";
import Editor from './Editor';
import ImgurUploaderInit from 'ckeditor5-imgur-uploader';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import {SearchResultContext} from "../context/SearchResultContext";


const OpenQuestions = () => {
const test = useContext(SearchResultContext);
console.log({test})
 const ImgurUploader = ImgurUploaderInit({clientID: 'b1bdfd84072fbe7'});

  const [questions, setQuestions] = useState([]);
      let history = useHistory();
  
  useEffect(async () => {
    try {
      const res = await fetch('/api/questions');
      const data = await res.json();
      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section>
    <header className="header">
      <div>
        <h1 className="openQTitle">Open Questions</h1>
        <button className="homeBtn" type="submit" onClick={() => history.push('/')}>
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
              <span className="answerTitle">Question: <br></br> {question.title} </span>
              <br></br>
              {console.log(question.body)}
              <span className="answerBody">
                {/* <Editor readOnly={true} data={question.body} extraPlugin={[ImgurUploader]} /> */}
                {/* <CKEditor
                  editor={ClassicEditor}
                  data={question.body}
                  config={{
                    extraPlugins: [ImgurUploader],
                    readOnly: true,
                  }}
                /> */}
                {parse(question.body)}
                {parse(question.tags)}
              </span>
              <Link to={`/AnswerForm/${question.id}`}> </Link>
              <br></br>
              <Link
                to={
                  Auth.isAuthorized() ? `/AnswerForm/${question.id}` : '/Login'
                }
              >
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


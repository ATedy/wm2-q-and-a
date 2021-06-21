import {useHistory} from 'react-router-dom';
import React, {useState} from 'react';

const AnswerForm = () => {
  let history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitle = (event) => {
    const {value} = event.target;
    setTitle(value);
  };
  const handleBody = (event) => {
    const {value} = event.target;
    setBody(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newAnswer = {title, body};
    const res = await fetch('/api/answers', {
      method: 'POST',
      body: JSON.stringify(newAnswer),
      headers: {'Content-Type': 'application/json'},
    });
    console.log(res);
  };

  return (
    <div className="answerFormContainer">
      <form className="answerForm">
        <h1>Do you have the answer?</h1>
        <h3>Title</h3>
        <h6>Try to be as specific as you can!</h6>
        <input
          type="text"
          placeholder="Your loop not iterating"
          onChange={handleTitle}
        />
        <h3>Body</h3>
        <h6>
          Include all the information you can to help answer the question.{' '}
        </h6>
        <input
          type="text"
          placeholder="I was stuck too, but then... "
          onChange={handleBody}
        />
      </form>
      <button className="btn" type="submit" onClick={handleSubmit}>
        Answer!
      </button>
      <button className="btn" type="submit" onClick={() => history.push('/')}>
        Cancel
      </button>
    </div>
  );
};

export default AnswerForm;

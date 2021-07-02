import {useHistory} from 'react-router-dom';

const Thanks = (props) => {
  let history = useHistory();

  return (
    <div className="questionFormContainer">
      <h1 className="thanksTitle">Thank you!</h1>
      <button className="btn" type="submit" onClick={() => history.push('/OpenQuestions')}>
        Head over to the open questions!
      </button>
      <button className="btn" type="submit" onClick={() => history.push('/Answers')}>
        Answered questions...
      </button>
      <button className="btn" type="submit" onClick={() => history.push('/')}>
        Home
      </button>
    </div>
  );
};

export default Thanks;

import {useHistory, useParams} from 'react-router-dom';
import React, {useState} from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ImgurUploaderInit from 'ckeditor5-imgur-uploader';


const AnswerForm = () => {
    const ImgurUploader = ImgurUploaderInit({
      clientID: 'b1bdfd84072fbe7',
    });
  let history = useHistory();
  let { questionId } = useParams();
  const [title, setTitle] = useState('');
  const [data, setData] = useState('');

  const handleTitle = (event) => {
    const {value} = event.target;
    setTitle(value);
  };

  const handleData = (event, editor) => {
    const value = editor.getData();
    setData(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newAnswer = {questionId, title, body: data};
    console.log(data)
    const res = await fetch('/api/answers', {
      method: 'POST',
      body: JSON.stringify(newAnswer),
      headers: {'Content-Type': 'application/json'},
  
    });
    history.push('/Thanks');
  };

  return (
    <section>
      <div className="answerFormContainer">
        <form className="answerForm">
          <h1>Do you have the answer?</h1>
          <br></br>
          <h3>Title</h3>
          <h6>Try to be as specific as you can!</h6>
          <input
            type="text"
            placeholder="Your loop is not iterating because..."
            onChange={handleTitle}
          />
          <h3>Answer</h3>
          <h6>Add in all the information you can to help someone out!</h6>
          <div className="form">
            <CKEditor
              editor={ClassicEditor}
              data={data}
              onChange={handleData}
              config={{
                extraPlugins: [ImgurUploader],
              }}
            />
          </div>
        </form>
        <button className="butn" type="submit" onClick={handleSubmit}>
          Answer!
        </button>
        <button
          className="butn"
          type="submit"
          onClick={() => history.push('/')}
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

export default AnswerForm;

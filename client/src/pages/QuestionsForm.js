import {useHistory} from 'react-router-dom';
import React, {useState} from 'react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { CKEditor } from '@ckeditor/ckeditor5-react';

const QuestionsForm = (props) => {
    let history = useHistory();
    const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const handleTitle = (event) =>{
    const {value}=event.target;
    setTitle(value);
  };
   const handleBody = (event) => {
     const {value} = event.target;
     setBody(value);
   };
     const handleTags = (event) => {
       const {value} = event.target;
       setTags(value);
     };
     const handleSubmit = async(event) => {
       event.preventDefault();
       const newQuestion = {title, body, tags};
         console.log(newQuestion)
       const res = await fetch('/api/questions', {
         method: "POST", 
         body: JSON.stringify(newQuestion),
         headers: {"Content-Type": "application/json"},
       });
       console.log(newQuestion)
       history.push('/Thanks');
     }

  return (
    <div className="questionFormContainer">
      <form className="questionForm">
        <h1>Do you have a question?</h1>
        <p>Ask the CYF community...</p>
        <h3>Title</h3>
        <h6>Try to be as specific as you can!</h6>
        <input
          type="text"
          placeholder="I keep getting stuck on my for loop."
          onChange={handleTitle}
        />
        <h3>Body</h3>
        <h6>
          Include all the information someone needs to answer your question.
          Sumarise the problem and what you have tried to resolve it.{' '}
        </h6>
        {/* <div className="editor"> */}
          {/* <CKEditor
          editor={classic}
          data={text}
          onChange={(event, editor)=>{
            const data = editor.getData()
            setText(data)
          }}
          /> */}
        {/* </div> */}
        <input
          type="text"
          placeholder="My for loop is not iterating properly, please see in the picture what I have written. "
          onChange={handleBody}
        />
        <h3>Upload file</h3>
        <h6>
          Upload a screenshots or a text file so someone can better understand
          the issue.
        </h6>
        <input type="img" />
        <button type="submit">Upload</button>
        <h3>Tags</h3>
        <h6>Add up to 5 tags to describe what your question is about.</h6>
        <input
          type="text"
          placeholder="Javascript-Module1-Week1, forLoops, loops, iteration"
          onChange={handleTags}
        />
      </form>
        <button className="btn" type="submit" onClick={handleSubmit}>
          Ask!
        </button>
      <button className="btn" type="submit" onClick={() => history.push('/')}>
        Cancel
      </button>
    </div>
  );
};

export default QuestionsForm;

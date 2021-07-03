import { useHistory } from "react-router-dom";
import React, { useState } from "react";
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { CKEditor } from '@ckeditor/ckeditor5-react';

const QuestionsForm = (props) => {
  console.log(props.history);
  let history = useHistory();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const handleTitle = (event) => {
    const { value } = event.target;
    setTitle(value);
  };
  const handleBody = (event) => {
    const { value } = event.target;
    setBody(value);
  };
  const handleTags = (event) => {
    const { value } = event.target;
    setTags(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newQuestion = { title, body, tags };
    const res = await fetch("/api/questions", {
      method: "POST",
      body: JSON.stringify(newQuestion),
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
    history.push("/OpenQuestions");
  };

  return (
    <div className="questionFormContainer">
      <form className="questionForm">
        <h1 className="question-form-header">Ask Your Question...</h1>
        {/* <h6>Try to be as specific as you can!</h6> */}
        <h6 className="input-label">Question</h6>
        <input
          type="text"
          placeholder="I keep getting stuck on my for loop.(Try to be as specific as you can!)"
          onChange={handleTitle}
        />

        {/* <h6>
          Include all the information someone needs to answer your question.
          Sumarise the problem and what you have tried to resolve it.{" "}
        </h6> */}
        {/* <div className="editor">
          <CKEditor
          editor={classic}
          data={text}
          onChange={(event, editor)=>{
            const data = editor.getData()
            setText(data)
          }}
          />
        </div> */}
        <h6 className="input-label">Description</h6>
        <textarea
          className="textarea-style"
          placeholder="Include all the information someone needs to answer your question.
          Summarise the problem and what you have tried to resolve it"
          onChange={handleBody}
        />
        <h3>Upload file</h3>
        <h6>
          Upload a screenshots or a text file so someone can better understand
          the issue.
        </h6>
        <h6 className="input-label">image</h6>
        <input type="img" />
        <button type="submit">Upload</button>
        <h3>Tags</h3>
        {/* <h6>Add up to 5 tags to describe what your question is about.</h6> */}
        <input
          type="text"
          placeholder="Add up to 5 tags to describe what your question is about."
          onChange={handleTags}
        />
        <div className="button-form">
          <button className="btn" type="submit" onClick={handleSubmit}>
            Ask!
          </button>
          <button
            className="btn"
            type="submit"
            onClick={() => history.push("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionsForm;

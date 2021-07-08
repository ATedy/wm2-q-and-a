import {useHistory} from "react-router-dom";
import React, {useState} from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";


const QuestionsForm = (props) => {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [data, setData] = useState("");

  const handleTitle = (event) => {
    const {value} = event.target;
    setTitle(value);
  };
  const handleTags = (event) => {
    const {value} = event.target;
    setTags(value);
  };

  const handleData = (event, editor) => {
    console.log(event);
    console.log(editor);
    console.log(editor.getData());

    const value = editor.getData();

    setData(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);
    const newQuestion = {title, body: data, tags};
    const res = await fetch("/api/questions", {
      method: "POST",
      body: JSON.stringify(newQuestion),
      headers: {"Content-Type": "application/json"},
    });
    history.push("/Thanks");
  };

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
          What is the problem and what you have tried to resolve it.{" "}
        </h6>
        <div className="form">
          <CKEditor
            editor={ClassicEditor}
            data={data}
            onReady={(editor) => {
              console.log("Type your question here", editor);
            }}
            onChange={handleData}
          />
        </div>
        <h3>Tags</h3>
        <h6>Add up to 5 tags to describe what your question is about.</h6>
        <input
          type="text"
          placeholder="Javascript-Module1-Week1, forLoops, loops, iteration"
          onChange={handleTags}
        />
      </form>
      <div className="button-form">
        <button className="btn" type="submit" onClick={handleSubmit}>
          Ask!
        </button>
        <button className="btn" type="submit" onClick={() => history.push("/")}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default QuestionsForm;

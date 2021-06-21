import {useEffect, useState} from 'react';
import React from 'react';


const OpenQuestions = () => {
  const [questions, setQuestions] = useState();
  useEffect(async () => {
    try {
      const res = await fetch('/api/questions');
      const data = await res.json();
      console.log(data);
      setQuestions(data);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
//   console.log('hello world');
//   console.log(questions);
  return (
    <h1>testing testing</h1>


    //     <div>
    //         <ul>
    //             {questions.map((question, index) => {
    //                 <li index={index}>
    //                   {question}
    //                   {/* not returning question? */}
    //                 </li>;
    //                 console.log(questions[0]);
    //                 console.log(data);
    //             }
    //          )}
    //         </ul>
    //     </div>
  );
};
export default OpenQuestions;

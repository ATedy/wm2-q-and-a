import React from 'react'
import {useEffect, useState} from 'react';

const Search = () => {

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    useEffect(async () => {
      try {
        const questions = await fetch('/api/questions');
        const answers = await fetch('/api/answers');
        const questionsUnpacked = await questions.json();
        const answersUnpacked = await answers.json();
        setQuestions(questionsUnpacked);
        setAnswers(answersUnpacked);
      } catch (error) {
        console.log(error);
      }
    }, []);

    const [q, setQ] = useState([])
    const [a, setA] = useState([])
    const [allQuestions, setAllQuestions] = useState([])
    const [allAns, setAllAns] = useState([])
    const lowerCaseIncludes = (a, b) => a.toLowerCase().includes(b.toLowerCase())
    const filter = (list, query) =>  list.filter(i => lowerCaseIncludes(i.title, query) || lowerCaseIncludes(i.body, query))
        
        
    const handleChange = (event) => {
        const query = event.target.value;
        setAllQuestions(filter(allQuestions, query));
        setAllAns(filter(allAns, query));
     }

return(
        <input  
          id="livesearch"
          type="text"
          placeholder="Search.."
          className="prompt" 
          onChange={handleChange} 
        />
  )
}

export default Search




//     const handleChange = (event) => {
//     const query = event.target.value;
//     const filteredResults = questions.filter((question) =>
//       question.title.toLowerCase().includes(query.toLowerCase())|| question.body.toLowerCase().includes(query.toLowerCase())
//     )
//     setResults(filteredResults);
//   };

//     const handleChange2 = (event) => {
//     const query = event.target.value;
//     const filteredResults2 = answers.filter((answer) =>
//       answer.title.toLowerCase().includes(query.toLowerCase())|| answer.body.toLowerCase().includes(query.toLowerCase())
//     )
//     setResults2(filteredResults2);
//   };

//   return(
//       <div>
//        <input
//           id="livesearch"
//           type="text"
//           placeholder="Search.."
//           className="prompt"
//           onChange={handleChange, handleChange2}
//         />
//         </div>




  
 
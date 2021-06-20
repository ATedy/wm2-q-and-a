import {useEffect, useState} from 'react';
import React from 'react'

const OpenQuestions = () => {
    const [questions, setQuestions] = useState();
    useEffect(async() => {
        try {
              const res = await fetch('/api/questions')
              const data = await res.json();
              console.log(data)
          setQuestions(data);
        } catch (error) {
            console.log(error)
        }
    }, []);
    console.log(questions)
    return (
        <div>
            <ul>
                {questions.map((question, index) => {
                    <li index={index}>
                        {question}
                    {/* not returning question? */}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default OpenQuestions




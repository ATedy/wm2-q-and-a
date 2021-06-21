import {useEffect, useState} from 'react';
import React from 'react';


const OpenQuestions = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const res = await fetch('/api/questions');
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(data);

  return (
    <section>
      <div>
        <h1>testing testing</h1>
      </div>
      {data.map((question, index) => {
              <li index={index}> 
                {question}
              </li>
          })}
    </section>
  );
};
export default OpenQuestions;


  {
    /* <div>
        <ul>
          <li key={data[0]}>{data[0]}</li>
        </ul>
      </div> */
  }

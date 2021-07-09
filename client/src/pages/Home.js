import {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import "./Home.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Auth from "../utility/Auth";
import parse from "html-react-parser";
import moment from "moment";

export function Home() {
  let history = useHistory();
  const [latestQuestions, setLatestQuestions] = useState([]);

 useEffect(async () => {
   try {
     const res = await fetch('/api/questions');
     const data = await res.json();
     if (data.length < 5) {
       setLatestQuestions(data);
     } else {
       let i = 0;
       const latestArr = [];
       while (i < 4) {
         latestArr.push(data[data.length - 1 - i]);
         i = i + 1;
       }
       setLatestQuestions(latestArr);
     }
   } catch (error) {
     console.log(error);
   }
 }, []);

  return (
    <div className="wrapper">
      <NavBar />
      <main>
        <section className="sectionContainer">
          <h3>Hit an error with your code?</h3>
          <p>
            ..or just need some guidance on getting started.
            <br></br>Have no fear, help is near!
          </p>
          <p>All you need to do is ask</p>
          <Link
            className="questionLinks"
            to={Auth.isAuthorized() ? '/QuestionsForm' : '/Login'}
          >
            <button className="btn-center">Ask Question</button>
          </Link>
        </section>
        <section className="sectionContainer">
          <h3>Your community needs you!</h3>
          <p>
            Quest is a community of CYF developers helping each other to resolve
            technical issues.
          </p>
          <p>
            If you are a mentor or even a trainee, you can help unblock someone
            by sharing your knowledge.
          </p>
          <Link className="openlinks" to="/OpenQuestions">
            <button className="btn-center">View Open Question</button>
          </Link>
        </section>
        <section className="answeredSectionContainer">
          <h3>See all answered questions...</h3>
          <p>...maybe someone else has encountered the same error as you!</p>
          <p>Have a look through all the answers</p>
          <Link
            className="questionLinks"
            to={Auth.isAuthorized() ? '/Answers' : '/Login'}
          >
            <button className="btn-center">All Answers</button>
          </Link>
        </section>
        <section className="sectionContainer">
          <h3>Latest questions</h3>
          <ul className="list-group">
            {latestQuestions.map((question, index) => (
              <li
                onClick={() => {
                  Auth.isAuthorized()
                    ? history.push("/OpenQuestions")
                    : history.push("/Login");
                }}
                key={index}
                className="list-group-item list-group-item-action"
              >
                {parse(question.body)}
                <span>{question.created_at.slice(0, 10)}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Home;

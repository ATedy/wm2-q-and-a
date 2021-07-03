import {Link} from 'react-router-dom';
import './Home.css';
import Feature from './particles';
import NavBar from './NavBar';
import Footer from './Footer';


export function Home(props) {
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
          <Link className="questionLinks" to="/QuestionsForm">
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
          <Link to="/Answers">
            <button className="btn-center">All Answers</button>
          </Link>
        </section>
        <section className="sectionContainer">
          <h3>Latest questions</h3>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action">
              Question-1
            </li>
            <li className="list-group-item list-group-item-action">
              Question-2
            </li>
            <li className="list-group-item list-group-item-action">
              Question-3
            </li>
            <li className="list-group-item list-group-item-action">
              Question-4
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

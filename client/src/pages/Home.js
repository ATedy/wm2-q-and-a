import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import logo from "./logo.svg";

export function Home() {
  const [message, setMessage] = useState("Loading...");
  const [submit, setSubmit] = useState("");

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(res.statusText);
  //       }
  //       return res.json();
  //     })
  //     .then((body) => {
  //       console.log(body[0]);
  //       setMessage(body[0].questions);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <main role="main">
      <header className="header">
        <img
          className="img-logo"
          src="https://images-platform.99static.com/O1gSHEEF4AvFdCYpaeSzFp7iYY0=/500x500/top/smart/99designs-contests-attachments/26/26007/attachment_26007734"
          alt="logo-image"
        />

        <nav className="navBar">
          <div className="ui search">
            <div ui icon-input>
              <input
                type="text"
                placeholder="Search.."
                className="prompt"
                onClick="{}"
              />
              <button type="submit" onClick="{}">
                {" "}
                Submit
              </button>
              <i className="search icon"></i>
            </div>
          </div>
          <p>Q U E S T</p>

          <div>
            <Link className="mr-3 navLinks" to="/SignUp">
              Sign Up
            </Link>
            <Link className="navLinks" to="/login">
              Login
            </Link>
          </div>
        </nav>
      </header>

      <div>
        {/* <img className="logo" data-qa="logo" src={logo} alt="Just the React logo" />
				<h1 className="message" data-qa="message">{message}</h1> */}
        <section className="sectionContainer">
          <h3>Hit an error with your code?</h3>
          <p>
            ..or just need some guidance on getting started. Have no fear help
            is near!
          </p>
          <p>All you need to do is ask</p>
          <button>Ask Question</button>
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
          <button className="open-question-button">View Open Question</button>
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
        <section className="footer-section">
          <footer className="list-footer">
            <ul className="list">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>website</li>
              <li>Copyright</li>
            </ul>
          </footer>
        </section>
      </div>
    </main>
  );
}

export default Home;

import React from "react";
const Footer = () => {
  return (
    <footer className="list-footer">
      <ul className="list">
        <li>
          <a href="https://www.facebook.com/codeyourfuture.io/" target="_blank">
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/codeyourfuture_/?hl=en"
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/CodeYourFuture?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <li>
          <a href="https://codeyourfuture.io/" target="_blank">
            website
          </a>
        </li>
      </ul>
      <p className="copyright">Copyright &copy; 2021 CYF All Rights Reserved</p>
    </footer>
  );
};
export default Footer;


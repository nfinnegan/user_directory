import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer fixed-bottom">
      <div className="container fluid ">
        <a
          href="https://github.com/nfinnegan"
          className="githubLink"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github icons"></i>nfinnegan
        </a>
      </div>
    </footer>
  );
};

export default Footer;

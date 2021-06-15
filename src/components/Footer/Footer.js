import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer class="footer fixed-bottom">
      <div class="container fluid ">
        <a
          href="https://github.com/nfinnegan"
          class="githubLink"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-github icons"></i>nfinnegan
        </a>
      </div>
    </footer>
  );
};

export default Footer;

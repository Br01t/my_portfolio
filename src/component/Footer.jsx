import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer class="main">
      <div class="social">
        <a href="https://github.com/Br01t?tab=repositories" target="_blank">
          <FaGithubSquare class="fa-2xl" />
        </a>
        <a
          href="https://linkedin.com/in/giacomo-piccinini-69bb36b5"
          target="_blank"
        >
          <FaLinkedin class="fa-2xl" />
        </a>
        <p>Copyright 2023</p>
      </div>
    </footer>
  );
}

export default Footer;

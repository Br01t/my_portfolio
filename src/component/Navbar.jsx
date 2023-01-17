import React from "react";

function Navbar() {
  return (
    <nav>
      <ul>
        <a href="#anchor-about">
          <li>About me</li>
        </a>
        <a href="#anchor-projects">
          <li>Projects</li>
        </a>
        <a href="#anchor-skills">
          <li>Skills</li>
        </a>
        <a href="#anchor-contact">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;

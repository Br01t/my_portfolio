import React from "react";

function About() {
  return (
    <div className="about">
      <a id="anchor-about">
        <h1>About me</h1>
      </a>
      <p>
        I'm Giacomo Piccinini, full-stack developer fresh out of studies,
        currently living in Milan (Italy). After discovering web development, I
        decided to take a professional course that could guide me towards that
        path.
      </p>
      <p>And here I am ready for new opportunities and challenges!</p>
      <p>
        Click{" "}
        <a href="https://br01t.github.io/cv/" target="_blank">
          here
        </a>{" "}
        to see my CV.
      </p>
    </div>
  );
}

export default About;

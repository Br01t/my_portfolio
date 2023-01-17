import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function Skills() {
  return (
    <div className="skills">
      <a id="anchor-skills">
        <h1>SKILLS</h1>
        <p>
          HTML-CSS | Databases | Hosting | Libraries-Frameworks | Basic data
          types | Variables | JavaScript | Code restoration | Code merging |
          Code review | User interaction | DOM | Object-oriented programming |
          JSON | SQL | Java | Analytics | Teamwork | Collaboration |
          Communication | Time management ‌| Confidence | Project management |
          Accountability | Creativity | Critical thinking | Adaptability |
          Problem-solving | Patience
        </p>
      </a>
      <div>
        <ProgressBar striped variant="success" now={75} label={`HTML-CSS`} />
        <ProgressBar
          striped
          variant="info"
          now={85}
          label={`JAVASCRIPT-TYPESCRIPT`}
        />
        <ProgressBar striped variant="warning" now={73} label={`JAVA`} />
        <ProgressBar striped variant="danger" now={78} label={`SQL`} />
      </div>
    </div>
  );
}

export default Skills;

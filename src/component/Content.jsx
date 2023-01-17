import React from "react";
import wave from "../img/Emoji.png";
import me2 from "../img/me2.jpg";

function Content() {
  return (
    <div className="content">
      <main>
        <div>
          <h1>
            Hi <img src={wave} alt="wave" width={40} />
          </h1>
          <h1>I'm Giacomo</h1>
          <h1>Full-Stack Developer Jr</h1>
          <p>
            I work with different languages and tools. Coding is a never-ending
            learning process...
          </p>
        </div>
        <div className="buttons">
          <a href="#anchor-contact">
            <button className="cta hire">HIRE ME</button>
          </a>
          <a href="#anchor-projects">
            <button className="cta project">SEE MY PROJECTS</button>
          </a>
        </div>
      </main>
      <figure>
        <img src={me2} alt="Giacomo Piccinini" className="me-img" width={450} />
        <div className="img-bg"></div>
      </figure>
    </div>
  );
}

export default Content;

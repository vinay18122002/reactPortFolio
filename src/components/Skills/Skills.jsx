import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import html_logo from "./images/html.png";
import js_logo from "./images/javascript.png";
import python_logo from "./images/python.png";
import cplus_logo from "./images/cplus.png";
import c_logo from "./images/c.png";
import react_logo from "./images/react.png";
import "./Skills.css";
function Skills() {
  return (
    <div className="skills_outer_container">
      <div className="sills_inner_container"></div>
      <div className="bar_cards_container">
        <div>
          <ProgressBar percent="85" img={html_logo} />
          <h3>Html CSS</h3>
        </div>
        <div>
          <ProgressBar percent="75" img={js_logo} />
          <h3>JavaScript</h3>
        </div>
        <div>
          <ProgressBar percent="85" img={c_logo} />
          <h3>C</h3>
        </div>
        <div>
          <ProgressBar percent="65" img={cplus_logo} />
          <h3>C++</h3>
        </div>
        <div>
          <ProgressBar percent="45" img={python_logo} />
          <h3>Python</h3>
        </div>
        <div>
          <ProgressBar percent="35" img={react_logo} />
          <h3>React</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;

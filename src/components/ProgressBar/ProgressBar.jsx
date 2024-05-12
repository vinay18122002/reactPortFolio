import React from "react";
import "./ProgressBar.css";
// import html_logo from "./images/html.png";
function ProgressBar({ percent, img }) {
  let progrssCSS = `conic-gradient(rgb(44, 43, 43) 0%, rgb(44, 43, 43) ${percent}%, grey ${percent}%, grey 100%)`;

  return (
    <div
      className="progress_container_outer"
      style={{ background: progrssCSS }}
    >
      <div className="progress_container_inner">
        <img src={img} alt="" className="progress_logo" />
      </div>
    </div>
  );
}

export default ProgressBar;

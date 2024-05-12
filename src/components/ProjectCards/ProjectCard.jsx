import React from "react";
import "./ProjectCard.css";
function ProjectCard({ img, desc, projectName }) {
  return (
    <div className="project_card_container">
      <div className="project_image_container">
        <img src={img} alt="" />
      </div>
      <div className="project_desc_container">
        <h4>{projectName}</h4>
        <p>{desc}</p>
        <div className="project_card_buttons">
          <button>Github</button>
          <button>Demo</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

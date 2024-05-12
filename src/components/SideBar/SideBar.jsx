import React, { useState } from "react";
import profile from "./images/profile_pic.jpeg";
import twitter_logo from "./images/twitter.png";
import twitter_logo1 from "./images/twitter1.png";
import github_logo from "./images/github.png";
import github_logo1 from "./images/github1.png";
import instagram_logo from "./images/instagram.png";
import instagram_logo1 from "./images/instagram1.png";
import linkedin_logo from "./images/linkedin.png";
import linkedin_logo1 from "./images/linkedin1.png";
import youtube_logo from "./images/youtube.png";
import youtube_logo1 from "./images/youtube1.png";
import home_logo from "./images/home.png";
import skills_logo from "./images/skills.png";
import project_logo from "./images/projects.png";
import contact_logo from "./images/contact.png";
import about_logo from "./images/about.png";
import "./SideBar.css";
function SideBar({ onButtonClick }) {
  const [activeDiv, setActiveDiv] = useState(0);

  const handleClick = (index) => {
    const sectionNames = ["home", "skills", "projects", "about", "contact"];
    onButtonClick(sectionNames[index]);
    setActiveDiv((prevActiveDiv) => (index === prevActiveDiv ? null : index));
  };

  const divs = [
    { name: "Home", logo: home_logo },
    { name: "Skills", logo: skills_logo },
    { name: "Projects", logo: project_logo },
    { name: "About", logo: about_logo },
    { name: "Contact", logo: contact_logo },
  ];

  return (
    <div className="side_bar_container">
      <div className="upper_container">
        <img className="profile_picture" src={profile} alt="" />
        <h2>Vinay Partap Singh</h2>
        <div className="social_media_container">
          <img className="logo" src={github_logo1} alt="" srcset="" />
          <img className="logo" src={linkedin_logo1} alt="" srcset="" />
          <img className="logo" src={instagram_logo1} alt="" srcset="" />
          <img className="logo" src={youtube_logo1} alt="" srcset="" />
          <img className="logo twitter" src={twitter_logo1} alt="" srcset="" />
          {/* <Apple /> */}
        </div>
      </div>
      <div className="routes_container">
        {divs.map((div, index) => (
          <div
            key={index}
            className={`route ${activeDiv === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <img
              src={div.logo}
              alt=""
              className={`${div.name.toLowerCase()}_logo routes_logo`}
            />
            <h3>{div.name}</h3>
          </div>
        ))}
      </div>
      <div className="footer_container"></div>
    </div>
  );
}

export default SideBar;

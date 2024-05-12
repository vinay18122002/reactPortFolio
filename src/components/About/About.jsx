import React from "react";
import "./About.css";

function About() {
  const personalDetails = {
    name: "Vinay Partap Singh",
    city: "Jammu and Kashmir UT",
    age: "21 years",
    degree: "B-tech Computer Science and Engineering",
    email: "vinaypartapsingh1812@gmail.com",
  };
  const educationDetails = {
    btech: "Yeshwant Rao Chavan college of engineering (Nagpur)",
    hsecondary: "Jawahar Navodaya Vidyalaya Nud (Samba)",
    secondary: "Jawahar Navodaya Vidyalaya Nud (Samba)",
  };

  return (
    <div className="about_section_container">
      <h1>About</h1>
      <div className="about_details_container">
        <div className="about_left_container">
          <div className="personal_details_container detail_box">
            <div className="dummy_circle"></div>

            <h3 className="h3tag">Personal details</h3>
            <i>
              I'm a technically skilled and driven individual with a passion for
              web development and problem-solving. I enjoy working
              collaboratively and thrive in dynamic environments where I can
              contribute my abilities and learn new things.{" "}
            </i>
            <div className="personal_details ">
              <div className="personal_details_inner_container">
                <p>Name:</p>
                <p> {personalDetails.name}</p>
              </div>
              <div className="personal_details_inner_container">
                <p>City:</p>
                <p> {personalDetails.city} </p>
              </div>
              <div className="personal_details_inner_container">
                <p>Age:</p>
                <p> {personalDetails.age} </p>
              </div>
              <div className="personal_details_inner_container">
                <p>Degree:</p>
                <p> {personalDetails.degree} </p>
              </div>
            </div>
          </div>
          <div className="education_details_container detail_box">
            <div className="dummy_circle"></div>
            <h3>Education Details</h3>
            <i>
              My educational journey hasn't just been about textbooks and exams.
              It's been a constant pursuit of knowledge, fueled by a passion for
              understanding how things work. Each classroom, lab, and project
              has been a stepping stone, pushing me to explore, experiment, and
              build.
            </i>
            <div className="education_details ">
              <p className="education_duration">2020 - 24</p>
              <div className="education_details_inner_container">
                <p>B-Tech</p>
                <p>{educationDetails.btech}</p>
              </div>
              <p className="education_duration">2020</p>
              <div className="education_details_inner_container">
                <p>Higher-Secondary 12th</p>
                <p> {educationDetails.hsecondary} </p>
              </div>
              <p className="education_duration">2018</p>
              <div className="education_details_inner_container">
                <p>Secondary 10th</p>
                <p> {educationDetails.secondary} </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about_right_container">
          <div className="hobbies_details_container detail_box">
            <div className="dummy_circle"></div>
            <h3>When I'm Not Coding</h3>
            <div className="hobbies_inner_container">
              <i>
                Artistic Expressions: Beyond the confines of routine, I find
                solace in crafting creative expressions. From rhythmic verses to
                harmonious tunes, my artistic pursuits take form on various
                digital platforms, inviting others to share in the joy of
                creativity.
              </i>
              <div className="hobbies_details">
                <p>
                  <b> Tuning Melodies: </b>
                </p>
                <p>Crafting new compositions that dance through the air.</p>
                <p>
                  <b>Songwriting: </b>
                </p>
                <p>Weaving words into verses that echo emotions and stories.</p>
                <p>
                  <b>Cricket Enthusiast: </b>
                </p>
                <p>Unleashing my competitive spirit on the cricket pitch.</p>
                <p>
                  <b>Football Fever: </b>
                </p>
                <p>
                  Kicking up excitement and camaraderie on the football field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import React, { useEffect, useRef } from "react";
import bgLight from "./images/bgLight.jpg";
import bgDark1 from "./images/bgDark1.jpg";
import bgLight1 from "./images/bgLight1.jpg";
import bgLight2 from "./images/bgLight2.jpg";
import backgroundDark from "./images/homeBgDark.jpg";
import projectPhoto from "./images/projects.png";
import student from "./images/student.png";
import Skills from "../Skills/Skills";
import ProjectCard from "../ProjectCards/ProjectCard";
import arrowLeft from "./images/arrowLeft.png";
import arrowRight from "./images/arrowRight.png";
import Sorting from "./images/Sorting.jpeg";
import Sudoku from "./images/Sudoku.jpeg";
import ToDoList from "./images/ToDoList.png";
import Calculator from "./images/Calculator.jpeg";
import currencyConverter from "./images/currencyConverter.png";
import About from "../About/About.jsx";
import Contact from "../Contact/Contact.jsx";
import "./Home.css";
function Home() {
  useEffect(() => {}, []);
  const crauselRef = useRef();
  const scrollRef = useRef();
  function handleLeftArrow() {
    crauselRef.current.scrollTo({
      left: crauselRef.current.scrollLeft - 1274,
      behavior: "smooth",
    });
    if (scrollRef.current) {
      // Toggle the 'blue' class to trigger the transition
      scrollRef.current.classList.toggle("blue", true);
      scrollRef.current.classList.toggle("white", false);
    }
  }

  function handleRightArrow() {
    crauselRef.current.scrollTo({
      left: crauselRef.current.scrollLeft + 1274,
      behavior: "smooth",
    });
    if (scrollRef.current) {
      // Toggle the 'white' class to trigger the transition
      scrollRef.current.classList.toggle("blue", false);
      scrollRef.current.classList.toggle("white", true);
    }
  }

  const description = {
    sorting: {
      name: "Sorting Visualizer",
      desc: "Website showcasing various sorting algorithms with interactive visualizations.",
    },
    sudoku: {
      name: "Sudoku solver",
      desc: "Sudoku game website with features such as user input validation, and solution checking.",
    },
    calculator: {
      name: "Scientific calculator",
      desc: " Web calculator supporting basic and advanced mathematical operations with a user-friendly interface.",
    },
    todolist: {
      name: "ToDo list",
      desc: "Dynamic to-do list website with features like task addition, deletion, and completion status tracking.",
    },
    currencyconverter: {
      name: "Currency onverter",
      desc: "Currency converter website that allows users to convert between different currencies.",
    },
  };

  return (
    <>
      <div className="home_outer_container">
        <div className="dummy_container" id="home">
          <div className="home_text_container">
            <h2>
              <span className="hello_span">Hello</span> i'm
            </h2>
            <h1>
              Vinay Partap <span className="singh_span">Singh</span>
            </h1>
            <h3>I am an enthusiast webdevloper,coder.</h3>
          </div>
        </div>

        <div className="home_container">
          <img src={bgLight2} alt="" />
        </div>

        <div className="skills_section_container" id="skills">
          <div className="skills_description_container">
            <h1 id="skills_heading">Skills</h1>
            <img src={student} alt="" className="student_image" />
            <div className="skills_description_inner_container">
              <h2>
                " Unlocking the Code to Success:<span>Skills Arsenal</span>"
              </h2>
              <p>
                Welcome to the powerhouse of my portfolio, where the magic
                happens - the Skills section! Here, I've meticulously crafted a
                symphony of proficiency, expertise, and passion that defines my
                journey in the tech universe. Dive into this dynamic realm where
                lines of code transform into solutions, and where innovation
                meets execution.
              </p>
            </div>
            <div className="skills_fotter_container"></div>
          </div>
          <div className="skills_cards_container">
            <Skills />
          </div>
        </div>

        <div className="project_heading_container" id="projects">
          <h1>Projects</h1>
          <p>
            Dive into my project portfolio—a canvas of creativity and execution.
            Witness the power of ideas turned into reality, where every project
            is a chapter in my journey of innovation. Let's explore the magic of
            turning challenges into triumphs together
          </p>
        </div>

        <div className="project_section_container">
          <div className="button_left_container" onClick={handleLeftArrow}>
            <img src={arrowLeft} id="left_arrow_image" alt="" srcset="" />
          </div>
          <div className="crausel" ref={crauselRef}>
            <div className="cards_container">
              <div className="batchCard cards_batch_first">
                <ProjectCard
                  img={Sorting}
                  desc={description.sorting.desc}
                  projectName={description.sorting.name}
                />
                <ProjectCard
                  img={Sudoku}
                  desc={description.sudoku.desc}
                  projectName={description.sudoku.name}
                />
                <ProjectCard
                  img={Calculator}
                  desc={description.calculator.desc}
                  projectName={description.calculator.name}
                />
              </div>
              <div className="batchCard cards_batch_second">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
            </div>
          </div>
          <div className="button_right_container" onClick={handleRightArrow}>
            <img src={arrowRight} id="right_arrow_image" alt="" srcset="" />
          </div>
        </div>

        <div className="about_section" id="about">
          <About />
        </div>

        <div className="contact_section" id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;

import { useState, useRef } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const homeRef = useRef(null);

  const handleButtonClick = (section) => {
    // Scroll to the specified section using the reference
    if (homeRef) {
      homeRef.current.querySelector(`#${section}`).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app_container">
      <div className="sidebar_container">
        {/* Pass the handleButtonClick function to the Sidebar component */}
        <SideBar onButtonClick={handleButtonClick} />
      </div>

      <div className="right_container" ref={homeRef}>
        {/* Pass the reference to the Home component */}
        <Home />
      </div>
    </div>
  );
}

export default App;

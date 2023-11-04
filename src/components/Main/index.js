import React from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

function Main() {
  return (
    <div>
      <div>
        <h2>Summary:</h2>
        <p
          style={{
            maxWidth: 768,
          }}
        >
          Experienced front-end developer with 3 years of expertise in ReactJS
          and UI libraries. Core contributor to NativeBase, a universal UI
          library, and skilled in enabling cross-platform app development in
          monorepo environments.
        </p>
      </div>
      <div className="section">
        <div className="part1 gap-15">
          <Skills />
          <Education />
        </div>
        <div className="part2">
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default Main;

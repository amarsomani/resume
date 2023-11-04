import React from "react";
import { skillsData } from "../data";

function Skills() {
  return (
    <div>
      <h2>Skills:</h2>
      <ul className="md">
        {skillsData.map((skill, index) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

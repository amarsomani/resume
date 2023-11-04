import React from "react";
import { geekyAntsExperience, techcoopersExperience } from "../data";

function Experience() {
  return (
    <div>
      <div>
        <h2>Experience:</h2>
      </div>

      <div
        style={{
          gap: "12px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <Card
            companyDesignation="GeekyAnts - Sr. Software Engineer I"
            location="Bengaluru, India"
            duration="09/2020 - Current"
          />
          <ul className="md">
            {geekyAntsExperience.map((skill, index) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <Card
            companyDesignation="Techcoopers Software Solutions - Intern"
            location="Indore, India"
            duration="02/2020 - 04/2020"
          />
          <ul className="md">
            {techcoopersExperience.map((skill, index) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <Card
            companyDesignation="EEE IT Solutions - Intern"
            location="Indore, India"
            duration="06/2019 - 07/2019"
          />
          <p className="md">
            I gained hands-on experience in Spring MVC and Spring Boot, where I
            learned and implemented these frameworks to develop a robust backend
            service. I also integrated the service with a database using Spring
            JDBC and Hibernate ORM tools. This practical experience allowed me
            to create a fully functional Ecommerce application, showcasing my
            proficiency in modern Java-based web development.
          </p>
        </div>
        <div>
          <Card
            companyDesignation="Yash Technologies Pvt Ltd - Intern"
            location="Indore, India"
            duration="07/2018 - 08/2018"
          />
          <p className="md">
            Acquired proficiency in HTML, CSS, Servlets, JSPs, and MySQL, which
            laid the foundation for building web applications. Successfully
            implemented object-relational mappings, designed architecture, and
            developed demonstration projects using the Spring framework and
            Hibernate, demonstrating a strong grasp of Java-based web
            development.
          </p>
        </div>
      </div>
    </div>
  );
}

function Card({ companyDesignation, location, duration }) {
  return (
    <div>
      <p
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "4px",
        }}
      >
        {companyDesignation}
      </p>
      <div
        style={{
          fontSize: "14px",
          lineHeight: "22px",
        }}
      >
        <i>{location}</i>
      </div>
      <div
        style={{
          fontSize: "14px",
          lineHeight: "22px",
        }}
      >
        {duration}
      </div>
    </div>
  );
}

export default Experience;

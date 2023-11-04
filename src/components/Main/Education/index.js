import React from "react";

const data = [
  {
    date: "06/2020",
    course: "B.Tech",
    specialisation: "Computer Science And Engineering",
    institute: "Medi-Caps University",
    location: "Indore",
  },
  {
    date: "04/2016",
    course: "12th",
    specialisation: "PCM",
    institute: "Shri Maheshwari HS School",
    location: "Indore",
  },
  {
    date: "04/2014",
    course: "10th",
    specialisation: "CBSE",
    institute: "Advanced Academy",
    location: "Indore",
  },
];

function Education() {
  return (
    <div>
      <h2>Education And Training</h2>
      <div
        style={{
          marginTop: "12px",
          gap: "24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data.map((item, index) => (
          <EduCard {...item} />
        ))}
      </div>
    </div>
  );
}

function EduCard({ date, course, specialisation, institute, location }) {
  return (
    <div>
      <div
        style={{
          fontSize: "14px",
          lineHeight: "22px",
        }}
      >
        <i>{date}</i>
      </div>
      <p
        style={{
          fontSize: "16px",
          fontWeight: "600",
          marginBottom: "4px",
          marginTop: "0px",
        }}
      >
        <span
          style={{
            fontWeight: 600,
          }}
        >
          {course}
        </span>
        : {specialisation}
      </p>
      <div>{institute}</div>
      <div>{location}</div>
    </div>
  );
}

export default Education;

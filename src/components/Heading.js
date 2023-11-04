import React from "react";

const data = [
  {
    name: "amarsomani23@gmail.com",
    icon: "/images/mail.svg",
    link: "mailto:amarsomani23@gmail.com",
  },
  {
    name: "Github1",
    icon: "/images/github.svg",
    link: "https://github.com/amars29",
  },
  {
    name: "Github2 (old)",
    icon: "/images/github.svg",
    link: "https://github.com/amarsomani",
  },
  {
    name: "LinkedIn",
    icon: "/images/linkedin.svg",
    link: "https://www.linkedin.com/in/amar-somani-4aab3b145",
  },
  {
    name: "Twitter",
    icon: "/images/twitter.svg",
    link: "https://twitter.com/amar_somani",
  },
  {
    name: "7987727503",
    icon: "/images/phone.svg",
    link: "tel: +91 7987727503",
  },
];

function Heading() {
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          marginBottom: 0,
          textAlign: "center",
        }}
      >
        Amar Somani
      </h1>
      <div className="links-div">
        {data.map((item, index) => (
          <a
            key={item.icon}
            href={item.link}
            className="social-media-link"
            target="_blank"
          >
            <img src={item.icon} />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Heading;

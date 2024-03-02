import React from "react";
import "./style.css";
import User from "../../Logo/user.png";

const profile = () => {
  const techs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Blockchain",
    "TalwindCSS",
    "Solidity",
    "Git",
    "OS",
    "DBMS",
    "Truffle",
    "DSA",
    "SQL",
    "Github",
    "Ganache",
    "Metamask",
    "Web3.0",
    "VS Code",
    "Remix",
  ];

  return (
    <div className="user-card-container">
      <div className="user">
        <img src={User} alt="user-photo" className="user-photo" />
      </div>

      <div className="user-details">
        <p className="user-name">functional component</p>
        <p className="user-post">Senier Software Engineer</p>
      </div>

      <div>
        <p  className="user-skills">Skills</p>
        <ul className="user-skill-list">
          {techs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="user-joined-date">Joined on Mar 2, 2024</div>
    </div>
  );
};

export default profile;

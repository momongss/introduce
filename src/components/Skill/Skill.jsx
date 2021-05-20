import React from "react";
import { useState } from "react";
import "./Skill.css";

function Skill() {
  const [data, setData] = useState([
    { title: "퍼블리싱", level: "good" },
    { title: "JS", level: "perfect" },
    { title: "리액트", level: "normal" },
    { title: "webpack", level: "helloworld" },
  ]);

  return (
    <ul className="skill">
      {data.map((el) => {
        const className = `skill-item ${el.level}`;
        return (
          <li className={className} key={el.title}>
            <div className="title">{el.title}</div>
            <div className="level">{el.level.toLocaleUpperCase()}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default Skill;

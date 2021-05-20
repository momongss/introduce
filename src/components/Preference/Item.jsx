import React from "react";

import "./Item.css";

function Item(props) {
  return (
    <div className="prefer-item">
      <h2>{props.title}</h2>
      <div className="contents">
        <a href={props.url} target="_blank">
          <img className="img" src={props.imgSrc} />
        </a>
      </div>
    </div>
  );
}

export default Item;

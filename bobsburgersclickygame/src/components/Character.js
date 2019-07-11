import React from "react";
// import "./style.css";

// props are from characters.json file

function Character(props) {
  return (
    <div className="card">
      <div className="img-container">
        <p> test </p>
        <img alt={props.name} src={props.imgsrc} />
      </div>
    </div>
  );
}

export default Character;
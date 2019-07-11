import React from "react";
// import "./style.css";

// props are from characters.json file


function Character(props) {
  return (
    <div className="card">
      <div id={props.id} value={props.id} className="img-container" onClick={() => 
        props.characterClicked(props.id)}>
        <img alt={props.name} src={props.imgsrc} />
      </div>
    </div>
  );
}

export default Character;
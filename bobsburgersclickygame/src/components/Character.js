import React from "react";
import "./CharacterStyle.css";

// props are from characters.json file


function Character(props) {
  return (
    // <div className="charContainer">
      // <div className="card">
        // <div id={props.id} value={props.id} className="click-item" onClick={() =>
        //   props.characterClicked(props.id)}>
          <img className="burgerperson" alt={props.name} src={props.imgsrc} onClick={() => props.characterClicked(props.name)} />
        // </div>
      // </div>
    // </div>
  );
}

export default Character;
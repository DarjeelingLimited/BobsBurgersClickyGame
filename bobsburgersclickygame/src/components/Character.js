import React from "react";
// import "./style.css";

// props are from characters.json file

function character(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.img_url} />
      </div>
    </div>
  );
}

export default character;
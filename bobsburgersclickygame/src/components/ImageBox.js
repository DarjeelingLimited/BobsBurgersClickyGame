import React from "react";


function ImageBox(props) {
  return (
    <div className="container text-center">
    {props.children}
  </div>
  );
}

export default ImageBox;
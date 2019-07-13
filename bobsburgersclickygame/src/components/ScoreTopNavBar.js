import React from "react";
// import "./style.css" - if i put each component in its own folder, add a .css file


const style = {
    // color: {
    //   backgroundColor: `rgb(152, 251, 152)`
    // }
  };

function ScoreTopNavBar (props) {
    return (
            <nav style={style.color} className="center">
                <p className="game-intro">Bob's Burgers Clicky Game</p>
                <p className="game-intro">You are {props.status}!</p>
                <p className="game-intro" title="score">Score: {props.score} | </p>
                <p className="game-intro">Top Score: {props.TopScore} </p>
            </nav>
    );
}

export default ScoreTopNavBar;


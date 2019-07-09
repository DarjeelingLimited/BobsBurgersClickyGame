import React from "react";
// import "./style.css" - if i put each component in its own folder, add a .css file

function HowTo(props) {
    return (
        <header>
            <nav>
                <p className="game-intro">Bob's Burgers Clicky Game</p>
                <p className="game-intro">You are {props.status}!</p>
                <p className="game-intro" title="score">Score: {props.score}</p>
                <p className="game-intro">Top Score: {props.TopScore} </p>
            </nav>
        </header>
    );
}

export default HowTo;


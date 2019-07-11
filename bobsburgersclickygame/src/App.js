import React, { Component } from 'react';
import './App.css';
import ScoreTopNavBar from './components/ScoreTopNavBar'

import PlayGame from "./components/PlayGame";
import Character from "./components/Character";
import characters from "./characters.json"


const randomizeCharacters = (array) => {
  let count = array.length;
  while (count > 0); {// 12 characters in characters.json
    let arrayIndex = Math.floor(Math.random() * count);
    count--;
    let character = array[count];
    array[count] = array[arrayIndex];
    // possible values = randomized characters * 12
    array[arrayIndex] = character;
    //character is the value displayed
  }
  return array;
};

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    characters
  };
  //need to figure out rest of shuffling logic?

  //the props on the left-hand side, and on the right-hand side match the json file

  render() {
    console.log(characters);
    return (
      <div>
        {/* <ScoreTopNavBar score={this.state.score} topScore={this.state.topScore} /> */}
        {characters.map((index,i) => (<Character
          key={i}
          name={index.name}
          imgsrc={index.img_url}
        />))}
      </div>
    )

  }
}

export default App;

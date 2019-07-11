import React, { Component } from 'react';
import './App.css';

import ScoreTopNavBar from './components/ScoreTopNavBar'
import PlayGame from "./components/PlayGame";
import Character from "./components/Character";
import characters from "./characters.json"

import "./components/CharacterStyle.css";

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

// all other functions are between class App and "render"
class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    characters,
    clicked: [],
    startMessage: '',
    lose: false,

  }; //end of state

  // to see if a component is ready to use (inserted into the tree), this lifecycle method can be used
  componentDidMount() {
    this.setState({ startMessage: "Click on one of the characters below to get started." })
  };

//   function characterClicked(){
// if()
//   }

  //the props on the left-hand side, and on the right-hand side match the json file
  // for the Character component, you need a "key", which acts like a for loop

  // render display the elements in the DOM
  render() {
    console.log(characters);
    return (
      <div className="container">
          <ScoreTopNavBar
            score={this.state.score} topScore={this.state.topScore}
          />
        <PlayGame />
        <div className="click-item">
          {characters.map((index, i) => (<Character
            key={i}
            name={index.name}
            imgsrc={index.img_url}
          />))}
        </div>
      </div >
    )

  }
}

export default App;

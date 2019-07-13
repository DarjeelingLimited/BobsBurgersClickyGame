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
    clicked: {
      1: true,
      2: true
    },
    result: '',
    gameEnded: false,
  }; //end of state

  // to see if a component is ready to use (inserted into the tree), this lifecycle method can be used
  componentDidMount() {
    this.setState({ result: "Click on one of the characters below to get started." })
  }

  characterClicked = (id) => {
    if(this.state.clicked[id] = true){
      this.addPoints();
      this.setState({
        gameEnded: false
      });
    }
    // else {
    //   this.reset
    // }
    }

  //shuffle cards but also make them random and use the randomizeCharacters function
  shuffle = () => {
    let shuffleCards = randomizeCharacters(characters);
    this.setState = ({ characters: shuffleCards })
  };

  //+1 point every time a player clicks a non-match
  addPoints = () => {
    let points = this.state.score + 1;
    console.log("Current Score: ${score}");
    if (points === this.state.characters.length) {
      //the user keeps playing because they haven't duplicated clicks yet
      this.setState({
        result: "You guessed correctly!",
        score: points,
        clicked: true,
        characters,
        gameEnded: false
      });
    } else {
      this.setState({
        score: points,
        result: "Correct"
      });
    }
    // this.shuffle();
  }
  
 reset = () => {
   this.setState({
     score: 0, 
     result: "You lose"
   });
   this.shuffle();
 }

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
        <div>
          {characters.map((index, i) => (<Character
            key={i}
            name={index.name}
            imgsrc={index.img_url}
            characterClicked={this.characterClicked}
          />))}
        </div>
      </div >
    )

  }
}

export default App;

import React from 'react';
import './App.css';
import ScoreTopNavBar from './components/ScoreTopNavBar'

import PlayGame from "./components/PlayGame";
import Character from "./components/Character";


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
    gameover: false,
  }
  //need to figure out rest of shuffling logic?

  render() {
    return (
      <ScoreTopNavBar score={this.state.score} topScore={this.state.topScore} />

      <Character
        name={characters.[0].name} />
  )
  }
}



export default App;

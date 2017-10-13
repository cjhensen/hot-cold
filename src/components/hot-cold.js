import React from 'react';
import Feedback from './feedback';
import Guess from './guess';
import History from './history';

export default class HotCold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessedNums: [],
      answerNum: this.generateRandomNum(),
      guessCounter: 0
    };
  }

  // handleFormSubmit:
  // update guessed nums array in state
  // update guess counter array in state
  handleFormSubmit(num) {
    this.updateGuessedNums(num);
    this.updateGuessCounter();
  }

  // updateGuessedNums:
  // update the state's guessedNums array
  updateGuessedNums(num) {
    console.log('updateGuessedNums');
    this.setState(previousState =>({
      guessedNums: [...previousState.guessedNums, num]
    }));
  }

  // updateGuessCounter
  updateGuessCounter() {
    this.setState(previousState => ({
      guessCounter: previousState.guessCounter + 1
    }));
  }

  // generateRandomNum:
  // generate a random int between 1 and 100
  generateRandomNum() {
    // Max 100
    // Min 1
    return Math.floor(Math.random() * (100 - 1 + 1) + 1);
  }


  // resetGame:
  // 
  resetGame() {
    console.log('resetGame');
    // new answerNum
    this.setState({
      guessedNums: [],
      answerNum: this.generateRandomNum(),
      guessCounter: 0
    });

    // other stuff for reset...
  }

  render() {


    return (
      <div className="app">
        <Feedback
          answerNum={this.state.answerNum}
          currentGuess={this.state.guessedNums.slice(-1)[0]}
        />

        <Guess 
          onSubmit={value => this.handleFormSubmit(value)}
          guessCounter={this.state.guessCounter} 
        />

        <History 
          guessedNums={this.state.guessedNums}
        />

        <button 
          className="newGame"
          onClick={e => this.resetGame(e)}>
          New Game
          </button>
      </div>
    );


  }
}
import React from 'react';
import {connect} from 'react-redux';

import {updateGuessedNums, updateGuessCounter, resetGame} from '../actions';

import Feedback from './feedback';
import Guess from './guess';
import History from './history';

export class HotCold extends React.Component {

  // handleFormSubmit:
  // update guessed nums array in state
  // update guess counter array in state
  handleFormSubmit(num) {
    this.props.dispatch(updateGuessedNums(num));
    this.props.dispatch(updateGuessCounter());
  }

  // resetGame
  resetGame() {
    console.log('resetGame');
    this.props.dispatch(resetGame());
  }


  render() {

    return (
      <div className="app">
        <Feedback
          answerNum={this.props.answerNum}
          currentGuess={this.props.guessedNums.slice(-1)[0]}
        />

        <Guess 
          onSubmit={value => this.handleFormSubmit(value)}
          guessCounter={this.props.guessCounter} 
        />

        <History 
          guessedNums={this.props.guessedNums}
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


const mapStateToProps = state => ({
  guessedNums: state.guessedNums,
  answerNum: state.answerNum,
  guessCounter: state.guessCounter
});
export default connect(mapStateToProps)(HotCold);
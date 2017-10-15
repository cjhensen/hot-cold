import React from 'react';

export default function Feedback(props) {

  let feedbackMsg = "Make your guess!";

  if(props.currentGuess > (props.answerNum+15)) {
    feedbackMsg = "Cold";
  }
  if(props.currentGuess < (props.answerNum-15)) {
    feedbackMsg = "Cold";
  }
  if((props.currentGuess > (props.answerNum-15)) && (props.currentGuess < props.answerNum)) {
    feedbackMsg = "Hot";
  }
  if((props.currentGuess < (props.answerNum+15)) && (props.currentGuess > props.answerNum)) {
    feedbackMsg = "Hot";
  }
  if(props.currentGuess === props.answerNum) {
    feedbackMsg = "You won!"
  }


  return (
    <div className="feedback-container">
      <div className="feedback-text">{feedbackMsg}</div>
    </div>
  );
}
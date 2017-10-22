import {generateRandomNum} from '../utilities';
import * as actions from '../actions';

const initialState = {
  guessedNums: [],
  answerNum: generateRandomNum(1,100),
  guessCounter: 0
};

export const hotColdReducer = (state = initialState, action) => {
  // some if statements
  if(action.type === actions.UPDATE_GUESSED_NUMS) {
    console.log('action.type', action.type);
    return Object.assign({}, state, {
      guessedNums: [...state.guessedNums, action.num]
    });
  }
  else if(action.type === actions.UPDATE_GUESS_COUNTER) {
    console.log('action.type', action.type);
    return Object.assign({}, state, {
      guessCounter: state.guessCounter + 1
    });
  }
  else if(action.type === actions.RESET_GAME) {
    console.log('action.type', action.type);
    return Object.assign({}, state, {
      guessedNums: [],
      answerNum: generateRandomNum(1,100),
      guessCounter: 0
    });
  }

  return state;
}

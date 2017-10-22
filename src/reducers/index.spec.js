import {hotColdReducer} from './index';
import {updateGuessedNums, updateGuessCounter, resetGame} from '../actions';
import {generateRandomNum} from '../utilities';

describe('hotColdReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const randomNum = generateRandomNum(1,100);
    const initialState = {
      guessedNums: [],
      answerNum: randomNum,
      guessCounter: 0
    };

    const state = hotColdReducer(initialState, {type: '__UNKNOWN'});
    expect(state).toEqual({
      guessedNums: [],
      answerNum: randomNum,
      guessCounter: 0
    })
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = hotColdReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('updateGuessedNums', () => {
    it('should add a number to the guessedNums array', () => {
      const randomNum = generateRandomNum(1,100);
      let state = {
        guessedNums: [],
        answerNum: randomNum
      }
      state = hotColdReducer(state, updateGuessedNums(2));
      state = hotColdReducer(state, updateGuessedNums(6));
      expect(state).toEqual({
        guessedNums: [2,6],
        answerNum: randomNum
      });
    });
  });

  describe('updateGuessCounter', () => {
    it('should increase the guess counter by 1 for each number guessed', () => {
      const randomNum = generateRandomNum(1,100);
      let state = {
        answerNum: randomNum,
        guessCounter: 0
      };

      state = hotColdReducer(state, updateGuessCounter());
      state = hotColdReducer(state, updateGuessCounter());
      state = hotColdReducer(state, updateGuessCounter());
      state = hotColdReducer(state, updateGuessCounter());
      expect(state).toEqual({
        answerNum: randomNum,
        guessCounter: 4
      });
    });
  });

  describe('resetState', () => {
    it('should reset the state', () => {
      const initialRandomNum = generateRandomNum(1,100);
      let state = {
        answerNum: initialRandomNum,
        guessedNums: [],
        guessCounter: 0
      };

      state = hotColdReducer(state, updateGuessedNums(2));
      state = hotColdReducer(state, updateGuessCounter());
      state = hotColdReducer(state, updateGuessedNums(5));
      state = hotColdReducer(state, updateGuessCounter());
      state = hotColdReducer(state, updateGuessedNums(20));
      state = hotColdReducer(state, updateGuessCounter());


      state = hotColdReducer(state, resetGame());
      expect(state.guessedNums).toEqual([]);
      expect(state.guessCounter).toEqual(0);
      expect(state.answerNum).not.toEqual(initialRandomNum);
    });
  });

});
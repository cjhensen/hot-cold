import {
  UPDATE_GUESSED_NUMS, 
  updateGuessedNums, 
  UPDATE_GUESS_COUNTER, 
  updateGuessCounter, 
  RESET_GAME, 
  resetGame
} from './index';

describe('updateGuessedNums', () => {
  it('should return the action', () => {
    const num = 2;
    const action = updateGuessedNums(num);
    expect(action.type).toEqual(UPDATE_GUESSED_NUMS);
    expect(action.num).toEqual(num);
  });
});

describe('updateGuessCounter', () => {
  it('should return the action', () => {
    const action = updateGuessCounter();
    expect(action.type).toEqual(UPDATE_GUESS_COUNTER);
  });
});

describe('resetGame', () => {
  it('should return the action', () => {
    const action = resetGame();
    expect(action.type).toEqual(RESET_GAME);
  });
})
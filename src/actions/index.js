export const UPDATE_GUESSED_NUMS = 'UPDATE_GUESSED_NUMS';
export const updateGuessedNums = num => ({
  type: UPDATE_GUESSED_NUMS,
  num
});

export const UPDATE_GUESS_COUNTER = 'UPDATE_GUESS_COUNTER';
export const updateGuessCounter = () => ({
  type: UPDATE_GUESS_COUNTER
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
  type: RESET_GAME
});
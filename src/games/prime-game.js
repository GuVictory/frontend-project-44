import randomInteger from '../utils/random-integer.js';
import { gameLoop } from '../index.js';
import isPrimeNum from '../utils/prime-check.js';
import { MIN_NUMBER, MAX_NUMBER } from '../utils/constants.js';

const runGame = () => {
  const getCorrectAnswer = (numberToCheck) => (isPrimeNum(Number(numberToCheck)) ? 'yes' : 'no');

  const gameAction = () => randomInteger(MIN_NUMBER, MAX_NUMBER);

  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameLoop(gameAction, getCorrectAnswer, gameRules);
};

export default runGame;

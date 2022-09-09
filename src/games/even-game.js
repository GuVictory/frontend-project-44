import randomInteger from '../utils/random-integer.js';
import { gameLoop } from '../index.js';
import { MIN_NUMBER, MAX_NUMBER } from '../utils/constants.js';

const runGame = () => {
  const getCorrectAnswer = (numberToCheck) => (numberToCheck % 2 === 0 ? 'yes' : 'no');
  const gameAction = () => randomInteger(MIN_NUMBER, MAX_NUMBER);
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameLoop(gameAction, getCorrectAnswer, gameRules);
};

export default runGame;

import randomInteger from '../utils/random-integer.js';
import TEXTS from '../utils/game-texts.js';
import gameLoop from '../utils/game-loop.js';
import { MIN_NUMBER, MAX_NUMBER } from '../utils/constants.js';

const runGame = () => {
  const getCorrectAnswer = (numberToCheck) => (numberToCheck % 2 === 0 ? 'yes' : 'no');
  const gameAction = () => randomInteger(MIN_NUMBER, MAX_NUMBER);
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameLoop(gameAction, getCorrectAnswer, TEXTS(gameRules));
};

export default runGame;

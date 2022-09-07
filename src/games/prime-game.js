import randomInteger from '../utils/random-integer.js';
import TEXTS from '../utils/game-texts.js';
import gameLoop from '../utils/game-loop.js';
import isPrimeNum from '../utils/prime-check.js';

const runGame = () => {
  const getCorrectAnswer = (numberToCheck) => (isPrimeNum(Number(numberToCheck)) ? 'yes' : 'no');

  const gameAction = () => randomInteger(1, 100);

  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameLoop(gameAction, getCorrectAnswer, TEXTS(gameRules));
};

export default runGame;

import randomInteger from '../utils/random-integer.js';
import { gameLoop } from '../index.js';
import GCD from '../utils/GCD.js';
import { MIN_NUMBER, MAX_NUMBER } from '../utils/constants.js';

const runGame = () => {
  const gameAction = () => {
    const firstNumber = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const secondNumber = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const answer = GCD(firstNumber, secondNumber);

    return {
      question: `${firstNumber} ${secondNumber}`,
      answer,
    };
  };

  const gameRules = 'Find the greatest common divisor of given numbers.';

  gameLoop(gameAction, gameRules);
};

export default runGame;

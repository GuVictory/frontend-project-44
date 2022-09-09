import randomInteger from '../utils/random-integer.js';
import { gameLoop } from '../index.js';
import GCD from '../utils/GCD.js';
import { MIN_NUMBER, MAX_NUMBER } from '../utils/constants.js';

const runGame = () => {
  const getCorrectAnswer = (numberToCheck) => {
    const [firstNumber, secondNumber] = numberToCheck.split(' ');
    return GCD(Number(firstNumber), Number(secondNumber));
  };

  const gameAction = () => `${randomInteger(MIN_NUMBER, MAX_NUMBER)} ${randomInteger(MIN_NUMBER, MAX_NUMBER)}`;

  const gameRules = 'Find the greatest common divisor of given numbers.';

  gameLoop(gameAction, getCorrectAnswer, gameRules);
};

export default runGame;

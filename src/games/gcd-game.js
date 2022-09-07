import randomInteger from '../utils/random-integer.js';
import TEXTS from '../utils/game-texts.js';
import gameLoop from '../utils/game-loop.js';
import NOD from '../utils/nod.js';
import { MIN_NUMBER, MAX_NUMBER } from '../utils/constants.js';

const runGame = () => {
  const getCorrectAnswer = (numberToCheck) => {
    const [firstNumber, secondNumber] = numberToCheck.split(' ');
    return NOD(Number(firstNumber), Number(secondNumber));
  };

  const gameAction = () => `${randomInteger(MIN_NUMBER, MAX_NUMBER)} ${randomInteger(MIN_NUMBER, MAX_NUMBER)}`;

  const gameRules = 'Find the greatest common divisor of given numbers.';

  gameLoop(gameAction, getCorrectAnswer, TEXTS(gameRules));
};

export default runGame;

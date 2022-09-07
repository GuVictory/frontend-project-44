import randomInteger from '../utils/random-integer.js';
import TEXTS from '../utils/game-texts.js';
import gameLoop from '../utils/game-loop.js';
import NOD from '../utils/nod.js';

const runGame = () => {
  const getCorrectAnswer = (numberToCheck) => {
    const [firstNumber, secondNumber] = numberToCheck.split(' ');
    return NOD(Number(firstNumber), Number(secondNumber));
  };

  const gameAction = () => `${randomInteger(1, 100)} ${randomInteger(1, 100)}`;

  const gameRules = 'Find the greatest common divisor of given numbers.';

  gameLoop(gameAction, getCorrectAnswer, TEXTS(gameRules));
};

export default runGame;

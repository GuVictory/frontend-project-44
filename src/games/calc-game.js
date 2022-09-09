import randomInteger from '../utils/random-integer.js';
import { gameLoop } from '../index.js';
import randomAction from '../utils/random-action.js';
import { MIN_NUMBER, MAX_NUMBER } from '../utils/constants.js';

const runGame = () => {
  const getCorrectAnswer = (numberToCheck) => {
    const [firstOper, action, secondOper] = numberToCheck.split(' ');

    switch (action) {
      case '+':
        return Number(firstOper) + Number(secondOper);
      case '-':
        return Number(firstOper) - Number(secondOper);
      case '*':
        return Number(firstOper) * Number(secondOper);
      default:
        return undefined;
    }
  };
  const gameAction = () => `${randomInteger(MIN_NUMBER, MAX_NUMBER)} ${randomAction()} ${randomInteger(MIN_NUMBER, MAX_NUMBER)}`;

  const gameRules = 'What is the result of the expression?';

  gameLoop(gameAction, getCorrectAnswer, gameRules);
};

export default runGame;

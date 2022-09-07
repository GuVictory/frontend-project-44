import randomInteger from '../utils/random-integer.js';
import TEXTS from '../utils/game-texts.js';
import gameLoop from '../utils/game-loop.js';
import randomAction from '../utils/random-action.js';

const runGame = () => {
  const checkCorrectAnswer = (numberToCheck) => {
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
  const gameAction = () => `${randomInteger(1, 100)} ${randomAction()} ${randomInteger(1, 100)}`;

  const gameRules = 'What is the result of the expression?';

  gameLoop(gameAction, checkCorrectAnswer, TEXTS(gameRules));
};

export default runGame;

import randomInteger from '../utils/random-integer.js';
import { gameLoop } from '../index.js';
import randomAction from '../utils/random-action.js';
import { MIN_NUMBER, MAX_NUMBER } from '../utils/constants.js';

const runGame = () => {
  const gameAction = () => {
    const firstOper = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const secondOper = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const action = randomAction();
    let answer;

    switch (action) {
      case '+':
        answer = Number(firstOper) + Number(secondOper);
        break;
      case '-':
        answer = Number(firstOper) - Number(secondOper);
        break;
      case '*':
        answer = Number(firstOper) * Number(secondOper);
        break;
      default:
        throw new Error(`Unknown action: '${action}'!`);
    }

    return {
      question: `${firstOper} ${action} ${secondOper}`,
      answer,
    };
  };

  const gameRules = 'What is the result of the expression?';

  gameLoop(gameAction, gameRules);
};

export default runGame;

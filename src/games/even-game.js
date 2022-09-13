import randomInteger from '../utils/random-integer.js';
import { gameLoop } from '../index.js';
import { MIN_NUMBER, MAX_NUMBER } from '../utils/constants.js';
import isEven from '../utils/is-even.js';

const runGame = () => {
  const gameAction = () => {
    const question = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const answer = (isEven(question) ? 'yes' : 'no');

    return {
      question,
      answer,
    };
  };
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameLoop(gameAction, gameRules);
};

export default runGame;

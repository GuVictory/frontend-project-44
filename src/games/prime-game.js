import randomInteger from '../utils/random-integer.js';
import { gameLoop } from '../index.js';
import isPrimeNum from '../utils/prime-check.js';
import { MIN_NUMBER, MAX_NUMBER } from '../utils/constants.js';

const runGame = () => {
  const gameAction = () => {
    const question = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const answer = isPrimeNum(question) ? 'yes' : 'no';

    return {
      question,
      answer,
    };
  };

  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameLoop(gameAction, gameRules);
};

export default runGame;

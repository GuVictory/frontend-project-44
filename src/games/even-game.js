import randomInteger from '../utils/random-integer.js';
import TEXTS from '../utils/game-texts.js';
import gameLoop from '../utils/game-loop.js';

const runGame = () => {
  const getCorrectAnswer = (numberToCheck) => (numberToCheck % 2 === 0 ? 'yes' : 'no');
  const gameAction = () => randomInteger(1, 100);
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameLoop(gameAction, getCorrectAnswer, TEXTS(gameRules));
};

export default runGame;

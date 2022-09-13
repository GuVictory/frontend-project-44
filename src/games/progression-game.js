import randomInteger from '../utils/random-integer.js';
import { gameLoop } from '../index.js';
import { MIN_NUMBER, MAX_NUMBER } from '../utils/constants.js';

const MAX_SIZE_OF_PROGRESSION = 10;

const runGame = () => {
  const gameAction = () => {
    const startNumber = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const progressionStep = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const propgression = [startNumber];

    for (let i = 1; i < MAX_SIZE_OF_PROGRESSION; i += 1) {
      propgression.push(propgression[i - 1] + progressionStep);
    }

    const itemIndexToRemove = randomInteger(0, MAX_SIZE_OF_PROGRESSION - 1);
    const answer = propgression[itemIndexToRemove];
    propgression[itemIndexToRemove] = '..';

    return {
      question: propgression.join(' '),
      answer,
    };
  };

  const gameRules = 'What number is missing in the progression?';

  gameLoop(gameAction, gameRules);
};

export default runGame;

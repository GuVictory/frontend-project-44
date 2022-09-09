import randomInteger from '../utils/random-integer.js';
import { gameLoop } from '../index.js';
import { MIN_NUMBER, MAX_NUMBER } from '../utils/constants.js';

const MAX_SIZE_OF_PROGRESSION = 10;

const runGame = () => {
  const getCorrectAnswer = (answerToCheck) => {
    const propgression = answerToCheck.split(' ');

    const idxOfUndef = propgression.indexOf('..');

    let oneItemOfProgression = Number(propgression[propgression.length - 1]);
    let secondItemOfProgression = Number(propgression[propgression.length - 2]);

    if (idxOfUndef > propgression.length / 2) {
      oneItemOfProgression = Number(propgression[1]);
      secondItemOfProgression = Number(propgression[0]);
    }

    const progressionStep = oneItemOfProgression - secondItemOfProgression;

    if (idxOfUndef === 0) {
      return propgression[1] - progressionStep;
    }

    return Number(propgression[idxOfUndef - 1]) + progressionStep;
  };

  const gameAction = () => {
    const startNumber = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const progressionStep = randomInteger(MIN_NUMBER, MAX_NUMBER);
    const propgression = [startNumber];

    for (let i = 1; i < MAX_SIZE_OF_PROGRESSION; i += 1) {
      propgression.push(propgression[i - 1] + progressionStep);
    }

    propgression[randomInteger(0, MAX_SIZE_OF_PROGRESSION)] = '..';
    return propgression.join(' ');
  };

  const gameRules = 'What number is missing in the progression?';

  gameLoop(gameAction, getCorrectAnswer, gameRules);
};

export default runGame;

import randomInteger from '../utils/random-integer.js';
import TEXTS from '../utils/game-texts.js';
import gameLoop from '../utils/game-loop.js';

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
    const startNumber = randomInteger(1, 100);
    const progressionStep = randomInteger(1, 100);
    const propgression = [startNumber];

    for (let i = 1; i < 10; i += 1) {
      propgression.push(propgression[i - 1] + progressionStep);
    }

    propgression[randomInteger(0, 10)] = '..';
    return propgression.join(' ');
  };

  const gameRules = 'What number is missing in the progression?';

  gameLoop(gameAction, getCorrectAnswer, TEXTS(gameRules));
};

export default runGame;

import readlineSync from 'readline-sync';
import {
  CONGRATULATIONS_TEXT,
  CORRECT_TEXT,
  NOT_CORRECT_ANSWER_TEXT,
  QUESTION_TEXT,
  TRY_AGAIN_TEXT,
  YOUR_ANSWER_TEXT,
} from './utils/constants.js';

export const welcomeToGame = () => {
  console.log('Welcome to the Brain Games!');
};

export const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

export const askName = () => readlineSync.question('May I have your name? ');

export const gameLoop = (gameAction, getCorrectAnswer, rules) => {
  welcomeToGame();
  const userName = askName();
  sayHello(userName);

  let correctAnswers = 0;
  let answer = '';
  let resultToCheck;

  console.log(rules);

  while (correctAnswers < 3) {
    resultToCheck = gameAction();

    console.log(QUESTION_TEXT(resultToCheck));

    answer = readlineSync.question(YOUR_ANSWER_TEXT);

    if (answer === String(getCorrectAnswer(resultToCheck))) {
      console.log(CORRECT_TEXT);
      correctAnswers += 1;

      if (correctAnswers === 3) {
        console.log(CONGRATULATIONS_TEXT(userName));
      }
    } else {
      console.log(NOT_CORRECT_ANSWER_TEXT(answer, getCorrectAnswer(resultToCheck)));
      console.log(TRY_AGAIN_TEXT(userName));
      break;
    }
  }
};

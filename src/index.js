import readlineSync from 'readline-sync';
import {
  CORRECT_TEXT,
  YOUR_ANSWER_TEXT,
} from './utils/constants.js';

export const welcomeToGame = () => {
  console.log('Welcome to the Brain Games!');
};

export const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

export const askName = () => readlineSync.question('May I have your name? ');

const getQuestionText = (question) => `Question: ${question}`;
const getCongatulationsText = (name) => `Congratulations, ${name}!`;
const getNotCorrectAnswerText = (answer, correctAnswer) => `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
const getTryAgainText = (name) => `Let's try again, ${name}!`;

export const gameLoop = (gameAction, rules) => {
  welcomeToGame();
  const userName = askName();
  sayHello(userName);

  let correctAnswers = 0;

  console.log(rules);

  while (correctAnswers < 3) {
    const resultToCheck = gameAction();

    console.log(getQuestionText(resultToCheck.question));

    const answer = readlineSync.question(YOUR_ANSWER_TEXT);

    if (answer === String(resultToCheck.answer)) {
      console.log(CORRECT_TEXT);
      correctAnswers += 1;

      if (correctAnswers === 3) {
        console.log(getCongatulationsText(userName));
      }
    } else {
      console.log(getNotCorrectAnswerText(answer, resultToCheck.answer));
      console.log(getTryAgainText(userName));
      break;
    }
  }
};

import readlineSync from 'readline-sync';
import gameCli from './cli.js';
import randomInteger from './utils.js';

const TEXTS = {
  rules: () => 'Answer "yes" if the number is even, otherwise answer "no".',
  correct: () => 'Correct!',
  question: (question) => `Question: ${question}`,
  yourAnswer: () => 'Your answer: ',
  congratulations: (name) => `Congratulations, ${name}!`,
  notCorrectAnswer: (answer, correctAnswer) => `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  tryAgain: (name) => `Let's try again, ${name}!`,
};

const runGame = () => {
  gameCli.welcomeToGame();
  const userName = gameCli.askName();
  gameCli.sayHello(userName);

  const checkCorrectAnswer = (numberToCheck) => (numberToCheck % 2 === 0 ? 'yes' : 'no');

  let correctAnswers = 0;
  let answer = '';
  let numberToCheck = 0;

  console.log(TEXTS.rules());

  while (correctAnswers < 3) {
    numberToCheck = randomInteger(1, 100);
    console.log(TEXTS.question(numberToCheck));

    answer = readlineSync.question(TEXTS.yourAnswer());

    if (answer === checkCorrectAnswer(numberToCheck)) {
      console.log(TEXTS.correct());
      correctAnswers += 1;
    } else {
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(TEXTS.congratulations(userName));
  } else {
    console.log(TEXTS.notCorrectAnswer(answer, checkCorrectAnswer(numberToCheck)));
    console.log(TEXTS.tryAgain(userName));
  }
};

export default runGame;

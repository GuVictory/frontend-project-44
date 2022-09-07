import readlineSync from 'readline-sync';
import gameCli from '../cli.js';

const gameLoop = (gameAction, getCorrectAnswer, TEXTS) => {
  gameCli.welcomeToGame();
  const userName = gameCli.askName();
  gameCli.sayHello(userName);

  let correctAnswers = 0;
  let answer = '';
  let resultToCheck;

  console.log(TEXTS.rules());

  while (correctAnswers < 3) {
    resultToCheck = gameAction();

    console.log(TEXTS.question(resultToCheck));

    answer = readlineSync.question(TEXTS.yourAnswer());

    if (answer === String(getCorrectAnswer(resultToCheck))) {
      console.log(TEXTS.correct());
      correctAnswers += 1;
    } else {
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(TEXTS.congratulations(userName));
  } else {
    console.log(TEXTS.notCorrectAnswer(answer, getCorrectAnswer(resultToCheck)));
    console.log(TEXTS.tryAgain(userName));
  }
};

export default gameLoop;

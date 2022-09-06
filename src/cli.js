import readlineSync from 'readline-sync';

const welcomeToGame = () => {
  console.log('Welcome to the Brain Games!');
};

const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

export const askName = () => readlineSync.question('May I have your name? ');

export const startGame = (userName) => {
  welcomeToGame();

  sayHello(userName);
};

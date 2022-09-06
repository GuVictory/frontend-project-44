import readlineSync from 'readline-sync';

const welcomeToGame = () => {
    console.log('Welcome to the Brain Games!');
};

const askName = () => {
    return readlineSync.question('May I have your name? ');
};

const sayHello = (name) => {
    console.log(`Hello, ${name}!`);
};

const startGame = () => {
    welcomeToGame();
    const userName = askName();
    sayHello(userName);
};

export default startGame;
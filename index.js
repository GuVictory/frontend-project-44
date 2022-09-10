// Они используются в стартовом файле bin/brain-games.js
// Поэтому просто изменю тип экспорта
export { welcomeToGame, sayHello, askName } from './src/index.js';
export { default as calcGame } from './src/games/calc-game.js';
export { default as gcdGame } from './src/games/gcd-game.js';
export { default as progressionGame } from './src/games/progression-game.js';
export { default as primeGame } from './src/games/prime-game.js';
export { default as evenGame } from './src/games/even-game.js';

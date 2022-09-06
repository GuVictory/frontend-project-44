#!/usr/bin/env node

import games from '../index.js';

games.gameCli.welcomeToGame();

const userName = games.gameCli.askName();
games.gameCli.sayHello(userName);

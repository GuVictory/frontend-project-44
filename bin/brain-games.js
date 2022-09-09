#!/usr/bin/env node

import games from '../index.js';

games.welcomeToGame();

const userName = games.askName();
games.sayHello(userName);

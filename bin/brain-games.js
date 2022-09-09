#!/usr/bin/env node

import {welcomeToGame, askName, sayHello} from '../index.js';

welcomeToGame();

const userName = askName();
sayHello(userName);

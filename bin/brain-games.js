#!/usr/bin/env node

import gameCli from '../index.js';

const userName = gameCli.askName();
gameCli.startGame(userName);

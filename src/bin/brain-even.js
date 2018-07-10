#!/usr/bin/env node

import greet from '..';
import game from '../even-game';

console.log('Answer "yes" if number even otherwise answer "no"');
const name = greet();
game(name);

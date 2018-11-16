// @flow

import gameProcess from '../game-process';
import getRandomInt from '../utils';

const task: string = 'Answer "yes" if number even otherwise answer "no"';
const maxNumber: number = 100;
const minNumber: number = 1;

const generator = (): { question: number, answer: string } => {
  const question = getRandomInt(minNumber, maxNumber);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return { question, answer };
};

export default () => gameProcess({ task, generator });

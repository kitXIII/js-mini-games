import gameProcess from '../game-process';
import getRandomInt from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no"';
const maxNumber = 100;
const minNumber = 1;

const isEven = number => number % 2 === 0;

const generator = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => gameProcess({ task, generator });

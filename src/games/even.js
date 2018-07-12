import { cons } from 'hexlet-pairs';
import gameProcess from '../game-process';
import getRandomInt from '../utils';

const gameTask = 'Answer "yes" if number even otherwise answer "no"';
const maxNumber = 100;
const minNumber = 1;

const isEven = number => number % 2 === 0;

const questionPairGenerator = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  const pair = cons(question, answer);
  return pair;
};

export default () => {
  const game = cons(gameTask, questionPairGenerator);
  gameProcess(game);
};

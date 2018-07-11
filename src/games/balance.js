import { cons } from 'hexlet-pairs';
import gameProcess from '../game-process';
import getBalanceNumber from '../utils/balance-number';
import { getRandomInt } from '../utils/common-utils';

const gameTask = 'Balance the given number.';
const maxNumber = 10000;
const minNumber = 10;

const questionPairGenerator = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const answer = String(getBalanceNumber(question));

  const pair = cons(question, answer);
  return pair;
};

const game = cons(gameTask, questionPairGenerator);

export default () => {
  gameProcess(game);
};

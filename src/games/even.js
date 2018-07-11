import { cons } from 'hexlet-pairs';
import gameProcess from '../game-process';
import { getRandomInt, isEven } from '../utils/common-utils';

const gameTask = 'Answer "yes" if number even otherwise answer "no"';
const maxNumber = 100;
const minNumber = 1;

const questionPairGenerator = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  const pair = cons(question, answer);
  return pair;
};

const game = cons(gameTask, questionPairGenerator);

export default () => {
  gameProcess(game);
};

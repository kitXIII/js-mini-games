import { cons, cdr, car } from 'hexlet-pairs';
import gameProcess from '../game-process';
import getRandomInt from '../utils';

const gameTask = 'What is the result of the expression?';
const maxNumber = 100;
const minNumber = 1;

const getOperatorPair = () => {
  const numFactor = getRandomInt(minNumber, maxNumber) % 3;
  switch (numFactor) {
    case 0:
      return cons('+', (a, b) => a + b);
    case 1:
      return cons('-', (a, b) => a - b);
    case 2:
      return cons('*', (a, b) => a * b);
    default:
      throw new Error('There are not any operator');
  }
};

const questionPairGenerator = () => {
  const operatorPair = getOperatorPair();
  const operation = cdr(operatorPair);
  const operand1 = getRandomInt(minNumber, maxNumber);
  const operand2 = getRandomInt(minNumber, maxNumber);

  const question = `${operand1} ${car(operatorPair)} ${operand2}`;
  const answer = String(operation(operand1, operand2));

  const pair = cons(question, answer);
  return pair;
};

const game = cons(gameTask, questionPairGenerator);

export default () => {
  gameProcess(game);
};

import { cons, cdr, car } from 'hexlet-pairs';

const GAME_TASK = 'What is the result of the expression?';
const MAX_NUMBER = 100;

const getRandomInt = () => Math.round(Math.random() * (MAX_NUMBER + 1) - 0.5);

const getOperatorPair = () => {
  const numFactor = getRandomInt() % 3;
  switch (numFactor) {
    case 0:
      return cons('+', (a, b) => a + b);
    case 1:
      return cons('-', (a, b) => a - b);
    case 2:
      return cons('*', (a, b) => a * b);
    default:
      throw new Error('There are not such operator');
  }
};

const questionPairGenerator = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const operatorPair = getOperatorPair();

  const expression = `${num1} ${car(operatorPair)} ${num2}`;
  const operation = cdr(operatorPair);
  const result = String(operation(num1, num2));

  const pair = cons(expression, result);
  return pair;
};

const game = cons(GAME_TASK, questionPairGenerator);

export default game;

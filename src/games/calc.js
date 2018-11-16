import gameProcess from '../game-process';
import getRandomInt from '../utils';

const task = 'What is the result of the expression?';
const maxNumber = 100;
const minNumber = 1;

const getOperatorPair = () => {
  const numFactor = getRandomInt(minNumber, maxNumber) % 3;
  switch (numFactor) {
    case 0:
      return { sign: '+', operation: (a, b) => a + b };
    case 1:
      return { sign: '-', operation: (a, b) => a - b };
    case 2:
      return { sign: '*', operation: (a, b) => a * b };
    default:
      throw new Error('There are not any operator');
  }
};

const generator = () => {
  const { sign, operation } = getOperatorPair();
  const operand1 = getRandomInt(minNumber, maxNumber);
  const operand2 = getRandomInt(minNumber, maxNumber);

  return {
    question: `${operand1} ${sign} ${operand2}`,
    answer: String(operation(operand1, operand2)),
  };
};

export default () => gameProcess({ task, generator });

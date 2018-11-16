import gameProcess from '../game-process';
import getRandomInt from '../utils';

const task = 'Find the greatest common divisor of given numbers.';
const maxNumber = 100;
const minNumber = 1;

const getGcd = (num1, num2) => {
  const iter = (a, b) => {
    const r = a % b;
    if (r === 0) {
      return b;
    }
    return iter(b, r);
  };
  return num1 > num2 ? iter(num1, num2) : iter(num2, num1);
};

const generator = () => {
  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);

  return {
    question: `${number1} ${number2}`,
    answer: String(getGcd(number1, number2)),
  };
};

export default () => gameProcess({ task, generator });

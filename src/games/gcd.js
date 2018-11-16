// @flow
import gameProcess from '../game-process';
import getRandomInt from '../utils';

const task: string = 'Find the greatest common divisor of given numbers.';
const maxNumber: number = 100;
const minNumber: number = 1;

const getGcd = (num1: number, num2: number): number => {
  const iter = (a: number, b: number): number => {
    const r: number = a % b;
    if (r === 0) {
      return b;
    }
    return iter(b, r);
  };
  return num1 > num2 ? iter(num1, num2) : iter(num2, num1);
};

const generator = (): { question: string, answer: string } => {
  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);

  return {
    question: `${number1} ${number2}`,
    answer: String(getGcd(number1, number2)),
  };
};

export default () => gameProcess({ task, generator });

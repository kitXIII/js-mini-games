import gameProcess from '../game-process';
import getRandomInt from '../utils';

const task = 'Balance the given number.';
const maxNumber = 10000;
const minNumber = 10;

const getSumFigures = (number, acc = 0) => {
  const next = Math.trunc(number / 10);
  const newAcc = acc + (number % 10);
  if (next === 0) {
    return newAcc;
  }
  return getSumFigures(next, newAcc);
};

const getBalancedNumString = (number) => {
  const figuresCount = String(number).length;
  const sumFigures = getSumFigures(number);

  const minFigureValue = Math.trunc(sumFigures / figuresCount);
  const maxFigureValue = minFigureValue + 1;
  const minFiguresCount = figuresCount - (sumFigures % figuresCount);

  let resultStr = '';
  for (let i = 0; i < figuresCount; i += 1) {
    resultStr = `${resultStr}${i < minFiguresCount ? minFigureValue : maxFigureValue}`;
  }
  return resultStr;
};

const generator = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const answer = getBalancedNumString(question);
  return { question, answer };
};

export default () => gameProcess({ task, generator });

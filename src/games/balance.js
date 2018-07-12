import { cons } from 'hexlet-pairs';
import gameProcess from '../game-process';
import getRandomInt from '../utils';

const gameTask = 'Balance the given number.';
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

const questionPairGenerator = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const answer = getBalancedNumString(question);

  const pair = cons(question, answer);
  return pair;
};

export default () => {
  const game = cons(gameTask, questionPairGenerator);
  gameProcess(game);
};

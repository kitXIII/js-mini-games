// @flow

import gameProcess from '../game-process';
import getRandomInt from '../utils';

const task: string = 'Balance the given number.';
const maxNumber: number = 10000;
const minNumber: number = 10;

const getSumFigures = (number: number, acc: number = 0): number => {
  const next: number = Math.trunc(number / 10);
  const newAcc: number = acc + (number % 10);
  if (next === 0) {
    return newAcc;
  }
  return getSumFigures(next, newAcc);
};

const getBalancedNumString = (number: number): string => {
  const figuresCount = String(number).length;
  const sumFigures = getSumFigures(number);

  const minFigureValue = Math.trunc(sumFigures / figuresCount);
  const maxFigureValue = minFigureValue + 1;
  const minFiguresCount = figuresCount - (sumFigures % figuresCount);

  let resultStr: string = '';
  for (let i = 0; i < figuresCount; i += 1) {
    resultStr = `${resultStr}${i < minFiguresCount ? minFigureValue : maxFigureValue}`;
  }
  return resultStr;
};

const generator = (): { question: number, answer: string } => {
  const question: number = getRandomInt(minNumber, maxNumber);
  const answer: string = getBalancedNumString(question);
  return { question, answer };
};

export default () => gameProcess({ task, generator });

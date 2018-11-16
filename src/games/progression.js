// @flow

import gameProcess from '../game-process';
import getRandomInt from '../utils';

const task: string = 'What number is missing in this progression?';
const maxStart: number = 50;
const minStart: number = 1;
const maxDelta: number = 10;
const minDelta: number = 2;
const membersCount: number = 10;

// eslint-disable-next-line max-len
const progressionGenerator = (firstValue: number, delta: number): Function => (index: number): string => String(firstValue + (delta * index));

const generator = (): { question: string, answer: string } => {
  const startValue: number = getRandomInt(minStart, maxStart);
  const delta: number = getRandomInt(minDelta, maxDelta);
  const hiddenItemIndex: number = getRandomInt(1, membersCount);

  const getProgressionItemStr: Function = progressionGenerator(startValue, delta);

  let progressionString: string = '';
  for (let i = 1; i <= membersCount; i += 1) {
    const subStr = (i === hiddenItemIndex) ? '..' : getProgressionItemStr(i);
    progressionString = `${progressionString} ${subStr}`;
  }

  return {
    question: progressionString,
    answer: getProgressionItemStr(hiddenItemIndex),
  };
};

export default () => gameProcess({ task, generator });

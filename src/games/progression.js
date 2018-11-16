import gameProcess from '../game-process';
import getRandomInt from '../utils';

const task = 'What number is missing in this progression?';
const maxStart = 50;
const minStart = 1;
const maxDelta = 10;
const minDelta = 2;
const membersCount = 10;

const progressionGenerator = (firstValue, delta) => index => String(firstValue + (delta * index));

const generator = () => {
  const startValue = getRandomInt(minStart, maxStart);
  const delta = getRandomInt(minDelta, maxDelta);
  const hiddenItemIndex = getRandomInt(1, membersCount);

  const getProgressionItemStr = progressionGenerator(startValue, delta);

  let progressionString = '';
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

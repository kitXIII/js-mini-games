import { cons } from 'hexlet-pairs';
import gameProcess from '../game-process';
import getRandomInt from '../utils';

const gameTask = 'What number is missing in this progression?';
const maxStart = 50;
const minStart = 1;
const maxDelta = 10;
const minDelta = 2;
const membersCount = 10;

const progressionGenerator = (firstValue, delta) => index => String(firstValue + (delta * index));

const questionPairGenerator = () => {
  const startValue = getRandomInt(minStart, maxStart);
  const delta = getRandomInt(minDelta, maxDelta);
  const hiddenItemIndex = getRandomInt(1, membersCount);

  const getProgressionItemStr = progressionGenerator(startValue, delta);

  let progressionString = '';
  for (let i = 1; i <= membersCount; i += 1) {
    const subStr = (i === hiddenItemIndex) ? '..' : getProgressionItemStr(i);
    progressionString = `${progressionString} ${subStr}`;
  }

  const question = progressionString;
  const answer = getProgressionItemStr(hiddenItemIndex);

  const pair = cons(question, answer);
  return pair;
};

const game = cons(gameTask, questionPairGenerator);

export default () => {
  gameProcess(game);
};

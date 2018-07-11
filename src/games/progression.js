import { cons } from 'hexlet-pairs';
import gameProcess from '../game-process';
import { getRandomInt } from '../utils/common-utils';

const gameTask = 'What number is missing in this progression?';
const maxStartNumber = 50;
const minStartNumber = 1;
const maxDeltaNumber = 10;
const minDeltaNumber = 2;
const membersCount = 10;

const progressionGenerator = (firstValue, delta) => index => String(firstValue + (delta * index));

const questionPairGenerator = () => {
  const startValue = getRandomInt(minStartNumber, maxStartNumber);
  const delta = getRandomInt(minDeltaNumber, maxDeltaNumber);
  const hiddenElementIndex = getRandomInt(1, membersCount);

  const getProgressionElementStr = progressionGenerator(startValue, delta);

  let progressionString = '';
  for (let i = 1; i <= membersCount; i += 1) {
    const subStr = (i === hiddenElementIndex) ? '..' : getProgressionElementStr(i);
    progressionString = `${progressionString} ${subStr}`;
  }

  const question = progressionString;
  const answer = getProgressionElementStr(hiddenElementIndex);

  const pair = cons(question, answer);
  return pair;
};

const game = cons(gameTask, questionPairGenerator);

export default () => {
  gameProcess(game);
};

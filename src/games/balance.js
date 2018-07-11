import { cons, car, cdr } from 'hexlet-pairs';
import gameProcess from '../game-process';
import getRandomInt from '../utils';

const gameTask = 'Balance the given number.';
const maxNumber = 10000;
const minNumber = 10;

// 34652 => cons((3 + 4 + 6 + 5 + 2), 5)
const getSumAndCountOfNumerals = (number) => {
  const iter = (current, sum, count) => {
    const next = Math.trunc(current / 10);
    const nextSum = sum + (current % 10);
    if (next === 0) {
      return cons(nextSum, count);
    }
    return iter(next, nextSum, count + 1);
  };
  return iter(number, 0, 1);
};

// (4, 3, 2) => 455, (1, 5, 3) => 11222
const getNumeralSequenceString = (numeral, count, numeralsToIncCount) => {
  const unchangeNumeralsCount = count - numeralsToIncCount;
  let resultStr = '';
  for (let i = 0; i < count; i += 1) {
    const currentNumeral = i < unchangeNumeralsCount ? numeral : numeral + 1;
    resultStr = `${resultStr}${currentNumeral}`;
  }
  return resultStr;
};

const getBalanceNumString = (number) => {
  const numberPair = getSumAndCountOfNumerals(number);
  const sum = car(numberPair);
  const count = cdr(numberPair);
  const numeral = Math.trunc(sum / count);
  const numeralsCountToIncrement = sum % count;
  const balanceNumStr = getNumeralSequenceString(numeral, count, numeralsCountToIncrement);
  return balanceNumStr;
};

const questionPairGenerator = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const answer = getBalanceNumString(question);

  const pair = cons(question, answer);
  return pair;
};

const game = cons(gameTask, questionPairGenerator);

export default () => {
  gameProcess(game);
};

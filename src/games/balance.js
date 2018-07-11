import { cons, cdr, car } from 'hexlet-pairs';
import gameProcess from '../game-process';

const gameTask = 'Balance the given number.';
const maxNumber = 10000;
const minNumber = 10;

const getRandomInt = () => {
  const randomFloat = Math.random() * (maxNumber + 1 - minNumber) - 0.5 + minNumber;
  return Math.round(randomFloat);
};

const getDividualPair = (dividend, divisor) => {
  const remainder = dividend % divisor;
  const quotient = (dividend - remainder) / divisor;
  return cons(quotient, remainder);
};

// 34652 => cons((3 + 4 + 6 + 5 + 2), 5)
const getSumAndCountOfNumerals = (number) => {
  const iter = (current, sum, count) => {
    const dividualPair = getDividualPair(current, 10);
    const next = car(dividualPair);
    const nextSum = sum + cdr(dividualPair);
    if (next === 0) {
      return cons(nextSum, count);
    }
    return iter(next, nextSum, count + 1);
  };
  return iter(number, 0, 1);
};

// (4, 3) => 444, (1, 5) => 11111
const getEqNumeralsequenceNumber = (numeral, count) => {
  let number = 0;
  for (let i = 0; i < count; i += 1) {
    number = number * 10 + numeral;
  }
  return number;
};

const getBalanceNumber = (number) => {
  const numberPair = getSumAndCountOfNumerals(number);
  const sum = car(numberPair);
  const count = cdr(numberPair);
  const basePair = getDividualPair(sum, count);
  const baseNumeral = car(basePair);
  const numeralsCountToIncrement = cdr(basePair);
  const baseNumber = getEqNumeralsequenceNumber(baseNumeral, count);
  const additionNumber = getEqNumeralsequenceNumber(1, numeralsCountToIncrement);
  const balanceNumber = baseNumber + additionNumber;
  return balanceNumber;
};

const questionPairGenerator = () => {
  const question = getRandomInt();
  const answer = String(getBalanceNumber(question));

  const pair = cons(question, answer);
  return pair;
};

const game = cons(gameTask, questionPairGenerator);

export default () => {
  gameProcess(game);
};

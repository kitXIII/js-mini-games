import gameProcess from '../game-process';
import getRandomInt from '../utils';

const task = 'Is this number prime? (answer only "yes" or "no")';
const maxNumber = 200;
const minNumber = 1;

const isPrime = (number) => {
  if (number <= 3) {
    return true;
  }
  const halfNumber = Math.floor(number / 2);
  for (let i = 2; i <= halfNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generator = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => gameProcess({ task, generator });

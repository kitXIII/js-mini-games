import { cons } from 'hexlet-pairs';

const gameTask = 'Answer "yes" if number even otherwise answer "no"';
const maxNumber = 100;

const isEven = number => number % 2 === 0;
const getRandomInt = () => Math.round(Math.random() * (maxNumber + 1) - 0.5);

const questionPairGenerator = () => {
  const question = getRandomInt();
  const answer = isEven(question) ? 'yes' : 'no';
  const pair = cons(question, answer);
  return pair;
};

const game = () => cons(gameTask, questionPairGenerator);

export default game;

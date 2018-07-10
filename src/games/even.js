import { cons } from 'hexlet-pairs';

const GAME_TASK = 'Answer "yes" if number even otherwise answer "no"';
const MAX_NUMBER = 100;

const questionPairGenerator = () => {
  const number = Math.round(Math.random() * (MAX_NUMBER + 1) - 0.5);
  const trueAnswer = number % 2 === 0 ? 'yes' : 'no';
  const pair = cons(number, trueAnswer);
  return pair;
};

const game = cons(GAME_TASK, questionPairGenerator);

export default game;

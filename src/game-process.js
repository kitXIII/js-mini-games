import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import greet from './index';

const gameProcess = (game, attempts = 3) => {
  const gameTask = car(game);
  const questionPairGenerator = cdr(game);

  console.log('Welcome to the Brain Games!');
  console.log(gameTask);
  const userName = greet();

  let userAttempt = 1;
  while (userAttempt <= attempts) {
    const questionPair = questionPairGenerator();
    const question = car(questionPair);
    const trueAnswer = cdr(questionPair);
    const userAnswer = readlineSync.question(`Question: ${question} \nYou answer: `);
    if (userAnswer !== trueAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${userName}`);
      return;
    }
    userAttempt += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameProcess;

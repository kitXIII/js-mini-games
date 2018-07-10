import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const gameProcess = (game, userName, attempts = 3) => {
  const gameTask = car(game);
  const questionPairGenerator = cdr(game);

  console.log(gameTask);

  for (let i = 0; i < attempts; i += 1) {
    const questionPair = questionPairGenerator();
    const question = car(questionPair);
    const trueAnswer = cdr(questionPair);
    const userAnswer = readlineSync.question(`Question: ${question} \nYou answer: `);
    if (userAnswer !== trueAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${userName}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameProcess;

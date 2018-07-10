import readlineSync from 'readline-sync';

const MAX_NUMBER = 100;
const ATTEMPTS = 3;

const step = () => {
  const number = Math.round(Math.random() * (MAX_NUMBER + 1) - 0.5);
  const trueAnswer = number % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${number} \nYou answer: `);
  if (userAnswer !== trueAnswer) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\n`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const game = (name) => {
  let userAttempt = 1;
  while (userAttempt <= ATTEMPTS) {
    const result = step();
    if (!result) {
      console.log(`Let's try again, ${name}`);
      return;
    }
    userAttempt += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;

import readlineSync from 'readline-sync';

const attempts = 3;

const gameProcess = (game) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName}\n`);

  const { task, generator } = game;

  console.log(task);

  for (let i = 0; i < attempts; i += 1) {
    const { question, answer } = generator();
    const userAnswer = readlineSync.question(`Question: ${question} \nYou answer: `);
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${userName}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameProcess;

import readlineSync from 'readline-sync';
import gameProcess from './game-process';
import gameDispatch from './game-dispatcher';

const runGame = (gameName = null) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName}\n`);

  const game = gameDispatch(gameName);

  if (game !== null) {
    gameProcess(game, userName);
  }
};

export default runGame;

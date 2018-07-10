import readlineSync from 'readline-sync';

const greet = () => {
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName}`);
  return userName;
};

export default greet;

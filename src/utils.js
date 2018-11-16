// @flow

const getRandomInt = (minNumber: number, maxNumber: number): number => {
  const randomFloat: number = Math.random() * (maxNumber + 1 - minNumber) - 0.5 + minNumber;
  return Math.round(randomFloat);
};

export default getRandomInt;

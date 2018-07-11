const getRandomInt = (minNumber, maxNumber) => {
  const randomFloat = Math.random() * (maxNumber + 1 - minNumber) - 0.5 + minNumber;
  return Math.round(randomFloat);
};

const isEven = number => number % 2 === 0;

export { getRandomInt, isEven };

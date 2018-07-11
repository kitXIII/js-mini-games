const getRandomInt = (minNumber, maxNumber) => {
  const randomFloat = Math.random() * (maxNumber + 1 - minNumber) - 0.5 + minNumber;
  return Math.round(randomFloat);
};

export default getRandomInt;

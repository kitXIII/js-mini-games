import calc from './games/calc';
import even from './games/even';

const gameDispatch = (gameName) => {
  switch (gameName) {
    case 'even':
      return even;
    case 'calc':
      return calc;
    default:
      return null;
  }
};

export default gameDispatch;

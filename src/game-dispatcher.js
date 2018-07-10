import calc from './games/calc';
import even from './games/even';
import gcd from './games/gcd';

const gameDispatch = (gameName) => {
  switch (gameName) {
    case 'even':
      return even;
    case 'calc':
      return calc;
    case 'gcd':
      return gcd;
    default:
      return null;
  }
};

export default gameDispatch;

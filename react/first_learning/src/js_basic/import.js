import {sum, sum3 as _3sum} from './export';
import aabbcc from './export';

export function debug() {
  console.log(sum(100, 2));
  console.log(`sum(1, 2, 3): ${_3sum(1, 2, 3)}`);
  console.log(aabbcc(100, 100));
};

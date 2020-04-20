import test from 'ava';
import { calculateRatio } from '../src/index';
import Ratios from '../src/data/ratios.json';

test('have all properties ', (t) => {
  var rslt = calculateRatio(2, 1);
  t.assert(rslt.match.name === '2by1');
});


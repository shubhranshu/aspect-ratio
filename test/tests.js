import test from 'ava';
import { calculateRatio } from '../src/index';

test('constructor is ok', (t) => {
  var rslt = calculateRatio(2, 1);
  t.pass();
});

test('test ratio 2:1', (t) => {
  var rslt = calculateRatio(2, 1);
  t.assert(rslt.match.ratio === '2:1');
});

test('test result modifications has no side effects', (t)=>{
  var rslt = calculateRatio(2, 1);
  t.assert(rslt.match.ratio === '2:1');
  delete rslt.match.ratio;
  var rslt = calculateRatio(200, 100);
  t.assert(rslt.match.ratio === '2:1');
})

test
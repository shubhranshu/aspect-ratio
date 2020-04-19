import test from 'ava';
import { AspectRatio } from '../src/index';

test('can create the object', (t) => {
  let as = new AspectRatio();
  t.pass();
});

test('can construct with parameters', (t) => {
  let a1 = new AspectRatio(200, 100);
  t.log("Hello")
  t.assert(a1.is2by1);
});

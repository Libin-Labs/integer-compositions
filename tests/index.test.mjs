import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('analytic fixture', () => {
  assert.equal(api.compositionCount(5, 3), 6n);
});
test('row normalization', () => {
  for (let n = 1; n <= 50; n++) {
    let sum = 0n;
    for (let k = 1; k <= n; k++) sum += api.compositionCount(n, k);
    assert.equal(sum, 1n << BigInt(n - 1));
  }
});
test('empty convention', () => {
  assert.equal(api.compositionCount(0, 0), 1n);
});
test('outside support', () => {
  assert.equal(api.compositionCount(2, 3), 0n);
});
test('invalid parameters', () => {
  assert.throws(() => api.compositionCount(-1, 0));
  assert.throws(() => api.compositionCount(5001, 0));
});
test('type contract', () => {
  assert.throws(() => api.compositionCount('5', 3));
});

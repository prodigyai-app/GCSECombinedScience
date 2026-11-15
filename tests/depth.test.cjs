const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path');
const {verify} = require('../tools/verify-depth.cjs');
const {check} = require('../tools/similarity.cjs');

test('every numerical answer in the depth data is reproduced by its calculation', () => {
  const r = verify();
  assert.deepEqual(r.errs, []);
  assert.ok(r.asserts > 40, 'expected the data files to be checked');
});

test('every lesson with depth data has at least three fill-the-gaps', () => {
  for (const row of verify().rows) {
    /* worked examples and the exam-mark floor follow in the Opus pass */
    assert.ok(row.gaps >= 3, `${row.id}: fewer than 3 fill-the-gaps`);
  }
});

test('no new exam question is a near-duplicate of an existing one', () => {
  assert.deepEqual(check(0.45).hits, []);
});

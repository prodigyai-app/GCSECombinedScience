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

test('every lesson with depth data has fill-the-gaps (teaching lessons), a worked example and at least 12 exam marks', () => {
  const cat = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'assessment-catalog.json'), 'utf8'));
  for (const row of verify().rows) {
    assert.ok(row.gaps === 0 || row.gaps >= 3, `${row.id}: fewer than 3 fill-the-gaps`);
    const p = cat.pages[row.id];
    if (!p) continue;
    const marks = p.questions.filter(q => !q.id.startsWith('check:')).reduce((s, q) => s + q.m, 0);
    assert.ok(marks >= 12, `${row.id}: only ${marks} exam marks`);
  }
});

test('no new exam question is a near-duplicate of an existing one', () => {
  assert.deepEqual(check(0.45).hits, []);
});

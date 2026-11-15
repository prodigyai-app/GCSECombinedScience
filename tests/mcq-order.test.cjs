/* Multiple-choice answers must not be guessable from position or length. */
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const plain = s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const items = [];
for (const m of html.matchAll(/opts:(\[(?:"(?:[^"\\]|\\.)*"\s*,?\s*)+\]),a:(\d+)/g)) items.push({ o: JSON.parse(m[1]), a: +m[2] });

test('there are enough multiple-choice questions to check', () => assert.ok(items.length > 300));
test('no answer position is used for more than 32 % of questions', () => {
  const pos = [0, 0, 0, 0, 0]; items.forEach(q => pos[q.a]++);
  pos.forEach((n, i) => assert.ok(n / items.length <= 0.32, `position ${'ABCDE'[i]}: ${n} of ${items.length}`));
});
test('the correct answer is the unique longest option in at most 32 % of questions', () => {
  let u = 0, hit = 0;
  for (const q of items) { const L = q.o.map(s => plain(s).length), mx = Math.max(...L); if (L.filter(x => x === mx).length === 1) { u++; if (L[q.a] === mx) hit++; } }
  assert.ok(hit / u <= 0.32, `${hit} of ${u}`);
});

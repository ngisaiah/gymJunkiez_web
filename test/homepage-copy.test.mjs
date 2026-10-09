import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// Static regression check: GymJunkiez is completely free, so the homepage
// must not advertise Premium, upgrades, subscriptions, or paid tiers.
const source = readFileSync(new URL('../app/page.js', import.meta.url), 'utf8');

// Keep only the component markup (drop the trailing style object), then strip
// comments and style references (e.g. s.premiumGrid) so only copy remains.
const copy = source
  .slice(0, source.indexOf('const s = {'))
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\bs\.\w+/g, '');

test('homepage has no paid/Premium/subscription copy', () => {
  const forbidden = /premium|upgrade|subscription|monthly|annual|paid|paywall|tier/gi;
  assert.deepEqual(copy.match(forbidden), null);
});

test('homepage states the app is completely free', () => {
  assert.match(copy, /completely free/i);
});

test('homepage lists existing capabilities as included free', () => {
  for (const item of [
    'AI workout plan generation',
    'Unlimited custom templates',
    'Strength goal tracking',
    'Advanced progress analytics',
    'iCloud data sync',
  ]) {
    assert.ok(copy.includes(item), `missing capability: ${item}`);
  }
  assert.match(copy, /included free/i);
});

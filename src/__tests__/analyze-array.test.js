import { expect, test } from 'vitest';
import { analyzeArray } from '../analyze-array';

const object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

test('Returns the arithmetic mean', () => {
  expect(analyzeArray(object)).toBe(4);
});

test('Returns the smallest number', () => {
  expect(analyzeArray(object)).toBe(1);
});

test('Returns the largest number', () => {
  expect(analyzeArray(object)).toBe(8);
});

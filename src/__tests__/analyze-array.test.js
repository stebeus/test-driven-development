import { expect, test } from 'vitest';
import { analyzeArray } from '../analyze-array';

const object = [1, 8, 3, 4, 2, 6];

test('Returns the arithmetic mean', () => {
  expect(analyzeArray(object)).toBe(4);
});

test('Returns the smallest number', () => {
  expect(analyzeArray(object)).toBe(1);
});

test('Returns the largest number', () => {
  expect(analyzeArray(object)).toBe(8);
});

test('Returns the array length', () => {
  expect(analyzeArray(object)).toBe(6);
});
